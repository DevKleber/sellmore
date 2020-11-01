<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Calendar extends Model
{
    protected $table = 'calendar';
    protected $primaryKey = 'id';
    protected $fillable = ['date', 'bo_ativo', 'id_usuario', 'id_customers'];
}
