import Link from "next/link";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-6 w-6 place-items-center rounded-md bg-[var(--accent)] font-display text-sm leading-none text-[var(--accent-foreground)]">
            i
          </span>
          <span className="font-display text-lg leading-none text-foreground">
            intellibid<span className="text-muted-foreground">.app</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {[
            ["Product", "#product"],
            ["Features", "#features"],
            ["How it works", "#how"],
            ["FAQ", "#faq"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm text-muted-foreground transition hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/dashboard"
            className="hidden text-sm text-muted-foreground transition hover:text-foreground sm:inline"
          >
            Sign in
          </Link>
          <Link
            href="/onboarding"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-3.5 py-1.5 text-sm font-medium text-[var(--accent-foreground)] transition hover:brightness-110"
          >
            Start free
          </Link>
        </div>
      </div>
    </header>
  );
}
