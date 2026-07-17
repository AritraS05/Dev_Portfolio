"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/utils/cn";

const RED = "#FA3C23";
const BLUE = "#0D8BFF";

// Absolute delays (seconds from mount). Everything below is a one-shot
// delayed animation — no state, no re-renders, no layout projection:
// the row opens continuously as each letter's width expands.
const T = {
  r1: 0.05,
  i: 0.3,
  t: 0.55,
  bar: 0.8, // red shape timeline starts (bar -> square -> blob keyframes)
  r2: 1.55,
  a: 1.95,
  settle: 3.05, // zoom-out "sits down" as the blob forms
} as const;

// Width of each letter's slot opens with barely any overshoot.
const OPEN = { type: "spring", duration: 0.45, bounce: 0.1 } as const;
// The glyph itself squash-grows from a visible bar with a soft bounce.
const GROW = { type: "spring", duration: 0.5, bounce: 0.18 } as const;

interface LetterSpec {
  char: string;
  delay: number;
  originY: string; // glyph top inside the 1em box, so the bar grows downward
  width: string; // measured glyph advance (em) — fixed so no runtime measuring
  selected?: boolean; // grows uniformly WITH its selection frame, like a layer
  hasDot?: boolean;
  stemGrow?: boolean; // rises from the baseline and overshoots tall before settling
}

// "aritra" -> a r i t r + a red blob standing in for the final "a".
// The dot of the "i" floats in above, then drops onto the stem (glyph is dotless ı).
// Widths are DM Sans w900 advances at -0.04em tracking, measured once.
const LETTERS: LetterSpec[] = [
  { char: "a", delay: T.a, originY: "31%", width: "0.558em", selected: true },
  { char: "r", delay: T.r1, originY: "31%", width: "0.381em" },
  { char: "ı", delay: T.i, originY: "31%", width: "0.24em", hasDot: true, stemGrow: true },
  { char: "t", delay: T.t, originY: "22%", width: "0.405em" },
  { char: "r", delay: T.r2, originY: "31%", width: "0.381em" },
];

// The selected letter and its frame scale up together from this origin.
const SELECT_ORIGIN = "50% 82%";

// Red shape: one keyframe timeline from cursor bar to rounded square to a
// blob just a touch taller than the lowercase letters. 4-token em radius
// keeps every step interpolable. Runs delay T.bar, duration 2.95s:
// times map to bar-hold -> square pop -> square hold -> blob morph.
const BLOB_TIMES = [0, 0.04, 0.152, 0.34, 0.763, 1];
const BLOB_KEYFRAMES = {
  width: ["0em", "0.13em", "0.13em", "1em", "1em", "0.66em"],
  height: ["1em", "1em", "1em", "0.95em", "0.95em", "0.66em"],
  borderRadius: [
    "0.06em 0.06em 0.06em 0.06em",
    "0.06em 0.06em 0.06em 0.06em",
    "0.06em 0.06em 0.06em 0.06em",
    "0.09em 0.09em 0.09em 0.09em",
    "0.09em 0.09em 0.09em 0.09em",
    "0.32em 0.32em 0.32em 0.06em",
  ],
};
const BLOB_EASES = ["easeOut", "linear", "backOut", "linear", [0.3, 0, 0.15, 1]];
const BLOB_FINAL = {
  width: "0.66em",
  height: "0.66em",
  borderRadius: "0.32em 0.32em 0.32em 0.06em",
};

// Selection handles: corners + edge midpoints, like a design tool.
const HANDLES: Array<[string, string]> = [
  ["0%", "0%"],
  ["50%", "0%"],
  ["100%", "0%"],
  ["0%", "50%"],
  ["100%", "50%"],
  ["0%", "100%"],
  ["50%", "100%"],
  ["100%", "100%"],
];

// Classic pointer with its tip at the SVG's top-left corner, so positioning
// the element positions the tip.
const CursorArrow = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <path
      d="M1 1 L1 18.5 L5.6 14.5 L8.5 20.8 L12 19.3 L9 13 L15 12.4 Z"
      fill="currentColor"
    />
  </svg>
);

interface Props {
  className?: string;
}

const AnimatedName: React.FC<Props> = ({ className }) => {
  const reduce = useReducedMotion();

  return (
    <div
      role="img"
      aria-label="aritra"
      className={cn(
        "relative select-none font-black lowercase tracking-[-0.04em]",
        "text-black dark:text-white text-[clamp(4.5rem,17vw,12rem)] leading-none",
        className
      )}
    >
      {/* The wordmark plays ~1.45x zoomed, then shrinks and "sits down" onto
          its baseline as the blob forms. */}
      <motion.div
        aria-hidden
        className="relative flex h-[1em] items-end justify-center"
        style={{ transformOrigin: "50% 86%" }}
        initial={reduce ? false : { scale: 1.45 }}
        animate={{ scale: 1 }}
        transition={
          reduce
            ? { duration: 0 }
            : { delay: T.settle, type: "spring", duration: 0.95, bounce: 0.16 }
        }
      >
        {LETTERS.map((letter, i) => (
          // The slot's width opens smoothly, pushing neighbours in a single
          // continuous reflow; the wrapper itself never scales, so the
          // decorations positioned against it stay crisp.
          <motion.span
            key={i}
            className="relative inline-block"
            initial={reduce ? false : { width: "0em" }}
            animate={{ width: letter.width }}
            transition={reduce ? { duration: 0 } : { delay: letter.delay, ...OPEN }}
          >
            <motion.span
              className="inline-block"
              style={{
                transformOrigin: letter.selected
                  ? SELECT_ORIGIN
                  : letter.stemGrow
                    ? "50% 87%"
                    : `50% ${letter.originY}`,
              }}
              initial={
                reduce
                  ? false
                  : letter.selected
                    ? { scale: 0.25, opacity: 0 }
                    : { scaleY: letter.stemGrow ? 0.12 : 0.22, opacity: 0 }
              }
              animate={
                letter.selected
                  ? { scale: 1, opacity: 1 }
                  : letter.stemGrow && !reduce
                    ? { scaleY: [0.12, 1.26, 0.96, 1], opacity: 1 }
                    : { scaleY: 1, opacity: 1 }
              }
              transition={
                reduce
                  ? { duration: 0 }
                  : letter.stemGrow
                    ? {
                        scaleY: {
                          delay: letter.delay,
                          duration: 0.65,
                          times: [0, 0.5, 0.78, 1],
                          ease: ["easeOut", "easeInOut", "easeInOut"],
                        },
                        opacity: { delay: letter.delay, duration: 0.1, ease: "easeOut" },
                      }
                    : {
                        scale: { delay: letter.delay, ...GROW },
                        scaleY: { delay: letter.delay, ...GROW },
                        opacity: { delay: letter.delay, duration: 0.1, ease: "easeOut" },
                      }
              }
            >
              {letter.char}
            </motion.span>

            {letter.hasDot && (
              <>
                {/* The dot pops in floating above the stem, then drops onto it. */}
                <span className="absolute left-1/2 top-[0.13em] ml-[-0.04em] block h-[0.14em] w-[0.14em]">
                  <motion.span
                    className="block h-full w-full rounded-full bg-current"
                    initial={reduce ? false : { scale: 0, opacity: 0, y: "-0.5em" }}
                    animate={
                      reduce
                        ? { scale: 1, opacity: 1, y: "0em" }
                        : {
                            scale: [0, 1.08, 1, 1, 1],
                            opacity: [0, 1, 1, 1, 1],
                            y: ["-0.5em", "-0.48em", "-0.46em", "0em", "0em"],
                          }
                    }
                    transition={
                      reduce
                        ? { duration: 0 }
                        : {
                            delay: letter.delay + 0.12,
                            duration: 0.75,
                            times: [0, 0.3, 0.45, 0.8, 1],
                            ease: ["backOut", "easeInOut", "easeIn", "easeOut"],
                          }
                    }
                  />
                </span>
              </>
            )}

            {letter.selected && (
              // "Selected layer" frame: fixed final size, scaling up with the
              // exact same spring/origin as the glyph so they move as one.
              <motion.span
                className="pointer-events-none absolute left-[-0.05em] top-[0.26em] block h-[0.66em] w-[0.658em]"
                style={{
                  borderWidth: "0.028em",
                  borderStyle: "solid",
                  borderColor: BLUE,
                  transformOrigin: SELECT_ORIGIN,
                }}
                initial={reduce ? false : { opacity: 0, scale: 0.25 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={
                  reduce
                    ? { duration: 0 }
                    : {
                        scale: { delay: letter.delay, ...GROW },
                        opacity: { delay: letter.delay, duration: 0.1, ease: "easeOut" },
                      }
                }
              >
                {HANDLES.map(([x, y], j) => (
                  <span
                    key={j}
                    className="absolute block h-[0.09em] w-[0.09em] bg-white"
                    style={{
                      left: x,
                      top: y,
                      transform: "translate(-50%, -50%)",
                      borderWidth: "0.018em",
                      borderStyle: "solid",
                      borderColor: BLUE,
                    }}
                  />
                ))}
              </motion.span>
            )}
          </motion.span>
        ))}

        {/* Final "a": cursor bar -> rounded square -> red blob, one timeline. */}
        <span className="relative z-[2] mb-[0.175em] ml-[0.05em] flex items-end self-end">
          <motion.span
            className="relative block"
            style={{ backgroundColor: RED }}
            initial={reduce ? false : { opacity: 0, width: "0em", height: "1em" }}
            animate={reduce ? BLOB_FINAL : { opacity: [0, 1, 1, 1, 1, 1], ...BLOB_KEYFRAMES }}
            transition={
              reduce
                ? { duration: 0 }
                : { delay: T.bar, duration: 2.95, times: BLOB_TIMES, ease: BLOB_EASES }
            }
          >
            {/* Anchor point just inside the corner while the square is "drawn". */}
            {!reduce && (
              <motion.span
                className="absolute right-[0.05em] top-[0.05em] block h-[0.13em] w-[0.13em] rounded-full bg-white"
                style={{ borderWidth: "0.04em", borderStyle: "solid", borderColor: BLUE }}
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.4, 0.4, 1, 1, 0.4] }}
                transition={{
                  delay: T.bar,
                  duration: 2.95,
                  times: [0, 0.152, 0.25, 0.93, 1],
                  ease: "easeOut",
                }}
              />
            )}
            {/* Cursor: slides in, pins its tip on the corner anchor, "drags"
                the corner as the square shrinks into the blob (it tracks the
                corner automatically via right/top), then releases into the
                blob, turns white and fades away. */}
            {!reduce && (
              <motion.span
                className="absolute right-[-0.185em] top-[0.115em] block h-[0.3em] w-[0.3em]"
                initial={{ opacity: 0, x: "0.25em", y: "0.3em", color: "#111111" }}
                animate={{
                  opacity: [0, 1, 1, 1, 1, 0],
                  x: ["0.25em", "0em", "0em", "-0.26em", "-0.26em", "-0.26em"],
                  y: ["0.3em", "0em", "0em", "0.2em", "0.2em", "0.2em"],
                  color: ["#111111", "#111111", "#111111", "#FFFFFF", "#FFFFFF", "#FFFFFF"],
                }}
                transition={{
                  delay: 2.55,
                  duration: 2.6,
                  times: [0, 0.12, 0.58, 0.71, 0.9, 1],
                  ease: "easeInOut",
                }}
              >
                <CursorArrow className="h-full w-full" />
              </motion.span>
            )}
          </motion.span>
        </span>

        {/* Short-lived accent shapes while the name types in. */}
        {!reduce && (
          <>
            <motion.span
              className="absolute right-[0.15em] top-[0.02em] block h-[0.09em] w-[0.34em] rounded-full"
              style={{ backgroundColor: BLUE }}
              initial={{ opacity: 0, x: "0.1em" }}
              animate={{ opacity: [0, 1, 1, 0], x: ["0.1em", "0em", "-0.02em", "-0.05em"] }}
              transition={{ delay: 1.35, duration: 1.4, times: [0, 0.2, 0.75, 1], ease: "easeInOut" }}
            />
          </>
        )}
      </motion.div>
    </div>
  );
};

export default AnimatedName;
