"use client";

import { Compass, Layers, HandHeart } from "lucide-react";
import { Eyebrow } from "@/components/ui/button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";

const PILLARS = [
  {
    icon: Compass,
    title: "Independent",
    copy: "Vendor-agnostic advice built around your architecture, not a reseller quota.",
  },
  {
    icon: Layers,
    title: "Complete",
    copy: "Security, cloud, data and software under one accountable roof.",
  },
  {
    icon: HandHeart,
    title: "Trusted",
    copy: "98% client retention, built one delivered project at a time since 2007.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 md:grid-cols-12 md:px-10">
        <div className="md:col-span-6">
          <Reveal>
            <Eyebrow>About Teksalah</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 text-balance font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
              TEK is technology.
              <br />
              SALAH is advice.
              <br />
              <span className="text-muted">Together, they&apos;re a promise.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-lg text-muted leading-relaxed">
              Founded in Dubai in 2007, Teksalah set out to be the region&apos;s
              most trusted ICT partner — independent enough to recommend the
              right vendor, and complete enough to deliver it end to end. Today
              that means a bench of certified engineers serving 800+ clients
              across the Middle East, led by a founding team with over 18 years
              in enterprise security and infrastructure.
            </p>
          </Reveal>
        </div>

        <div className="md:col-span-6">
          <RevealGroup className="flex flex-col gap-4">
            {PILLARS.map((p, i) => (
              <RevealItem
                key={p.title}
                y={18}
                className={i % 2 === 1 ? "md:ml-10" : ""}
              >
                <div className="shell">
                  <div className="shell-core flex items-center gap-5 p-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-border bg-white/[0.03]">
                      <p.icon className="h-5 w-5 text-signal-2" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-medium tracking-tight">
                        {p.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted">{p.copy}</p>
                    </div>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
