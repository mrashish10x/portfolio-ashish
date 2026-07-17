"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function MobileTopbar() {
  const reduced = usePrefersReducedMotion();
  return (
    <motion.div
      initial={reduced ? undefined : { y: -30, opacity: 0 }}
      animate={reduced ? undefined : { y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 0.8, 0.3, 1] }}
      className="sticky top-0 z-30 flex items-center justify-between border-b border-border bg-surface px-[18px] py-3.5 md:hidden"
    >
      <div className="flex items-center gap-2 font-mono text-[13px] text-text">
        <span className="h-2 w-2 rounded-full bg-mint" />
        ASHISH-KUMAR
      </div>
    </motion.div>
  );
}
