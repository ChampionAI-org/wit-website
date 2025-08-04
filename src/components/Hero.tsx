import React, { useState } from "react";
import { Brain, Users, ArrowLeftRight, Zap } from "lucide-react";
import AndroidTestModal from "./AndroidTestModal";

export default function Hero() {
  const [isAndroidModalOpen, setIsAndroidModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen bg-wit-hero-gradient overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-wit-green/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-wit-blue/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left lg:pr-8">
            {/* Loved by users indicator */}
            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Meet Wit.
            </h1>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
              <span className="bg-gradient-to-r from-wit-green via-wit-blue to-wit-coral bg-clip-text text-transparent">
                Know what to do,
              </span>
              <br />
              when to do it
            </h2>

            {/* Description */}
            <p className="text-xl text-gray-200 mb-12 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Meet Wit AI, the AI-powered assistant for students and families.
              Get personalized productivity coaching, assignment tracking, and
              academic insights.
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md sm:max-w-none mx-auto lg:mx-0 justify-center lg:justify-start">
              <a
                href="https://apps.apple.com/us/app/wit-ai/id6748923692"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center sm:justify-start bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg w-full sm:w-auto max-w-xs sm:max-w-none"
              >
                <svg
                  className="w-8 h-8 mr-3"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-300">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </a>
              <button
                onClick={() => setIsAndroidModalOpen(true)}
                className="flex items-center justify-center sm:justify-start bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg w-full sm:w-auto max-w-xs sm:max-w-none"
              >
                <svg
                  className="w-8 h-8 mr-3"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-300">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </button>
            </div>

            {/* Divider */}
            <div className="flex flex-col items-center my-8 max-w-md sm:max-w-none mx-auto">
              <div className="flex items-center w-full">
                <div className="flex-1 h-px bg-gray-600"></div>
                <span className="px-4 text-sm text-gray-400 whitespace-nowrap">
                  For Teachers & Administrators
                </span>
                <div className="flex-1 h-px bg-gray-600"></div>
              </div>
              {/* Centered Schedule Demo Button */}
              <div className="mt-4 flex justify-center w-full">
                <a
                  href="https://calendly.com/hi-witagent/30min"
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
            </div>
          </div>

          {/* Right Column - Visual/Mockup */}
          <div className="relative lg:pl-8 py-20">
            <div className="relative">
              {/* Mobile mockups - Side by side layout */}
              <div className="flex items-center justify-center gap-2 max-w-[180rem] mx-auto">
                {/* Student Agent - Left */}
                <div className="flex flex-col items-center">
                  <img
                    src="/homescreen_newphone.png"
                    alt="Wit AI Student Agent Interface"
                    className="w-80 sm:w-96 md:w-[500px] lg:w-[1000px] xl:w-[2000px] h-auto mix-blend-multiply transform -rotate-3 scale-110 sm:scale-125 lg:scale-150"
                    style={{ backgroundColor: "transparent" }}
                  />
                  {/* Student Agent Description */}
                  <div className="text-center text-white mt-12">
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

                  <p className="text-[8px] text-gray-300 font-medium mt-1">
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
                  <div className="text-center text-white mt-12">
                    <Users className="w-10 h-10 mx-auto m-2 mt-4 text-wit-coral" />
                    <h3 className="text-l font-bold mb-1">Parent Agent</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators at bottom */}
        <div className="mt-20 text-center">
          <p className="text-gray-400 text-sm mb-4">
            Research-backed • Trusted by students and families
          </p>
          <div className="flex items-center justify-center space-x-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-white opacity-60">
                500+
              </div>
              <span className="text-xs text-gray-400 mt-2 block">
                Active Students
              </span>
            </div>
            <div className="w-px h-8 bg-gray-500 opacity-60"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white opacity-60">2</div>
              <span className="text-xs text-gray-400 mt-2 block">
                Partnered Schools
              </span>
            </div>
            <div className="w-px h-8 bg-gray-500 opacity-60"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white opacity-60">
                11%
              </div>
              <span className="text-xs text-gray-400 mt-2 block">
                Study-Proven GPA Increase
              </span>
              <span className="text-xs text-blue-400 mt-1 block font-medium">
                (Randomized Study)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Android Test Modal */}
      <AndroidTestModal
        isOpen={isAndroidModalOpen}
        onClose={() => setIsAndroidModalOpen(false)}
      />
    </section>
  );
}
