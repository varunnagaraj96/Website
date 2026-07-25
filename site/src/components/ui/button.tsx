"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost";

export function PillButton({
  href,
  children,
  variant = "primary",
  icon = true,
  className,
  onClick,
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  icon?: boolean;
  className?: string;
  onClick?: () => void;
}) {
  const base = cn(
    "group inline-flex items-center gap-3 rounded-pill pl-6 pr-2 py-2 text-sm font-medium",
    "transition-[transform,background,box-shadow] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]",
    "active:scale-[0.98] cursor-pointer",
    variant === "primary" &&
      "bg-foreground text-void hover:shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_18px_40px_-12px_rgba(59,178,246,0.55)]",
    variant === "ghost" &&
      "bg-white/[0.04] text-foreground border border-border-strong hover:bg-white/[0.08]",
    !icon && "pr-6",
    className
  );

  const inner = (
    <>
      <span>{children}</span>
      {icon && (
        <span
          className={cn(
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-pill",
            "transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]",
            "group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105",
            variant === "primary" ? "bg-void/10" : "bg-white/10"
          )}
        >
          <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={base} onClick={onClick}>
        {inner}
      </Link>
    );
  }

  return (
    <button type="button" className={base} onClick={onClick}>
      {inner}
    </button>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-pill border border-border-strong bg-white/[0.03] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-signal-2">
      <span className="h-1.5 w-1.5 rounded-full bg-signal-2 shadow-[0_0_8px_2px_var(--color-signal-2)]" />
      {children}
    </span>
  );
}
