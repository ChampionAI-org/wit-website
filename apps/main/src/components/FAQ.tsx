"use client";
import React, { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Mail } from "lucide-react";
import { AnimateIn, StaggerIn } from "./Animate";
import Card from "./Card";
import IconBevel from "./IconBevel";

export type FAQItem = {
  q: string;
  a: string;
};

const DEFAULT_ITEMS: FAQItem[] = [
  {
    q: "What is Wit?",
    a: "Wit is your AI partner for turning big goals into concrete projects and daily actions. It helps you plan, act, learn, and iterate—until you win.",
  },
  {
    q: "What are the core pillars of Wit?",
    a: "Wit is built on five core pillars: Think, Do, Learn, Iterate, and Endure. These pillars guide you through the process of achieving your goals.",
  },
  {
    q: "What are the core real features of Wit?",
    a: "Organize your goals, projects, and tasks with ease. Proactively receive suggestions and insights. Iterate and refine your approach."
  },
  {
    q: "Do I need coding skills to use Wit?",
    a: "No. Wit is built for everyone—students, parents, entrepreneurs, and operators. If you can write a goal, Wit can help you get it done.",
  },
  {
    q: "Can I customize Wit to fit my workflow?",
    a: "Yes. Create your own projects, routines. Wit adapts to your style while offering smart suggestions along the way.",
  },
  {
    q: "Does Wit work on mobile and web?",
    a: "Absolutely. Wit is mobile‑first with iOS and Android apps, and a lightweight web experience for planning and review.",
  },
];

function useDisclosure(defaultOpen = false) {
  const [open, setOpen] = useState(defaultOpen);
  const toggle = () => setOpen((v) => !v);
  return { open, toggle };
}

function FAQRow({ q, a, defaultOpen = false }: FAQItem & { defaultOpen?: boolean }) {
  const { open, toggle } = useDisclosure(defaultOpen);
  const id = useId();

  return (
    <Card className="rounded-xl">{/* Glassy row */}
      <button
        type="button"
        aria-expanded={open}
        aria-controls={`faq-${id}`}
        onClick={toggle}
        className="w-full flex items-center justify-between gap-4 px-4 py-3 text-left"
      >
        <div className="flex items-center gap-3 min-w-0">
          <IconBevel className="w-8 h-8 rounded-lg grid place-items-center">
            <div className="text-zinc-600 dark:text-white/70">
              <span className="sr-only">toggle</span>
              {/* decorative dot */}
              <div className="w-2 h-2 rounded-full bg-zinc-500/70 dark:bg-white/90 ring-1 ring-zinc-400/50 dark:ring-white/30 shadow-[0_0_6px_rgba(255,255,255,0.35)]" />
            </div>
          </IconBevel>
          <span className="font-medium text-zinc-900 dark:text-zinc-50 truncate">{q}</span>
        </div>

        <motion.span
          initial={false}
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="shrink-0 text-zinc-500 dark:text-zinc-400"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`faq-${id}`}
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden px-4"
          >
            <div className="pb-4 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}

export default function FAQ({ items = DEFAULT_ITEMS }: { items?: FAQItem[] }) {
  return (
    <section
      aria-labelledby="faq-heading"
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      {/* Big frosted wrapper */}
      <div className="rounded-3xl p-8 sm:p-10 backdrop-blur-2xl border
      shadow-[0_8px_32px_rgba(2,6,23,0.12),_0_2px_8px_rgba(2,6,23,0.08)]
      bg-white/60 border-zinc-200
      dark:bg-zinc-900/70 dark:border-zinc-700
      dark:shadow-[0_8px_32px_rgba(0,0,0,0.55),_0_2px_8px_rgba(0,0,0,0.45)]">
        <div className="text-center">
          <AnimateIn trigger="mount" direction="in">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs
              bg-white/70 border border-zinc-200 text-zinc-700 shadow-sm
              dark:bg-white/10 dark:border-white/10 dark:text-white/80">
              Your Queries, Simplified
            </span>
          </AnimateIn>
          <AnimateIn trigger="mount" direction="left">
            <h2 id="faq-heading" className="mt-6 text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              Questions? Answers!
            </h2>
          </AnimateIn>
          <AnimateIn trigger="mount" direction="left" delay={0.04}>
            <p className="mt-3 text-zinc-700 dark:text-zinc-300">
              Find quick answers to the most common questions about Wit.
            </p>
          </AnimateIn>
        </div>

        <StaggerIn direction="right" className="mt-8 space-y-3">
          {items.map((it, idx) => (
            <FAQRow key={it.q} {...it} defaultOpen={idx === 0} />
          ))}
        </StaggerIn>

        <AnimateIn direction="in" delay={0.06}>
          <div className="mt-8 flex items-center justify-center gap-3 text-sm text-zinc-600 dark:text-zinc-300">
            <Mail className="w-4 h-4" />
            <span>
              Feel free to reach us for any enquiries: <a className="underline-offset-2 hover:underline" href="mailto:hi@witagent.ai">hi@witagent.ai</a>
            </span>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
