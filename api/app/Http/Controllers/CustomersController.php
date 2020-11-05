<?php

namespace App\Http\Controllers;

use Helpers;
use Illuminate\Http\Request;

class CustomersController extends Controller
{
    public function index()
    {
        $arCustomers = \App\Customers::getAll();

        if (!$arCustomers) {
            return response(['response' => 'Não existe Customers'], 200);
        }

        return response($arCustomers);
    }

    public function getAllParents($id)
    {
        $id_usuario = auth('api')->user()->id;
        $arCustomers = \App\Customers::where('id_usuario', $id_usuario)->get();
        $ar = [];
        foreach ($arCustomers as $key => $value) {
            $ar[$value->id] = $value;
        }

        return $this->buildTree($ar, $id);
    }

    public function buildTree($ar, $id, $branch = [])
    {
        if (!$id || 5 == count($branch)) {
            return $branch;
        }
        $branch[] = $ar[$id];

        return $this->buildTree($ar, $ar[$id]['id_parent'], $branch);
    }

    public function importContact(Request $request, $id)
    {
        \DB::beginTransaction();
        $id_usuario = auth('api')->user()->id;
        $contacts = \App\Customers::importContacts($request, $id);
        $duplicado = [];
        $imported = [];
        foreach ($contacts as $key => $value) {
            $totalWhatsappNumber = isset($value['numeros']['whatsapp']) ? Helpers::count($value['numeros']['whatsapp']) : 0;
            $totalPhoneNumber = isset($value['numeros']['phone']) ? Helpers::count($value['numeros']['phone']) : 0;

            $numberToSaveWhatsapp = ($totalWhatsappNumber - 1);
            $numberToSavePhoneNumber = ($totalPhoneNumber - 1);

            $whatsapp = $value['numeros']['whatsapp'] ?? [];
            $phone = $value['numeros']['phone'] ?? [];
            $number = '';

            if ($totalWhatsappNumber > 0) {
                $number = $whatsapp[$numberToSaveWhatsapp];
                unset($whatsapp[$numberToSaveWhatsapp]);
            } elseif ($totalPhoneNumber > 0) {
                $number = $phone[$numberToSavePhoneNumber];
                unset($phone[$numberToSavePhoneNumber]);
            }

            // $pais = substr($number, 0, 2); //numero do pais
            // $number = str_replace($pais, '', $number);

            $pais = substr($number, 0, 2); //numero do pais
            $number = substr($number, 2);

            $anotherNumbersWhatsapp = implode(',', $whatsapp ?? null);
            $anotherNumbersPhone = implode(',', $phone ?? null);

            $observationWhatsapp = !empty($anotherNumbersWhatsapp) ? 'Whatsapp: '.$anotherNumbersWhatsapp : '';
            $observationPhone = !empty($anotherNumbersPhone) ? 'Outros: '.$anotherNumbersPhone : '';
            $obs = !empty($observationWhatsapp) || !empty($observationPhone) ? ' Outros números: ' : '';

            $ar['name'] = Helpers::remove_emoji($value['nome']); // removendo emoji
            $ar['phone'] = $number;
            $ar['address'] = null;
            $ar['status'] = 'a';
            $ar['id_usuario'] = $id_usuario;
            $ar['id_parent'] = $id;
            $ar['observation'] = "{$obs} {$observationWhatsapp} {$observationPhone}";

            $customers = \App\Customers::where('phone', $ar['phone'])->where('id_usuario', $id_usuario)->get();
            if ($customers->count()) {
                $customersArray = $customers->toArray();
                $indicadoPor = \App\Customers::where('id', $customersArray[0]['id_parent'])->first()->name;
                $duplicado[] = "{$value['nome']} já indicado pelo(a) {$indicadoPor}";

                continue;
            }

            $imported[] = \App\Customers::create($ar);
            if (!$imported) {
                \DB::rollBack();

                return  response(['response' => 'Erro ao importar contatos'], 400);
            }
        }
        // \DB::rollBack();
        \DB::commit();

        return ['res' => $imported, 'repetidos' => $duplicado];
    }

    public function store(Request $request)
    {
        $request['status'] = ('' == $request['status'] || null == $request['status']) ? 'a' : $request['status'];
        $customers = \App\Customers::where('phone', $request['phone'])->get();
        if ($customers->count()) {
            $customersArray = $customers->toArray();

            $indicadoPor = \App\Customers::where('id', $customersArray[0]['id_parent'])->first();
            if (!$indicadoPor) { // indico por um lead que não tem lead.
                return  response(['response' => "Número de telefone já existe ({$customersArray[0]['name']})"], 400);
            }

            return  response(
                ['response' => 'Referido já indicado pelo(a) '.$indicadoPor->name],
                400
            );
        }
        $request['id_usuario'] = auth('api')->user()->id;
        $customers = \App\Customers::create($request->all());
        if (!$customers) {
            return  response(['response' => 'Erro ao salvar Customers'], 400);
        }

        return response(['response' => 'Salvo com sucesso', 'dados' => $customers]);
    }

    public function show($id)
    {
        $customers = \App\Customers::find($id);
        if (!$customers) {
            return response(['response' => 'Não existe Customers'], 400);
        }

        return response($customers);
    }

    public function changeStatus(Request $request, $id)
    {
        $customers = \App\Customers::find($id);

        if (!$customers) {
            return response(['response' => 'Customers Não encontrado'], 400);
        }

        $dados = $request->only(['status']);
        $customers = Helpers::processarColunasUpdate($customers, $dados);

        if (!$customers->update()) {
            return response(['response' => 'Erro ao alterar'], 400);
        }

        return response(['response' => 'Atualizado com sucesso']);
    }

    public function update(Request $request, $id)
    {
        $request['status'] = ('' == $request['status'] || null == $request['status']) ? 'a' : $request['status'];
        $customers = \App\Customers::find($id);
        if ($request['phone'] != $customers->phone) {
            $customersByNumberPhone = \App\Customers::where('phone', $request['phone'])->get();
            if ($customersByNumberPhone->count()) {
                $customersArray = $customersByNumberPhone->toArray();

                $indicadoPor = \App\Customers::where('id', $customersArray[0]['id_parent'])->first();
                if (!$indicadoPor) { // indico por um lead que não tem lead.
                    return  response(['response' => "Número de telefone já existe ({$customersArray[0]['name']})"], 400);
                }

                return  response(
                    ['response' => 'Referido já indicado pelo(a) '.$indicadoPor->name],
                    400
                );
            }
        }
        $request['id_usuario'] = auth('api')->user()->id;

        if (!$customers) {
            return response(['response' => 'Customers Não encontrado'], 400);
        }
        $customers = Helpers::processarColunasUpdate($customers, $request->all());

        if (!$customers->update()) {
            return response(['response' => 'Erro ao alterar'], 400);
        }

        return response(['response' => 'Atualizado com sucesso']);
    }

    public function destroy($id)
    {
        $id_usuario = auth('api')->user()->id;
        $customers = \App\Customers::where('id', $id)->where('id_usuario', $id_usuario)->first();

        if (!$customers) {
            return response(['response' => 'Referido não encontrado'], 400);
        }
        $customers->bo_ativo = false;
        if (!$customers->save()) {
            return response(['response' => 'Erro ao arquivar referido'], 400);
        }

        return response(['response' => 'Referido arquivado']);
    }
}
