import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Show({ auth, profileUser, posts }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title={`${profileUser.name}'s Profile`} />

            <div className="max-w-3xl mx-auto p-4 space-y-6">
                {/* 👤 Profile Info */}
                <div className="bg-white p-4 rounded shadow">
                    <h1 className="text-2xl font-bold">{profileUser.name}</h1>
                    <p className="text-gray-600">{profileUser.email}</p>
                    {profileUser.bio && (
                        <p className="mt-2 text-gray-800 italic">
                            {profileUser.bio}
                        </p>
                    )}
                </div>

                {/* 📝 Posts */}
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Posts</h2>

                    {posts.length === 0 ? (
                        <p className="text-gray-500">No posts yet.</p>
                    ) : (
                        posts.map((post) => (
                            <div
                                key={post.id}
                                className="bg-white p-4 rounded shadow"
                            >
                                <p className="text-gray-800">{post.content}</p>
                                <div className="text-sm text-gray-500 mt-1">
                                    {new Date(post.created_at).toLocaleString()}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
