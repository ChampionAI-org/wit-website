import React from 'react';
import { cn } from '../lib/utils';

interface IconBevelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export default function IconBevel({ children, className, ...props }: IconBevelProps) {
  return (
    <div
      className={cn(
        // Beveled icon square styling
        "bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] dark:from-[#18181b] dark:to-[#0f0f13]",
        "ring-1 ring-black/10 dark:ring-white/10",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.9),_inset_0_-1px_0_rgba(2,6,23,0.06),_0_4px_10px_rgba(2,6,23,0.08)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),_inset_0_-1px_0_rgba(0,0,0,0.5),_0_4px_10px_rgba(0,0,0,0.35)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
