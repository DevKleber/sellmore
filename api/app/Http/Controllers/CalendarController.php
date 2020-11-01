<?php

namespace App\Http\Controllers;

use Helpers;
use Illuminate\Http\Request;

class CalendarController extends Controller
{
    public function index()
    {
        $calendar = \App\Calendar::all();
        if (!$calendar) {
            return response(['response' => 'Não existe Calendar'], 400);
        }

        return response(['dados' => $calendar]);
    }

    public function store(Request $request)
    {
        $request['bo_ativo'] = true;

        $calendar = \App\Calendar::create($request->all());
        if (!$calendar) {
            return  response(['response' => 'Erro ao salvar Calendar'], 400);
        }

        return response(['response' => 'Salvo com sucesso', 'dados' => $calendar]);
    }

    public function show($id)
    {
        $calendar = \App\Calendar::find($id);
        if (!$calendar) {
            return response(['response' => 'Não existe Calendar'], 400);
        }

        return response($calendar);
    }

    public function update(Request $request, $id)
    {
        $calendar = \App\Calendar::find($id);

        if (!$calendar) {
            return response(['response' => 'Calendar Não encontrado'], 400);
        }
        $calendar = Helpers::processarColunasUpdate($calendar, $request->all());

        if (!$calendar->update()) {
            return response(['response' => 'Erro ao alterar'], 400);
        }

        return response(['response' => 'Atualizado com sucesso']);
    }

    public function destroy($id)
    {
        $calendar = \App\Calendar::find($id);

        if (!$calendar) {
            return response(['response' => 'Calendar Não encontrado'], 400);
        }
        $calendar->bo_ativo = false;
        if (!$calendar->save()) {
            return response(['response' => 'Erro ao deletar Calendar'], 400);
        }

        return response(['response' => 'Calendar Inativado com sucesso']);
    }
}
