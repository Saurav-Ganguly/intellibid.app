import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Grain } from "./grain";

export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden border-t border-border">
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -z-10 h-[700px] w-[1100px] -translate-x-1/2 -translate-y-1/2 glow-amber"
      />
      <Grain />
      <div className="mx-auto max-w-6xl px-6 py-28 text-center lg:px-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--accent)]">
          Start free
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl font-display text-5xl leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-7xl">
          Build the brain once.{" "}
          <span className="italic text-muted-foreground">
            Win tenders forever.
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground">
          No login. No credit card. Onboarding takes about 4 minutes. Your first
          tender analysis runs in under 90 seconds after that.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/onboarding"
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-[var(--accent-foreground)] shadow-[0_0_60px_-10px_oklch(0.78_0.16_70/0.7)] transition hover:brightness-110"
          >
            Build my company brain
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </Link>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/40 px-6 py-3 text-sm text-foreground transition hover:border-border-strong hover:bg-surface"
          >
            Browse capabilities
          </a>
        </div>
      </div>
    </section>
  );
}
