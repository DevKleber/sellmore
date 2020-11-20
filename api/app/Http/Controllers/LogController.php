<?php

namespace App\Http\Controllers;

use Helpers;
use Illuminate\Http\Request;

class LogController extends Controller
{
    public function index()
    {
        $log = \App\Log::Join('usuario', 'usuario.id', '=', 'usuario_log.id_user')
            ->orderBy('usuario_log.id', 'desc')
            ->select('usuario_log.*', 'usuario.nome')
            ->get()
        ;
        if (!$log) {
            return response(['response' => 'Não existe Log'], 400);
        }

        return response(['dados' => $log]);
    }

    public function store(Request $request)
    {
        $request['ip'] = Helpers::getUserIpAddr();
        $request['id_user'] = auth('api')->user()->id;
        $request['device'] = Helpers::getOSClient();
        $request['browser'] = Helpers::get_browser_name();
        $log = \App\Log::create($request->all());
        if (!$log) {
            return  response(['response' => 'Erro ao salvar Log'], 400);
        }

        return response(['response' => 'Salvo com sucesso', 'dados' => $log]);
    }

    public function show($id)
    {
        $log = \App\Log::find($id);
        if (!$log) {
            return response(['response' => 'Não existe Log'], 400);
        }

        return response($log);
    }

    public function destroy($id)
    {
        $log = \App\Log::find($id);

        if (!$log) {
            return response(['response' => 'Log Não encontrado'], 400);
        }
        $log->bo_ativo = false;
        if (!$log->save()) {
            return response(['response' => 'Erro ao deletar Log'], 400);
        }

        return response(['response' => 'Log Inativado com sucesso']);
    }
}
