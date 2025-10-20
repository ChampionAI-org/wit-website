"use client";
import React, { useState } from "react";
import { Building, Users, CheckCircle, Star, TrendingUp } from "lucide-react";
import { AnimateIn, StaggerIn } from "./Animate";
import WaitlistModal from "./WaitlistModal";

export default function TargetAudience() {
  const [activeView, setActiveView] = useState("families");
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const views = {
    families: {
      icon: Users,
      title: "For Families & Students",
      subtitle: "Empower your student's academic journey",
      benefits: [
        {
          icon: CheckCircle,
          title: "Immediate Impact",
          description:
            "See improvements in organization and time management within weeks",
        },
        {
          icon: Star,
          title: "Skill Building",
          description:
            "Develop executive functioning skills that benefit students for life",
        },
        {
          icon: TrendingUp,
          title: "Better Outcomes",
          description:
            "Higher grades, reduced stress, and increased confidence",
        },
      ],
      // testimonial: {
      //   quote: "It is your AI personal assistant. My grades.",
      //   author: "Junior High Student",
      //   rating: 5
      // }
    },
    administrators: {
      icon: Building,
      title: "For Teachers & School Administrators",
      subtitle: "Support your students and families at scale",
      benefits: [
        {
          icon: CheckCircle,
          title: "Reduced Support Load",
          description: "Fewer parent calls about missed assignments",
        },
        {
          icon: TrendingUp,
          title: "Teacher Agents",
          description:
            "Your AI agent tells you which students are struggling and exactly how to help them succeed, support, challenge, or redirect.",
        },
        {
          icon: Star,
          title: "Improved Outcomes",
          description:
            "Students develop better organizational habits and academic performance",
        },
      ],
      // testimonial: {
      //   quote: "Wit AI has transformed how our families stay organized. Grades have improved. Missing assignments have decreased. This is the AI part of education.",
      //   author: "Dr. Dan Buikema, Assistant Principal",
      //   rating: 5
      // }
    },
  };

  const currentView = views[activeView as keyof typeof views];

  return (
    <section className="py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:bg-[#0b0b0b] dark:from-[#0b0b0b] dark:via-[#0b0b0b] dark:to-[#0b0b0b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* View Toggle */}
        <div className="flex justify-center mb-16">
          <AnimateIn direction="in">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-200 dark:bg-zinc-900/70 dark:border-zinc-700">
            {Object.entries(views).map(([key, view]) => (
              <button
                key={key}
                onClick={() => setActiveView(key)}
                className={`flex items-center space-x-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeView === key
                    ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-zinc-800/60"
                }`}
              >
                <view.icon className="w-5 h-5" />
                <span>
                  {key === "families"
                    ? "Families & Students"
                    : "School Administrators"}
                </span>
              </button>
            ))}
          </div>
          </AnimateIn>
        </div>

        {/* Content */}
        <div className="text-center mb-16">
          <AnimateIn direction="in">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <currentView.icon className="w-8 h-8 text-white" />
              </div>
            </div>
          </AnimateIn>
          <AnimateIn direction="left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {currentView.title}
            </h2>
          </AnimateIn>
          <AnimateIn direction="left" delay={0.05}>
            <p className="text-xl text-gray-600 dark:text-slate-300 max-w-3xl mx-auto">
              {currentView.subtitle}
            </p>
          </AnimateIn>
        </div>

        {/* Benefits Grid */}
        <StaggerIn direction="left" className="grid md:grid-cols-3 gap-8 mb-16">
          {currentView.benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-900/80 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-zinc-700/70"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-slate-300 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </StaggerIn>

        {/* Testimonial */}
        {/* <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              {[...Array(currentView.testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl text-gray-700 font-medium mb-8 leading-relaxed">
              "{currentView.testimonial.quote}"
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">{currentView.testimonial.author}</div>
              </div>
            </div>
          </div>
        </div> */}

        {/* CTA Section */}
        <div className="text-center mt-16">
          {activeView === "families" ? (
            <StaggerIn direction="left" className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsWaitlistOpen(true)}
                className="flex items-center justify-center bg-zinc-900 hover:bg-black text-white px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Join Waitlist
              </button>
            </StaggerIn>
          ) : (
            <AnimateIn direction="in">
              <div className="flex justify-center">
                <a
                  href="https://calendly.com/hi-witagent/demo-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-gradient-to-r from-wit-green to-wit-blue hover:from-wit-green/90 hover:to-wit-blue/90 text-white px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg font-semibold"
                >
                  <svg
                    className="w-6 h-6 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Schedule Demo
                </a>
              </div>
            </AnimateIn>
          )}
        </div>
        <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
      </div>
    </section>
  );
}
