"use client";

import { motion } from "framer-motion";
import { NAV_ITEMS, SOCIAL_LINKS } from "@/lib/data";
import { useActiveSection } from "@/hooks/useActiveSection";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const ids = NAV_ITEMS.map((i) => i.id);

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Sidebar() {
  const active = useActiveSection(ids);
  const reduced = usePrefersReducedMotion();

  return (
    <motion.nav
      aria-label="Section navigation"
      initial={reduced ? undefined : { x: -60, opacity: 0 }}
      animate={reduced ? undefined : { x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 0.8, 0.3, 1] }}
      className="sticky top-0 hidden h-screen w-[250px] flex-shrink-0 overflow-y-auto border-r border-border bg-surface py-5 md:block"
    >
      <div className="mb-3 flex items-center gap-2.5 border-b border-border px-[18px] pb-[18px]">
        <span className="h-2.5 w-2.5 rounded-full bg-mint shadow-[0_0_8px_theme(colors.mint)]" />
        <span className="font-mono text-[13px] tracking-wide text-text-dim">ASHISH-KUMAR</span>
      </div>

      <div className="px-[18px] py-1 font-mono text-[11px] uppercase tracking-widest text-text-dim">
        Portfolio
      </div>

      {NAV_ITEMS.map((item) => {
        const isActive = active === item.id;
        return (
          <button
            key={item.id}
            onClick={() => scrollToId(item.id)}
            className={`relative flex w-full items-center gap-2.5 border-l-2 px-[18px] py-2 text-left font-mono text-[13.5px] transition-colors duration-150 ${
              isActive ? "border-purple bg-surface2 text-text" : "border-transparent text-text-dim hover:bg-surface2 hover:text-text"
            }`}
          >
            {isActive && !reduced && (
              <motion.span
                layoutId="sidebar-active-pill"
                className="absolute inset-0 -z-10 border-l-2 border-purple bg-surface2"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span className="w-4 text-center text-[14px] opacity-85">{item.icon}</span>
            {item.label}
            {"badge" in item && item.badge && (
              <span className="ml-auto rounded-lg border border-border bg-surface px-1.5 py-px text-[10.5px] text-text-dim">
                {item.badge}
              </span>
            )}
          </button>
        );
      })}

      <div className="mt-6 flex flex-col gap-2 border-t border-border px-[18px] pt-3.5">
        {SOCIAL_LINKS.map((link) => (
          <motion.a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={reduced ? undefined : { x: 4, color: "#78c7f0" }}
            transition={{ duration: 0.18 }}
            className="py-1 font-mono text-xs text-text-dim"
          >
            ↳ {link.label}
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
}
