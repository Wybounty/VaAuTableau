<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Eleve extends Model
{
    //
    protected $fillable = [
        'user_id',
        'nom',
        'prenom',
        'photo',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
