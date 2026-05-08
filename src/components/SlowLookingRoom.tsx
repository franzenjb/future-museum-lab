"use client";

import { useEffect, useMemo, useState } from "react";

const prompts = [
  "What do you notice first?",
  "What changes after 30 seconds?",
  "What do you see now that you missed?",
];

export function SlowLookingRoom() {
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running || elapsed >= 60) {
      return;
    }

    const interval = window.setInterval(() => {
      setElapsed((current) => {
        const next = Math.min(current + 1, 60);
        if (next >= 60) {
          setRunning(false);
        }
        return next;
      });
    }, 1000);

    return () => window.clearInterval(interval);
  }, [elapsed, running]);

  const activePrompt = elapsed >= 60 ? 2 : elapsed >= 30 ? 1 : 0;
  const remaining = 60 - elapsed;
  const progress = `${(elapsed / 60) * 100}%`;

  const timerLabel = useMemo(() => {
    const minutes = Math.floor(remaining / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (remaining % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  }, [remaining]);

  return (
    <section className="architectural-grid min-h-screen bg-background px-5 py-8 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="min-h-[64vh] border border-charcoal/15 bg-paper p-4 shadow-sm sm:p-6">
          <div className="relative flex h-full min-h-[520px] items-end overflow-hidden bg-charcoal">
            <div className="absolute inset-0 bg-[linear-gradient(120deg,#322922_0%,#bca27a_34%,#efe2c8_48%,#5d615b_64%,#171411_100%)]" />
            <div className="absolute left-[18%] top-[12%] h-[68%] w-[34%] border border-paper/55 bg-paper/8 backdrop-blur-[1px]" />
            <div className="absolute right-[18%] top-[22%] h-[42%] w-[22%] border border-paper/35 bg-museum-red/20" />
            <div className="absolute bottom-[18%] left-[28%] h-px w-[44%] bg-paper/50" />
            <div className="relative z-10 m-5 max-w-xs bg-charcoal/72 p-4 text-paper backdrop-blur-sm">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-stone">
                Placeholder study
              </p>
              <p className="mt-2 font-serif text-2xl">Room for Looking</p>
            </div>
          </div>
        </div>

        <aside className="flex flex-col justify-between border border-charcoal/15 bg-paper p-6 sm:p-8">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-museum-red">
              Slow Looking Room
            </p>
            <h1 className="mt-5 font-serif text-5xl leading-none tracking-tight text-balance sm:text-6xl">
              Stay with one image for sixty seconds.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-ash">
              This prototype withholds interpretation long enough for attention
              to form. The museum becomes a timer, a room, and a question.
            </p>
          </div>

          <div className="mt-10 space-y-8">
            <div>
              <div className="mb-3 flex items-end justify-between">
                <span className="font-mono text-5xl tracking-tight">
                  {timerLabel}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ash">
                  {elapsed}s / 60s
                </span>
              </div>
              <div className="h-2 bg-stone">
                <div
                  className="h-full bg-museum-red transition-[width] duration-500"
                  style={{ width: progress }}
                />
              </div>
            </div>

            <div className="space-y-3">
              {prompts.map((prompt, index) => (
                <div
                  key={prompt}
                  className={`border p-4 transition ${
                    activePrompt === index
                      ? "border-museum-red bg-museum-red/8"
                      : "border-charcoal/10 bg-background/45 text-ash"
                  }`}
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em]">
                    {index === 0 ? "0 seconds" : `${index * 30} seconds`}
                  </p>
                  <p className="mt-2 font-serif text-2xl">{prompt}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setRunning((current) => !current)}
                className="min-h-12 flex-1 border border-charcoal bg-charcoal px-5 font-mono text-[11px] uppercase tracking-[0.18em] text-paper transition hover:bg-museum-red"
              >
                {running ? "Pause" : elapsed === 60 ? "Review" : "Begin"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setElapsed(0);
                  setRunning(false);
                }}
                className="min-h-12 border border-charcoal/20 px-5 font-mono text-[11px] uppercase tracking-[0.18em] transition hover:border-museum-red hover:text-museum-red"
              >
                Reset
              </button>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
