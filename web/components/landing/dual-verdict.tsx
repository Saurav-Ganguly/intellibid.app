function Gauge({
  label,
  value,
  hint,
  color,
}: {
  label: string;
  value: number;
  hint: string;
  color: string;
}) {
  const r = 56;
  const c = 2 * Math.PI * r;
  const offset = c - (value / 100) * c;
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative">
        <svg width="160" height="160" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r={r}
            stroke="oklch(1 0 0 / 0.08)"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="80"
            cy="80"
            r={r}
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
            strokeDasharray={c}
            strokeDashoffset={offset}
            transform="rotate(-90 80 80)"
            style={{ transition: "stroke-dashoffset 1.6s ease-out" }}
          />
        </svg>
        <div className="absolute inset-0 grid place-items-center">
          <div>
            <p className="font-display text-4xl text-foreground">{value}</p>
            <p className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
              / 100
            </p>
          </div>
        </div>
      </div>
      <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
        {label}
      </p>
      <p className="mt-1 text-sm text-foreground/90">{hint}</p>
    </div>
  );
}

export function DualVerdict() {
  return (
    <section className="relative border-t border-border bg-background/40">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="grid items-center gap-16 md:grid-cols-[1fr_1.2fr]">
          <div className="flex justify-center gap-10">
            <Gauge
              label="Eligibility"
              value={87}
              hint="Qualified — 1 clarification"
              color="oklch(0.78 0.16 70)"
            />
            <Gauge
              label="Desirability"
              value={72}
              hint="Strong commercial fit"
              color="oklch(0.72 0.14 155)"
            />
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--accent)]">
              The Dual Verdict
            </p>
            <h2 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl">
              One score hides risk.{" "}
              <span className="italic text-muted-foreground">Two scores reveal it.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Can you legally bid? That&apos;s eligibility. Should you bid?
              That&apos;s desirability. intellibid scores them separately so a
              bid pack that clears compliance but loses money never sneaks
              through, and a high-margin tender you&apos;d disqualify on
              isn&apos;t pursued by mistake.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-surface/60 p-4">
                <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--accent)]">
                  Eligibility
                </p>
                <p className="mt-2 text-sm text-foreground/90">
                  Turnover, similar work, bid security, statutory clauses, JV rules.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-surface/60 p-4">
                <p className="font-mono text-[10px] uppercase tracking-wider text-[oklch(0.72_0.14_155)]">
                  Desirability
                </p>
                <p className="mt-2 text-sm text-foreground/90">
                  Margin profile, geography, scope creep risk, payment terms, competition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
