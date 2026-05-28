import { Plus } from "lucide-react";

const FAQS = [
  {
    q: "Which tender formats does intellibid handle?",
    a: "RFP, RFQ, EOI, tender corrigenda, BOQ, technical specs, and annexure templates — across PDF, DOCX, and scanned files. The parser handles multi-file tender bundles in a single workspace.",
  },
  {
    q: "Does it work for tenders in Indian languages?",
    a: "Yes. English is the primary surface, with handling for Hindi, Marathi, and Tamil tender content. Regional script clauses get parsed and translated inline with citations preserved.",
  },
  {
    q: "How is our company data kept private?",
    a: "Your company brain and tender uploads sit in an isolated workspace tied to your account. Documents are never used to train shared models. You can purge any tender or evidence slot at any time.",
  },
  {
    q: "Who is intellibid built for?",
    a: "Indian firms that bid on government, PSU, and large enterprise tenders — construction, EPC, IT services, infrastructure, facility management, manufacturing, healthcare services. Equally useful for service providers and product resellers.",
  },
  {
    q: "How does the scoring actually work?",
    a: "Eligibility and desirability are scored separately. Eligibility looks at hard pass/fail criteria — turnover, similar work, statutory clauses, JV rules. Desirability looks at commercial fit — margin, geography, scope risk, payment terms. Every score links to source pages.",
  },
  {
    q: "Can my whole bid team work on the same tender?",
    a: "Yes. Requirement resolution, task state, copilot suggestions, and pre-submission preflight are all team-visible. Legal, technical, and operations sit in the same workspace.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="relative border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--accent)]">
              FAQ
            </p>
            <h2 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl">
              Questions,{" "}
              <span className="italic text-muted-foreground">answered.</span>
            </h2>
            <p className="mt-5 text-sm text-muted-foreground">
              Can&apos;t find what you need?{" "}
              <a
                href="mailto:hello@intellibid.app"
                className="text-foreground underline decoration-[var(--accent)] decoration-2 underline-offset-4 transition hover:text-[var(--accent)]"
              >
                hello@intellibid.app
              </a>
            </p>
          </div>

          <div className="divide-y divide-border rounded-2xl border border-border bg-surface/60">
            {FAQS.map((f) => (
              <details
                key={f.q}
                className="group px-5 py-5 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                  <span className="text-base text-foreground">{f.q}</span>
                  <Plus className="h-4 w-4 flex-none text-muted-foreground transition group-open:rotate-45 group-open:text-[var(--accent)]" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
