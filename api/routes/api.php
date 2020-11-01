<?php

use Illuminate\Support\Facades\Route;

Route::post('auth/login', 'AuthController@login');
Route::post('auth/recoverPassword', 'AuthController@recoverPassword');
Route::post('user/new', 'FuncionarioController@store');

Route::group(['middleware' => 'apiJwt'], function () {
    Route::resource('employee', 'FuncionarioController');

    Route::post('auth/logout', 'AuthController@logout');
    Route::post('auth/refresh', 'AuthController@refresh');
    Route::get('auth/me', 'AuthController@me');
    Route::put('auth/changePassword', 'AuthController@changePassword');

    Route::post('file', 'ArquivoController@store');

    Route::resource('calendar', 'CalendarController');
    Route::resource('customers', 'CustomersController');
    Route::put('status/customers/{id}', 'CustomersController@changeStatus');
    Route::resource('strategy', 'StrategyController');
});
