<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
   public function index()
{
    $posts = \App\Models\Post::with('user')->latest()->get();

    return Inertia::render('Dashboard', [
        'posts' => $posts
    ]);
}

    public function store(Request $request)
    {
        $request->validate(['content' => 'required|string|max:1000']);

        Post::create([
            'user_id' => auth()->id(),
            'content' => $request->content,
        ]);

        return redirect()->back()->with('success', 'Post created.');
    }
}
