"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/ui/Stagger";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function Projects() {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="projects" className="max-w-[980px] px-6 py-16 md:px-12">
      <Reveal className="mb-1.5 flex items-center gap-2 font-mono text-xs text-text-dim">
        <span className="text-purple">const</span> section = &quot;projects&quot;
      </Reveal>
      <Reveal delay={0.08} className="mb-7 font-mono text-[clamp(24px,3vw,32px)] font-bold text-text">
        <span className="text-mint">##</span> Projects
      </Reveal>

      <StaggerGroup stagger={0.12} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <StaggerItem key={project.title} scale>
            <motion.div
              whileHover={
                reduced
                  ? undefined
                  : { y: -8, boxShadow: "0 24px 48px -18px rgba(177,140,245,0.35)", borderColor: "#b18cf5" }
              }
              transition={{ duration: 0.28, ease: [0.16, 0.8, 0.3, 1] }}
              className="h-full rounded-[10px] border border-border bg-surface px-6 py-5"
            >
              <div className="font-mono text-[11px] tracking-wide text-amber">{project.tag}</div>
              <h3 className="mb-2 mt-2 font-mono text-[17px] text-text">{project.title}</h3>
              <p className="mb-3.5 text-sm text-text-dim">{project.description}</p>
              <div className="mb-3.5 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-surface2 px-2 py-1 font-mono text-[11px] text-sky"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={reduced ? undefined : { x: 3 }}
                className="inline-block font-mono text-[12.5px] text-mint hover:underline"
              >
                ↗ {project.linkLabel}
              </motion.a>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
