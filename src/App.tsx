
import { useEffect, useState } from "react";
import PostPractice from "./PostPractice";
import DeletePractice from "./DeletePractice";
import axios from "axios";
import AxiosPractice from './AxiosPractice';
type User = {
  id: number;
  name: string;
  email: string;
};

function App() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users"
        );

        setUsers(response.data);
      } catch (error) {
        setError("Failed to fetch users.");
        console.error("Axios GET error:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="mb-6 text-2xl font-bold">
        Users List
      </h1>

      <PostPractice />
      <DeletePractice />
       <AxiosPractice />

      {loading ? (
        <p>Loading users...</p>
      ) : error ? (
        <p role="alert">{error}</p>
      ) : users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <div
              key={user.id}
              className="rounded-lg bg-white p-4 shadow"
            >
              <h2 className="font-semibold">
                {user.name}
              </h2>

              <p className="mt-2 text-sm text-gray-600">
                {user.email}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
