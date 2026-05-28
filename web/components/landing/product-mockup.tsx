"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { CheckCircle2, AlertTriangle, FileText, Quote } from "lucide-react";

function AnimatedScore({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, target, { duration: 1.6, ease: "easeOut" });
    return () => controls.stop();
  }, [inView, target, mv]);

  useEffect(() => {
    return rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = String(v);
    });
  }, [rounded]);

  return <span ref={ref}>0</span>;
}

function Bar({ value, accent = false }: { value: number; accent?: boolean }) {
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
        className={`h-full rounded-full ${
          accent
            ? "bg-[var(--accent)]"
            : "bg-gradient-to-r from-[oklch(0.72_0.14_155)] to-[oklch(0.72_0.14_155)]/60"
        }`}
      />
    </div>
  );
}

export function ProductMockup() {
  return (
    <div className="relative w-full">
      {/* Saffron glow underlay */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -z-10 h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/2 glow-amber"
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto w-full max-w-4xl rounded-2xl border border-border-strong bg-surface/80 p-1 shadow-[0_30px_120px_-40px_rgba(0,0,0,0.7)] backdrop-blur-xl"
      >
        {/* Top window chrome */}
        <div className="flex items-center justify-between rounded-t-[14px] border-b border-border bg-surface/60 px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            intellibid / tender · NHAI-RFP-2026-04
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            deadline · 21 days
          </span>
        </div>

        <div className="grid gap-px overflow-hidden rounded-b-[14px] bg-border md:grid-cols-[1.4fr_1fr]">
          {/* Left: score panel */}
          <div className="bg-background/60 p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Tender · National Highways Authority of India
            </p>
            <h3 className="mt-2 font-display text-2xl leading-tight text-foreground">
              Six-laning of NH-44 · Package III
              <span className="italic text-muted-foreground"> — Bihar</span>
            </h3>

            <div className="mt-6 grid grid-cols-2 gap-5">
              <div>
                <div className="flex items-baseline justify-between">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Eligibility
                  </p>
                  <p className="font-display text-3xl text-foreground">
                    <AnimatedScore target={87} />
                    <span className="text-base text-muted-foreground">/100</span>
                  </p>
                </div>
                <div className="mt-2">
                  <Bar value={87} accent />
                </div>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-[oklch(0.72_0.14_155)]">
                  ● Qualified
                </p>
              </div>
              <div>
                <div className="flex items-baseline justify-between">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Desirability
                  </p>
                  <p className="font-display text-3xl text-foreground">
                    <AnimatedScore target={72} />
                    <span className="text-base text-muted-foreground">/100</span>
                  </p>
                </div>
                <div className="mt-2">
                  <Bar value={72} />
                </div>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  ● Strong commercial fit
                </p>
              </div>
            </div>

            {/* Requirements */}
            <div className="mt-6 space-y-2.5">
              {[
                { label: "Avg. turnover ≥ ₹250 Cr (last 3 FY)", ok: true, cite: "p. 14" },
                { label: "Similar work: 4-lane highway ≥ 25 km", ok: true, cite: "p. 22" },
                { label: "Bid security ₹2.5 Cr · DD or BG", ok: true, cite: "p. 38" },
                {
                  label: "Joint venture clause review needed",
                  ok: false,
                  cite: "p. 47",
                },
              ].map((r) => (
                <div
                  key={r.label}
                  className="flex items-center justify-between rounded-md border border-border bg-surface/50 px-3 py-2"
                >
                  <div className="flex items-center gap-2.5">
                    {r.ok ? (
                      <CheckCircle2 className="h-3.5 w-3.5 text-[oklch(0.72_0.14_155)]" />
                    ) : (
                      <AlertTriangle className="h-3.5 w-3.5 text-[var(--accent)]" />
                    )}
                    <p className="text-xs text-foreground/90">{r.label}</p>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    cite {r.cite}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: bid pack panel */}
          <div className="bg-background/40 p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Bid pack
            </p>
            <h4 className="mt-2 font-display text-xl text-foreground">
              14 annexures · auto-drafted
            </h4>

            <div className="mt-5 space-y-2">
              {[
                { name: "Annexure A · Bidder profile", done: true },
                { name: "Annexure B · Financial capacity", done: true },
                { name: "Annexure C · Past performance", done: true },
                { name: "Annexure D · Tech approach", done: true },
                { name: "Annexure E · JV agreement", done: false },
              ].map((a) => (
                <div
                  key={a.name}
                  className="flex items-center gap-2 rounded-md border border-border bg-surface/50 px-3 py-2"
                >
                  <FileText className="h-3.5 w-3.5 text-muted-foreground" />
                  <p className="flex-1 truncate text-xs text-foreground/90">
                    {a.name}
                  </p>
                  <span
                    className={`font-mono text-[10px] uppercase tracking-wider ${
                      a.done
                        ? "text-[oklch(0.72_0.14_155)]"
                        : "text-[var(--accent)]"
                    }`}
                  >
                    {a.done ? "ready" : "needs input"}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-md border border-border bg-accent-soft p-3">
              <div className="flex items-start gap-2">
                <Quote className="mt-0.5 h-3.5 w-3.5 text-[var(--accent)]" />
                <p className="text-[11px] leading-relaxed text-foreground/80">
                  Copilot suggests: <span className="text-foreground">add Bihar
                  regional office certificate</span> to strengthen local-presence
                  score by ~6 points.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
