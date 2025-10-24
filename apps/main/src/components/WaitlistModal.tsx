"use client";
import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'form-widget': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        mode?: string;
        ucid: string;
      };
    }
  }
}

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let cancelled = false as boolean;
    let timeout: any;
    setIsReady(false);
    if (typeof window !== "undefined") {
      const defined = !!window.customElements?.get?.("form-widget");
      if (defined) {
        requestAnimationFrame(() => {
          if (!cancelled) setIsReady(true);
        });
      } else if (window.customElements?.whenDefined) {
        window.customElements.whenDefined("form-widget").then(() => {
          if (!cancelled) setIsReady(true);
        });
      }
      timeout = setTimeout(() => {
        if (!cancelled) setIsReady(true);
      }, 8000);
    }
    return () => {
      cancelled = true;
      if (timeout) clearTimeout(timeout);
    };
  }, [isOpen]);

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
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Join the Wit waitlist</h3>
                <button onClick={onClose} className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200">
                  <X className="w-6 h-6" />
                </button>
              </div>
              {!isReady && (
                <div className="animate-pulse space-y-4" aria-busy>
                  <div className="h-4 w-28 rounded bg-zinc-200 dark:bg-neutral-800" />
                  <div className="h-10 w-full rounded-xl bg-zinc-200 dark:bg-neutral-800" />
                  <div className="h-4 w-40 rounded bg-zinc-200 dark:bg-neutral-800" />
                  <div className="h-10 w-full rounded-xl bg-zinc-200 dark:bg-neutral-800" />
                  <div className="h-10 w-full rounded-xl bg-zinc-300 dark:bg-neutral-700" />
                </div>
              )}
              <div className="space-y-4" style={{ display: isReady ? 'block' : 'none' }}>
                <form-widget ucid='iqimP5fHwWzqaGiqOdGySIV7vNw'></form-widget>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
