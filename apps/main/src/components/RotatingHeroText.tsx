"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const messages = [
  "founders going 0 → 1.",
  "you losing weight.",
  "your next 1K followers.",
  "shipping v1 this week.",
  "you getting jacked.",
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
    <div className="flex flex-col items-center text-center">
      <motion.span
        className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-300 mb-4"
        initial={{ opacity: 0, y: -2 }}
        animate={{ opacity: [0.5, 1, 0.5], y: [-1, 0, -1] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
        24/7 scheming ACTIVATED...
      </motion.span>

      <div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-zinc-900 dark:text-white mb-2">
          The AI that schemes for
        </h1>
        <div className="relative flex items-center justify-center mx-auto max-w-full px-4 py-2">
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              className="whitespace-nowrap leading-[1.25] pb-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 dark:from-white dark:via-zinc-300 dark:to-white"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{
                opacity: { duration: 0.3 },
                y: { type: "spring", stiffness: 200, damping: 25, mass: 0.8 },
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
