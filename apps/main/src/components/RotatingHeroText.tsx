"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const messages = [
  "a new lead",
  "the next step",
  "the showing",
  "the inspection",
  "the appraisal",
  "the escrow date",
  "the close",
];

export default function RotatingHeroText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
      <motion.span
        className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-300 mb-3"
        initial={{ opacity: 0, y: -2 }}
        animate={{ opacity: [0.5, 1, 0.5], y: [-1, 0, -1] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
        BUILT FOR REVENUE, NOT REMINDERS
      </motion.span>

      <div className="lg:text-left text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-zinc-900 dark:text-white mb-1 tracking-tight whitespace-nowrap">
          Never Miss
        </h1>
        {/* Rotating line: measured height based on longest message */}
        <div
          className="relative flex items-center lg:justify-start justify-center w-full min-h-[1.2em]"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              className="inline-block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-zinc-900 dark:text-white text-center lg:text-left whitespace-nowrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.4,
                ease: [0.2, 0.65, 0.3, 0.9]
              }}
            >
              {messages[index]}
            </motion.span>
          </AnimatePresence>
        </div>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 font-medium">
          Your AI assistant for real estate that <span className="text-zinc-900 dark:text-white font-bold italic">owns the pipeline</span>
        </p>
      </div>
    </div>
  );
}
