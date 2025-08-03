@extends('layouts.app')

@section('content')
<div class="max-w-2xl mx-auto p-4">
    <h2 class="text-xl font-bold mb-2">{{ $user->name }}'s Profile</h2>
    <p><strong>Email:</strong> {{ $user->email }}</p>
    <p><strong>Bio:</strong> {{ $user->bio }}</p>

    <h3 class="mt-4 text-lg font-semibold">Posts</h3>
    @foreach($user->posts as $post)
        <div class="border rounded p-2 mb-2">
            <em>{{ $post->created_at->format('d M Y H:i') }}</em>
            <p>{{ $post->content }}</p>
        </div>
    @endforeach
</div>
@endsection