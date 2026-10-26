
import { useState } from "react";
import "./PostPractice.css";

function PostPractice() {
  const [expenseName, setExpenseName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!expenseName.trim()) {
      setMessage("Please enter an expense type.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: expenseName,
            status: "Active",
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create expense type.");
      }

      const data = await response.json();

      setMessage(`Success! Test record created with ID: ${data.id}`);
      setExpenseName("");
    } catch (error) {
      setMessage("Failed to create expense type. Please try again.");
      console.error("POST request error:", error);
    } finally {
      setLoading(false);
    }
  }

 
return (
  <section className="post-container">
    <h2 className="post-title">POST API Practice</h2>

    <p className="post-description">
      Add a new expense type using a POST request.
    </p>

    <form className="post-form" onSubmit={handleSubmit}>
      <label className="post-label" htmlFor="expenseName">
        Expense Type
      </label>

      <input
        className="post-input"
        id="expenseName"
        type="text"
        value={expenseName}
        onChange={(event) => setExpenseName(event.target.value)}
        placeholder="e.g. Fuel, Travel, Food"
      />

      <button
        className="post-button"
        type="submit"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Add Expense"}
      </button>
    </form>

    <p className="post-preview">
      Entered expense: {expenseName || "Nothing entered yet"}
    </p>

    {message && (
      <p className="post-message" role="status">
        {message}
      </p>
    )}
  </section>
);

}

export default PostPractice;
