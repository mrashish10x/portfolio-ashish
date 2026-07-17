"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeUpItem, scaleInItem, viewportOnce } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function StaggerGroup({
  children,
  className = "",
  stagger = 0.08,
  delayChildren = 0,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
}) {
  const reduced = usePrefersReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer(stagger, delayChildren)}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
  scale = false,
}: {
  children: ReactNode;
  className?: string;
  scale?: boolean;
}) {
  const reduced = usePrefersReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div className={className} variants={scale ? scaleInItem : fadeUpItem}>
      {children}
    </motion.div>
  );
}
