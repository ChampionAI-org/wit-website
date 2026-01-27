"use client";
import React, { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [joined, setJoined] = useState(false);
  const [refCode, setRefCode] = useState<string | null>(null);

  // Mark joined state from localStorage to make it obvious if user already signed up on this device
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const j = localStorage.getItem("wit_waitlist_joined") === "1";
      setJoined(j);
    } catch {}
  }, [isOpen]);

  // Ensure referral query (e.g., ?ref=CODE and any utm_*) is appended when modal/form mounts
  useEffect(() => {
    if (!isOpen) return;
    if (typeof window === "undefined") return;
    try {
      const url = new URL(window.location.href);
      const ref = url.searchParams.get("ref");
      let qs = window.location.search;
      if (ref) {
        setRefCode(ref);
        try { localStorage.setItem("wit_ref_code", ref); } catch {}
      } else {
        try {
          const storedRef = localStorage.getItem("wit_ref_code") || "";
          if (storedRef) {
            setRefCode(storedRef);
            if (!qs || qs.length <= 1) qs = `?ref=${storedRef}`;
          }
        } catch {}
      }
      if (formRef.current && qs && qs.length > 1) {
        const action = formRef.current.getAttribute("action") || "";
        if (!action.includes("?")) {
          formRef.current.setAttribute("action", action + qs);
        }
      }
    } catch {}
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    try {
      const fd = new FormData(e.currentTarget);
      const email = (fd.get("email") as string) || "";
      if (email) localStorage.setItem("wit_waitlist_email", email);
      localStorage.setItem("wit_waitlist_joined", "1");
      setJoined(true);
    } catch {}
    // allow normal submit/navigation to LaunchList Thank You page
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center px-4 py-6 sm:py-10">
            <motion.div
              className="fixed inset-0 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={onClose}
            />
            <motion.div
              className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl ring-1 ring-black/5 dark:bg-neutral-900 dark:ring-white/10 max-h-[90vh] sm:max-h-[85vh] overflow-y-auto overscroll-contain"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 260, damping: 24, mass: 0.8 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Join the Wit AI waitlist</h3>
                <button onClick={onClose} className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200">
                  <X className="w-6 h-6" />
                </button>
              </div>
              {joined && (
                <div className="mb-4 rounded-xl bg-emerald-50 text-emerald-800 ring-1 ring-emerald-200/60 px-4 py-3 dark:bg-emerald-900/30 dark:text-emerald-200 dark:ring-emerald-700/40">
                  You're already on the waitlist. Thanks for joining!
                </div>
              )}
              <form
                className="launchlist-form space-y-5"
                action="https://getlaunchlist.com/s/lfY1k6"
                method="POST"
                ref={formRef}
                onSubmit={handleSubmit}
              >
                {refCode ? (
                  <input type="hidden" name="ref" value={refCode} />
                ) : null}
                <div className="space-y-2">
                  <label htmlFor="waitlist-name" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Name
                  </label>
                  <input
                    id="waitlist-name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl bg-white dark:bg-neutral-800 ring-1 ring-black/10 dark:ring-white/10 px-4 py-3 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="waitlist-email" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Email
                  </label>
                  <input
                    id="waitlist-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl bg-white dark:bg-neutral-800 ring-1 ring-black/10 dark:ring-white/10 px-4 py-3 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="waitlist-goal" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    What should Wit handle for your deals?
                  </label>
                  <textarea
                    id="waitlist-goal"
                    name="goal"
                    rows={2}
                    placeholder="Tell us about your deals..."
                    className="w-full rounded-xl bg-white dark:bg-neutral-800 ring-1 ring-black/10 dark:ring-white/10 px-4 py-3 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="relative w-full inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 font-semibold transition-all duration-200 active:translate-y-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 bg-gradient-to-b from-neutral-800 to-black text-white border border-neutral-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-1px_0_rgba(0,0,0,0.35),0_8px_18px_rgba(0,0,0,0.35)] hover:from-neutral-700 hover:to-neutral-950 after:content-[''] after:absolute after:inset-px after:rounded-[inherit] after:pointer-events-none after:bg-gradient-to-b after:from-white/60 after:to-white/0 after:opacity-80 dark:after:from-white/15"
                >
                  Get Early Access
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
