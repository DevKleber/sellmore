<?php

namespace App\Http\Controllers;

use Helpers;
use Illuminate\Http\Request;

class CustomersController extends Controller
{
    public function index()
    {
        $customers = \App\Customers::all();
        if (!$customers) {
            return response(['response' => 'Não existe Customers'], 400);
        }

        return response(['dados' => $customers]);
    }

    public function store(Request $request)
    {
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
