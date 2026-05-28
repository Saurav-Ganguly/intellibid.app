const SECTORS = [
  "Construction & EPC",
  "IT services",
  "Infrastructure",
  "Facility management",
  "Manufacturing",
  "Consulting",
  "Renewable energy",
  "Healthcare services",
  "Defence supply",
  "Logistics & transport",
  "Civil works",
  "Telecom & networks",
];

export function TrustStrip() {
  const row = [...SECTORS, ...SECTORS];
  return (
    <section className="relative border-y border-border bg-background/40 py-7">
      <p className="mx-auto max-w-6xl px-6 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground lg:px-8">
        Built for Indian firms across
      </p>
      <div className="relative mt-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_15%,#000_85%,transparent)]">
        <div className="flex w-max gap-10 animate-marquee whitespace-nowrap font-display text-2xl text-muted-foreground/80">
          {row.map((s, i) => (
            <span key={`${s}-${i}`} className="flex items-center gap-10">
              <span>{s}</span>
              <span className="text-[var(--accent)]/70">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
