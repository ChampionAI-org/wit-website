"use client";
import React from "react";
import { AnimateIn, StaggerIn } from "./Animate";
import BezelButton from "./BezelButton";
import { motion } from "framer-motion";

const DiscordGlyph = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden focusable="false" {...props}>
    <path fill="currentColor" d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.372.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1569 2.419 0 1.3332-.9461 2.4189-2.1569 2.4189z" />
  </svg>
);

export default function DiscordCTA() {
  return (
    <section
      id="discord"
      className="relative"
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <AnimateIn direction="in">
          <div
            className="relative rounded-3xl p-8 sm:p-12 backdrop-blur-xl border shadow-[0_24px_60px_rgba(2,6,23,0.18),_0_6px_18px_rgba(2,6,23,0.12)]
                       bg-white/70 border-zinc-200 text-zinc-900
                       dark:bg-zinc-900/80 dark:border-zinc-700 dark:text-white dark:shadow-[0_24px_60px_rgba(0,0,0,0.6),_0_6px_18px_rgba(0,0,0,0.45)]"
          >
            <StaggerIn direction="up" className="grid md:grid-cols-[1.2fr_1fr] items-center gap-8">
              <div>
                <div className="inline-flex items-center gap-2 rounded-2xl px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-700 ring-1 ring-blue-500/30 dark:text-blue-300">
                  <DiscordGlyph className="w-4 h-4" />
                  Community of agents
                </div>
                <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                  Close more deals with other agents
                </h2>
                <p className="mt-4 text-zinc-700 dark:text-zinc-300 text-base sm:text-lg leading-7">
                  Join our Discord to swap scripts, follow up tactics, and escrow tips.
                  It is where agents compare notes and move deals faster.
                </p>
                <div className="mt-8">
                  <BezelButton href="https://discord.gg/uQcUXuQawe" variant="blue" className="px-6 py-3 text-base sm:text-lg">
                    <DiscordGlyph className="w-5 h-5 mr-2" /> Join the Discord
                  </BezelButton>
                </div>
              </div>

              <div className="relative h-56 sm:h-72 md:h-full min-h-[220px] flex items-center justify-center">
                {/* Floating logo card */}
                <motion.div
                  initial={{ y: 18, opacity: 0, scale: 0.98 }}
                  whileInView={{ y: 0, opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                  transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                  className="relative rounded-3xl px-6 py-10 bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-2xl ring-1 ring-white/20 w-full max-w-[420px]"
                >
                  <div className="absolute -top-10 right-8 hidden md:block">
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="rounded-2xl px-3 py-1 text-xs bg-white/15 ring-1 ring-white/25"
                    >
                      24/7 active
                    </motion.div>
                  </div>

                  <div className="flex items-center justify-center">
                    <motion.div
                      className="relative"
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <div className="absolute -inset-4 rounded-3xl bg-white/20 blur-xl" />
                      <div className="relative rounded-2xl p-4 bg-white/10 ring-1 ring-white/20 shadow-inner">
                        <DiscordGlyph className="w-16 h-16" />
                      </div>
                    </motion.div>
                  </div>

                  <div className="mt-6 text-center">
                    <div className="text-sm text-white/80">Come say hi</div>
                    <div className="mt-1 font-semibold text-white text-lg">discord.gg/uQcUXuQawe</div>
                  </div>

                  {/* Subtle animated dots */}
                  <motion.div
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                    animate={{ opacity: [0.2, 0.45, 0.2] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="absolute left-6 bottom-6 w-1.5 h-1.5 rounded-full bg-white/50" />
                    <div className="absolute right-8 top-8 w-1.5 h-1.5 rounded-full bg-white/50" />
                    <div className="absolute right-14 bottom-10 w-1.5 h-1.5 rounded-full bg-white/50" />
                  </motion.div>
                </motion.div>
              </div>
            </StaggerIn>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
