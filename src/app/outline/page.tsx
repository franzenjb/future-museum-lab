import { Kicker, PageFrame } from "@/components/SiteShell";
import { eras, futureConcepts, opportunities, risks, technologyShifts } from "@/lib/content";

const outline = [
  ["Core Claim", ["Museum as civic operating system", "Digital amplification of the irreplaceably physical"]],
  ["Historical Frame", eras.map((era) => era.title)],
  ["Technology Frame", technologyShifts.map((shift) => shift.name)],
  ["Risks", risks],
  ["Opportunities", opportunities],
  ["Prototype Concepts", futureConcepts.map((concept) => concept.title)],
];

export default function OutlinePage() {
  return (
    <PageFrame>
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <Kicker>Structured Outline</Kicker>
          <h1 className="mt-8 font-serif text-6xl leading-none sm:text-8xl">
            Argument map.
          </h1>
          <div className="mt-12 divide-y divide-charcoal/10 border-y border-charcoal/10">
            {outline.map(([title, items]) => (
              <section key={title as string} className="grid gap-6 py-8 md:grid-cols-[0.45fr_1fr]">
                <h2 className="font-serif text-3xl">{title}</h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {(items as string[]).map((item) => (
                    <li key={item} className="border border-charcoal/15 bg-paper p-4 text-sm leading-6 text-ash">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
