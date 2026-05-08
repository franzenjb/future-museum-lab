import Link from "next/link";
import { navItems } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-paper/88 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="h-3 w-3 bg-museum-red" aria-hidden="true" />
          <span className="font-serif text-xl tracking-tight">
            Future Museum Lab
          </span>
        </Link>
        <nav
          className="hidden items-center gap-5 font-mono text-[11px] uppercase tracking-[0.18em] text-ash md:flex"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-museum-red"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-charcoal/10 bg-charcoal text-paper">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 md:grid-cols-[1fr_2fr]">
        <p className="font-serif text-2xl">A white paper companion, not a redesign.</p>
        <div className="grid gap-3 text-sm leading-7 text-stone md:grid-cols-2">
          <p>
            Built as a speculative interface for museums, civic memory, and
            slow attention.
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-stone/80">
            Future Museum Lab / V3 / Standalone
          </p>
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
