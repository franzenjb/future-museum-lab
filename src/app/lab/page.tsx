import Link from "next/link";
import { PageFrame } from "@/components/SiteShell";

export default function LabPage() {
  return (
    <PageFrame>
      <section className="min-h-[calc(100vh-76px)] bg-background px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-20 lg:grid-cols-[0.7fr_0.3fr]">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-museum-red">
              Interactive Lab
            </p>
            <h1 className="mt-10 font-serif text-[clamp(4rem,12vw,12rem)] uppercase leading-[0.78] tracking-tight text-balance">
              One room.
            </h1>
          </div>
          <div className="self-end">
            <p className="text-xl leading-9 text-ash">
              For now, the lab contains a single experiment: a timed room for
              looking before interpretation arrives.
            </p>
            <Link
              href="/slow-looking"
              className="mt-10 inline-block border border-charcoal bg-charcoal px-7 py-5 font-mono text-[11px] uppercase tracking-[0.24em] text-paper transition hover:border-museum-red hover:bg-museum-red"
            >
              Enter Slow Looking
            </Link>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
