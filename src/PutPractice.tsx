
import { useState } from 'react';
import axios from 'axios';

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

function PutPractice() {
  const [postId, setPostId] = useState('1');
  const [title, setTitle] = useState('Business Travel');
  const [message, setMessage] = useState('');
  const [updatedPost, setUpdatedPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    if (!postId.trim() || !title.trim()) {
      setMessage('Please enter both a post ID and a title.');
      return;
    }

    const id = Number(postId);

    if (!Number.isInteger(id) || id < 1) {
      setMessage('Please enter a valid positive post ID.');
      return;
    }

    setLoading(true);
    setMessage('');
    setUpdatedPost(null);

    try {
      const response = await axios.put<Post>(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          title: title.trim(),
          body: 'Updated expense type',
          userId: 1,
        }
      );

      setUpdatedPost(response.data);
      setMessage('Post updated successfully!');
    } catch {
      setMessage('Failed to update the post.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto mt-6 max-w-xl rounded-xl bg-white p-6 shadow">
      <h2 className="mb-4 text-xl font-bold">Axios PUT Practice</h2>

      <label className="mb-1 block">Post ID</label>
      <input
        className="mb-3 w-full rounded-lg border p-3"
        type="number"
        min="1"
        value={postId}
        onChange={(event) => setPostId(event.target.value)}
      />

      <label className="mb-1 block">Updated title</label>
      <input
        className="mb-3 w-full rounded-lg border p-3"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Enter updated title"
      />

      <button
        className="w-full rounded-lg bg-blue-600 p-3 text-white disabled:opacity-50"
        onClick={handleUpdate}
        disabled={loading}
      >
        {loading ? 'Updating...' : 'Update Post'}
      </button>

      {message && <p className="mt-3">{message}</p>}

      {updatedPost && (
        <div className="mt-4 rounded-lg bg-gray-100 p-4">
          <h3 className="font-bold">API Response</h3>
          <p>ID: {updatedPost.id}</p>
          <p>Title: {updatedPost.title}</p>
          <p>Body: {updatedPost.body}</p>
        </div>
      )}
    </div>
  );
}

export default PutPractice;
