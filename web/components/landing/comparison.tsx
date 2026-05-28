import { X, Check } from "lucide-react";

const ROWS = [
  {
    category: "Tender listing portals",
    they: [
      "Show you tenders, then leave you to evaluate fit alone.",
      "No requirement extraction, no scoring, no drafting.",
      "Eligibility checks done manually in spreadsheets.",
    ],
    us: [
      "Discovery flows into qualification and bid-pack execution.",
      "Citation-backed requirement matrix and dual verdict.",
      "Eligibility scored automatically against your vault.",
    ],
  },
  {
    category: "Generic AI chat assistants",
    they: [
      "Free-form answers without a structured requirement matrix.",
      "No workflow state, no annexure generation, no preflight.",
      "Hallucinations on clauses with no source page links.",
    ],
    us: [
      "Tender-aware actions with confirmation flows and updates.",
      "Annexure factory with letterhead and editable export.",
      "Every claim cites a page in the tender or your brain.",
    ],
  },
];

export function Comparison() {
  return (
    <section className="relative border-t border-border bg-background/40">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--accent)]">
            How we&apos;re different
          </p>
          <h2 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl">
            Not a listing portal.{" "}
            <span className="italic text-muted-foreground">Not a chatbot.</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-3 md:grid-cols-2">
          {ROWS.map((row) => (
            <article
              key={row.category}
              className="rounded-2xl border border-border bg-surface p-7"
            >
              <h3 className="font-display text-xl text-foreground">{row.category}</h3>
              <div className="mt-5 space-y-3">
                {row.they.map((t, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-4 w-4 flex-none place-items-center rounded-full border border-border bg-background/50">
                      <X className="h-2.5 w-2.5 text-muted-foreground" />
                    </span>
                    <p className="text-sm text-muted-foreground">{t}</p>
                  </div>
                ))}
              </div>
              <div className="my-5 hairline" />
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--accent)]">
                intellibid
              </p>
              <div className="mt-3 space-y-3">
                {row.us.map((u, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-4 w-4 flex-none place-items-center rounded-full bg-accent-soft">
                      <Check className="h-2.5 w-2.5 text-[var(--accent)]" />
                    </span>
                    <p className="text-sm text-foreground/90">{u}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
