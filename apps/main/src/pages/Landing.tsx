"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, CheckCircle2, Brain, Search, Zap, 
  Atom, Calendar, MapPin, Music, Hash, Filter, Shield, Settings, 
  FileText, Layout, Github
} from "lucide-react";
import BezelButton from "../components/BezelButton";
import HeroBackdrop from "../components/HeroBackdrop";
import { AnimateIn, StaggerIn } from "../components/Animate";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import DiscordCTA from "../components/DiscordCTA";
import UniversityBanner from "../components/UniversityBanner";
import WaitlistModal from "../components/WaitlistModal";
import RotatingHeroText from "../components/RotatingHeroText";


export default function Landing() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  
  // Integration Graph Refs & State
  const containerRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);
  const childRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [svgSize, setSvgSize] = useState({ width: 0, height: 0 });
  const [paths, setPaths] = useState<string[]>([]);

  // Calculate paths on mount/resize
  useEffect(() => {
    const updateLayout = () => {
      if (!containerRef.current || !parentRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const parentRect = parentRef.current.getBoundingClientRect();

      // Update SVG size to match container
      setSvgSize({ width: containerRect.width, height: containerRect.height });

      // Parent connection point (bottom center) relative to container
      const pX = parentRect.left + parentRect.width / 2 - containerRect.left;
      const pY = parentRect.bottom - containerRect.top;

      const newPaths = childRefs.current.map((child) => {
        if (!child) return "";
        const childRect = child.getBoundingClientRect();
        
        // Child connection point (top center) relative to container
        const cX = childRect.left + childRect.width / 2 - containerRect.left;
        const cY = childRect.top - containerRect.top;

        // Control points for a smooth S-curve
        const midY = (pY + cY) / 2;

        // Cubic Bezier: M start C cp1, cp2, end
        return `M ${pX} ${pY} C ${pX} ${midY}, ${cX} ${midY}, ${cX} ${cY}`;
      });

      setPaths(newPaths);
    };

    // Initial calculation
    updateLayout();
    // Recalculate after a short delay to ensure layout is settled (e.g. font load/animation)
    const timeout = setTimeout(updateLayout, 100);

    const observer = new ResizeObserver(updateLayout);
    if (containerRef.current) observer.observe(containerRef.current);
    window.addEventListener("resize", updateLayout);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
      window.removeEventListener("resize", updateLayout);
    };
  }, []);

  const DiscordGlyph = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      focusable="false"
      {...props}
    >
      <path
        fill="currentColor"
        d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.372.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1569 2.419 0 1.3332-.9461 2.4189-2.1569 2.4189z"
      />
    </svg>
  );
  return (
    <main className="bg-wit-light dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 min-h-screen overflow-hidden">
      <section
        id="hero"
        className="relative w-full pt-20 pb-16 lg:pt-32 lg:pb-32 snap-start snap-always"
      >
        <HeroBackdrop />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Text */}
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <AnimateIn trigger="mount" direction="left">
                <RotatingHeroText />
              </AnimateIn>
              
              <AnimateIn trigger="mount" direction="left" delay={0.05}>
                <p className="mt-6 text-base sm:text-lg text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Wit is your AI cofounder. It connects to your email, calendar, and apps, tells you the one thing you should work on, and helps do the work for you.
                </p>
              </AnimateIn>
              
              <StaggerIn
                direction="up"
                className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              >
                <BezelButton
                  variant="neutral"
                  onClick={() => setIsWaitlistOpen(true)}
                  className="h-12 px-8 text-lg dark:from-white dark:to-zinc-200 dark:text-zinc-950 dark:border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-shadow"
                >
                  Get Early Access <ArrowRight className="w-5 h-5 ml-2" />
                </BezelButton>
                <BezelButton
                  href="https://discord.gg/uQcUXuQawe"
                  variant="blue"
                  className="h-12 px-4"
                >
                  <DiscordGlyph className="w-6 h-6" />
                </BezelButton>
              </StaggerIn>

              {/* Social Proof / Mini trusted by */}
              <div className="mt-12 flex items-center gap-3 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                 <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-800 border-2 border-white dark:border-zinc-950 flex items-center justify-center overflow-hidden">
                            <span className="text-[10px]">👾</span>
                        </div>
                    ))}
                 </div>
                 <div className="text-sm text-zinc-500 dark:text-zinc-400">
                    Joined by 300+ users
                 </div>
              </div>
            </div>

            {/* Right Column: Phone Mockup */}
            <div className="relative mt-10 lg:mt-0 flex justify-center lg:justify-end">
               <div className="relative w-[280px] sm:w-[320px] lg:w-[360px]">
                  {/* Floating Phone */}
                  <div className="relative z-10 animate-float">
                     <img 
                        src="/device/Device-1.png" 
                        alt="Wit App Interface" 
                        className="w-full h-auto drop-shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] dark:drop-shadow-[0_35px_60px_-15px_rgba(0,0,0,0.9)]"
                     />
                     
                     {/* Floating UI Elements / Widgets */}
                     {/* Card 1: Priority */}
                     <div className="absolute -right-8 top-24 p-3 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl rounded-xl border border-white/20 shadow-xl animate-[float_5s_ease-in-out_1s_infinite]">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                                <CheckCircle2 size={16} />
                            </div>
                            <div>
                                <div className="text-xs font-medium text-zinc-500">Priority</div>
                                <div className="text-sm font-bold">Launch Product</div>
                            </div>
                        </div>
                     </div>

                     {/* Card 2: Email */}
                     <div className="absolute -left-4 bottom-48 p-3 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl rounded-xl border border-white/20 shadow-xl animate-[float_7s_ease-in-out_2s_infinite]">
                        <div className="flex items-center gap-3">
                             <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                <img
                                  src="/integration-logos/Gmail_icon_(2020).svg"
                                  alt="Gmail logo"
                                  className="w-4 h-4 object-contain"
                                />
                             </div>
                             <div>
                                <div className="text-xs font-medium text-zinc-500">Email Sent</div>
                                <div className="text-sm font-bold">Investor Update</div>
                             </div>
                        </div>
                     </div>

                     {/* Card 3: Calendar */}
                     <div className="absolute -right-6 bottom-20 p-3 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl rounded-xl border border-white/20 shadow-xl animate-[float_6s_ease-in-out_0.5s_infinite]">
                        <div className="flex items-center gap-3">
                             <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                <img
                                  src="/integration-logos/Google_Calendar_icon_(2020).svg"
                                  alt="Google Calendar icon"
                                  className="w-4 h-4 object-contain"
                                />
                           </div>
                           <div>
                               <div className="text-xs font-medium text-zinc-500">Created Event</div>
                               <div className="text-sm font-bold">Team Sync, 2:00 PM</div>
                           </div>
                       </div>
                    </div>

                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* University Banner - Validation */}
      <section className="snap-start snap-always border-y border-zinc-200/50 dark:border-white/5 bg-white/50 dark:bg-white/[0.02] backdrop-blur-sm">
        <UniversityBanner variant="founder" className="py-10" />
      </section>

      {/* Bento Grid Features / Pillars */}
      <section
        id="features"
        className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-32 snap-start snap-always"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
                The AI that builds with you.
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                Stop managing tools. Start managing vision. Wit handles the rest.
            </p>
        </div>

        <div className="flex flex-col gap-6">
           
           {/* Card 1: Integrations (Full Width) */}
           <AnimateIn direction="up" className="group relative overflow-hidden rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 md:p-10 pb-2 md:pb-4 flex flex-col">
                <div className="mb-8 relative z-20 max-w-3xl">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900 dark:text-white">All your apps in one place.</h3>
                    <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed">
                       Let Wit use all your stuff. It connects with Gmail, Slack, and Notion to give you a unified view of your work.
                    </p>
                </div>
                
                <div className="relative flex items-end justify-center mt-12 z-10 w-full md:flex-1">
                     {/* Tree Graph */}
                     <div ref={containerRef} className="relative w-full max-w-5xl flex flex-col items-center h-[190px] md:h-[220px] lg:h-[230px]">
                         {/* Parent Node */}
                         <div ref={parentRef} className="absolute -top-6 md:-top-10 left-1/2 -translate-x-1/2 z-10 bg-white dark:bg-zinc-800 shadow-lg border border-zinc-200 dark:border-zinc-700 rounded-full px-6 py-3 flex items-center gap-3">
                             <Atom className="w-5 h-5 text-emerald-500" />
                             <span className="text-base font-semibold text-zinc-900 dark:text-white">Wit Core</span>
                         </div>
                         
                         {/* Connecting Lines */}
                        <svg 
                            className="absolute inset-0 overflow-visible pointer-events-none" 
                            width={svgSize.width}
                            height={svgSize.height}
                            style={{ width: '100%', height: '100%' }}
                        >
                            {paths.map((d, i) => (
                              <motion.path
                                key={i}
                                d={d}
                                fill="none"
                                stroke="currentColor"
                                className="text-zinc-300 dark:text-zinc-700"
                                strokeWidth="2"
                                vectorEffect="non-scaling-stroke"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                              />
                            ))}
                         </svg>

                         {/* Child Nodes */}
                        <StaggerIn className="grid grid-cols-5 w-full gap-0 mt-10 md:mt-12" stagger={0.1} delay={0.5}>
                             {[
                                { 
                                  label: "Gmail", 
                                  bg: "bg-white dark:bg-white/10", 
                                  src: "/integration-logos/Google-G-Logo.svg",
                                  isImage: true
                                },
                                { 
                                  label: "Linear", 
                                  bg: "bg-white dark:bg-white/10",
                                  lightSrc: "/integration-logos/Linear-Brand-Assets/logo-dark.svg", // dark logo on light background
                                  darkSrc: "/integration-logos/Linear-Brand-Assets/logo-light.svg", // light logo on dark background
                                  isImage: true
                                },
                                { 
                                  label: "Notion", 
                                  bg: "bg-white dark:bg-white/10",
                                  src: "/integration-logos/Notion-logo.svg",
                                  isImage: true
                                },
                                { 
                                  label: "Slack", 
                                  bg: "bg-white dark:bg-white/10",
                                  src: "/integration-logos/Slack-Logo.svg",
                                  isImage: true
                                },
                                { 
                                  label: "GitHub", 
                                  bg: "bg-white dark:bg-white/10",
                                  icon: (className: string) => <Github className={className} />,
                                  color: "text-black dark:text-white",
                                  isImage: false
                                }
                             ].map((item, i) => (
                                 <div 
                                    key={i} 
                                    ref={el => { childRefs.current[i] = el }} 
                                    className="flex flex-col items-center gap-3"
                                 >
                                     <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl ${item.bg} flex items-center justify-center shadow-sm border border-zinc-200 dark:border-zinc-700 ring-4 ring-white dark:ring-zinc-900 p-3 md:p-4`}>
                                        {item.isImage ? (
                                          item.lightSrc && item.darkSrc ? (
                                            <>
                                              <img
                                                src={item.lightSrc}
                                                alt={`${item.label} logo`}
                                                className="w-full h-full object-contain block dark:hidden"
                                              />
                                              <img
                                                src={item.darkSrc}
                                                alt={`${item.label} logo`}
                                                className="w-full h-full object-contain hidden dark:block"
                                              />
                                            </>
                                          ) : (
                                            <img src={item.src} alt={`${item.label} logo`} className="w-full h-full object-contain" />
                                          )
                                        ) : (
                                          item.icon!(`w-full h-full ${item.color}`)
                                        )}
                                     </div>
                                     <span className="text-xs md:text-sm font-medium text-zinc-600 dark:text-zinc-400">{item.label}</span>
                                 </div>
                             ))}
                         </StaggerIn>
                     </div>
                </div>
           </AnimateIn>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
               {/* Card 2: Executing (Centered) */}
               <AnimateIn direction="up" delay={0.2} className="group relative overflow-hidden rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 h-[500px] flex flex-col">
                    <div className="mb-8 relative z-20">
                        <h3 className="text-2xl font-bold mb-3 text-zinc-900 dark:text-white">Always Moving</h3>
                        <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                           Wit is the engine that never stops. It drafts the emails, preps the briefs, and clears the blockers before you even wake up.
                        </p>
                    </div>
                    <div className="flex-1 relative z-10">
                        <div className="absolute inset-0">
                             {/* Scattered Chips */}
                            <div className="absolute top-0 left-4 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-xs text-zinc-600 dark:text-zinc-400 shadow-sm transform -rotate-6">
                                Draft investor update
                            </div>
                            <div className="absolute top-8 right-8 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-xs text-zinc-600 dark:text-zinc-400 shadow-sm transform rotate-3">
                                Find 50 leads in SF
                            </div>
                            <div className="absolute bottom-24 left-12 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-xs text-zinc-600 dark:text-zinc-400 shadow-sm transform rotate-12">
                                Move board meeting
                            </div>
                            <div className="absolute bottom-16 right-10 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-xs text-zinc-600 dark:text-zinc-400 shadow-sm transform -rotate-3">
                                Prep for YC interview
                            </div>
                            
                            {/* Ghost Chips */}
                            <div className="absolute top-1/2 left-0 w-24 h-8 bg-zinc-200/30 dark:bg-zinc-800/30 rounded-lg animate-pulse" />
                            <div className="absolute bottom-1/3 right-0 w-20 h-8 bg-zinc-200/30 dark:bg-zinc-800/30 rounded-lg animate-pulse" />

                            {/* Delegating Badge */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                                 <div className="bg-white dark:bg-zinc-800 shadow-lg border border-zinc-200 dark:border-zinc-700 rounded-full px-5 py-2.5 flex items-center gap-2">
                                    <Settings className="w-5 h-5 text-emerald-500 animate-spin-slow" />
                                    <span className="font-bold text-zinc-900 dark:text-white">Executing</span>
                                 </div>
                            </div>
                        </div>
                    </div>
               </AnimateIn>

               {/* Card 3: Strategy/Prioritization */}
               <AnimateIn direction="up" delay={0.1} className="group relative overflow-hidden rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 h-[500px] flex flex-col">
                    <div className="mb-8 relative z-20">
                        <h3 className="text-2xl font-bold mb-3 text-zinc-900 dark:text-white">Signal, Not Noise</h3>
                        <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                           Most notifications are distractions. Wit acts as your shield, surfacing only what impacts your runway and roadmap.
                        </p>
                    </div>
                    <div className="flex-1 relative overflow-hidden z-10">
                         {/* Layered Background */}
                         <div className="absolute inset-0 space-y-4 pt-4">
                             {[1, 2, 3].map((_, i) => (
                                 <div key={i} className={`flex items-center gap-4 p-4 bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-white/10 shadow-sm ${i === 0 ? 'opacity-100' : 'opacity-50'}`}>
                                     <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-700" />
                                     <div className="flex-1 space-y-2">
                                        <div className="w-3/4 h-2 bg-zinc-100 dark:bg-zinc-700 rounded" />
                                        <div className="w-1/2 h-2 bg-zinc-100 dark:bg-zinc-700 rounded" />
                                     </div>
                                     {i === 0 && (
                                         <div className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                                            Action
                                         </div>
                                     )}
                                 </div>
                             ))}
                         </div>
                         
                         {/* Overlay Pill */}
                         <div className="absolute inset-0 flex items-center justify-center">
                             <div className="bg-white dark:bg-zinc-800 shadow-xl border border-zinc-100 dark:border-zinc-700 rounded-full py-2 px-5 flex items-center gap-2 animate-pulse-slow">
                                 <Filter className="w-4 h-4 text-emerald-500" />
                                 <span className="font-semibold text-zinc-900 dark:text-white">Filtering</span>
                             </div>
                         </div>
                         
                         {/* Fade out bottom */}
                         <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-50 dark:from-zinc-900 to-transparent" />
                    </div>
               </AnimateIn>
           </div>
        </div>
      </section>

      {/* How it works - Refined */}
      <section id="how-it-works" className="py-24 bg-zinc-50 dark:bg-zinc-900/30 snap-start snap-always">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 grid md:grid-cols-2 gap-16 items-center">
          <AnimateIn direction="left">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-6">
                <CheckCircle2 className="w-4 h-4 mr-2" /> Built for execution
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Don't just plan.<br/>Execute.
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed mb-8">
                Your agent isn't just a chatbot. It's an active teammate that plugs into your email, calendar, and tasks to get real work done.
              </p>
              
              <div className="space-y-4">
                {[
                  "Sets the main priority — eliminates distraction",
                  "Does the research — actionable insights only",
                  "An Active Teammate — proactively helps",
                  "Connects to your context — email, calendar, tasks",
                ].map((line, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-white dark:bg-white/5 border border-zinc-100 dark:border-white/10 hover:border-emerald-500/30 transition-colors">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <span className="text-zinc-800 dark:text-zinc-200 font-medium">{line}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
          
          <AnimateIn direction="right">
            <div className="relative">
               {/* Maybe use Device 3 here for variety */}
              <img
                src="/device/Device-3.png"
                alt="Wit app device screenshot"
                className="w-full max-w-sm mx-auto drop-shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="snap-start snap-always">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-24">
          <Pricing />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="snap-start snap-always">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-24">
          <FAQ />
        </div>
      </section>

      {/* Large animated Discord CTA */}
      <DiscordCTA />
      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
    </main>
  );
}
