"use client";
import React, { useState } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState("");
  const [goal, setGoal] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setMessage("Please enter an email address.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), goal: goal.trim() }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Failed to join waitlist");
      }

      const data = await res.json().catch(() => ({ success: false }));
      if (!data?.success) {
        throw new Error("Unexpected response from waitlist");
      }

      setStatus("success");
      setMessage("You're on the list. We'll email you when Wit is ready.");
      setEmail("");
      setGoal("");

      setTimeout(() => {
        onClose();
        setStatus("idle");
        setMessage("");
      }, 1500);
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50">
          <div className="flex items-center justify-center min-h-screen px-4">
            <motion.div
              className="fixed inset-0 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={onClose}
            />
            <motion.div
              className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl ring-1 ring-black/5 dark:bg-neutral-900 dark:ring-white/10"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 260, damping: 24, mass: 0.8 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Join the Wit waitlist</h3>
                <button onClick={onClose} className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-zinc-900 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-700 dark:border-zinc-700 dark:bg-neutral-800 dark:text-white"
                    placeholder="you@example.com"
                    disabled={status === "loading"}
                  />
                </div>
                <div>
                  <label htmlFor="goal" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                    What goal do you want to achieve with Wit?
                  </label>
                  <input
                    id="goal"
                    type="text"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-zinc-900 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-700 dark:border-zinc-700 dark:bg-neutral-800 dark:text-white"
                    placeholder="e.g., reach 1k followers, build a daily study habit"
                    disabled={status === "loading"}
                  />
                </div>

                {message && (
                  <p className={`text-sm ${status === "success" ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}`}>
                    {message}
                  </p>
                )}

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 px-4 py-2 rounded-xl bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-neutral-800 dark:text-zinc-200 dark:hover:bg-neutral-700"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="flex-1 px-4 py-2 rounded-xl bg-zinc-900 text-white hover:bg-black disabled:opacity-70 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
                  >
                    {status === "loading" ? "Joining..." : "Join Waitlist"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
