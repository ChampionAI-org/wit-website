"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import AndroidTestModal from "./AndroidTestModal";
import StoreIconButton from "./StoreIconButton";
import { AnimateIn } from "./Animate";
import { motion, useScroll, useTransform, useSpring, useMotionTemplate } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAndroidModalOpen, setIsAndroidModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  // Framer Motion: scroll-driven progress 0 -> 1 over first ~120px
  const { scrollY } = useScroll();
  const progressRaw = useTransform(scrollY, [0, 120], [0, 1]);
  const progress = useSpring(progressRaw, { stiffness: 160, damping: 24, mass: 0.6 });
  // Interpolations for a smooth morph
  const topOffset = useTransform(progress, [0, 1], [0, 12]);
  const barRadius = useTransform(progress, [0, 1], [0, 24]);
  // No shadow at the very top to avoid a visible box
  const shadowOpacity = useTransform(progress, [0, 0.18, 1], [0, 0.08, 0.22]);
  // At the very top, keep header fully transparent so it blends with page background
  // Slightly into scroll, fade in hero gradient, then crossfade to pill background
  const heroBgOpacity = useTransform(progress, [0, 0.18, 1], [0, 1, 0]);
  const pillBgOpacity = useTransform(progress, [0, 0.18, 1], [0, 0, 1]);
  // Animate backdrop blur so it's 0 at rest
  const heroBackdropBlur = useTransform(progress, [0, 0.18, 1], ["0px", "8px", "8px"]);
  const pillBackdropBlur = useTransform(progress, [0, 0.18, 1], ["0px", "8px", "8px"]);
  // A base layer that matches the page background exactly at the very top
  const baseBgOpacity = useTransform(progress, [0, 0.08], [1, 0]);
  const shadow = useMotionTemplate`0 8px 32px rgba(2,6,23, ${shadowOpacity})`;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Track system color scheme to choose correct hero logo when not scrolled
  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-color-scheme: dark)');
    const update = () => setIsDark(!!mq?.matches);
    update();
    mq?.addEventListener?.('change', update);
    return () => mq?.removeEventListener?.('change', update);
  }, []);

  const navigation: { name: string; href: string }[] = [];

  // Styling that adapts between full-width hero bar and floating pill
  // Note: top offset is animated via Framer Motion (topOffset)
  const shellClasses = "fixed left-0 right-0 z-50";
  const containerClasses = scrolled
    ? "max-w-5xl mx-auto px-3 sm:px-4"
    : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";
  // Base structural classes; backgrounds are crossfaded via absolutely positioned layers
  const barClasses = scrolled
    ? "flex items-center justify-between h-14 rounded-full text-slate-900 dark:text-white"
    : "flex items-center justify-between h-14 sm:h-16 text-white";

  const linkColor = scrolled
    ? "text-zinc-700 hover:text-zinc-900 dark:text-zinc-200 dark:hover:text-white"
    : "text-zinc-200 hover:text-white";

  return (
    <motion.header
      className={shellClasses}
      style={{ top: topOffset }}
      initial={false}
      aria-label="Site header"
    >
      <motion.div className={containerClasses} layout transition={{ type: "spring", stiffness: 220, damping: 28 }}>
        <AnimateIn trigger="mount" direction="left" distance={20}>
        <motion.div
          className={`${barClasses} relative`}
          layout
          transition={{ type: "spring", stiffness: 220, damping: 28 }}
          style={{ borderRadius: barRadius, boxShadow: shadow }}
        >
          {/* Background layers crossfade */}
          {/* Base page background to avoid any visible box at top */}
          <motion.div
            aria-hidden
            className="absolute inset-0 bg-wit-light dark:bg-wit-dark pointer-events-none"
            style={{ opacity: baseBgOpacity, borderRadius: barRadius }}
          />
          <motion.div
            aria-hidden
            className="absolute inset-0 bg-wit-hero-gradient/80 supports-[backdrop-filter]:bg-wit-hero-gradient/70 pointer-events-none"
            style={{ opacity: heroBgOpacity, backdropFilter: useMotionTemplate`blur(${heroBackdropBlur})`, borderRadius: barRadius }}
          />
          <motion.div
            aria-hidden
            className="absolute inset-0 bg-wit-card-light/90 ring-1 ring-black/5 supports-[backdrop-filter]:bg-wit-card-light/80 dark:bg-wit-card-dark/90 dark:ring-white/10 supports-[backdrop-filter]:dark:bg-wit-card-dark/80"
            style={{ opacity: pillBgOpacity, backdropFilter: useMotionTemplate`blur(${pillBackdropBlur})`, borderRadius: barRadius }}
          />
          {/* Content */}
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity pl-3 sm:pl-4">
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-white/40 to-white/20 dark:from-white/10 dark:to-white/0 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Icon container */}
                <div className="relative rounded-xl p-1 bg-gradient-to-br from-white/80 to-gray-100/80 dark:from-white/10 dark:to-white/5 ring-1 ring-black/5 dark:ring-white/10 shadow-lg dark:shadow-black/20">
                  <img
                    src="/icon.png"
                    alt="Wit AI"
                    className={`h-8 sm:h-9 w-8 sm:w-9 rounded-lg transform group-hover:scale-110 transition-transform duration-300 ${scrolled ? 'ring-1 ring-black/10 dark:ring-white/10' : (isDark ? 'ring-1 ring-white/20' : 'ring-1 ring-black/10')}`}
                    style={{
                      boxShadow: scrolled
                        ? '0 4px 12px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                        : '0 8px 20px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
                    }}
                  />
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${linkColor} transition-colors duration-200 font-medium`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* App Store Icons (consistent across states) */}
          <div className="hidden md:flex items-center space-x-2 pr-2 sm:pr-4">
            <StoreIconButton href="https://apps.apple.com/us/app/wit-ai/id6748923692" ariaLabel="Download on the App Store">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            </StoreIconButton>
            <StoreIconButton href="https://play.google.com/store/apps/details?id=ai.wit" ariaLabel="Get it on Google Play">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/></svg>
            </StoreIconButton>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${linkColor} transition-colors duration-200`}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </motion.div>
        </AnimateIn>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <AnimateIn direction="down" distance={12}>
            <div className={`${scrolled ? 'mx-3 mt-2 rounded-2xl shadow-lg ring-1 ring-black/5 bg-white text-zinc-900 dark:bg-neutral-900 dark:text-white dark:ring-white/10' : 'border-t border-white/10'} px-2 pt-2 pb-3 space-y-1`}>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 ${scrolled ? 'text-zinc-700 hover:text-zinc-900 dark:text-zinc-200 dark:hover:text-white' : 'text-zinc-300 hover:text-white'} transition-colors duration-200 font-medium`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-white/10 pt-3 mt-3 space-y-3">
                <a
                  href="https://apps.apple.com/us/app/wit-ai/id6748923692"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-black hover:bg-gray-900 text-white px-3 py-2 rounded-lg transition-all duration-300 mx-3"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-zinc-300">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=ai.wit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-black hover:bg-gray-900 text-white px-3 py-2 rounded-lg transition-all duration-300 mx-3 w-full"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-zinc-300">Get it on</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
            </AnimateIn>
          </div>
        )}
      </motion.div>

      {/* Android Test Modal */}
      <AndroidTestModal
        isOpen={isAndroidModalOpen}
        onClose={() => setIsAndroidModalOpen(false)}
      />
    </motion.header>
  );
}
