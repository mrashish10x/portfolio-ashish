"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { STATS } from "@/lib/data";
import { useTypewriter } from "@/hooks/useTypewriter";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Button } from "@/components/ui/Button";
import { BackgroundBlobs } from "@/components/BackgroundBlobs";

export function Hero() {
  const reduced = usePrefersReducedMotion();
  const { output, done } = useTypewriter("Ashish Kumar", 75, 500, reduced);
  const sectionRef = useRef<HTMLElement>(null);

  // Subtle parallax: terminal + avatar drift slightly slower than scroll.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const terminalY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 60]);
  const avatarY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 110]);

  return (
    <section id="hero" ref={sectionRef} className="relative max-w-[980px] overflow-hidden px-6 pb-14 pt-14 md:px-12">
      <BackgroundBlobs />

      <motion.div
        style={{ y: terminalY }}
        initial={reduced ? undefined : { opacity: 0, y: 20 }}
        animate={reduced ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 0.8, 0.3, 1], delay: 0.05 }}
        className="relative rounded-[10px] border border-border bg-surface shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]"
      >
        {/* Floating avatar badge */}
        <motion.div
          style={{ y: avatarY }}
          initial={reduced ? undefined : { opacity: 0, scale: 0.7 }}
          animate={reduced ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 0.8, 0.3, 1], delay: 0.2 }}
          className="absolute -top-[34px] right-9 z-10 h-[82px] w-[82px] rounded-full bg-gradient-to-br from-purple via-mint to-sky p-[3px] shadow-[0_8px_24px_-6px_rgba(177,140,245,0.5)] md:right-9"
        >
          <div className={reduced ? "" : "animate-floaty"}>
            <Image
              src="/profile.jpg"
              alt="Ashish Kumar"
              width={82}
              height={82}
              priority
              className="h-full w-full rounded-full border-[3px] border-surface object-cover"
            />
          </div>
        </motion.div>

        <div className="flex items-center gap-2 border-b border-border bg-surface2 px-4 py-3">
          <span className="h-[11px] w-[11px] rounded-full bg-pink" />
          <span className="h-[11px] w-[11px] rounded-full bg-amber" />
          <span className="h-[11px] w-[11px] rounded-full bg-mint" />
          <span className="ml-2.5 font-mono text-xs text-text-dim">ashish@portfolio: ~</span>
        </div>

        <div className="px-[26px] py-8 font-mono">
          <div className="mb-1.5 text-[15px]">
            <span className="text-mint">ashish@portfolio</span>
            <span className="text-sky">:~$</span> <span className="text-text">whoami</span>
          </div>

          <div className="mt-3.5">
            <h1 className="gradient-text font-mono text-[clamp(32px,6vw,54px)] font-extrabold leading-[1.1]">
              {output}
              <span
                className={`ml-1 inline-block h-[0.9em] w-[9px] translate-y-[3px] bg-mint ${
                  done && !reduced ? "animate-blink" : ""
                }`}
              />
            </h1>
            <p className="mb-3.5 mt-1.5 text-[clamp(16px,2.4vw,20px)] text-amber">
              B.Tech IT Student &middot; Aspiring Software Developer
            </p>
            <p className="max-w-[560px] font-sans text-[15px] text-text-dim">
              Rajkiya Engineering College, Bijnor (AKTU) &middot; Class of 2029. Building things with
              C/C++, JavaScript and a growing DSA problem log — currently exploring full-stack dev and
              cybersecurity fundamentals.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-7">
            {STATS.map((stat) => (
              <div key={stat.label} className="font-mono text-[13px] text-text-dim">
                <b className="block text-[22px] font-bold text-text">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </b>
                {stat.label}
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="#certificates" variant="primary">
              → view certificates
            </Button>
            <Button href="mailto:your-email@example.com">✉ say hello</Button>
            <Button href="https://github.com/mrashish10x" target="_blank">
              ↗ github
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
