<?php

namespace App;

use Helpers;
use Illuminate\Database\Eloquent\Model;

class Customers extends Model
{
    protected $table = 'customers';
    protected $primaryKey = 'id';
    protected $fillable = ['name', 'phone', 'address', 'status', 'id_usuario', 'id_parent', 'observation', 'bo_ativo'];

    public static function getStatus()
    {
        return [
            'a' => 'Aberto',
            'pc' => 'Problemas com cartão',
            'ld' => 'Ligar depois',
            'n' => 'Não tem interesse',
            'c' => 'Comprou',
        ];
    }

    public static function getAll()
    {
        $id_usuario = auth('api')->user()->id;
        $arFather = [];

        $parentsRoot = self::where('id_usuario', $id_usuario)
            ->whereNull('id_parent')
            ->where('bo_ativo', true)
            ->orderBy('id')
            ->select('id')
            ->get()
        ;
        foreach ($parentsRoot as $value) {
            $arFather[$value->id] = $value->id;
        }

        $parents = self::where('id_usuario', $id_usuario)
            ->groupBy('id_parent')
            ->select('id_parent')
            ->whereNotNull('id_parent')
            ->where('bo_ativo', true)
            ->get()
        ;
        $parents->merge($parentsRoot);

        foreach ($parents as $value) {
            $arFather[$value->id_parent] = $value->id_parent;
        }

        $arCustomers = [];
        $count = 0;
        foreach ($arFather as $key => $value) {
            $customersParent = self::where('id_usuario', $id_usuario)
                ->where('id', $value)
                ->where('bo_ativo', true)
                ->first()
            ;
            if (!$customersParent) {
                continue;
            }
            $referidos = self::where('id_usuario', $id_usuario)
                ->where('id_parent', $value)
                ->where('bo_ativo', true)
                ->orderBy('status')
                ->orderBy('name')
                ->get()
            ;

            $arCustomers[$count] = $customersParent;
            $arCustomers[$count]['phones'] = \App\Phone::where('id_customers', $customersParent->id)->get();
            $arCustomers[$count]['referidos'] = $referidos;
            foreach ($arCustomers[$count]['referidos'] as $keyRef => $value) {
                $arCustomers[$count]['referidos'][$keyRef]['phones'] = \App\Phone::where('id_customers', $value->id)->get();
            }
            ++$count;
        }

        return ['arCustomers' => $arCustomers, 'statistics' => self::statistics($arCustomers)];
    }

    public static function statistics($arCustomers)
    {
        $id_usuario = auth('api')->user()->id;
        $statistics = [
            'a' => 0,
            'pc' => 0,
            'ld' => 0,
            'n' => 0,
            'c' => 0,
        ];
        $customers = self::where('id_usuario', $id_usuario)->get();
        foreach ($customers as $key => $value) {
            if ('c' == $value['status']) {
                ++$statistics[$value['status']];
            } else {
                if ($value['bo_ativo']) {
                    ++$statistics[$value['status']];
                }
            }
        }

        return $statistics;
    }

    public static function importContacts($request, $id)
    {
        if ($request->hasFile('imagem')) {
            $array_texto = file($request->file('imagem')->getRealPath(), FILE_IGNORE_NEW_LINES);

            $i = 0;
            $ar = [];
            foreach ($array_texto as $line_num => $line) {
                $ar[$i][] = $line;

                if (preg_match('/END/', $line)) {
                    ++$i;
                }
            }
            $contatos = [];
            foreach ($ar as $key => $value) {
                $contatos[$key] = [
                    'nome' => explode('FN:', $value[3])[1],
                ];

                foreach ($value as $item) {
                    $numeros = explode('TEL', $item);

                    if (count($numeros) > 1) {
                        $numeroWaid = explode('waid=', $numeros[1]);
                        if (count($numeroWaid) > 1) {
                            $numeroWhatsapp = explode(':', $numeroWaid[1])[0];
                            $numero = preg_replace('/[^0-9]/', '', $numeroWhatsapp);
                            $contatos[$key]['numeros']['whatsapp'][] = Helpers::numeroNonoDigito($numero);
                        } else {
                            $numeroNormal = explode('TEL:', $numeros[1])[0];
                            $numero = preg_replace('/[^0-9]/', '', $numeroNormal);
                            $contatos[$key]['numeros']['phone'][] = Helpers::numeroNonoDigito($numero);
                        }
                    }
                }
            }

            return $contatos;
        }
    }

    public static function verifyCustomerExist($telefones, $id_usuario)
    {
        foreach ($telefones as $value) {
            $customers = \App\Customers::join('customers_phone', 'customers_phone.id_customers', '=', 'customers.id')
                ->where('customers_phone.phone', $value['phone'])
                ->where('id_usuario', $id_usuario)
                ->get()
            ;
            if ($customers->count()) {
                $customersArray = $customers->toArray();

                $indicadoPor = \App\Customers::where('id', $customersArray[0]['id_parent'])->first();
                if (!$indicadoPor) { // indico por um lead que não tem lead.
                    throw new \Exception("Número de telefone já existe ({$customersArray[0]['name']})", 1);
                    // return  response(['response' => "Número de telefone já existe ({$customersArray[0]['name']})"], 400);
                }

                throw new \Exception('Referido já indicado pelo(a) '.$indicadoPor->name, 1);
                // return  response( ['response' => 'Referido já indicado pelo(a) '.$indicadoPor->name], 400 );
            }

            return true;
        }
    }

    public static function insertFkPhone($telefones, $customers)
    {
        foreach ($telefones as $value) {
            $value['id_customers'] = $customers->id;
            $customersPhone = \App\Phone::create($value);
            if (!$customersPhone) {
                \DB::rollBack();

                throw new \Exception('Erro ao inserir telefone', 1);
            }
        }
    }
}
