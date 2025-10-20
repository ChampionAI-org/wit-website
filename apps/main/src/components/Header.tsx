"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, Sparkles, X } from "lucide-react";
import AndroidTestModal from "./AndroidTestModal";
import { AnimateIn } from "./Animate";
import BezelButton from "./BezelButton";
import WaitlistModal from "./WaitlistModal";
import { motion, useScroll, useTransform, useSpring, useMotionTemplate } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAndroidModalOpen, setIsAndroidModalOpen] = useState(false);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
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
  const baseBgOpacitySpring = useSpring(baseBgOpacity, { stiffness: 180, damping: 28, mass: 0.9 });
  const heroBgOpacitySpring = useSpring(heroBgOpacity, { stiffness: 180, damping: 28, mass: 0.9 });
  const pillBgOpacitySpring = useSpring(pillBgOpacity, { stiffness: 200, damping: 26, mass: 0.6 });
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
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-wit-light dark:bg-zinc-950"
        style={{ opacity: baseBgOpacity }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-wit-hero-gradient/80 supports-[backdrop-filter]:bg-wit-hero-gradient/70 dark:bg-black/30"
        style={{ opacity: heroBgOpacity, backdropFilter: useMotionTemplate`blur(${heroBackdropBlur})` }}
      />
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
            className="absolute inset-0 bg-wit-light dark:bg-zinc-950 pointer-events-none"
            style={{ opacity: baseBgOpacity, borderRadius: barRadius }}
          />
          <motion.div
            aria-hidden
            className="absolute inset-0 bg-wit-hero-gradient/80 supports-[backdrop-filter]:bg-wit-hero-gradient/70 dark:bg-black/30 pointer-events-none"
            style={{ opacity: heroBgOpacity, backdropFilter: useMotionTemplate`blur(${heroBackdropBlur})`, borderRadius: barRadius }}
          />
          <motion.div
            aria-hidden
            className="absolute inset-0 bg-white/80 ring-1 ring-black/5 backdrop-blur-xl dark:bg-zinc-900/80 dark:ring-white/10"
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

          {/* Join Waitlist */}
          <div className="hidden md:flex items-center space-x-2 pr-2 sm:pr-4">
            <BezelButton
              variant="dark"
              onClick={() => setIsWaitlistOpen(true)}
            >
              Join Waitlist
            </BezelButton>
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
            <div className={`${scrolled ? 'mx-3 mt-2 rounded-2xl shadow-lg ring-1 ring-black/5 bg-white text-zinc-900 dark:bg-neutral-900 dark:text-white dark:ring-white/10' : ''} px-2 pt-2 pb-3 space-y-1`}>
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
              <div className="px-3">
                <BezelButton
                  variant="plain"
                  className="w-full justify-between px-4 py-2 text-sm cursor-not-allowed pointer-events-none bg-white text-zinc-700 border-0 shadow-none after:opacity-0 dark:bg-zinc-800 dark:text-white"
                  disabled
                  aria-disabled
                >
                  <span className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                    <span className="font-semibold leading-none">Web</span>
                    <span className="flex items-center gap-1 text-[9px] uppercase tracking-[0.25em] rounded-full bg-zinc-200/80 px-2 py-[1px] text-zinc-600 dark:bg-zinc-700/70 dark:text-zinc-300">
                      <Sparkles className="h-3 w-3" />
                      Coming Soon
                    </span>
                  </span>
                </BezelButton>
              </div>
              <div className="pt-3 mt-3 space-y-3">
                <div className="mx-3">
                  <BezelButton
                    variant="dark"
                    className="w-full justify-center"
                    onClick={() => { setIsWaitlistOpen(true); setIsMenuOpen(false); }}
                  >
                    Join Waitlist
                  </BezelButton>
                </div>
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
      {/* Waitlist Modal */}
      <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </motion.header>
  );
}
