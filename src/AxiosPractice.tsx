import { useEffect, useState } from 'react';
import axios from 'axios';

type Expense = {
  id: number;
  title: string;
};

function AxiosPractice() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await axios.get<Expense[]>(
          'https://jsonplaceholder.typicode.com/posts?_limit=5'
        );

        setExpenses(response.data);
      } catch {
        setError('Failed to load expenses');
      } finally {
        setLoading(false);
      }
    };
    fetchExpenses();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Expense Types</h2>

      {expenses.map((expense) => (
        <p key={expense.id}>{expense.title}</p>
      ))}
    </div>
  );
}

export default AxiosPractice;