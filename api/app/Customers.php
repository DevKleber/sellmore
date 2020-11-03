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
        foreach ($arFather as $key => $value) {
            $customersParent = self::where('id_usuario', $id_usuario)
                ->where('id', $value)
                ->where('bo_ativo', true)
                ->first()
            ;
            if (!$customersParent) {
                continue;
            }

            $arCustomers[$key] = $customersParent;
            $arCustomers[$key]['referidos'] = self::where('id_usuario', $id_usuario)
                ->where('id_parent', $value)
                ->where('bo_ativo', true)
                ->orderBy('status')
                ->orderBy('name')
                ->get()
            ;
        }

        return $arCustomers;
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
}
