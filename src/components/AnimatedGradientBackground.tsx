import React from "react";

/**
 * Full-viewport animated gradient background.
 * CSS-driven (see globals.css) for performance and zero extra deps.
 */
export default function AnimatedGradientBackground() {
  return (
    <div className="ag-container" aria-hidden>
      <div className="ag-layer ag-gradient" />
      <div className="ag-layer ag-bands" />
      <div className="ag-layer ag-glare" />
      <div className="ag-layer ag-sparkles" />
    </div>
  );
}



