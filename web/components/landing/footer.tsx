import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/60">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 sm:flex-row sm:items-center lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-6 w-6 place-items-center rounded-md bg-[var(--accent)] font-display text-sm leading-none text-[var(--accent-foreground)]">
            i
          </span>
          <span className="font-display text-lg leading-none text-foreground">
            intellibid<span className="text-muted-foreground">.app</span>
          </span>
        </Link>

        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          Tender intelligence · built in India · {new Date().getFullYear()}
        </p>

        <div className="flex items-center gap-5">
          <a
            href="mailto:hello@intellibid.app"
            className="text-sm text-muted-foreground transition hover:text-foreground"
          >
            Contact
          </a>
          <Link
            href="/onboarding"
            className="text-sm text-muted-foreground transition hover:text-foreground"
          >
            Start free
          </Link>
        </div>
      </div>
    </footer>
  );
}
