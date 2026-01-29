"use client";

import React from "react";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { AnimateIn } from "./Animate";
import BezelButton from "./BezelButton";
import Card from "./Card";

export default function Pricing({ onGetEarlyAccess }: { onGetEarlyAccess?: () => void }) {
  const handleGetEarlyAccess = () => {
    if (onGetEarlyAccess) return onGetEarlyAccess();
    if (typeof window !== "undefined") {
      window.location.href = "/?autoTrigger=1#pricing";
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <Card className="rounded-3xl p-8 sm:p-10">
        <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
          <div>
            <AnimateIn trigger="mount" direction="in">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs bg-white/70 border border-zinc-200 text-zinc-700 shadow-sm dark:bg-white/10 dark:border-white/10 dark:text-white/80">
                <Sparkles className="w-4 h-4" />
                Pricing (Early Access)
              </span>
            </AnimateIn>

            <AnimateIn trigger="mount" direction="left">
              <h2 className="mt-6 text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
                Contact us for pricing
              </h2>
            </AnimateIn>

            <AnimateIn trigger="mount" direction="left" delay={0.04}>
              <p className="mt-3 text-zinc-700 dark:text-zinc-300 text-base sm:text-lg leading-7 max-w-2xl">
                We’re onboarding agents in early access. Pricing depends on your team size and the tools you want Wit to run.
              </p>
            </AnimateIn>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-zinc-600 dark:text-zinc-400">
              <div className="rounded-2xl bg-white/50 border border-zinc-200/70 px-4 py-3 dark:bg-white/5 dark:border-white/10">
                Pipeline ownership + next steps
              </div>
              <div className="rounded-2xl bg-white/50 border border-zinc-200/70 px-4 py-3 dark:bg-white/5 dark:border-white/10">
                Deadlines, docs, and follow ups
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-zinc-50 to-white border border-zinc-200 p-6 shadow-[0_18px_50px_rgba(2,6,23,0.10)] dark:from-zinc-900/70 dark:to-zinc-900/30 dark:border-white/10 dark:shadow-[0_18px_50px_rgba(0,0,0,0.55)]">
            <div className="text-sm font-semibold text-zinc-900 dark:text-white">
              Get early access
            </div>
            <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-6">
              Tell us what you want Wit to run in your pipeline. We’ll set you up.
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <BezelButton
                href="mailto:hi@witagent.ai?subject=Wit%20pricing%20%2B%20early%20access"
                variant="blue"
                className="w-full justify-center"
              >
                <Mail className="w-4 h-4" /> Contact us
              </BezelButton>
              <BezelButton
                variant="dark"
                className="w-full justify-center"
                onClick={handleGetEarlyAccess}
              >
                Get Early Access <ArrowRight className="w-4 h-4" />
              </BezelButton>
            </div>

            <div className="mt-4 text-xs text-zinc-500 dark:text-zinc-500">
              Limited spots • Rolling invites
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
