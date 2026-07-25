"use client";

import { Reveal } from "@/components/ui/reveal";
import { Eyebrow, PillButton } from "@/components/ui/button";

export function Cta() {
  return (
    <section id="contact" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="shell">
          <div className="shell-core relative overflow-hidden px-8 py-16 text-center md:px-20 md:py-24">
            <div
              className="glow-orb h-[420px] w-[420px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-signal/20"
              aria-hidden="true"
            />
            <div className="relative">
              <Reveal className="flex justify-center">
                <Eyebrow>Let&apos;s talk</Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mx-auto mt-6 max-w-2xl text-balance font-display text-4xl font-medium tracking-tight md:text-6xl">
                  Ready for a technology advisor, not another vendor?
                </h2>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mx-auto mt-6 max-w-md text-muted">
                  Tell us where your infrastructure is today. We&apos;ll tell
                  you, honestly, what it needs next.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                  <PillButton href="mailto:hello@teksalah.com">
                    hello@teksalah.com
                  </PillButton>
                  <PillButton href="tel:+97140000000" variant="ghost" icon={false}>
                    +971 4 000 0000
                  </PillButton>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
