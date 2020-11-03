<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Customers extends Model
{
    protected $table = 'customers';
    protected $primaryKey = 'id';
    protected $fillable = ['name', 'phone', 'address', 'status', 'id_usuario', 'id_parent', 'observation'];

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
            ->get()
        ;
        $parents->merge($parentsRoot);

        foreach ($parents as $value) {
            $arFather[$value->id_parent] = $value->id_parent;
        }

        $arCustomers = [];
        foreach ($arFather as $key => $value) {
            $arCustomers[$key] = self::where('id_usuario', $id_usuario)
                ->where('id', $value)
                ->first()
            ;
            $arCustomers[$key]['referidos'] = self::where('id_usuario', $id_usuario)
                ->where('id_parent', $value)
                ->orderBy('status')
                ->orderBy('name')
                ->get()
            ;
        }

        return $arCustomers;
    }
}
