"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ProductMockup } from "./product-mockup";
import { Grain } from "./grain";

const fade = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.05 + i * 0.1,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Atmosphere */}
      <div className="absolute inset-0 -z-10 dot-grid opacity-60" />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -z-10 h-[720px] w-[1100px] -translate-x-1/2 glow-amber"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-background"
      />
      <Grain />

      <div className="mx-auto max-w-6xl px-6 pb-24 pt-20 sm:pt-28 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <motion.p
            initial="hidden"
            animate="show"
            custom={0}
            variants={fade}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            Tender intelligence · built for Indian firms
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="show"
            custom={1}
            variants={fade}
            className="mt-7 max-w-4xl font-display text-5xl leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-7xl"
          >
            Win more tenders.{" "}
            <span className="italic text-muted-foreground">
              With evidence,
              <br />
              not guesswork.
            </span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            custom={2}
            variants={fade}
            className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            intellibid reads the RFP, scores your eligibility and commercial fit
            against your company brain, and drafts the entire bid pack —
            citations included.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            custom={3}
            variants={fade}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              href="/onboarding"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-[var(--accent-foreground)] shadow-[0_0_40px_-8px_oklch(0.78_0.16_70/0.6)] transition hover:brightness-110"
            >
              Start free
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/40 px-5 py-2.5 text-sm font-medium text-foreground transition hover:border-border-strong hover:bg-surface"
            >
              See how it works
            </a>
          </motion.div>

          <motion.p
            initial="hidden"
            animate="show"
            custom={4}
            variants={fade}
            className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
          >
            No login required to start · onboarding takes 4 minutes
          </motion.p>
        </div>

        <div className="mt-20">
          <ProductMockup />
        </div>
      </div>
    </section>
  );
}
