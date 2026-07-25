"use client";

import { ShieldCheck, Cloud, Activity } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { PillButton, Eyebrow } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

const PANEL_ROWS = [
  { icon: ShieldCheck, label: "Threat surface", value: "Monitored", tone: "text-positive" },
  { icon: Cloud, label: "Hybrid workloads", value: "Optimized", tone: "text-signal-2" },
  { icon: Activity, label: "Uptime, last 90d", value: "99.98%", tone: "text-foreground" },
];

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-28 md:pt-52 md:pb-36">
      <div
        className="glow-orb h-[560px] w-[560px] -left-40 -top-40 bg-signal/25"
        aria-hidden="true"
      />
      <div
        className="glow-orb h-[420px] w-[420px] right-[-120px] top-40 bg-signal-2/15"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 md:grid-cols-12 md:px-10">
        <div className="md:col-span-7">
          <Reveal>
            <Eyebrow>Beyond Solutions · Since 2007</Eyebrow>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-7 text-balance font-display text-[13vw] font-medium leading-[0.98] tracking-tight text-foreground md:text-[4.4vw]">
              Technology
              <br />
              advisors for the
              <br />
              <span className="text-signal-2">enterprise frontier.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="mt-8 max-w-xl text-balance text-lg leading-relaxed text-muted">
              Teksalah engineers cyber security, cloud infrastructure and managed
              services for the region&apos;s most demanding organizations — 1,800+
              projects, 800+ clients, one uncompromising standard.
            </p>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <PillButton href="#contact">Start a conversation</PillButton>
              <PillButton href="#solutions" variant="ghost" icon={false}>
                Explore solutions
              </PillButton>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: reduced ? 0 : 40, rotate: reduced ? 0 : 2 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="shell mt-4 md:mt-16"
          >
            <div className="shell-core p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-2">
                Live posture snapshot
              </p>
              <div className="mt-5 space-y-4">
                {PANEL_ROWS.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between rounded-2xl border border-border bg-white/[0.02] px-4 py-3"
                  >
                    <span className="flex items-center gap-3 text-sm text-muted">
                      <row.icon className="h-4 w-4 text-signal-2" strokeWidth={1.5} />
                      {row.label}
                    </span>
                    <span className={`font-mono text-sm font-medium ${row.tone}`}>
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                <span className="text-xs text-muted-2">Retention rate</span>
                <span className="font-display text-2xl font-medium text-foreground">
                  98%
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
