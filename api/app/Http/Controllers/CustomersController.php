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
            return response(['response' => 'Não existe Customers'], 400);
        }

        return response([
            'dados' => $arCustomers,
        ]);
    }

    public function store(Request $request)
    {
        $request['status'] = ('' == $request['status'] || null == $request['status']) ? 'a' : $request['status'];
        $customers = \App\Customers::where('phone', $request['phone'])->get();
        if ($customers->count()) {
            return  response(['response' => 'Referido já existe'], 400);
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
        $customers = \App\Customers::find($id);

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
        $customers = \App\Customers::find($id);

        if (!$customers) {
            return response(['response' => 'Customers Não encontrado'], 400);
        }
        $customers->bo_ativo = false;
        if (!$customers->save()) {
            return response(['response' => 'Erro ao deletar Customers'], 400);
        }

        return response(['response' => 'Customers Inativado com sucesso']);
    }
}
