import { useState } from "react";

function TimerPractice() {
  const [message, setMessage] = useState("");

  const showMessage = () => {
    setTimeout(() => {
      setMessage("Expense saved successfully!");
    }, 2000);
  };

  return (
    <div className="m-6 rounded-xl border p-6">
      <h2 className="mb-4 text-xl font-bold">
        Timer Practice
      </h2>

      <button
        onClick={showMessage}
        className="rounded-lg bg-blue-600 px-4 py-2 text-white"
      >
        Save Expense
      </button>

      <p className="mt-4">{message}</p>
    </div>
  );
}

export default TimerPractice;