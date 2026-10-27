
import { useState } from 'react';
import axios from 'axios';

function PostPractice() {
  const [expenseName, setExpenseName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAddExpense = async () => {
    if (!expenseName.trim()) {
      setMessage('Please enter an expense type.');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        {
          title: expenseName,
          body: 'New expense type',
          userId: 1,
        }
      );

      setMessage(`Expense created! ID: ${response.data.id}`);
      setExpenseName('');
    } catch {
      setMessage('Failed to create expense.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto mt-6 max-w-xl rounded-xl bg-white p-6 shadow">
      <h2 className="mb-4 text-xl font-bold">
        Axios POST Practice
      </h2>

      <input
        className="mb-3 w-full rounded-lg border p-3"
        value={expenseName}
        onChange={(event) => setExpenseName(event.target.value)}
        placeholder="Enter expense type, e.g. Fuel"
      />

      <button
        className="w-full rounded-lg bg-blue-600 p-3 text-white"
        onClick={handleAddExpense}
        disabled={loading}
      >
        {loading ? 'Adding...' : 'Add Expense'}
      </button>

      {message && <p className="mt-3">{message}</p>}
    </div>
  );
}

export default PostPractice;
