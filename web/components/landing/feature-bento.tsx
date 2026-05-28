import {
  Brain,
  FileStack,
  GitBranch,
  Quote,
  ListChecks,
  FileSignature,
  FileDown,
  Bot,
  ShieldCheck,
  Radar,
  BellRing,
  Users2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  body: string;
  span?: string;
  visual?: "matrix" | "verdict" | "alerts";
};

const FEATURES: Feature[] = [
  {
    icon: Brain,
    title: "Company Brain",
    body: "One-time setup of your firm's identity, capabilities, and evidence — powers every bid you ever run.",
    span: "md:col-span-2 md:row-span-2",
    visual: "matrix",
  },
  {
    icon: FileStack,
    title: "Tender Bundle Analysis",
    body: "RFP, BOQ, corrigendum, and annexures parsed together in one workspace.",
  },
  {
    icon: GitBranch,
    title: "Dual Verdict Engine",
    body: "Eligibility and desirability scored separately. Never collapsed into one opaque number.",
    visual: "verdict",
  },
  {
    icon: Quote,
    title: "Citation-Backed AI",
    body: "Every answer links to its source page in the tender or your company brain.",
  },
  {
    icon: ListChecks,
    title: "Requirement Matrix",
    body: "Structured extraction of every must-have clause, disqualifier, and submission rule.",
  },
  {
    icon: FileSignature,
    title: "Annexure Generation",
    body: "Fillable, signature-ready documents drafted on your letterhead template.",
  },
  {
    icon: FileDown,
    title: "Editable DOCX / PDF Export",
    body: "Missing-field preflight before you submit. Edit anything, then export.",
  },
  {
    icon: Bot,
    title: "Tender Copilot",
    body: "Proposes workspace updates with explicit confirmation. Never edits silently.",
  },
  {
    icon: ShieldCheck,
    title: "Structured Evidence Vault",
    body: "Statutory, financial, certifications, team, past work — typed slots, not a dumping ground.",
  },
  {
    icon: Radar,
    title: "Auto-Fetch Tender Discovery",
    body: "Tenders matched to your firm's role, category, and region — surfaced as they go live.",
    span: "md:col-span-2",
    visual: "alerts",
  },
  {
    icon: BellRing,
    title: "Priority Alerts",
    body: "High-fit tenders and at-risk deadlines pushed before they slip.",
  },
  {
    icon: Users2,
    title: "Team Review & Coordination",
    body: "Requirement resolution, task state, and pre-submission checks across legal, tech, ops.",
  },
];

function VaultVisual() {
  const slots = [
    "GST · CIN · PAN",
    "Audited financials FY22-24",
    "ISO 9001 · ISO 27001",
    "Key personnel CVs",
    "Past performance · 18 projects",
    "Bank solvency · DD format",
  ];
  return (
    <div className="mt-6 grid grid-cols-2 gap-1.5">
      {slots.map((s) => (
        <div
          key={s}
          className="flex items-center gap-2 rounded-md border border-border bg-background/50 px-2.5 py-1.5"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.72_0.14_155)]" />
          <span className="truncate font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            {s}
          </span>
        </div>
      ))}
    </div>
  );
}

function VerdictVisual() {
  return (
    <div className="mt-5 grid grid-cols-2 gap-3">
      <div className="rounded-md border border-border bg-background/50 p-3">
        <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          Eligibility
        </p>
        <p className="mt-1 font-display text-2xl text-foreground">87</p>
        <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-white/5">
          <div className="h-full w-[87%] rounded-full bg-[var(--accent)]" />
        </div>
      </div>
      <div className="rounded-md border border-border bg-background/50 p-3">
        <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          Desirability
        </p>
        <p className="mt-1 font-display text-2xl text-foreground">72</p>
        <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-white/5">
          <div className="h-full w-[72%] rounded-full bg-[oklch(0.72_0.14_155)]" />
        </div>
      </div>
    </div>
  );
}

function AlertsVisual() {
  const items = [
    { tag: "NHAI", title: "Six-laning NH-44 · Pkg III", fit: 87 },
    { tag: "BSNL", title: "Pan-India fiber rollout · zone 4", fit: 81 },
    { tag: "AIIMS", title: "Facility management · 5 yr", fit: 74 },
  ];
  return (
    <div className="mt-5 space-y-1.5">
      {items.map((i) => (
        <div
          key={i.title}
          className="flex items-center gap-3 rounded-md border border-border bg-background/50 px-3 py-2"
        >
          <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--accent)]">
            {i.tag}
          </span>
          <p className="flex-1 truncate text-xs text-foreground/90">{i.title}</p>
          <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            fit {i.fit}
          </span>
        </div>
      ))}
    </div>
  );
}

export function FeatureBento() {
  return (
    <section id="features" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--accent)]">
              Capabilities
            </p>
            <h2 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl">
              Everything a bid team needs.{" "}
              <span className="italic text-muted-foreground">In one place.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Twelve modules, one workspace. Tender discovery, qualification, drafting,
            and coordination — connected by your company brain.
          </p>
        </div>

        <div className="mt-12 grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
          {FEATURES.map((f) => (
            <article
              key={f.title}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-surface p-5 transition hover:-translate-y-0.5 hover:border-border-strong hover:bg-surface-elevated hover:shadow-[0_0_60px_-30px_oklch(0.78_0.16_70/0.6)] ${f.span ?? ""}`}
            >
              <div className="flex items-center gap-2">
                <span className="grid h-7 w-7 place-items-center rounded-md border border-border bg-background/60">
                  <f.icon className="h-3.5 w-3.5 text-[var(--accent)]" />
                </span>
                <h3 className="font-display text-lg text-foreground">
                  {f.title}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {f.body}
              </p>
              {f.visual === "matrix" && <VaultVisual />}
              {f.visual === "verdict" && <VerdictVisual />}
              {f.visual === "alerts" && <AlertsVisual />}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
