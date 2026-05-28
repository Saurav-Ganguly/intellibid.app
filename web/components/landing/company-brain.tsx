import {
  FileBadge,
  Banknote,
  Award,
  Users,
  Building2,
  Briefcase,
} from "lucide-react";

const SLOTS = [
  { icon: FileBadge, label: "Statutory", items: ["GST", "CIN", "PAN", "EPFO", "ESIC"] },
  { icon: Banknote, label: "Financial", items: ["Audited 3 yr", "Bank solvency", "Net worth"] },
  { icon: Award, label: "Certifications", items: ["ISO 9001", "ISO 27001", "MSME"] },
  { icon: Users, label: "Team", items: ["Key personnel", "CVs", "Org chart"] },
  { icon: Building2, label: "Infrastructure", items: ["Offices", "Plant & machinery"] },
  { icon: Briefcase, label: "Past performance", items: ["Completed projects", "Client letters"] },
];

export function CompanyBrain() {
  return (
    <section className="relative border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--accent)]">
              The Company Brain
            </p>
            <h2 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl">
              Build it once.{" "}
              <span className="italic text-muted-foreground">Reuse it on every tender.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Most tender tools ask you to start from zero on every RFP. intellibid asks
              you once. Typed evidence slots — statutory, financial, certifications, team,
              infrastructure, past performance — captured into a structured vault that
              every downstream feature draws from.
            </p>
            <ul className="mt-7 space-y-3 text-sm text-foreground/90">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-[var(--accent)]" />
                Deterministic compliance checks instead of fuzzy answers.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-[var(--accent)]" />
                Faster eligibility scoring — no per-bid evidence hunt.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-[var(--accent)]" />
                Annexures auto-fill from the vault, on your letterhead.
              </li>
            </ul>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-10 -z-10 glow-amber opacity-50"
            />
            <div className="rounded-2xl border border-border-strong bg-surface/80 p-1 backdrop-blur-xl">
              <div className="flex items-center justify-between rounded-t-xl border-b border-border bg-surface/60 px-4 py-2.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  company brain · vault
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[oklch(0.72_0.14_155)]">
                  ● 94% complete
                </span>
              </div>
              <div className="grid grid-cols-2 gap-px bg-border">
                {SLOTS.map((s) => (
                  <div key={s.label} className="bg-background/60 p-4">
                    <div className="flex items-center gap-2">
                      <s.icon className="h-3.5 w-3.5 text-[var(--accent)]" />
                      <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                        {s.label}
                      </span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {s.items.map((i) => (
                        <span
                          key={i}
                          className="rounded-md border border-border bg-surface/50 px-1.5 py-0.5 text-[10px] text-foreground/80"
                        >
                          {i}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
