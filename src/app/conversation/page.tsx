import { Kicker, PageFrame } from "@/components/SiteShell";
import { fragments } from "@/lib/content";

export default function ConversationPage() {
  return (
    <PageFrame>
      <section className="bg-paper px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <Kicker>Conversation Archive</Kicker>
          <h1 className="mt-8 font-serif text-6xl leading-none text-balance sm:text-8xl">
            Fragments worth preserving.
          </h1>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {fragments.map((fragment, index) => (
              <blockquote
                key={fragment}
                className="min-h-64 border border-charcoal/15 bg-background p-6"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-museum-red">
                  Fragment 0{index + 1}
                </p>
                <p className="mt-10 font-serif text-3xl leading-tight">
                  “{fragment}”
                </p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
