<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Eleve;

class EleveSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        Eleve::create([
            'user_id' => 1,
            'nom' => 'Doe',
            'prenom' => 'John',
            'photo' => 'default.jpg',
        ]);

        Eleve::create([
            'user_id' => 1,
            'nom' => 'Doe',
            'prenom' => 'John',
            'photo' => 'default.jpg',
        ]);

        Eleve::create([
            'user_id' => 1,
            'nom' => 'Doe',
            'prenom' => 'John',
            'photo' => 'default.jpg',
        ]);

        Eleve::create([
            'user_id' => 1,
            'nom' => 'Doe',
            'prenom' => 'John',
            'photo' => 'default.jpg',
        ]);

        Eleve::create([
            'user_id' => 1,
            'nom' => 'Doe',
            'prenom' => 'John',
            'photo' => 'default.jpg',
        ]);

        Eleve::create([
            'user_id' => 1,
            'nom' => 'Doe',
            'prenom' => 'John',
            'photo' => 'default.jpg',
        ]);
    }
}
