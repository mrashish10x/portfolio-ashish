"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function AnimatedCounter({
  value,
  suffix = "",
  from,
}: {
  value: number;
  suffix?: string;
  /** starting number for the count-up; defaults to 0, or value-9 for years */
  from?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const reduced = usePrefersReducedMotion();

  const startValue = from ?? (value > 1000 ? value - 9 : 0);
  const motionValue = useMotionValue(startValue);
  const spring = useSpring(motionValue, { duration: 1.2, bounce: 0 } as any);

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  useEffect(() => {
    if (reduced && ref.current) ref.current.textContent = `${value}${suffix}`;
  }, [reduced, value, suffix]);

  useEffect(() => {
    if (reduced) return;
    return spring.on("change", (latest) => {
      if (ref.current) ref.current.textContent = `${Math.round(latest)}${suffix}`;
    });
  }, [spring, suffix, reduced]);

  return (
    <motion.span ref={ref}>
      {reduced ? `${value}${suffix}` : startValue}
    </motion.span>
  );
}
