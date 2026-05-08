import Link from "next/link";
import { Kicker, PageFrame } from "@/components/SiteShell";
import { futureConcepts } from "@/lib/content";

export default function LabPage() {
  return (
    <PageFrame>
      <section className="architectural-grid px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <Kicker>Interactive Demos</Kicker>
          <div className="mt-8 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h1 className="font-serif text-6xl leading-none text-balance sm:text-8xl">
                Futures Lab.
              </h1>
              <p className="mt-8 text-lg leading-8 text-ash">
                A set of speculative prototypes for a museum that deepens
                attention, strengthens public trust, and preserves cultural memory.
              </p>
              <Link
                href="/slow-looking"
                className="mt-8 inline-block border border-charcoal bg-charcoal px-5 py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-paper transition hover:bg-museum-red"
              >
                Launch Slow Looking Room
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {futureConcepts.map((concept) => (
                <article
                  key={concept.title}
                  className="border border-charcoal/15 bg-paper p-6"
                >
                  <h2 className="font-serif text-3xl">{concept.title}</h2>
                  <p className="mt-5 text-sm leading-7 text-ash">
                    {concept.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
