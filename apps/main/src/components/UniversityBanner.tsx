"use client";

import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

import { AnimateIn } from "./Animate";

type UniversityBannerVariant = "professional" | "students";

interface UniversityBannerProps {
  variant?: UniversityBannerVariant;
  className?: string;
}

interface UniversityLogo {
  name: string;
  src: string;
  trimWhite?: boolean;
  overlaySrc?: string;
  overlayClassName?: string;
}

const copy: Record<UniversityBannerVariant, { heading: string; subheading: string }> = {
  professional: {
    heading: "Built by a team from Harvard, MIT, and UNLV",
    subheading: "Crafting Wit for real estate agents",
  },
  students: {
    heading: "Built by students, for students",
    subheading: "Peers from Harvard, MIT, and UNLV building for their campuses",
  },
};

const logos: UniversityLogo[] = [
  {
    name: "Harvard University",
    src: "/Veritas Shield.png",
    overlaySrc: "/Harvard University Text.png",
    overlayClassName: "dark:invert dark:brightness-[1.15] dark:contrast-125",
  },
  { name: "MIT", src: "/MIT-Logo.png" },
  { name: "UNLV", src: "/unlv-vector-logo.png", trimWhite: true },
];

export default function UniversityBanner({ variant = "professional", className = "" }: UniversityBannerProps) {
  const [processedSources, setProcessedSources] = useState<Record<string, string>>({});

  useEffect(() => {
    logos
      .filter((logo) => logo.trimWhite)
      .forEach((logo) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = logo.src.startsWith("http") ? logo.src : `${window.location.origin}${logo.src}`;

        img.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = img.naturalWidth;
          canvas.height = img.naturalHeight;
          const ctx = canvas.getContext("2d");
          if (!ctx) {
            return;
          }
          ctx.drawImage(img, 0, 0);
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const { data } = imageData;
          for (let i = 0; i < data.length; i += 4) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            if (r > 235 && g > 235 && b > 235) {
              data[i + 3] = 0;
            }
          }
          ctx.putImageData(imageData, 0, 0);
          const cleanedSrc = canvas.toDataURL("image/png");
          setProcessedSources((prev) => ({ ...prev, [logo.name]: cleanedSrc }));
        };
      });
  }, []);

  return (
    <div className={`py-12 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/85 dark:bg-zinc-900/85 backdrop-blur-md px-6 sm:px-10 py-12 shadow-[0_12px_40px_rgba(15,23,42,0.08)] dark:shadow-[0_18px_50px_rgba(0,0,0,0.4)] transition-shadow duration-300">
          <AnimateIn direction="in">
            <div className="text-center space-y-3">
              <h2 className="text-[clamp(1.85rem,3vw,2.5rem)] font-semibold tracking-tight text-zinc-900 dark:text-white">
                {copy[variant].heading}
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
                {copy[variant].subheading}
              </p>
            </div>
          </AnimateIn>

          <div className="relative mt-12">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-zinc-900 dark:via-zinc-900/70" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-zinc-900 dark:via-zinc-900/70" />

            <Marquee
              pauseOnHover
              gradient={false}
              speed={22}
              autoFill
              className="flex items-center"
              style={{
                maskImage: "linear-gradient(90deg, transparent 0%, black 15%, black 85%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 15%, black 85%, transparent 100%)",
              }}
            >
              {logos.map((logo) => {
                const src = processedSources[logo.name] ?? logo.src;
                return (
                  <div key={logo.name} className="px-10 sm:px-16">
                    <div className="relative inline-flex items-center justify-center">
                      <img
                        src={src}
                        alt={`${logo.name} logo`}
                        className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform duration-300 hover:scale-105"
                      />
                      {logo.overlaySrc ? (
                        <img
                          src={logo.overlaySrc}
                          alt={`${logo.name} text`}
                          className={`pointer-events-none absolute inset-0 h-full w-auto object-contain transition-transform duration-300 hover:scale-105 ${logo.overlayClassName ?? ''}`}
                        />
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
}
