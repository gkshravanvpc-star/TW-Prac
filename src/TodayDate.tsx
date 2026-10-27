
import { useEffect, useState } from "react";
import {
  CalendarDays,
  Clock3,
  Lightbulb,
  Atom,
  RefreshCw,
} from "lucide-react";

function DatePractice() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const formattedDate = currentTime.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const formattedDay = currentTime.toLocaleDateString("en-IN", {
    weekday: "long",
  });

  const formattedTime = currentTime.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        {/* Page heading */}
        <header className="mb-10 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="rounded-2xl bg-blue-100 p-3 text-blue-600">
              <CalendarDays size={34} />
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Date Practice
            </h1>
          </div>

          <p className="mx-auto max-w-2xl text-sm leading-6 text-slate-500 sm:text-lg">
            Explore the JavaScript Date Object with a live date
            and clock built using React.
          </p>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-blue-600" />
        </header>

        {/* Main dashboard */}
        <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* Date card */}
            <article className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-5 sm:p-7">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
                  <CalendarDays size={28} />
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                    Today's Date
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Your current local date
                  </p>
                </div>
              </div>

              <div className="py-9 text-center">
                <p className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  {formattedDate}
                </p>

                <p className="mt-3 text-lg font-medium text-slate-500">
                  {formattedDay}
                </p>
              </div>

              <div className="flex justify-center">
                <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                  <CalendarDays size={16} />
                  Format: en-IN
                </span>
              </div>
            </article>

            {/* Live clock card */}
            <article className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-5 sm:p-7">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-emerald-100 p-3 text-emerald-700">
                  <Clock3 size={28} />
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                    Current Time
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Updates every second
                  </p>
                </div>
              </div>

              <div className="flex min-h-44 items-center justify-center py-8">
                <p
                  className="whitespace-nowrap text-3xl font-bold tracking-tight text-emerald-800 sm:text-4xl lg:text-5xl"
                  aria-live="off"
                >
                  {formattedTime}
                </p>
              </div>

              <div className="flex justify-center">
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-800">
                  <Clock3 size={16} />
                  12-hour clock
                </span>
              </div>
            </article>
          </div>

          {/* Learning note */}
          <aside className="mt-6 rounded-2xl border border-violet-100 bg-violet-50 p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <div className="shrink-0 rounded-xl bg-violet-100 p-3 text-violet-700">
                <Lightbulb size={25} />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-violet-950">
                  What's happening behind the scenes?
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
                  <code className="rounded bg-white px-1.5 py-0.5 text-violet-800">
                    setInterval()
                  </code>{" "}
                  updates the time every second.
                  React's{" "}
                  <code className="rounded bg-white px-1.5 py-0.5 text-violet-800">
                    useState
                  </code>{" "}
                  triggers a re-render with the latest date
                  and time.{" "}
                  <code className="rounded bg-white px-1.5 py-0.5 text-violet-800">
                    clearInterval()
                  </code>{" "}
                  cleans up the timer when the component unmounts.
                </p>
              </div>
            </div>
          </aside>
        </section>

        {/* Footer */}
        <footer className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 pb-4 text-sm text-slate-500">
          <span className="inline-flex items-center gap-2">
            <CalendarDays size={18} />
            JavaScript Date Object
          </span>

          <span className="hidden h-5 w-px bg-slate-300 sm:block" />

          <span className="inline-flex items-center gap-2">
            <Atom size={18} />
            React Hooks
          </span>

          <span className="hidden h-5 w-px bg-slate-300 sm:block" />

          <span className="inline-flex items-center gap-2">
            <RefreshCw size={17} />
            Live Clock
          </span>
        </footer>
      </div>
    </main>
  );
}

export default DatePractice;
