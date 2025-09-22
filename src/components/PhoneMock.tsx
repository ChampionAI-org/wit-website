"use client";
import React from "react";

type PhoneMockProps = {
  src: string;
  alt: string;
  tilt?: "left" | "right" | "none";
  delayMs?: number;
  className?: string;
};

export default function PhoneMock({ src, alt, tilt = "none", delayMs = 0, className = "" }: PhoneMockProps) {
  const tiltClass = tilt === "left" ? "phone-tilt-left" : tilt === "right" ? "phone-tilt-right" : "";

  return (
    <div className={`relative ${tiltClass} ${className}`} style={{ perspective: 1400 }}>
      {/* Ambient shadow */}
      <div className="device-shadow" />

      {/* Animated wrapper so transforms don't clash with tilt */}
      <div className="animate-phone-in" style={{ animationDelay: `${delayMs}ms` as unknown as string }}>
        {/* Device body */}
        <div className="relative mx-auto bg-gradient-to-br from-[#0b0f19] via-[#0b0f19] to-[#0a0d16] rounded-[36px] shadow-[0_30px_80px_rgba(0,0,0,.45)] ring-1 ring-white/10">
          {/* Side highlights */}
          <div className="pointer-events-none absolute inset-0 rounded-[36px] ring-1 ring-white/5" />
          <div className="pointer-events-none absolute -left-px top-6 bottom-6 w-px bg-white/10 blur-[1px]" />
          <div className="pointer-events-none absolute -right-px top-6 bottom-6 w-px bg-black/40" />

          {/* Bezel */}
          <div className="m-2 rounded-[30px] bg-black/95 overflow-hidden relative">
            {/* Notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[42%] h-[18px] bg-[#0b0f19] rounded-b-[14px] rounded-t-[14px] shadow-[inset_0_-1px_0_rgba(255,255,255,.08)]">
              <div className="absolute left-1/2 -translate-x-1/2 top-[5px] w-16 h-1.5 bg-white/20 rounded-full" />
            </div>

            {/* Screen */}
            <img
              src={src}
              alt={alt}
              className="block w-full h-full object-cover select-none"
              style={{
                aspectRatio: "9/19.5",
              }}
            />

            {/* Home indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1.5 rounded-full bg-white/40" />
          </div>
        </div>
      </div>
    </div>
  );
}



