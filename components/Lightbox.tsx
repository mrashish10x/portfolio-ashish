"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { CERTIFICATES } from "@/lib/data";

export function Lightbox({
  index,
  onClose,
  onNavigate,
}: {
  index: number | null;
  onClose: () => void;
  onNavigate: (next: number) => void;
}) {
  const isOpen = index !== null;

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen || index === null) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate((index - 1 + CERTIFICATES.length) % CERTIFICATES.length);
      if (e.key === "ArrowRight") onNavigate((index + 1) % CERTIFICATES.length);
    },
    [isOpen, index, onClose, onNavigate]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  const cert = index !== null ? CERTIFICATES[index] : null;

  return (
    <AnimatePresence>
      {isOpen && cert && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-6 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <button
            aria-label="Previous certificate"
            onClick={() => onNavigate((index! - 1 + CERTIFICATES.length) % CERTIFICATES.length)}
            className="absolute left-6 top-1/2 hidden h-10 w-10 -translate-y-1/2 rounded-full border border-border bg-surface font-mono text-text hover:border-mint sm:block"
          >
            ‹
          </button>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 0.8, 0.3, 1] }}
            className="w-full max-w-[800px] overflow-hidden rounded-xl border border-border bg-surface"
          >
            <div className="relative w-full bg-white" style={{ aspectRatio: "1080/720" }}>
              <Image src={cert.src} alt={cert.title} fill className="object-contain" />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
              <div>
                <h4 className="font-sans text-[15px] text-text">{cert.title}</h4>
                <span className="font-mono text-xs text-text-dim">
                  {cert.issuer} · {cert.date}
                </span>
              </div>
              <button
                onClick={onClose}
                className="rounded-md border border-border px-3.5 py-2 font-mono text-[13px] text-text-dim transition-colors hover:border-pink hover:text-pink"
              >
                close ✕
              </button>
            </div>
          </motion.div>

          <button
            aria-label="Next certificate"
            onClick={() => onNavigate((index! + 1) % CERTIFICATES.length)}
            className="absolute right-6 top-1/2 hidden h-10 w-10 -translate-y-1/2 rounded-full border border-border bg-surface font-mono text-text hover:border-mint sm:block"
          >
            ›
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
