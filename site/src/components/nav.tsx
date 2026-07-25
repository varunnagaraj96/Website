"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PillButton } from "@/components/ui/button";

const LINKS = [
  { label: "Solutions", href: "#solutions" },
  { label: "Approach", href: "#approach" },
  { label: "Results", href: "#results" },
  { label: "About", href: "#about" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-6 z-50 flex justify-center px-4">
        <nav
          className={`glass-nav flex w-full max-w-3xl items-center justify-between rounded-pill px-3 py-2 transition-shadow duration-500 ${
            scrolled ? "shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]" : ""
          }`}
        >
          <Link
            href="#top"
            className="flex items-center gap-2 rounded-pill px-3 py-1.5 font-display text-sm font-semibold tracking-tight"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-signal to-signal-2 text-[11px] font-bold text-void">
              T
            </span>
            Teksalah
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-pill px-4 py-2 text-sm text-muted transition-colors duration-200 hover:text-foreground hover:bg-white/5 cursor-pointer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <PillButton href="#contact" className="text-xs py-1.5 pl-5">
              Talk to us
            </PillButton>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative flex h-11 w-11 items-center justify-center rounded-pill md:hidden cursor-pointer"
          >
            <span
              className={`absolute h-[1.5px] w-5 bg-foreground transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                open ? "rotate-45" : "-translate-y-[5px]"
              }`}
            />
            <span
              className={`absolute h-[1.5px] w-5 bg-foreground transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                open ? "-rotate-45" : "translate-y-[5px]"
              }`}
            />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-40 bg-void/90 backdrop-blur-3xl md:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-2">
              {LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 48 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + i * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="font-display text-4xl font-medium tracking-tight text-foreground"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 48 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8"
              >
                <PillButton href="#contact" onClick={() => setOpen(false)}>
                  Talk to us
                </PillButton>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
