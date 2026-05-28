const STEPS = [
  {
    n: "01",
    title: "Build your company brain",
    body: "Drop your firm context, statutory docs, financials, certifications, team, and past work into typed slots. Takes around 4 minutes.",
    visual: (
      <div className="space-y-1.5">
        {["GST · CIN · PAN", "Audited financials", "ISO certifications", "Key personnel"].map(
          (s) => (
            <div
              key={s}
              className="flex items-center gap-2 rounded-md border border-border bg-background/50 px-2.5 py-1.5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.72_0.14_155)]" />
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                {s}
              </span>
            </div>
          )
        )}
      </div>
    ),
  },
  {
    n: "02",
    title: "Analyze a tender",
    body: "Upload the RFP bundle. intellibid extracts the requirement matrix, scores eligibility and desirability, and flags every disqualifier with a citation.",
    visual: (
      <div className="space-y-2">
        <div className="rounded-md border border-border bg-background/50 p-2.5">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              Eligibility
            </span>
            <span className="font-display text-lg text-foreground">87</span>
          </div>
          <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-white/5">
            <div className="h-full w-[87%] rounded-full bg-[var(--accent)]" />
          </div>
        </div>
        <div className="rounded-md border border-border bg-background/50 p-2.5">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              Desirability
            </span>
            <span className="font-display text-lg text-foreground">72</span>
          </div>
          <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-white/5">
            <div className="h-full w-[72%] rounded-full bg-[oklch(0.72_0.14_155)]" />
          </div>
        </div>
      </div>
    ),
  },
  {
    n: "03",
    title: "Generate the bid pack",
    body: "Annexures drafted on your letterhead, preflighted for missing fields, exported as editable DOCX and signature-ready PDF.",
    visual: (
      <div className="space-y-1.5">
        {[
          ["Annexure A · Bidder profile", "ready"],
          ["Annexure B · Financial capacity", "ready"],
          ["Annexure C · Past performance", "ready"],
          ["Annexure D · Tech approach", "ready"],
        ].map(([label, status]) => (
          <div
            key={label}
            className="flex items-center gap-2 rounded-md border border-border bg-background/50 px-2.5 py-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.72_0.14_155)]" />
            <span className="flex-1 truncate text-[11px] text-foreground/90">{label}</span>
            <span className="font-mono text-[9px] uppercase tracking-wider text-[oklch(0.72_0.14_155)]">
              {status}
            </span>
          </div>
        ))}
      </div>
    ),
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--accent)]">
            How it works
          </p>
          <h2 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl">
            Three steps from RFP{" "}
            <span className="italic text-muted-foreground">to submission.</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-3 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <article
              key={s.n}
              className="relative flex flex-col rounded-2xl border border-border bg-surface p-6"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-3xl italic text-[var(--accent)]">
                  {s.n}
                </span>
                {i < STEPS.length - 1 && (
                  <span className="hidden font-mono text-[10px] uppercase tracking-wider text-muted-foreground md:inline">
                    next →
                  </span>
                )}
              </div>
              <h3 className="mt-4 font-display text-xl leading-tight text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
              <div className="mt-5">{s.visual}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
