"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE_OUT_SOFT = [0.16, 1, 0.3, 1] as const;

export function Reveal({
  children,
  delay = 0,
  className,
  y = 28,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const reduced = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : y, filter: reduced ? "none" : "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: reduced ? 0.01 : 0.8, delay, ease: EASE_OUT_SOFT },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

export function RevealGroup({
  children,
  className,
  stagger = 0.09,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const reduced = useReducedMotion();
  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduced ? 0 : stagger },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={container}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  y = 22,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  const reduced = useReducedMotion();
  const item: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduced ? 0.01 : 0.7, ease: EASE_OUT_SOFT },
    },
  };
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}
