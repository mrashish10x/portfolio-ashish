"use client";

import { MouseEvent, ReactNode, useRef } from "react";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  target?: string;
  className?: string;
};

/**
 * Ripple: on click we drop a positioned <span> at the pointer location and
 * let a CSS keyframe (`rippleAnim` in globals.css) scale + fade it out, then
 * remove it from the DOM after the animation finishes. Pure CSS keeps this
 * cheap — no per-frame JS work.
 */
export function Button({ href, children, variant = "ghost", target, className = "" }: ButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduced = usePrefersReducedMotion();

  function handleRipple(e: MouseEvent<HTMLAnchorElement>) {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const span = document.createElement("span");
    const size = Math.max(rect.width, rect.height);
    span.className = "ripple-span";
    span.style.width = span.style.height = `${size}px`;
    span.style.left = `${e.clientX - rect.left - size / 2}px`;
    span.style.top = `${e.clientY - rect.top - size / 2}px`;
    el.appendChild(span);
    window.setTimeout(() => span.remove(), 620);
  }

  const base =
    "ripple-container font-mono text-[13px] px-[18px] py-[11px] rounded-md border inline-block select-none";
  const variants = {
    primary: "glow-border bg-purple text-bg border-purple font-semibold",
    ghost: "text-text border-border hover:border-sky hover:text-sky",
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target={target}
      rel={target ? "noopener noreferrer" : undefined}
      onClick={handleRipple}
      whileHover={reduced ? undefined : { scale: 1.045, y: -2 }}
      whileTap={reduced ? undefined : { scale: 0.97 }}
      transition={{ duration: 0.18, ease: [0.16, 0.8, 0.3, 1] }}
      className={`${base} ${variants[variant]} ${className} transition-colors duration-200`}
    >
      {children}
    </motion.a>
  );
}
