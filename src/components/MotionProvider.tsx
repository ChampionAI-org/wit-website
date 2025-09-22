"use client";
import React from "react";
import { MotionConfig } from "framer-motion";

export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="never" transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </MotionConfig>
  );
}


