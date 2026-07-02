<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Response;
use Inertia\Inertia;
use App\Models\Eleve;
use Illuminate\Support\Facades\Auth;


class EleveController extends Controller
{
    //

    public function index() : Response
    {

        $eleves = Eleve::where('user_id', Auth::id())->get();
        //dd($eleves);

        return Inertia::render('eleve/Index',
        ['eleves' => $eleves]);
    }
}
