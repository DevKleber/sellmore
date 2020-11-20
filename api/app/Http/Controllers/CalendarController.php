<?php

namespace App\Http\Controllers;

use Helpers;
use Illuminate\Http\Request;

class CalendarController extends Controller
{
    public function index()
    {
        $calendar = \App\Calendar::join('customers', 'customers.id', '=', 'calendar.id_customers')
            ->where('calendar.id_usuario', auth('api')->user()->id)
            ->where('calendar.bo_ativo', true)
            ->select('calendar.*', 'customers.*', 'customers.id as id_customer')
            ->get()
        ;
        if (!$calendar) {
            return response(['response' => 'Não existe Calendar'], 400);
        }
        $ar = [];
        foreach ($calendar as $key => $value) {
            $end_date = date('Y/m/d H:i:s', strtotime("{$value->date} +30 minute"));
            $hour = date('H:i:s', strtotime("{$value->date}"));
            $cutomersPhone = \App\Phone::where('id_customers', $value->id_customer)->select('phone')->get();
            $arNumbers = [];
            foreach ($cutomersPhone as $keyPhone => $valuePhone) {
                $arNumbers[] = $valuePhone->phone;
            }
            $numbersPhone = implode(',', $arNumbers);

            $startDate = str_replace('-', '/', $value->date);

            $ar[$key]['start'] = $startDate;
            $ar[$key]['end'] = $end_date;
            $ar[$key]['title'] = "{$value->name} {$numbersPhone}  Ligar às {$hour}";
            $ar[$key]['color'] = '#00eb84';
            $ar[$key]['allDay'] = false;
        }

        return response(['dados' => $ar]);
    }

    public function store(Request $request)
    {
        $request['bo_ativo'] = true;
        $request['id_usuario'] = auth('api')->user()->id;
        $date = Helpers::convertDateWithoutSeparatorToDatabase($request['date']);
        $hour = Helpers::convertHourWithoutSeparatorToDatabase($request['hour']);
        $request['date'] = "{$date} {$hour}";

        $calendar = \App\Calendar::create($request->all());
        if (!$calendar) {
            return  response(['response' => 'Erro ao salvar Calendar'], 400);
        }

        $end_date = date('Y-m-d H:i:s', strtotime("{$calendar->date} +30 minute"));
        $hour = date('H:i:s', strtotime("{$calendar->date}"));
        $cutomers = \App\Customers::find($request['id_customers']);
        $cutomersPhone = \App\Phone::where('id_customers', $cutomers->id)->select('phone')->get();
        $arNumbers = [];
        foreach ($cutomersPhone as $key => $value) {
            $arNumbers[] = $value->phone;
        }
        $numbersPhone = implode(',', $arNumbers);

        $ar['start'] = $calendar->date;
        $ar['end'] = $end_date;
        $ar['title'] = "{$cutomers->name} {$numbersPhone}  Ligar às {$hour}";
        $ar['color'] = '#00eb84';
        $ar['allDay'] = false;

        return response(['response' => 'Salvo com sucesso', 'dados' => $ar]);
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
