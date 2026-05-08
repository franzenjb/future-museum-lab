import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-7 sm:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="h-2.5 w-2.5 bg-museum-red" aria-hidden="true" />
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-charcoal/75">
            Future Museum Lab
          </span>
        </Link>
        <nav
          className="hidden items-center gap-5 font-mono text-[10px] uppercase tracking-[0.22em] text-charcoal/55 sm:flex"
          aria-label="Primary navigation"
        >
          <Link href="/paper" className="transition hover:text-museum-red">
            Paper
          </Link>
          <Link href="/slow-looking" className="transition hover:text-museum-red">
            Slow Looking
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-paper">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-end md:justify-between">
        <p className="max-w-xl font-serif text-3xl leading-tight text-balance">
          A speculative companion to a white paper on museums, attention, and
          civic memory.
        </p>
        <div className="flex gap-5 font-mono text-[10px] uppercase tracking-[0.22em] text-stone">
          <Link href="/paper" className="transition hover:text-paper">
            Paper
          </Link>
          <Link href="/conversation" className="transition hover:text-paper">
            Fragments
          </Link>
          <Link href="/slow-looking" className="transition hover:text-paper">
            Slow Looking
          </Link>
        </div>
      </div>
    </footer>
  );
}

export function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </>
  );
}

export function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-museum-red">
      {children}
    </p>
  );
}
