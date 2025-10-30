"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import BezelButton from "../components/BezelButton";
import HeroBackdrop from "../components/HeroBackdrop";
import { AnimateIn, StaggerIn } from "../components/Animate";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import DiscordCTA from "../components/DiscordCTA";
import UniversityBanner from "../components/UniversityBanner";
import WaitlistModal from "../components/WaitlistModal";
import RotatingHeroText from "../components/RotatingHeroText";

function IconBadge() {
  return (
    <div className="relative inline-block">
      {/* Glow */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-white to-white/60 blur-md opacity-60 dark:from-white/10 dark:to-white/0" />
      {/* Badge */}
      <div className="relative rounded-2xl p-1.5 bg-gradient-to-br from-white to-gray-100 ring-1 ring-black/10 shadow-xl dark:from-white/10 dark:to-white/5 dark:ring-white/10 dark:shadow-black/40">
        <img src="/icon.png" alt="Wit" className="h-12 w-12 rounded-xl" />
      </div>
    </div>
  );
}

export default function Landing() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
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
    <main className="bg-wit-light dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 pt-32 min-h-screen">
      <section
        id="hero"
        className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center snap-start snap-always"
      >
        <HeroBackdrop />
        <div className="relative">
          <AnimateIn trigger="mount" direction="in">
            <div className="mb-6 flex justify-center">
              <IconBadge />
            </div>
          </AnimateIn>
          <AnimateIn trigger="mount" direction="left">
            <RotatingHeroText />
          </AnimateIn>
          <AnimateIn trigger="mount" direction="left" delay={0.05}>
            <p className="mt-8 text-md sm:text-lg text-zinc-700 dark:text-white/85">
            The AI cofounder that helps first-time founders win. It knows your one priority, helps with the workload, does the research, finds contacts, motivates you, sends educational videos, anything you need to win.
            </p>
          </AnimateIn>
          <StaggerIn
            direction="left"
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <BezelButton
              variant="neutral"
              onClick={() => setIsWaitlistOpen(true)}
              className="dark:from-white dark:to-zinc-100 dark:text-zinc-900 dark:border-zinc-200 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(0,0,0,0.08),0_12px_24px_rgba(250,250,250,0.18)] dark:hover:from-zinc-100 dark:hover:to-zinc-200"
            >
              Get Early Access <ArrowRight className="w-4 h-4 ml-2" />
            </BezelButton>
            <BezelButton
              href="https://discord.gg/uQcUXuQawe"
              variant="blue"
              className="p-3"
            >
              <DiscordGlyph className="w-5 h-5" />
            </BezelButton>
          </StaggerIn>
        </div>
      </section>

      {/* University Banner */}
      <section className="snap-start snap-always">
        <UniversityBanner variant="founder" className="py-14" />
      </section>

      <section
        id="pillars"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 pb-32 snap-start snap-always"
      >
        {[
          {
            t: "Always Scheming",
            d: "Always thinking about what exactly what you need to do to succeed. Figuring out where you are and what you need to do to succeed.",
          },
          {
            t: "Always Researching",
            d: "Finding contacts to reach out to, the right videos to watch, and best practices. Researching anything related to your goals.",
          },
          {
            t: "Always Working For Your Win",
            d: "Doing whatever it takes to ensure you win. Whether that's motivation, educational videos, reminders, finding contacts. Whatever it takes.",
          },
        ].map((c, i) => (
          <AnimateIn key={c.t} direction="left" delay={i * 0.04}>
            <div
              key={c.t}
              className="rounded-2xl p-5 backdrop-blur-xl border shadow-[0_12px_28px_rgba(15,23,42,0.12),_0_4px_12px_rgba(15,23,42,0.08)]
                       bg-white/80 border-zinc-200 dark:bg-zinc-900/75 dark:border-zinc-800
                       dark:shadow-[0_20px_40px_rgba(0,0,0,0.5),_0_6px_16px_rgba(0,0,0,0.3)]"
            >
              <div className="text-sm text-zinc-600 dark:text-zinc-300">
                {c.t}
              </div>
              <div className="mt-2 font-semibold text-zinc-900 dark:text-white">
                {c.d}
              </div>
            </div>
          </AnimateIn>
        ))}
      </section>

      {/* How it works with screenshots */}
      <section id="how-it-works" className="mt-16 snap-start snap-always">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
          <AnimateIn direction="left">
            <div>
              <h2 className="text-3xl font-bold">
                Your AI cofounder is a hustler. It is always scheming.
              </h2>
              <p className="mt-4 text-zinc-700 dark:text-zinc-200 leading-7">
                Your agent's sole focus is you getting to succeed as a founder.
                It will do whatever it takes, set priorities, find contacts, do
                the research, plug into your apps, motivate you, send
                educational videos, and more.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Sets the main priority — what is the one thing you need to do right now?",
                  "Does the research — who to contact, what to watch, what to learn",
                  "An Active Teammate - proactively helps with the workload",
                  "Always up to date — connects to your email, calendar, tasks, and context",
                  "Pushes you forward — with reminders, pressure, and motivation",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mt-0.5" />
                    <span className="text-zinc-800 dark:text-zinc-100">
                      {line}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex gap-3">
                <BezelButton
                  variant="neutral"
                  onClick={() => setIsWaitlistOpen(true)}
                  className="dark:from-white dark:to-zinc-100 dark:text-zinc-900 dark:border-zinc-200 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(0,0,0,0.08),0_12px_24px_rgba(250,250,250,0.18)] dark:hover:from-zinc-100 dark:hover:to-zinc-200"
                >
                  Get Early Access <ArrowRight className="w-4 h-4 ml-2" />
                </BezelButton>
              </div>
            </div>
          </AnimateIn>
          <AnimateIn direction="right">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full place-items-center px-3 md:px-0">
              <img
                src="/device/Device-1.png"
                alt="Wit app device screenshot 1"
                className="w-full max-w-[240px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[380px] h-auto object-contain md:transition-transform md:duration-300 md:hover:scale-[1.02] md:hover:-rotate-2 drop-shadow-[0_18px_44px_rgba(15,23,42,0.22)] dark:drop-shadow-[0_30px_70px_rgba(3,4,7,0.6)]"
                style={{ backgroundColor: "transparent" }}
              />
              <img
                src="/device/Device-3.png"
                alt="Wit app device screenshot 3"
                className="w-full max-w-[240px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[380px] h-auto object-contain md:transition-transform md:duration-300 md:hover:scale-[1.02] md:hover:rotate-2 drop-shadow-[0_18px_44px_rgba(15,23,42,0.22)] dark:drop-shadow-[0_30px_70px_rgba(3,4,7,0.6)]"
                style={{ backgroundColor: "transparent" }}
              />
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="snap-start snap-always">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Pricing />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="snap-start snap-always">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
