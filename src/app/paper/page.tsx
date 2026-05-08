import { Kicker, PageFrame } from "@/components/SiteShell";
import { paperSections, secondaryThesis, thesis } from "@/lib/content";

export default function PaperPage() {
  return (
    <PageFrame>
      <article className="bg-paper px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <Kicker>Formal White Paper</Kicker>
          <h1 className="mt-8 font-serif text-6xl leading-none tracking-tight text-balance sm:text-8xl">
            The Museum as Civic Operating System
          </h1>
          <p className="mt-10 font-serif text-3xl leading-tight text-balance">
            {thesis}
          </p>
          <p className="mt-6 text-xl leading-9 text-ash">{secondaryThesis}</p>
          <div className="mt-14 space-y-12 border-t border-charcoal/15 pt-12">
            {paperSections.map((section) => (
              <section key={section.title}>
                <h2 className="font-serif text-4xl">{section.title}</h2>
                <p className="mt-5 text-lg leading-9 text-charcoal/80">
                  {section.body}
                </p>
              </section>
            ))}
          </div>
          <div className="mt-14 border border-charcoal/15 bg-background p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-museum-red">
              Download / Read the White Paper
            </p>
            <p className="mt-4 text-sm leading-7 text-ash">
              Placeholder for a downloadable PDF or canonical markdown file.
              This standalone V3 project keeps the paper available at
              <span className="font-mono text-charcoal"> /paper</span>.
            </p>
          </div>
        </div>
      </article>
    </PageFrame>
  );
}
