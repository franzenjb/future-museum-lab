import { PageFrame } from "@/components/SiteShell";
import { fragments } from "@/lib/content";

export default function ConversationPage() {
  return (
    <PageFrame>
      <section className="bg-paper px-5 py-20 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-museum-red">
            Conversation Archive
          </p>
          <h1 className="mt-10 max-w-5xl font-serif text-[clamp(4rem,10vw,10rem)] leading-[0.82] tracking-tight text-balance">
            Fragments on the wall.
          </h1>
          <div className="mt-28 space-y-32">
            {fragments.map((fragment, index) => (
              <blockquote
                key={fragment}
                className={`max-w-5xl ${
                  index % 2 === 0 ? "mr-auto" : "ml-auto"
                }`}
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-ash">
                  Wall text 0{index + 1}
                </p>
                <p className="mt-8 border-l border-museum-red pl-8 font-serif text-[clamp(2.5rem,6vw,6.5rem)] leading-[0.96] tracking-tight text-balance">
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
