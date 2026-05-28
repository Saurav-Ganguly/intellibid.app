import { BookOpenText, Cpu, Send } from "lucide-react";

const PILLARS = [
  {
    icon: BookOpenText,
    label: "Read",
    title: "It reads the entire tender packet.",
    body: "RFP, BOQ, corrigendum, annexures — parsed into a structured requirement matrix with every clause linked to its page.",
  },
  {
    icon: Cpu,
    label: "Reason",
    title: "It reasons against your company brain.",
    body: "Eligibility and commercial desirability scored separately, with evidence pulled from your statutory, financial, and past-work vault.",
  },
  {
    icon: Send,
    label: "Respond",
    title: "It drafts the bid pack you submit.",
    body: "Annexures generated on your letterhead, preflighted for missing fields, exported as editable DOCX and signature-ready PDF.",
  },
];

export function Pillars() {
  return (
    <section id="product" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--accent)]">
            The loop
          </p>
          <h2 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl">
            Read. Reason.{" "}
            <span className="italic text-muted-foreground">Respond.</span>
          </h2>
          <p className="mt-4 max-w-xl text-base text-muted-foreground">
            One continuous flow from raw tender PDF to submission-ready bid
            pack. No tab-hopping, no copy-paste, no second-guessing.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {PILLARS.map((p) => (
            <div
              key={p.label}
              className="group relative bg-surface p-7 transition hover:bg-surface-elevated"
            >
              <div className="flex items-center gap-2.5">
                <span className="grid h-8 w-8 place-items-center rounded-md border border-border bg-background/60">
                  <p.icon className="h-4 w-4 text-[var(--accent)]" />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  {p.label}
                </span>
              </div>
              <h3 className="mt-5 font-display text-2xl leading-tight text-foreground">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
