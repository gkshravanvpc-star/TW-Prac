
function EventPractice() {
  const handleCardClick = () => {
    alert("Expense card clicked!");
  };

  const handleDeleteClick = () => {
    alert("Delete button clicked!");
  };

  return (
    <div
      onClick={handleCardClick}
      className="rounded-xl border border-slate-300 p-6"
    >
      <h2 className="mb-4 font-bold">Travel Expense</h2>

      <button
        onClick={handleDeleteClick}
        className="rounded-lg bg-red-600 px-4 py-2 text-white"
      >
        Delete
      </button>
    </div>
  );
}

export default EventPractice;
