import React from 'react';
import { cn } from '../lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        // Light mode styles
        "bg-white/70 backdrop-blur-xl border border-zinc-200 rounded-2xl",
        "shadow-[0_8px_32px_rgba(2,6,23,0.12),_0_2px_8px_rgba(2,6,23,0.08)]",
        // Dark mode styles
        "dark:bg-zinc-900/80 dark:border-zinc-700",
        "dark:shadow-[0_8px_32px_rgba(0,0,0,0.55),_0_2px_8px_rgba(0,0,0,0.45)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
