"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

const LINES = [
  "perfecting the 0.2s ease curve",
  "shipping side projects",
  "making TypeScript strict mode happy",
  "building things on Solana",
  "refactoring for fun, honestly",
];

const TYPE_MS = 55;
const DELETE_MS = 28;
const HOLD_MS = 1600;

const CurrentlyLine = ({ className = "" }: { className?: string }) => {
  const reduce = useReducedMotion();
  const [lineIndex, setLineIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const line = LINES[lineIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && length < line.length) {
      timeout = setTimeout(() => setLength(length + 1), TYPE_MS);
    } else if (!deleting && length === line.length) {
      timeout = setTimeout(() => setDeleting(true), HOLD_MS);
    } else if (deleting && length > 0) {
      timeout = setTimeout(() => setLength(length - 1), DELETE_MS);
    } else if (deleting && length === 0) {
      setDeleting(false);
      setLineIndex((lineIndex + 1) % LINES.length);
    }
    return () => clearTimeout(timeout);
  }, [length, deleting, lineIndex, reduce]);

  const text = reduce ? LINES[0] : LINES[lineIndex].slice(0, length);

  return (
    <p className={`text-center text-base text-neutral-500 md:text-lg ${className}`}>
      Currently {text}
      <span aria-hidden className="ml-[2px] inline-block h-[1.1em] w-[2px] translate-y-[0.2em] animate-pulse bg-[#FA3C23]" />
    </p>
  );
};

export default CurrentlyLine;
