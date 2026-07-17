"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function SkillBar({ name, level }: { name: string; level: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const reduced = usePrefersReducedMotion();

  return (
    <div ref={ref} className="mb-3.5">
      <div className="mb-1.5 flex items-center justify-between font-mono text-[12.5px]">
        <span className="text-text">{name}</span>
        <span className="text-text-dim">{level}%</span>
      </div>
      <div className="h-[6px] w-full overflow-hidden rounded-full bg-surface2">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-purple via-sky to-mint"
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${level}%` : 0 }}
          transition={reduced ? { duration: 0 } : { duration: 1, ease: [0.16, 0.8, 0.3, 1], delay: 0.1 }}
        />
      </div>
    </div>
  );
}
