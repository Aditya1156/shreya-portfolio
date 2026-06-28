"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

const text =
  "I care about software that's reliable, readable, and actually ships.".split(
    " "
  );

export default function Statement() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.5"],
  });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-br from-indigo-deep via-indigo to-[#5b6bf0] py-28 text-paper lg:py-44"
    >
      {/* glow + grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(60% 60% at 50% 0%, rgba(255,255,255,0.35), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
        <span className="kicker !text-sky">The approach</span>
        <p className="font-display mt-8 flex flex-wrap text-4xl font-light leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
          {text.map((w, i) => {
            const start = (i / text.length) * 0.9;
            const end = start + 0.12;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {w}
              </Word>
            );
          })}
        </p>
      </div>
    </section>
  );
}

function Word({
  progress,
  range,
  children,
}: {
  progress: MotionValue<number>;
  range: [number, number];
  children: string;
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.28em]">
      {children}
    </motion.span>
  );
}
