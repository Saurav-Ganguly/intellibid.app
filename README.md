<div align="center">

# intellibid.app

**Win more tenders. With evidence, not guesswork.**

AI-powered tender intelligence for Indian firms — built end-to-end by [OpenAI Codex](https://openai.com/codex/) during the OpenAI x Outskill 7-Day AI Builders Hackathon.

[Live preview](https://intellibid.app) · [Hackathon entry](#hackathon) · [Built with Codex](#built-with-codex)

</div>

---

## Built with Codex

Every line of application code in this repository was generated, refactored, and debugged through **OpenAI Codex**. Codex was driven from the terminal as the primary implementation agent — scaffolding the Next.js app, wiring the AI pipeline, designing data models, and iterating on the UI surface. The human role was direction, taste, and review.

What Codex shipped here:

- The full Next.js 15 / React 19 application surface
- The tender analysis pipeline (parsing, requirement extraction, dual scoring, citation grounding)
- The Company Brain evidence vault
- The annexure generation flow (editable DOCX / PDF export with letterhead)
- The marketing site at the root URL
- The Python extractor sidecar scaffold

Codex run logs and meaningful implementation steps live in [`docs/codex-log.md`](docs/codex-log.md).

---

## The product

Indian firms lose tenders not because they are unqualified, but because tender packs are dense, deadlines are brutal, and a single missed annexure disqualifies the bid. **intellibid** reads the tender, reasons about fit, and helps you respond — with evidence on every claim.

### What it does

1. **Read** — ingests the full tender bundle (RFP, BOQ, corrigenda, annexures) across PDF and DOCX, including Hindi / Marathi / Tamil clauses.
2. **Reason** — extracts a citation-backed requirement matrix and produces a **dual verdict**: an *eligibility* score (can you legally bid?) and a *desirability* score (should you bid?). One number hides risk. Two reveal it.
3. **Respond** — generates fillable annexures on your letterhead and a preflight-checked bid pack, ready for submission.

### Capabilities

- **Company Brain** — one-time structured setup that powers every future bid
- **Tender Bundle Analysis** — RFP + BOQ + corrigendum + annexures in one workspace
- **Dual Verdict Engine** — eligibility and desirability scored separately
- **Citation-Backed AI** — every answer links to its source page
- **Requirement Matrix** — every must-have clause and disqualifier extracted
- **Annexure Generation** — fillable, signature-ready, on your letterhead
- **Editable DOCX / PDF Export** with missing-field preflight
- **Tender Copilot** — proposes workspace updates with explicit confirmation
- **Structured Evidence Vault** — typed slots, not a dumping ground
- **Auto-Fetch Tender Discovery** — matched to your role, category, region
- **Priority Alerts** — high-fit tenders and at-risk deadlines pushed proactively
- **Team Review & Coordination** — requirement resolution, task state, preflight

---

## Repository layout

```
code/
├── web/         Next.js 15 application (App Router, React 19, Tailwind 4)
├── extractor/   Python sidecar for DOCX / PDF generation (uv-managed)
└── docs/        Engineering notes and Codex implementation log
```

---

## Stack

| Layer        | Choice                                                      |
| ------------ | ----------------------------------------------------------- |
| Framework    | Next.js 15.5 (App Router, RSC)                              |
| UI           | React 19, Tailwind CSS 4 (oklch theming), framer-motion 12  |
| Typography   | Instrument Serif · Geist · Geist Mono                       |
| AI           | OpenAI Responses API · Google Gemini 2.5 (multi-model)      |
| Data         | Supabase (Postgres + Auth + Storage)                        |
| Discovery    | Firecrawl                                                   |
| Sidecar      | Python 3.12 + uv (DOCX / PDF generation)                    |
| Build agent  | **OpenAI Codex**                                            |

---

## Getting started

### Web app

```bash
cd web
cp .env.example .env.local   # fill in keys
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Extractor sidecar

```bash
cd extractor
uv sync
```

---

## Environment

The web app expects the following keys (see [`web/.env.example`](web/.env.example)):

- `GEMINI_API_KEY`, `GEMINI_MODEL_FAST`, `GEMINI_MODEL_REASONING`, `GEMINI_MODEL_PREVIEW`
- `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`
- `FIRECRAWL_API_KEY`

---

## Hackathon

intellibid was selected as 1 of 1,000 shortlisted teams in the **OpenAI x Outskill 7-Day AI Builders Hackathon** (May 2026). The brief: ship a working AI product in seven days, with **Codex usage carrying 20% of the final score**. This repository is the working artifact of that build.

---

## License

Proprietary. All rights reserved.
