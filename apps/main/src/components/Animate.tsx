"use client";
import React, { useEffect, useMemo, useState } from "react";
import { motion, Variants } from "framer-motion";

type Direction = "up" | "down" | "left" | "right" | "in";

interface AnimateProps {
  children: React.ReactNode;
  /** direction of entrance. "in" = pure fade */
  direction?: Direction;
  /** when to start: inView (default) or on mount */
  trigger?: "inView" | "mount";
  /** delay in seconds */
  delay?: number;
  /** distance in pixels for directional offset */
  distance?: number;
  /** duration in seconds */
  duration?: number;
  /** once per viewport */
  once?: boolean;
  /** className passthrough */
  className?: string;
  /** Avoid SSR flicker by deferring client render */
  defer?: boolean;
}

function getOffset(direction: Direction, distance: number) {
  switch (direction) {
    case "up":
      return { y: distance };
    case "down":
      return { y: -distance };
    case "left":
      return { x: distance };
    case "right":
      return { x: -distance };
    case "in":
    default:
      return {};
  }
}

export function AnimateIn({
  children,
  direction = "in",
  trigger = "inView",
  delay = 0,
  distance = 48,
  duration = 1.6,
  once = true,
  className,
  defer = true,
}: AnimateProps) {
  const hiddenOffset = getOffset(direction, distance);
  const initialStyle = useMemo(() => {
    const transformParts: string[] = [];
    if (typeof (hiddenOffset as any).x === "number") transformParts.push(`translateX(${(hiddenOffset as any).x}px)`);
    if (typeof (hiddenOffset as any).y === "number") transformParts.push(`translateY(${(hiddenOffset as any).y}px)`);
    const transform = transformParts.length ? transformParts.join(" ") : undefined;
    return { opacity: 0, transform } as React.CSSProperties;
  }, [hiddenOffset]);

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const variants: Variants = {
    hidden: { opacity: 0, ...hiddenOffset },
    show: { opacity: 1, x: 0, y: 0 },
  };

  if (defer && !isClient) {
    return (
      <div className={className} style={initialStyle}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      {...(trigger === "inView"
        ? { whileInView: "show", viewport: { once, amount: 0.4, margin: "0px 0px -10% 0px" } }
        : { animate: "show" })}
      transition={{ duration, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps extends Omit<AnimateProps, "children"> {
  children: React.ReactNode;
  /** base delay between children in seconds */
  stagger?: number;
}

export function StaggerIn({
  children,
  direction = "in",
  trigger = "inView",
  delay = 0,
  distance = 48,
  duration = 1.6,
  once = true,
  stagger = 0.3,
  className,
  defer = true,
}: StaggerProps) {
  const hiddenOffset = getOffset(direction, distance);
  const initialStyle = useMemo(() => {
    const transformParts: string[] = [];
    if (typeof (hiddenOffset as any).x === "number") transformParts.push(`translateX(${(hiddenOffset as any).x}px)`);
    if (typeof (hiddenOffset as any).y === "number") transformParts.push(`translateY(${(hiddenOffset as any).y}px)`);
    const transform = transformParts.length ? transformParts.join(" ") : undefined;
    return { opacity: 0, transform } as React.CSSProperties;
  }, [hiddenOffset]);

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };
  const item: Variants = {
    hidden: { opacity: 0, ...hiddenOffset },
    show: { opacity: 1, x: 0, y: 0, transition: { duration, ease: [0.22, 1, 0.36, 1] } },
  };

  if (defer && !isClient) {
    return (
      <div className={className} style={initialStyle}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      {...(trigger === "inView"
        ? { whileInView: "show", viewport: { once, margin: "-5% 0px -5% 0px" } }
        : { animate: "show" })}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={item}>{child}</motion.div>
      ))}
    </motion.div>
  );
}

export default AnimateIn;


