
import { useRef, useState } from "react";

function IntervalPractice() {
  const [count, setCount] = useState(0);

  const timerRef = useRef<number | null>(null);

  const startCounter = () => {
    // Don't start another timer if one is running
    if (timerRef.current !== null) return;

    timerRef.current = window.setInterval(() => {
      setCount((previousCount) => previousCount + 1);
    }, 1000);
  };

  const stopCounter = () => {
    if (timerRef.current !== null) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  return (
    <div className="m-6 rounded-xl border bg-white p-6">
      <h2 className="mb-4 text-xl font-bold">
        Interval Practice
      </h2>

      <p className="mb-4 text-2xl">
        Count: {count}
      </p>

      <div className="flex gap-3">
        <button
          onClick={startCounter}
          className="rounded-lg bg-blue-600 px-4 py-2 text-white"
        >
          Start
        </button>

        <button
          onClick={stopCounter}
          className="rounded-lg bg-red-600 px-4 py-2 text-white"
        >
          Stop
        </button>
      </div>
    </div>
  );
}

export default IntervalPractice;
