import Link from "next/link";
import {
  eras,
  futureConcepts,
  opportunities,
  risks,
  technologyShifts,
} from "@/lib/content";
import { PageFrame } from "@/components/SiteShell";

const essaySections = [
  {
    label: "I / The historical room",
    title: "For most of its life, the museum was an instrument of control.",
    body: [
      "It controlled access: who could enter, what could be seen, and when the encounter could happen.",
      "It controlled interpretation: the label, the catalogue, the lecture, the authorized sequence of meaning.",
      "It controlled experience: the architecture, the pace, the silence, the distance from the object.",
    ],
  },
  {
    label: "II / The break",
    title: "That arrangement is ending.",
    body: [
      "Photography separated looking from presence. Books made collections portable. The web dissolved the museum wall. The phone made every visitor a camera, notebook, guide, map, and publisher.",
      "AI now adds a new pressure: interpretation no longer has to arrive as a fixed paragraph beside an object. It can become a conversation.",
    ],
  },
  {
    label: "III / The future institution",
    title: "The future museum is not a larger container. It is a deeper civic interface.",
    body: [
      "Its task is not to compete with the internet by withholding access. Its task is to create depth where the internet creates availability.",
      "The museum becomes a trusted operating layer for attention, authenticity, memory, interpretation, and public life.",
    ],
  },
];

export default function Home() {
  const selectedFutures = futureConcepts.filter((concept) =>
    [
      "AI Curatorial Companion",
      "Slow Looking Room",
      "Maine Light Engine",
      "Dynamic Galleries",
      "Personal Museum Cloud",
    ].includes(concept.title),
  );

  return (
    <PageFrame>
      <section className="relative isolate min-h-[calc(100vh-76px)] overflow-hidden bg-background px-5 py-14 sm:px-8 lg:py-20">
        <div
          className="absolute inset-0 -z-10 opacity-[0.45] architectural-grid"
          aria-hidden="true"
        />
        <div className="mx-auto flex min-h-[calc(100vh-11rem)] max-w-7xl flex-col justify-between">
          <p className="essay-reveal font-mono text-[10px] uppercase tracking-[0.26em] text-museum-red">
            Threshold
          </p>
          <div className="essay-reveal-delay max-w-7xl">
            <h1 className="font-serif text-[clamp(4.5rem,11vw,10.5rem)] uppercase leading-[0.82] tracking-tight">
              The Future
              <br />
              Art Museum
            </h1>
          </div>
          <div className="grid gap-10 border-t border-charcoal/15 pt-8 lg:grid-cols-[1.1fr_0.55fr] lg:items-end">
            <p className="max-w-4xl font-serif text-[clamp(1.65rem,3.1vw,3.35rem)] leading-[1.02] tracking-tight text-balance">
              “The museum once controlled access to art, interpretation of art,
              and the physical experience of art. Technology is dismantling all
              three monopolies simultaneously.”
            </p>
            <a
              href="#essay"
              className="w-fit border border-charcoal bg-charcoal px-7 py-5 font-mono text-[11px] uppercase tracking-[0.24em] text-paper transition hover:border-museum-red hover:bg-museum-red"
            >
              Enter the Lab
            </a>
          </div>
        </div>
      </section>

      <article id="essay" className="bg-paper">
        <section className="px-5 py-28 sm:px-8 lg:py-40">
          <div className="mx-auto max-w-5xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-museum-red">
              Essay Path
            </p>
            <h2 className="mt-8 font-serif text-[clamp(3.25rem,8vw,8.5rem)] leading-[0.9] tracking-tight text-balance">
              First, understand what museums used to be.
            </h2>
            <p className="mt-10 max-w-3xl text-xl leading-9 text-charcoal/70">
              The future only makes sense against the older institutional form:
              temple, destination, platform, civic infrastructure, memory
              engine. Each step changes what the public expects a museum to do.
            </p>
          </div>
          <div className="mx-auto mt-24 max-w-6xl divide-y divide-charcoal/10 border-y border-charcoal/10">
            {eras.map((era, index) => (
              <div
                key={era.title}
                className="grid gap-8 py-10 md:grid-cols-[0.22fr_0.78fr]"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-museum-red">
                  0{index + 1} / {era.period}
                </p>
                <div>
                  <h3 className="font-serif text-5xl leading-none tracking-tight">
                    {era.title}
                  </h3>
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-ash">
                    {era.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {essaySections.map((section, index) => (
          <section
            key={section.title}
            className={`px-5 py-28 sm:px-8 lg:py-44 ${
              index === 1 ? "bg-charcoal text-paper" : "bg-background"
            }`}
          >
            <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.35fr_0.65fr]">
              <p
                className={`font-mono text-[10px] uppercase tracking-[0.26em] ${
                  index === 1 ? "text-stone" : "text-museum-red"
                }`}
              >
                {section.label}
              </p>
              <div>
                <h2 className="font-serif text-[clamp(3rem,7vw,7.5rem)] leading-[0.92] tracking-tight text-balance">
                  {section.title}
                </h2>
                <div className="mt-12 max-w-3xl space-y-8">
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph}
                      className={`text-xl leading-9 ${
                        index === 1 ? "text-stone" : "text-charcoal/72"
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        <section className="px-5 py-28 sm:px-8 lg:py-44">
          <div className="mx-auto max-w-7xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-museum-red">
              IV / Technology changes looking
            </p>
            <div className="mt-8 grid gap-16 lg:grid-cols-[0.65fr_0.35fr]">
              <h2 className="font-serif text-[clamp(3.25rem,8vw,8.5rem)] leading-[0.88] tracking-tight text-balance">
                Every technology changes the act of looking before it changes
                the museum.
              </h2>
              <p className="max-w-md text-xl leading-9 text-ash lg:pt-8">
                The technological question is not whether museums should add
                screens. It is what kind of attention survives when images,
                explanations, and simulations are everywhere.
              </p>
            </div>
            <div className="mt-24 divide-y divide-charcoal/10 border-y border-charcoal/10">
              {technologyShifts.map((shift) => (
                <div
                  key={shift.name}
                  className="grid gap-6 py-8 md:grid-cols-[0.32fr_0.68fr]"
                >
                  <h3 className="font-serif text-4xl leading-none">
                    {shift.name}
                  </h3>
                  <p className="max-w-3xl text-lg leading-8 text-charcoal/68">
                    {shift.effect}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-charcoal px-5 py-28 text-paper sm:px-8 lg:py-44">
          <div className="mx-auto max-w-7xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-stone">
              V / The tension
            </p>
            <h2 className="mt-8 max-w-6xl font-serif text-[clamp(3.25rem,8vw,8rem)] leading-[0.9] tracking-tight text-balance">
              The same tools that deepen a museum can also hollow it out.
            </h2>
            <div className="mt-24 grid gap-16 lg:grid-cols-2">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-museum-red">
                  Risks
                </p>
                <ul className="mt-8 space-y-5 font-serif text-[clamp(2.4rem,5vw,5rem)] leading-none text-paper">
                  {risks.map((risk) => (
                    <li key={risk}>{risk}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-stone">
                  Opportunities
                </p>
                <ul className="mt-8 space-y-5 font-serif text-[clamp(2.4rem,5vw,5rem)] leading-none text-stone">
                  {opportunities.map((opportunity) => (
                    <li key={opportunity}>{opportunity}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-28 sm:px-8 lg:py-44">
          <div className="mx-auto max-w-7xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-museum-red">
              VI / Speculative futures
            </p>
            <h2 className="mt-8 max-w-6xl font-serif text-[clamp(3.25rem,8vw,8.5rem)] leading-[0.88] tracking-tight text-balance">
              Not features. New institutional behaviors.
            </h2>
            <div className="mt-24 divide-y divide-charcoal/10 border-y border-charcoal/10">
              {selectedFutures.map((concept) => (
                <div
                  key={concept.title}
                  className="grid gap-8 py-10 lg:grid-cols-[0.42fr_0.58fr]"
                >
                  <h3 className="font-serif text-5xl leading-none tracking-tight">
                    {concept.title}
                  </h3>
                  <p className="max-w-2xl text-xl leading-9 text-ash">
                    {concept.text}
                  </p>
                </div>
              ))}
            </div>
            <Link
              href="/slow-looking"
              className="mt-16 inline-block border border-charcoal bg-charcoal px-7 py-5 font-mono text-[11px] uppercase tracking-[0.24em] text-paper transition hover:border-museum-red hover:bg-museum-red"
            >
              Enter Slow Looking Room
            </Link>
          </div>
        </section>

        <section className="bg-background px-5 py-28 sm:px-8 lg:py-44">
          <div className="mx-auto max-w-7xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-museum-red">
              VII / PMA opportunity
            </p>
            <div className="mt-8 grid gap-16 lg:grid-cols-[0.7fr_0.3fr]">
              <h2 className="font-serif text-[clamp(3.25rem,8vw,8.5rem)] leading-[0.88] tracking-tight text-balance">
                PMA should not build a bigger museum. It should build
                Portland’s cultural operating system.
              </h2>
              <p className="text-xl leading-9 text-ash lg:pt-8">
                This is not a redesign brief. It is a strategic provocation:
                use the museum’s authority, architecture, collection, and local
                trust to create depth in a culture of endless access.
              </p>
            </div>
          </div>
        </section>

        <section className="px-5 py-28 sm:px-8 lg:py-44">
          <div className="mx-auto max-w-5xl text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-museum-red">
              Conclusion
            </p>
            <h2 className="mt-8 font-serif text-[clamp(3.25rem,8vw,8.5rem)] leading-[0.88] tracking-tight text-balance">
              The museum survives by becoming more itself.
            </h2>
            <p className="mx-auto mt-12 max-w-3xl text-xl leading-9 text-ash">
              More physical. More trusted. More patient. More public. The
              digital future does not erase the museum. It clarifies what only
              the museum can do.
            </p>
            <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/paper"
                className="border border-charcoal/20 px-7 py-5 font-mono text-[11px] uppercase tracking-[0.24em] transition hover:border-museum-red hover:text-museum-red"
              >
                Read the Paper
              </Link>
              <Link
                href="/conversation"
                className="border border-charcoal/20 px-7 py-5 font-mono text-[11px] uppercase tracking-[0.24em] transition hover:border-museum-red hover:text-museum-red"
              >
                View Fragments
              </Link>
            </div>
          </div>
        </section>
      </article>
    </PageFrame>
  );
}
