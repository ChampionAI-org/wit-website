"use client";
import React, { useState } from "react";
import { Check, Crown } from "lucide-react";
import { motion } from "framer-motion";
import { AnimateIn } from "./Animate";
import Card from "./Card";
import BezelButton from "./BezelButton";

const FEATURES_COMMON = [
  "Lead follow ups",
  "Pipeline next steps",
  "Escrow deadlines",
  "Email + calendar sync",
];

function Price({ amount, period, note, was }: { amount: string; period: string; note?: string; was?: string }) {
  return (
    <div className="flex items-end gap-2">
      <div className="text-4xl font-extrabold tracking-tight">${amount}</div>
      <div className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">{period}</div>
      {was ? (
        <div className="mb-1 text-xs text-zinc-500 line-through">${was}</div>
      ) : null}
      {note ? (
        <span className="ml-2 mb-1 text-xs px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-600 ring-1 ring-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:ring-zinc-700">
          {note}
        </span>
      ) : null}
    </div>
  );
}

function Feature({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
      <span>{children}</span>
    </li>
  );
}

function PlanCardSingle({
  title,
  label,
  highlight,
  ctaHref,
  features,
  price,
  sublabel,
  topRightBadge,
}: {
  title: string;
  label: string; // Monthly or Yearly
  highlight?: boolean;
  ctaHref: string;
  features: string[];
  sublabel?: string;
  topRightBadge?: string;
  price: { amount: string; period: string; was?: string; discounted?: boolean; note?: string };
}) {
  return (
    <Card
      className={`relative pt-6 p-6 rounded-3xl ${
        highlight ?
          "ring-1 ring-zinc-900/10 dark:ring-white/20 shadow-xl" :
          ""
      }`}
    >
      <div className="flex items-center justify-between mb-1">
        <h3 className="font-semibold text-zinc-900 dark:text-white">{title}</h3>
        {(highlight || topRightBadge) && (
          <span className="text-xs px-2 py-1 rounded-full bg-zinc-100 text-zinc-700 ring-1 ring-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:ring-zinc-700">
            {topRightBadge ?? "Popular"}
          </span>
        )}
      </div>
      {sublabel ? (
        <div className="mb-4 text-xs text-zinc-600 dark:text-zinc-400">{sublabel}</div>
      ) : (
        <div className="h-4" />
      )}

      <div>
        <div className="flex items-center gap-2 mb-1">
          <div className="text-xs text-zinc-600 dark:text-zinc-400">{label}</div>
          {label === "Yearly" && (
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-zinc-100 text-zinc-600 ring-1 ring-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:ring-zinc-700">
              Save 20%
            </span>
          )}
        </div>
        <Price amount={price.amount} was={price.was} period={price.period} note={price.note} />
        {price.discounted && (
          <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-500">Discount applied</div>
        )}
      </div>

      <div className="mt-6">
        <BezelButton href={ctaHref} variant={highlight ? "dark" : "blue"}>
          <Crown className="w-4 h-4 mr-2" /> Get Started
        </BezelButton>
      </div>
      <div className="my-6" />
      <ul className="space-y-3">
        {features.map((f) => (
          <Feature key={f}>{f}</Feature>
        ))}
      </ul>
    </Card>
  );
}

export default function Pricing() {
  type Audience = "agent" | "team";
  const [audience, setAudience] = useState<Audience>("agent");

  const audienceCopy: Record<Audience, { title: string; sublabel?: string; monthly: { amount: string; period: string; was?: string; discounted?: boolean; note?: string }; yearly: { amount: string; period: string; was?: string; discounted?: boolean; note?: string } }>
    = {
    agent: {
      title: "Agent",
      sublabel: "For solo agents",
      monthly: { amount: "11.99", period: "per month", was: "20", discounted: true },
      yearly: { amount: "120", period: "per year", was: "200", discounted: true, note: "7-day free trial" },
    },
    team: {
      title: "Team",
      sublabel: "For teams and brokerages",
      monthly: { amount: "11.99", period: "per month", was: "20", discounted: true },
      yearly: { amount: "120", period: "per year", was: "240", discounted: true, note: "7-day free trial" },
    },
  };

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl p-8 sm:p-10 backdrop-blur-2xl border bg-white/60 border-zinc-200 shadow-[0_8px_32px_rgba(2,6,23,0.12),_0_2px_8px_rgba(2,6,23,0.08)] dark:bg-zinc-900/70 dark:border-zinc-700 dark:shadow-[0_8px_32px_rgba(0,0,0,0.55),_0_2px_8px_rgba(0,0,0,0.45)]">
        <div className="text-center">
          <AnimateIn trigger="mount" direction="in">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs bg-white/70 border border-zinc-200 text-zinc-700 shadow-sm dark:bg-white/10 dark:border-white/10 dark:text-white/80">
              Transparent Pricing, No Surprises
            </span>
          </AnimateIn>
          <AnimateIn trigger="mount" direction="left">
            <h2 className="mt-6 text-3xl sm:text-4xl font-extrabold tracking-tight">
              Plans for Agents and Teams
            </h2>
          </AnimateIn>
          <AnimateIn trigger="mount" direction="left" delay={0.04}>
            <p className="mt-3 text-zinc-700 dark:text-zinc-300">Pick a plan that fits your business.</p>
          </AnimateIn>

          {/* Audience Toggle: Agent vs Team */}
          <div className="mt-6 flex justify-center">
            <div className="relative inline-flex items-center rounded-xl p-1 bg-white/70 border border-zinc-200 backdrop-blur-md shadow-sm dark:bg-white/10 dark:border-white/10 w-full max-w-[420px] overflow-hidden">
              <button
                onClick={() => setAudience("agent")}
                className={`relative z-10 flex-1 px-4 py-1.5 text-sm rounded-lg transition-colors text-center select-none ${audience === "agent" ? "text-zinc-900 dark:text-white" : "text-zinc-600 dark:text-zinc-400"}`}
              >
                Agent
              </button>
              <button
                onClick={() => setAudience("team")}
                className={`relative z-10 flex-1 px-4 py-1.5 text-sm rounded-lg transition-colors text-center select-none ${audience === "team" ? "text-zinc-900 dark:text-white" : "text-zinc-600 dark:text-zinc-400"}`}
              >
                Team
              </button>
              <motion.span
                layout
                className="absolute top-1 bottom-1 rounded-lg bg-white shadow-sm ring-1 ring-black/5 dark:bg-white/20 dark:ring-white/10"
                style={{ width: "calc(50% - 8px)" }}
                animate={{ left: audience === "agent" ? "4px" : "calc(50% + 4px)" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <PlanCardSingle
            title={audienceCopy[audience].title}
            label="Monthly"
            highlight={false}
            sublabel={audienceCopy[audience].sublabel}
            ctaHref="#get-started"
            features={FEATURES_COMMON}
            price={audienceCopy[audience].monthly}
            topRightBadge={undefined}
          />
          <PlanCardSingle
            title={audienceCopy[audience].title}
            label="Yearly"
            highlight={true}
            sublabel={audienceCopy[audience].sublabel}
            ctaHref="#get-started"
            features={FEATURES_COMMON}
            price={audienceCopy[audience].yearly}
            topRightBadge="Popular"
          />
        </motion.div>
      </div>
    </section>
  );
}
