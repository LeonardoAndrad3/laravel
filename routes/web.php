<?php

use Illuminate\Support\Facades\Route;
use App\Models\User;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/cad', function(){
    $u = new User;
    $u->name = 'joão'; 
    $dta = date("Y-m-d-h-i-sa");
    $u->email = 'aleatorio@gmail.com'.$dta;
    $u->password = '123456';
    $u->save();
    return User::all();
});