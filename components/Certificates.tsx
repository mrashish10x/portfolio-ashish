"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CERTIFICATES } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/ui/Stagger";
import { Lightbox } from "@/components/Lightbox";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function Certificates() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const reduced = usePrefersReducedMotion();

  return (
    <section id="certificates" className="max-w-[980px] px-6 py-16 md:px-12">
      <Reveal className="mb-1.5 flex items-center gap-2 font-mono text-xs text-text-dim">
        <span className="text-purple">const</span> section = &quot;certificates&quot;
      </Reveal>
      <Reveal delay={0.08} className="mb-2 font-mono text-[clamp(24px,3vw,32px)] font-bold text-text">
        <span className="text-purple">import</span> * <span className="text-purple">as</span>{" "}
        <span className="text-amber">certs</span> from <span className="text-mint">&quot;./certificates&quot;</span>
      </Reveal>
      <Reveal delay={0.14} className="mb-5 font-mono text-[12.5px] text-text-dim">
        <span className="text-purple">~/portfolio/</span>certificates{" "}
        <span className="text-purple">— 7 files</span>
      </Reveal>

      <StaggerGroup stagger={0.06} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CERTIFICATES.map((cert, i) => (
          <StaggerItem key={cert.file} scale>
            <motion.button
              onClick={() => setActiveIndex(i)}
              whileHover={reduced ? undefined : { y: -4, borderColor: "#6fe3b4" }}
              transition={{ duration: 0.22, ease: [0.16, 0.8, 0.3, 1] }}
              className="group relative w-full overflow-hidden rounded-[10px] border border-border bg-surface text-left"
            >
              <span className="absolute left-2 top-2 z-10 rounded bg-mint px-1.5 py-0.5 font-mono text-[10.5px] font-bold text-bg">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="relative h-[130px] w-full overflow-hidden border-b border-border bg-white">
                <Image
                  src={cert.src}
                  alt={`${cert.title} certificate`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col gap-1 px-3.5 py-3">
                <span className="font-mono text-[10.5px] text-text-dim">{cert.file}</span>
                <span className="font-sans text-[13.5px] font-semibold leading-snug text-text">
                  {cert.title}
                </span>
                <span className="font-mono text-[11px] text-sky">
                  {cert.issuer} · {cert.date}
                </span>
              </div>
            </motion.button>
          </StaggerItem>
        ))}
      </StaggerGroup>

      <Lightbox index={activeIndex} onClose={() => setActiveIndex(null)} onNavigate={setActiveIndex} />
    </section>
  );
}
