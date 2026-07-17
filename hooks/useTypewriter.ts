"use client";

import { useEffect, useState } from "react";

/**
 * Types `text` out one character at a time. Returns the text instantly
 * (no animation) when `skip` is true — used for prefers-reduced-motion.
 */
export function useTypewriter(text: string, speed = 70, startDelay = 300, skip = false) {
  const [output, setOutput] = useState(skip ? text : "");
  const [done, setDone] = useState(skip);

  useEffect(() => {
    if (skip) {
      setOutput(text);
      setDone(true);
      return;
    }
    let i = 0;
    let interval: number;
    const startTimer = window.setTimeout(() => {
      interval = window.setInterval(() => {
        i += 1;
        setOutput(text.slice(0, i));
        if (i >= text.length) {
          window.clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      window.clearTimeout(startTimer);
      window.clearInterval(interval);
    };
  }, [text, speed, startDelay, skip]);

  return { output, done };
}
