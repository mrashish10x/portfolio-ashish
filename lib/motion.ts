import { Variants } from "framer-motion";

// Shared easing curve — a soft "premium" ease used across the whole site
// (close to what Linear/Vercel use: fast start, gentle settle).
export const EASE: [number, number, number, number] = [0.16, 0.8, 0.3, 1];

export function fadeUp(delay = 0): Variants {
  return {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: EASE, delay },
    },
  };
}

export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

export const scaleInItem: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: EASE } },
};

// Container that staggers its children — used for headings/paragraph groups,
// card grids and lists so they animate in sequence instead of all at once.
export function staggerContainer(stagger = 0.08, delayChildren = 0): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren,
      },
    },
  };
}

export const viewportOnce = { once: true, amount: 0.18, margin: "0px 0px -80px 0px" };
