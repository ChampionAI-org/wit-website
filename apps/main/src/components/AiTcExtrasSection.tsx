"use client";

import { Calendar, FileText, Home, Layout, MapPin, Shield, Zap } from "lucide-react";
import { AnimateIn, StaggerIn } from "./Animate";
import Card from "./Card";
import IconBevel from "./IconBevel";

const EXTRAS = [
  {
    icon: FileText,
    title: "Offer + email thread summaries",
    description: "Turn messy threads into clean, forwardable recaps for clients and lenders.",
  },
  {
    icon: Shield,
    title: "Escrow guardrails",
    description: "Surface the next deadline and highlight what could slip before it does.",
  },
  {
    icon: Calendar,
    title: "Smart scheduling prompts",
    description: "Prep showings, inspections, and follow-ups with the right timing baked in.",
  },
  {
    icon: Zap,
    title: "Follow-up autopilot",
    description: "Drafts and nudges that keep the pipeline moving without the mental load.",
  },
  {
    icon: MapPin,
    title: "Property-first organization",
    description: "Keep notes, tasks, and next steps attached to the address, not scattered.",
  },
  {
    icon: Layout,
    title: "Daily deal brief",
    description: "A clear list of what matters today across every active property.",
  },
];

export default function AiTcExtrasSection() {
  return (
    <section id="extras" className="relative py-24 bg-white/40 dark:bg-white/[0.02] snap-start snap-always">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateIn direction="in">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs bg-white/70 border border-zinc-200 text-zinc-700 shadow-sm dark:bg-white/10 dark:border-white/10 dark:text-white/80">
              <Home className="w-4 h-4" />
              Extra Stuff
            </span>
          </AnimateIn>
          <AnimateIn direction="left">
            <h2 className="mt-6 text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              Bonus superpowers for pipeline ownership
            </h2>
          </AnimateIn>
          <AnimateIn direction="left" delay={0.04}>
            <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400">
              Beyond follow ups and deadlines, Wit handles the small work that keeps deals moving.
            </p>
          </AnimateIn>
        </div>

        <StaggerIn
          direction="up"
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch [&>*]:h-full"
          stagger={0.12}
        >
          {EXTRAS.map((x) => (
            <Card key={x.title} className="p-6 rounded-3xl h-full min-h-[168px]">
              <div className="flex items-start gap-4 h-full">
                <IconBevel className="w-12 h-12 rounded-2xl grid place-items-center shrink-0">
                  <x.icon className="w-5 h-5 text-zinc-800 dark:text-white" />
                </IconBevel>
                <div className="flex flex-col h-full">
                  <div className="text-lg font-semibold text-zinc-900 dark:text-white">{x.title}</div>
                  <div className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400 overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
                    {x.description}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </StaggerIn>
      </div>
    </section>
  );
}
