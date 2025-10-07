"use client";

import React from "react";
import Link from "next/link";

type BezelVariant = "neutral" | "dark" | "blue" | "plain";

export interface BezelButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: BezelVariant;
  className?: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
}

function variantClasses(variant: BezelVariant): string {
  switch (variant) {
    case "plain":
      // No gradients, borders, or shadows – consumer supplies classes.
      return "";
    case "dark":
      return [
        "bg-gradient-to-b from-neutral-800 to-black text-white",
        "border border-neutral-700",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-1px_0_rgba(0,0,0,0.35),0_8px_18px_rgba(0,0,0,0.35)]",
        "hover:from-neutral-700 hover:to-neutral-950",
      ].join(" ");
    case "blue":
      return [
        "bg-gradient-to-b from-blue-500 to-blue-700 text-white",
        "border border-blue-600/70",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.18),inset_0_-1px_0_rgba(0,0,0,0.25),0_8px_18px_rgba(0,102,255,0.35)]",
        "hover:from-blue-400 hover:to-blue-800",
      ].join(" ");
    case "neutral":
    default:
      return [
        "bg-gradient-to-b from-zinc-50 to-zinc-200 text-zinc-900 dark:from-white dark:to-zinc-200 dark:text-zinc-900",
        "border border-zinc-300 dark:border-zinc-200",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.6),inset_0_-1px_0_rgba(0,0,0,0.08),0_10px_20px_rgba(0,0,0,0.18)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.7),inset_0_-1px_0_rgba(0,0,0,0.05),0_12px_20px_rgba(15,23,42,0.12)]",
        "hover:from-white hover:to-zinc-300 dark:hover:from-zinc-100 dark:hover:to-zinc-300",
      ].join(" ");
  }
}

const baseClasses = [
  "relative inline-flex items-center justify-center gap-2",
  "rounded-2xl px-5 py-3 font-semibold",
  "transition-all duration-200",
  "active:translate-y-[1px]",
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
].join(" ");

const sheenLayer =
  "after:content-[''] after:absolute after:inset-px after:rounded-[inherit] after:pointer-events-none after:bg-gradient-to-b after:from-white/60 after:to-white/0 after:opacity-80 dark:after:from-white/15";

export default function BezelButton({
  href,
  variant = "neutral",
  className = "",
  children,
  target,
  rel,
  ...buttonProps
}: BezelButtonProps) {
  const withSheen = variant === "plain" ? "" : sheenLayer;
  const classes = [baseClasses, variantClasses(variant), withSheen, className].join(" ");

  if (href) {
    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}


