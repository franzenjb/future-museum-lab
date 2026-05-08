import Link from "next/link";
import {
  eras,
  fragments,
  futureConcepts,
  opportunities,
  risks,
  secondaryThesis,
  technologyShifts,
  thesis,
} from "@/lib/content";
import { Kicker, PageFrame } from "@/components/SiteShell";

export default function Home() {
  return (
    <PageFrame>
      <section className="architectural-grid border-b border-charcoal/10 bg-background">
        <div className="mx-auto grid min-h-[86vh] max-w-7xl content-between px-5 py-12 sm:px-8 lg:py-16">
          <div className="flex items-center justify-between gap-6">
            <Kicker>Threshold / Manifesto</Kicker>
            <p className="hidden max-w-xs text-right font-mono text-[11px] uppercase tracking-[0.18em] text-ash sm:block">
              Standalone companion to a future museum white paper
            </p>
          </div>
          <div className="max-w-6xl">
            <h1 className="font-serif text-[clamp(4rem,12vw,11rem)] leading-[0.86] tracking-tight text-balance">
              Future Museum Lab
            </h1>
            <p className="mt-8 max-w-4xl font-serif text-3xl leading-tight text-balance sm:text-5xl">
              {thesis}
            </p>
          </div>
          <div className="grid gap-8 border-t border-charcoal/15 pt-8 md:grid-cols-[1fr_1.2fr]">
            <p className="text-lg leading-8 text-ash">{secondaryThesis}</p>
            <div className="grid grid-cols-2 gap-3 font-mono text-[11px] uppercase tracking-[0.18em] sm:grid-cols-4">
              {[
                ["Time", "#time"],
                ["Looking", "#looking"],
                ["Risks", "#risks"],
                ["Futures", "#futures"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="border border-charcoal/15 bg-paper px-4 py-3 transition hover:border-museum-red hover:text-museum-red"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="time" className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <Kicker>Museum Through Time</Kicker>
          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {eras.map((era, index) => (
              <article
                key={era.title}
                className="min-h-72 border border-charcoal/15 bg-paper p-5"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-museum-red">
                  0{index + 1} / {era.period}
                </p>
                <h2 className="mt-8 font-serif text-3xl leading-none">
                  {era.title}
                </h2>
                <p className="mt-6 text-sm leading-7 text-ash">{era.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="looking" className="bg-charcoal px-5 py-20 text-paper sm:px-8">
        <div className="mx-auto max-w-7xl">
          <Kicker>Technology Changes Looking</Kicker>
          <div className="mt-8 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <h2 className="font-serif text-5xl leading-none text-balance sm:text-7xl">
              Every medium teaches visitors how to see.
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {technologyShifts.map((shift) => (
                <details
                  key={shift.name}
                  className="group border border-paper/15 bg-paper/5 p-5 open:bg-paper open:text-charcoal"
                >
                  <summary className="cursor-pointer list-none font-mono text-[11px] uppercase tracking-[0.18em]">
                    {shift.name}
                  </summary>
                  <p className="mt-5 text-sm leading-7 text-stone group-open:text-ash">
                    {shift.effect}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="risks" className="grid border-y border-charcoal/10 md:grid-cols-2">
        <div className="bg-paper px-5 py-20 sm:px-8 lg:px-14">
          <Kicker>Risks</Kicker>
          <ul className="mt-10 space-y-5">
            {risks.map((risk) => (
              <li
                key={risk}
                className="border-b border-charcoal/10 pb-5 font-serif text-4xl"
              >
                {risk}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-background px-5 py-20 sm:px-8 lg:px-14">
          <Kicker>Opportunities</Kicker>
          <ul className="mt-10 space-y-5">
            {opportunities.map((opportunity) => (
              <li
                key={opportunity}
                className="border-b border-charcoal/10 pb-5 font-serif text-4xl"
              >
                {opportunity}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="futures" className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Kicker>Futures Lab</Kicker>
              <h2 className="mt-6 font-serif text-6xl leading-none text-balance">
                Speculative museum instruments.
              </h2>
            </div>
            <Link
              href="/slow-looking"
              className="border border-charcoal bg-charcoal px-5 py-4 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-paper transition hover:bg-museum-red"
            >
              Enter Slow Looking
            </Link>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {futureConcepts.map((concept) => (
              <article
                key={concept.title}
                className="border border-charcoal/15 bg-paper p-6"
              >
                <h3 className="font-serif text-3xl">{concept.title}</h3>
                <p className="mt-5 text-sm leading-7 text-ash">
                  {concept.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <Kicker>Conversation Archive</Kicker>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {fragments.map((fragment) => (
              <blockquote
                key={fragment}
                className="border-l-4 border-museum-red bg-background p-6 font-serif text-3xl leading-tight"
              >
                “{fragment}”
              </blockquote>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-3 font-mono text-[11px] uppercase tracking-[0.18em] sm:flex-row">
            <Link className="border border-charcoal/15 px-5 py-4" href="/paper">
              Read the White Paper
            </Link>
            <Link className="border border-charcoal/15 px-5 py-4" href="/outline">
              View Structured Outline
            </Link>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
