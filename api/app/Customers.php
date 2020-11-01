<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Customers extends Model
{
    protected $table = 'customers';
    protected $primaryKey = 'id';
    protected $fillable = ['name', 'phone', 'address', 'status', 'id_usuario', 'id_parent'];
}
