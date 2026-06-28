"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * Counts a numeric value up when scrolled into view.
 * Preserves any prefix/suffix ("280+", "8.9"); non-numeric values ("Div 3")
 * render as-is.
 */
export default function CountUp({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
  const [display, setDisplay] = useState(
    match ? `${match[1]}0${match[3]}` : value
  );

  useEffect(() => {
    if (!match) {
      setDisplay(value);
      return;
    }
    if (!inView) return;
    const prefix = match[1];
    const target = parseFloat(match[2]);
    const suffix = match[3];
    const decimals = match[2].includes(".")
      ? match[2].split(".")[1].length
      : 0;
    const controls = animate(0, target, {
      duration: 1.5,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(`${prefix}${v.toFixed(decimals)}${suffix}`),
    });
    return () => controls.stop();
  }, [inView, value]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
