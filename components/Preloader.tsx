"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/**
 * Shows briefly on first load so the page never "pops in" — the terminal
 * spinner mirrors the IDE motif used throughout the site instead of a
 * generic spinner. Reduced-motion users skip straight past it.
 */
export function Preloader() {
  const reduced = usePrefersReducedMotion();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (reduced) {
      setLoading(false);
      return;
    }
    const timer = window.setTimeout(() => setLoading(false), 900);
    return () => window.clearTimeout(timer);
  }, [reduced]);

  if (reduced) return null;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 0.8, 0.3, 1] }}
        >
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-2 font-mono text-sm text-mint">
              <span>ashish@portfolio</span>
              <span className="text-text-dim">:~$</span>
              <TypingDots />
            </div>
            <div className="h-[3px] w-40 overflow-hidden rounded-full bg-surface2">
              <motion.div
                className="h-full bg-gradient-to-r from-purple via-sky to-mint"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 0.9, ease: "easeInOut", repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function TypingDots() {
  return (
    <span className="inline-flex">
      booting
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.2, repeat: Infinity }}
      >
        ...
      </motion.span>
    </span>
  );
}
