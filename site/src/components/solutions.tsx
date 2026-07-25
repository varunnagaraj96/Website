"use client";

import {
  ShieldCheck,
  CloudCog,
  Headset,
  Database,
  Code2,
  Radar,
  type LucideIcon,
} from "lucide-react";
import { Eyebrow } from "@/components/ui/button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type Solution = {
  icon: LucideIcon;
  title: string;
  copy: string;
  span: string;
};

const SOLUTIONS: Solution[] = [
  {
    icon: ShieldCheck,
    title: "Information Security",
    copy: "Threat detection, SOC operations and posture management engineered around the frameworks your regulators actually check.",
    span: "md:col-span-7 md:row-span-2",
  },
  {
    icon: CloudCog,
    title: "Cloud & Hybrid Infrastructure",
    copy: "Migration, resilience and cost governance across public, private and hybrid estates.",
    span: "md:col-span-5",
  },
  {
    icon: Database,
    title: "Enterprise Data Management",
    copy: "Backup, recovery and data governance that survives audits and outages alike.",
    span: "md:col-span-5",
  },
  {
    icon: Headset,
    title: "Managed Services",
    copy: "24/7 monitored operations with response times written into the contract, not the pitch deck.",
    span: "md:col-span-4",
  },
  {
    icon: Code2,
    title: "Software Solutions",
    copy: "Custom and platform engineering for process automation at enterprise scale.",
    span: "md:col-span-4",
  },
  {
    icon: Radar,
    title: "Digital Risk Protection",
    copy: "Continuous exposure monitoring across brand, supply chain and the open web.",
    span: "md:col-span-4",
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <Eyebrow>Solutions</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 max-w-2xl text-balance font-display text-4xl font-medium tracking-tight md:text-5xl">
            Six disciplines. One accountable partner.
          </h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-5 max-w-xl text-muted">
            Every engagement draws on the same bench of certified engineers —
            no handoffs between vendors, no gaps between disciplines.
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-12">
          {SOLUTIONS.map((s) => (
            <RevealItem key={s.title} className={cn("shell", s.span)}>
              <div className="shell-core flex h-full flex-col justify-between p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-white/[0.03]">
                  <s.icon className="h-5 w-5 text-signal-2" strokeWidth={1.5} />
                </div>
                <div className="mt-8">
                  <h3 className="font-display text-xl font-medium tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{s.copy}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
