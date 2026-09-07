"use client";

import { motion } from "framer-motion";
import { NAV_ITEMS } from "@/lib/data";
import { useActiveSection } from "@/hooks/useActiveSection";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const ids = NAV_ITEMS.map((i) => i.id);

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Tabbar() {
  const active = useActiveSection(ids);
  const reduced = usePrefersReducedMotion();

  return (
    <div className="sticky top-0 z-20 flex gap-0.5 overflow-x-auto border-b border-border bg-surface px-3">
      {NAV_ITEMS.map((item) => {
        const isActive = active === item.id;
        return (
          <button
            key={item.id}
            onClick={() => scrollToId(item.id)}
            className={`relative whitespace-nowrap px-4 py-3 font-mono text-[12.5px] transition-colors duration-150 ${
              isActive ? "text-text" : "text-text-dim hover:text-text"
            }`}
          >
            {item.label}
            {isActive && (
              <motion.span
                layoutId="tabbar-underline"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-amber"
                transition={reduced ? { duration: 0 } : { type: "spring", stiffness: 400, damping: 34 }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
