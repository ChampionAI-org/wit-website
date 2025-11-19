"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const messages = [
  "founders going 0 → 1",
  "your $10k MRR",
  "your first 100 users",
  "your next 1K followers",
  "that angel investment",
  "your success",
  "your first $1M ARR",
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
        24/7 scheming ACTIVATED...
      </motion.span>

      <div className="lg:text-left text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-zinc-900 dark:text-white mb-1 tracking-tight whitespace-nowrap">
          Always Scheming For
        </h1>
        {/* Rotating line: measured height based on longest message */}
        <div
          className="relative flex items-center lg:justify-start justify-center w-full"
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
      </div>
    </div>
  );
 }
