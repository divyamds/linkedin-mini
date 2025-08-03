<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

// ✅ Post Feed at "/"
Route::middleware(['auth'])->group(function () {
    Route::get('/', [PostController::class, 'index'])->name('dashboard'); // feed at root "/"
    Route::post('/posts', [PostController::class, 'store']);

    Route::get('/profile/{user}', [ProfileController::class, 'show'])->name('profile.show');
    
    // Profile management
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// ✅ Auth routes (login/register)
require __DIR__.'/auth.php';