<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SpaController extends Controller
{
    public function index()
    {
        if(auth()->check()){
            return view('app');
        }

        return redirect()->to('login');

    }
}
