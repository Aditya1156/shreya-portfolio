"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

/** Intro curtain: counts 0 → 100, reveals the name, then wipes up. */
export default function Preloader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    let n = 0;
    const finish = () => {
      setDone(true);
      document.body.style.overflow = "";
    };
    const id = setInterval(() => {
      n = Math.min(100, n + Math.floor(Math.random() * 9) + 4);
      setCount(n);
      if (n >= 100) {
        clearInterval(id);
        setTimeout(finish, 550);
      }
    }, 110);
    // failsafe: never let the loader trap the page
    const failsafe = setTimeout(finish, 4000);
    return () => {
      clearInterval(id);
      clearTimeout(failsafe);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-cream px-6 py-10 lg:px-10"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-indigo" />
            <span className="kicker">{profile.role}</span>
          </div>

          <div className="flex flex-1 items-center">
            <h1 className="overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="font-display block text-[14vw] font-light leading-none tracking-tight text-ink lg:text-[9vw]"
              >
                {profile.name}
              </motion.span>
            </h1>
          </div>

          <div className="flex items-end justify-between">
            <span className="font-mono text-xs uppercase tracking-widest text-ink-faint">
              Loading portfolio
            </span>
            <span className="font-display text-5xl text-indigo lg:text-7xl">
              {count}
              <span className="text-2xl text-ink-faint">%</span>
            </span>
          </div>

          <div className="absolute inset-x-0 bottom-0 h-[3px] bg-line">
            <motion.div
              className="h-full bg-indigo"
              animate={{ width: `${count}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
