"use client";

import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";

const STATS = [
  { value: "1,800+", label: "Projects delivered" },
  { value: "800+", label: "Enterprise clients" },
  { value: "98%", label: "Client retention" },
  { value: "18+", label: "Years in ICT" },
];

const PARTNERS = [
  "Cisco",
  "Palo Alto Networks",
  "Fortinet",
  "Microsoft",
  "VMware",
  "NetApp",
  "Veeam",
  "Citrix",
  "Check Point",
  "Qualys",
  "Mimecast",
  "Rubrik",
];

export function Stats() {
  return (
    <section id="results" className="relative border-y border-border py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <RevealGroup className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
          {STATS.map((s) => (
            <RevealItem key={s.label}>
              <p className="font-display text-4xl font-medium tracking-tight text-foreground md:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-muted">{s.label}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1}>
          <p className="mt-20 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted-2">
            Certified across the vendor stack that matters
          </p>
        </Reveal>

        <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="animate-marquee flex w-max gap-14 py-2">
            {[...PARTNERS, ...PARTNERS].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="whitespace-nowrap font-display text-xl font-medium tracking-tight text-muted-2 transition-colors hover:text-foreground"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
