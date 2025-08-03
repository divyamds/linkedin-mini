import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

export default function Dashboard({ auth, posts }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        content: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post("/posts", {
            onSuccess: () => reset("content"),
        });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Home Feed" />

            <div className="max-w-2xl mx-auto p-4 space-y-6">
                {/* 📝 Create Post */}
                <form onSubmit={submit} className="bg-white p-4 rounded shadow">
                    <textarea
                        value={data.content}
                        onChange={(e) => setData("content", e.target.value)}
                        placeholder="What's on your mind?"
                        className="w-full border border-gray-300 rounded p-2"
                        rows="3"
                        required
                    />
                    {errors.content && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.content}
                        </p>
                    )}
                    <button
                        type="submit"
                        disabled={processing}
                        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        Post
                    </button>
                </form>

                {/* 📢 Feed */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Public Feed</h2>

                    {posts.length === 0 && (
                        <p className="text-gray-500">No posts yet.</p>
                    )}

                    {posts.map((post) => (
                        <div
                            key={post.id}
                            className="bg-white p-4 rounded shadow mb-4"
                        >
                            <div className="text-sm text-gray-500 mb-1">
                                <a
                                    href={`/profile/${post.user.id}`}
                                    className="font-bold text-blue-700 hover:underline"
                                >
                                    {post.user.name}
                                </a>{" "}
                                · {new Date(post.created_at).toLocaleString()}
                            </div>
                            <p className="text-gray-800">{post.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
