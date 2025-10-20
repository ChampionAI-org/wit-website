"use client";
import { useState } from "react";
import { Brain, Users, ArrowLeftRight } from "lucide-react";
import AndroidTestModal from "./AndroidTestModal";
import WaitlistModal from "./WaitlistModal";
import { AnimateIn, StaggerIn } from "./Animate";

export default function Hero() {
  const [isAndroidModalOpen, setIsAndroidModalOpen] = useState(false);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Subtle overlay to help text contrast over animated bg */}
      <div className="absolute inset-0 bg-white/30 dark:bg-black/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[700px]">
          {/* Left Column - Content */}
          <AnimateIn trigger="mount" direction="left" className="text-center lg:text-left lg:pr-8 mt-4">
            {/* Loved by users indicator */}
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white mb-4 leading-tight">
              Meet Wit.
            </h1>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white mb-8 leading-tight">
              <span className="bg-gradient-to-r from-wit-green via-wit-blue to-wit-coral bg-clip-text text-transparent">
                Know what to do,
              </span>
              <br />
              when to do it
            </h2>

            {/* Description */}
            <p className="text-xl text-zinc-600 dark:text-zinc-200 mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Your personal assistant for students and parents.
            </p>

            {/* Join Waitlist */}
            <StaggerIn trigger="mount" direction="left" className="flex flex-col sm:flex-row gap-6 max-w-md sm:max-w-none mx-auto lg:mx-0 justify-center lg:justify-start">
              <button
                onClick={() => setIsWaitlistOpen(true)}
                className="flex items-center justify-center sm:justify-start px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-[0_18px_40px_rgba(24,24,27,0.12)] text-lg sm:w-auto max-w-xs sm:max-w-none mx-auto sm:mx-0 bg-zinc-900 text-white hover:bg-black"
              >
                Join Waitlist
              </button>
            </StaggerIn>

            {/* Divider */}
            <AnimateIn trigger="mount" direction="in" className="flex flex-col items-center my-12 max-w-md sm:max-w-none mx-auto">
              <div className="flex items-center justify-center w-full">
                <span className="px-4 text-sm text-zinc-500 dark:text-zinc-400 whitespace-nowrap">
                  For Teachers & Administrators
                </span>
              </div>
              {/* Centered Schedule Demo Button */}
              <div className="mt-4 flex justify-center w-full">
                <a
                  href="https://calendly.com/hi-witagent/demo-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-gradient-to-r from-wit-green to-wit-blue hover:from-wit-green/90 hover:to-wit-blue/90 text-white px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg font-semibold text-lg"
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
          </AnimateIn>

          {/* Right Column - Visual/Mockup */}
          <AnimateIn trigger="mount" direction="right" className="relative lg:pl-8 py-8">
            <div className="relative">
              {/* Mobile mockups - Side by side layout */}
              <StaggerIn trigger="mount" direction="right" className="flex items-center justify-center gap-2 max-w-[180rem] mx-auto">
                {/* Student Agent - Left */}
                <div className="flex flex-col items-center">
                  <img
                    src="/homescreen_newphone.png"
                    alt="Wit AI Student Agent Interface"
                    className="w-80 sm:w-96 md:w-[500px] lg:w-[1000px] xl:w-[2000px] h-auto mix-blend-multiply transform -rotate-3 scale-110 sm:scale-125 lg:scale-150"
                    style={{ backgroundColor: "transparent" }}
                  />
                  {/* Student Agent Description */}
                  <div className="text-center text-zinc-900 dark:text-white mt-12">
                    <Brain className="w-10 h-10 mx-auto mt-4 mb-4 text-wit-green" />
                    <h3 className="text-l font-bold mb-1">Student Agent</h3>
                  </div>
                </div>

                {/* Agent Communication Visual */}
                <div className="flex flex-col items-center justify-center py-1 -mt-64">
                  {/* Communication bubbles */}
                  <div className="relative flex items-center gap-3">
                    {/* Left chat bubble (Student to Parent) */}
                    <div className="relative">
                      <div className="bg-wit-green/20 rounded-lg px-2 py-1 text-xs text-wit-green border border-wit-green/30">
                        <Brain className="w-3 h-3" />
                      </div>
                      <div className="absolute -right-1 top-1/2 w-0 h-0 border-l-4 border-l-wit-green/20 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                    </div>

                    {/* Communication arrows */}
                    <ArrowLeftRight className="w-4 h-4 text-wit-blue animate-pulse" />

                    {/* Right chat bubble (Parent to Student) */}
                    <div className="relative">
                      <div className="absolute -left-1 top-1/2 w-0 h-0 border-r-4 border-r-wit-coral/20 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                      <div className="bg-wit-coral/20 rounded-lg px-2 py-1 text-xs text-wit-coral border border-wit-coral/30">
                        <Users className="w-3 h-3" />
                      </div>
                    </div>
                  </div>

                  <p className="text-[8px] text-zinc-500 dark:text-zinc-300 font-medium mt-1">
                    Agents Work Together
                  </p>
                </div>

                {/* Parent Agent - Right */}
                <div className="flex flex-col items-center">
                  <img
                    src="/classes.png"
                    alt="Wit AI Parent Agent Interface"
                    className="w-80 sm:w-96 md:w-[500px] lg:w-[1000px] xl:w-[2000px] h-auto mix-blend-multiply transform rotate-3 scale-110 sm:scale-125 lg:scale-150"
                    style={{ backgroundColor: "transparent" }}
                  />
                  {/* Parent Agent Description */}
                  <div className="text-center text-zinc-900 dark:text-white mt-12">
                    <Users className="w-10 h-10 mx-auto m-2 mt-4 text-wit-coral" />
                    <h3 className="text-l font-bold mb-1">Parent Agent</h3>
                  </div>
                </div>
              </StaggerIn>
            </div>
          </AnimateIn>
        </div>

        {/* Trust Indicators at bottom */}
        <AnimateIn direction="in" className="mt-8 text-center">
          <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-4">
            Research-backed • Trusted by students and families
          </p>
          <div className="flex items-center justify-center space-x-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-zinc-900 dark:text-white opacity-60">
                500+
              </div>
              <span className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 block">
                Active Students
              </span>
            </div>
            <div className="w-px h-8 bg-gray-400 dark:bg-gray-500 opacity-60"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-zinc-900 dark:text-white opacity-60">2</div>
              <span className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 block">
                Partnered Schools
              </span>
            </div>
            <div className="w-px h-8 bg-gray-400 dark:bg-gray-500 opacity-60"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-zinc-900 dark:text-white opacity-60">
                11%
              </div>
              <span className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 block">
                Study-Proven GPA Increase
              </span>
              <span className="text-xs text-blue-500 dark:text-blue-400 mt-1 block font-medium">
                (Randomized Study)
              </span>
            </div>
          </div>
        </AnimateIn>
      </div>

      {/* Android Test Modal */}
      <AndroidTestModal
        isOpen={isAndroidModalOpen}
        onClose={() => setIsAndroidModalOpen(false)}
      />
      <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </section>
  );
}
