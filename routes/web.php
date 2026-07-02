<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\EleveController;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', [HomeController::class, 'dashboard'])->name('dashboard');
    Route::get('eleves', [EleveController::class, 'index'])->name('eleves');
});

require __DIR__.'/settings.php';
