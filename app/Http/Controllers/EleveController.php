<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Response;
use Inertia\Inertia;
use App\Models\Eleve;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

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


    public function store(Request $request)
    {
        //dd($request->all());

        $validated = $request->validate([
            'nom' => 'required|string|max:255',
            'prenom' => 'required|string|max:255',
            'photo' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048|nullable',
        ]);

        if ($request->hasFile('photo')) {
            $validated['photo'] = '/storage/' . $request->file('photo')->store('eleves', 'public');
        }
        //dd($validated);

        $validated['user_id'] = Auth::id();

        //dd($validated);

        Eleve::create($validated);

        return redirect()->route('eleves');
        //dd($request->all());
    }
}
