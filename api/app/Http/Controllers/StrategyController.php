<?php

namespace App\Http\Controllers;

use Helpers;
use Illuminate\Http\Request;

class StrategyController extends Controller
{
    public function index()
    {
        $strategy = \App\Strategy::all();
        if (!$strategy) {
            return response(['response' => 'Não existe Strategy'], 400);
        }

        return response(['dados' => $strategy]);
    }

    public function store(Request $request)
    {
        $strategy = \App\Strategy::create($request->all());
        if (!$strategy) {
            return  response(['response' => 'Erro ao salvar Strategy'], 400);
        }

        return response(['response' => 'Salvo com sucesso', 'dados' => $strategy]);
    }

    public function show($id)
    {
        $strategy = \App\Strategy::find($id);
        if (!$strategy) {
            return response(['response' => 'Não existe Strategy'], 400);
        }

        return response($strategy);
    }

    public function update(Request $request, $id)
    {
        $strategy = \App\Strategy::find($id);

        if (!$strategy) {
            return response(['response' => 'Strategy Não encontrado'], 400);
        }
        $strategy = Helpers::processarColunasUpdate($strategy, $request->all());

        if (!$strategy->update()) {
            return response(['response' => 'Erro ao alterar'], 400);
        }

        return response(['response' => 'Atualizado com sucesso']);
    }

    public function destroy($id)
    {
        $strategy = \App\Strategy::find($id);

        if (!$strategy) {
            return response(['response' => 'Strategy Não encontrado'], 400);
        }
        $strategy->bo_ativo = false;
        if (!$strategy->save()) {
            return response(['response' => 'Erro ao deletar Strategy'], 400);
        }

        return response(['response' => 'Strategy Inativado com sucesso']);
    }
}
