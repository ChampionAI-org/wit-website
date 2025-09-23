"use client";
import React from "react";
import Link from "next/link";

interface StoreIconButtonProps {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
  className?: string;
}

export default function StoreIconButton({ href, ariaLabel, children, className }: StoreIconButtonProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={[
        // Size and shape
        "flex items-center justify-center w-11 h-11 rounded-lg",
        // Light mode: stronger bezel visibility
        "bg-gradient-to-br from-white to-slate-100 text-black",
        "border border-black/10 ring-1 ring-black/10",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.7),_0_6px_14px_rgba(0,0,0,0.15)]",
        // Dark mode overrides
        "dark:from-white/20 dark:to-white/10 dark:text-white",
        "dark:border-white/25 dark:ring-white/20",
        "dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.45),_0_4px_12px_rgba(0,0,0,0.35)]",
        // Interaction
        "backdrop-blur transition-all duration-200 hover:scale-105",
        className || "",
      ].join(" ")}
    >
      {children}
    </Link>
  );
}


