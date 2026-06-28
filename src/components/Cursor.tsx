"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

/** Trailing accent dot that grows over interactive elements. Desktop only. */
export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 38, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 38, mass: 0.4 });
  const [hover, setHover] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: Event) => {
      const t = e.target as HTMLElement;
      setHover(Boolean(t.closest?.("a, button, input, textarea, [data-cursor]")));
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerover", over);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[95] hidden lg:block"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        animate={{ scale: hover ? 2.6 : 1, opacity: hover ? 0.5 : 0.85 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="-ml-2.5 -mt-2.5 h-5 w-5 rounded-full bg-indigo mix-blend-multiply"
      />
    </motion.div>
  );
}
