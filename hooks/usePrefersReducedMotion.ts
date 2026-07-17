"use client";

import { useEffect, useState } from "react";

/**
 * Returns true if the user's OS/browser has requested reduced motion.
 * Every motion-driven component in this project reads this hook and
 * swaps to instant/no-op transitions instead of animating — this is
 * the single source of truth for that accessibility behaviour.
 */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    query.addEventListener("change", handler);
    return () => query.removeEventListener("change", handler);
  }, []);

  return reduced;
}
