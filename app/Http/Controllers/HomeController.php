<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Response;
use Inertia\Inertia;
use App\Models\Eleve;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    //

    public function index() : Response
    {
        return Inertia::render('Home');
    }

    public function dashboard() : Response
    {
        $eleves = Eleve::where('user_id', Auth::id())->get();


        return Inertia::render('Dashboard', ['eleves' => $eleves]);
    }
}
