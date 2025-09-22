import React from "react";
import {
  Target,
  TrendingUp,
  Network,
  BookOpen,
  Calendar,
  MessageSquare,
} from "lucide-react";
import { AnimateIn, StaggerIn } from "./Animate";

export default function ValueProps() {
  const features = [
    {
      icon: Target,
      title: "Stay Organized",
      description:
        "Never miss an assignment, deadline, or important task. Your AI agent keeps everything in perfect order.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: TrendingUp,
      title: "Build Executive Skills",
      description:
        "Develop time management, planning, and organizational skills that last a lifetime.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Network,
      title: "Connected Support",
      description:
        "Parents, teachers, and mentors work together through interconnected AI agents.",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const capabilities = [
    {
      icon: BookOpen,
      title: "Assignment Tracking",
      description: "Automatically sync with your LMS or manually add tasks",
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "AI-powered time blocking and priority management",
    },
    {
      icon: MessageSquare,
      title: "Family Communication",
      description: "Seamless updates between student and parent agents",
    },
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-[#0b0b0b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Value Props */}
        <div className="text-center mb-20">
          <AnimateIn direction="left">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
              Three pillars of student success
            </h2>
          </AnimateIn>
          <AnimateIn direction="left" delay={0.05}>
            <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
              Our AI agents work together to create a comprehensive support system
              that grows with your student's needs.
            </p>
          </AnimateIn>
        </div>

        <StaggerIn direction="left" className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="group relative h-full">
              <div className="bg-white dark:bg-zinc-900/80 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-zinc-700/70 h-full flex flex-col">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-zinc-600 dark:text-slate-400 leading-relaxed flex-grow">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </StaggerIn>

        {/* Capabilities Grid */}
        <AnimateIn direction="in">
          <div className="bg-white dark:bg-zinc-900/70 rounded-3xl p-12 shadow-xl border border-gray-100 dark:border-zinc-700/70">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
                Powerful capabilities, simple experience
              </h3>
              <p className="text-lg text-zinc-600 dark:text-slate-400">
                Everything you need to stay on top of your academic life
              </p>
            </div>

            <StaggerIn direction="left" className="grid md:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <capability.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                    {capability.title}
                  </h4>
                  <p className="text-zinc-600 dark:text-slate-400">{capability.description}</p>
                </div>
              ))}
            </StaggerIn>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
