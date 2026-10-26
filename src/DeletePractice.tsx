
import { useState } from "react";

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
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete expense.");
      }

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
    <section
      style={{
        maxWidth: "600px",
        margin: "30px auto",
        padding: "24px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#ffffff",
        border: "1px solid #e2e8f0",
        borderRadius: "12px",
      }}
    >
      <h2>DELETE API Practice</h2>

      <p>Click Delete to remove an expense from the list.</p>

      {expenses.length === 0 ? (
        <p>No expenses remaining.</p>
      ) : (
        expenses.map((expense) => (
          <div
            key={expense.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "12px",
              marginBottom: "10px",
              backgroundColor: "#f8fafc",
              borderRadius: "8px",
            }}
          >
            <span>{expense.name}</span>

            <button
              type="button"
              onClick={() => deleteExpense(expense.id)}
              disabled={loadingId !== null}
              style={{
                padding: "8px 14px",
                color: "#ffffff",
                backgroundColor: "#dc2626",
                border: "none",
                borderRadius: "6px",
                cursor: loadingId !== null ? "not-allowed" : "pointer",
              }}
            >
              {loadingId === expense.id ? "Deleting..." : "Delete"}
            </button>
          </div>
        ))
      )}

      {message && (
        <p style={{ color: "green" }} role="status">
          {message}
        </p>
      )}

      {error && (
        <p style={{ color: "red" }} role="alert">
          {error}
        </p>
      )}
    </section>
  );
}

export default DeletePractice;
