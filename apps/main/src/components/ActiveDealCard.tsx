import React from "react";
import { Home, Sparkles } from "lucide-react";
import Card from "./Card";
import IconBevel from "./IconBevel";
import { cn } from "../lib/utils";

const STAGES = ["Lead", "Showing", "Offer", "Escrow", "Close"] as const;

const ACTIVE_STAGE: (typeof STAGES)[number] = "Escrow";

export default function ActiveDealCard({ className }: { className?: string }) {
  const activeIndex = Math.max(0, STAGES.indexOf(ACTIVE_STAGE));

  return (
    <Card className={cn("p-4 rounded-3xl", className)}>
      <div className="flex items-start gap-3">
        <IconBevel className="w-10 h-10 rounded-2xl grid place-items-center shrink-0">
          <Home className="w-5 h-5 text-zinc-900 dark:text-white" />
        </IconBevel>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-3">
            <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Active deal</div>
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-[0.2em] uppercase bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 ring-1 ring-emerald-500/20">
              <Sparkles className="w-3 h-3" />
              Pipeline
            </span>
          </div>
          <div className="mt-0.5 text-sm font-bold text-zinc-900 dark:text-white truncate">
            1234 Elm St, Springfield
          </div>
          <div className="mt-2 flex items-center justify-between gap-3">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-zinc-100 text-zinc-700 ring-1 ring-zinc-200 dark:bg-white/10 dark:text-white/80 dark:ring-white/10">
              Escrow
            </span>
            <span className="text-[11px] text-zinc-600 dark:text-zinc-400 truncate">
              Next: schedule inspection
            </span>
          </div>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-zinc-200/70 dark:border-white/10">
        <div className="flex items-center justify-between text-[10px] text-zinc-500 dark:text-zinc-400">
          <span>Pipeline</span>
          <span className="text-emerald-700/80 dark:text-emerald-300/80">Escrow in progress</span>
        </div>

        {/* Progress timeline */}
        <div className="mt-3">
          <div className="flex items-center w-full" aria-label="Deal pipeline progress">
            {STAGES.map((label, i) => {
              const state = i < activeIndex ? "complete" : i === activeIndex ? "active" : "upcoming";
              const dot =
                state === "complete"
                  ? "bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.14)]"
                  : state === "active"
                  ? "bg-white dark:bg-zinc-950 ring-2 ring-emerald-500 shadow-[0_0_0_6px_rgba(16,185,129,0.12)]"
                  : "bg-zinc-300 dark:bg-zinc-700";

              const labelClass =
                state === "active"
                  ? "text-[9px] font-semibold text-zinc-900 dark:text-white"
                  : state === "complete"
                  ? "text-[9px] text-zinc-700 dark:text-zinc-300"
                  : "text-[9px] text-zinc-500 dark:text-zinc-500";

              const segment = i < activeIndex ? "bg-emerald-500/90" : "bg-zinc-200 dark:bg-zinc-800";

              return (
                <React.Fragment key={label}>
                  <div className="flex flex-col items-center shrink-0">
                    <div className={cn("w-2.5 h-2.5 rounded-full", dot)} aria-current={state === "active" ? "step" : undefined} />
                    <div className={cn("mt-1 whitespace-nowrap", labelClass)}>{label}</div>
                  </div>

                  {i < STAGES.length - 1 ? (
                    <div className={cn("mx-2 h-[2px] flex-1 rounded-full", segment)} aria-hidden />
                  ) : null}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </Card>
  );
}
