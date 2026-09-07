"use client";

import { motion } from "framer-motion";
import { CONTACT } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/ui/Stagger";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function Contact() {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="contact" className="max-w-[980px] px-6 py-16 md:px-12">
      <Reveal className="mb-1.5 flex items-center gap-2 font-mono text-xs text-text-dim">
        <span className="text-purple">const</span> section = &quot;contact&quot;
      </Reveal>
      <Reveal delay={0.08} className="mb-7 font-mono text-[clamp(24px,3vw,32px)] font-bold text-text">
        contact<span className="text-amber">.txt</span>
      </Reveal>

      <StaggerGroup
        stagger={0.06}
        className="rounded-[10px] border border-border bg-surface px-7 py-4 font-mono"
      >
        {CONTACT.map((row) => (
          <StaggerItem
            key={row.label}
            className="flex flex-wrap gap-2.5 border-b border-dashed border-border py-2.5 text-sm last:border-none"
          >
            <span className="min-w-[120px] text-text-dim">{row.label}</span>
            {row.href ? (
              <motion.a
                href={row.href}
                target={row.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                whileHover={reduced ? undefined : { x: 3, color: "#6fe3b4" }}
                className="text-sky"
              >
                {row.value}
              </motion.a>
            ) : (
              <span className="text-sky">{row.value}</span>
            )}
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
