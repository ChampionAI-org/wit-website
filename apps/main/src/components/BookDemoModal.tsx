"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookDemoModal({ isOpen, onClose }: BookDemoModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  // Key to force fresh embed each time modal opens
  const [embedKey, setEmbedKey] = useState(0);

  // Reset embed when modal opens
  useEffect(() => {
    if (isOpen) {
      setEmbedKey((prev) => prev + 1);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && containerRef.current) {
      // Small delay to ensure container is mounted
      const timeout = setTimeout(() => {
        // Load HubSpot embed script
        const existingScript = document.querySelector(
          'script[src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"]',
        );

        if (!existingScript) {
          const script = document.createElement("script");
          script.src =
            "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
          script.async = true;
          document.body.appendChild(script);
        } else {
          // If script already exists, trigger HubSpot to re-scan for embed containers
          // @ts-ignore - HubSpot global
          if (window.hbspt?.meetings?.create) {
            // @ts-ignore
            window.hbspt.meetings.create(".meetings-iframe-container");
          }
        }
      }, 50);

      return () => clearTimeout(timeout);
    }
  }, [isOpen, embedKey]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: "spring", damping: 28, stiffness: 350 }}
            className="relative w-full h-[95vh] sm:h-[90vh] sm:max-w-2xl bg-white dark:bg-zinc-900 rounded-t-3xl sm:rounded-3xl shadow-[0_-10px_40px_-12px_rgba(0,0,0,0.2)] sm:shadow-[0_25px_80px_-12px_rgba(0,0,0,0.3)] dark:shadow-[0_-10px_40px_-12px_rgba(0,0,0,0.5)] dark:sm:shadow-[0_25px_80px_-12px_rgba(0,0,0,0.7)] ring-1 ring-black/5 dark:ring-white/10 overflow-hidden"
          >
            {/* Mobile drag indicator */}
            <div className="sm:hidden flex justify-center pt-3 pb-1">
              <div className="w-10 h-1 rounded-full bg-zinc-300 dark:bg-zinc-600" />
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-14 right-4 sm:top-4 z-20 p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-zinc-400" />
            </button>

            {/* HubSpot Embed Container */}
            <div
              ref={containerRef}
              className="h-[calc(100%-24px)] sm:h-full w-full"
            >
              <div
                key={embedKey}
                className="meetings-iframe-container w-full h-full"
                data-src="https://meetings-na2.hubspot.com/saul-holding?embed=true"
                style={{ minHeight: "100%" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
