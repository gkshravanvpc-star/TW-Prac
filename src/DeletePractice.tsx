
import { useState } from "react";
import axios from "axios";

type Expense = {
  id: number;
  name: string;
};

function DeletePractice() {
  const [expenses, setExpenses] = useState<Expense[]>([
    { id: 1, name: "Travel" },
    { id: 2, name: "Food" },
    { id: 3, name: "Fuel" },
  ]);

  const [loadingId, setLoadingId] = useState<number | null>(null);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  async function deleteExpense(id: number) {
    setLoadingId(id);
    setError("");
    setMessage("");

    try {
      await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );

      setExpenses((previousExpenses) =>
        previousExpenses.filter((expense) => expense.id !== id)
      );

      setMessage("Expense deleted successfully!");
    } catch (error) {
      setError("Unable to delete expense. Please try again.");
      console.error("Delete error:", error);
    } finally {
      setLoadingId(null);
    }
  }

  return (
    <section className="mx-auto mt-6 w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 px-6 py-5">
        <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-red-600">
          Axios API Practice
        </p>

        <h2 className="text-xl font-bold text-slate-900">
          Delete Expense Type
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Select an expense type to remove it from this practice list.
        </p>
      </div>

      <div className="space-y-3 p-6">
        {expenses.length === 0 ? (
          <p className="rounded-lg bg-slate-50 p-4 text-sm text-slate-500">
            No expenses remaining.
          </p>
        ) : (
          expenses.map((expense) => (
            <div
              key={expense.id}
              className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 p-4 transition hover:bg-slate-50"
            >
              <div>
                <p className="font-semibold text-slate-800">
                  {expense.name}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Expense ID: {expense.id}
                </p>
              </div>

              <button
                type="button"
                onClick={() => deleteExpense(expense.id)}
                disabled={loadingId !== null}
                className="rounded-lg bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loadingId === expense.id ? "Deleting..." : "Delete"}
              </button>
            </div>
          ))
        )}

        {message && (
          <p
            role="status"
            className="rounded-lg bg-emerald-50 p-3 text-sm font-medium text-emerald-700"
          >
            {message}
          </p>
        )}

        {error && (
          <p
            role="alert"
            className="rounded-lg bg-red-50 p-3 text-sm font-medium text-red-700"
          >
            {error}
          </p>
        )}
      </div>
    </section>
  );
}

export default DeletePractice;
