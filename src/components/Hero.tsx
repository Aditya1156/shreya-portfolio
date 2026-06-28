"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { profile, socials, stats } from "@/lib/data";
import { ambientVideo, img } from "@/lib/images";
import Magnetic from "./Magnetic";
import CountUp from "./CountUp";
import ParticleField from "./ParticleField";

const ease = [0.16, 1, 0.3, 1] as const;

const line1 = ["I", "build", "reliable", "backends"];
const line2: { t: string; cls?: string }[] = [
  { t: "and" },
  { t: "clean", cls: "italic text-indigo" },
  { t: "web" },
  { t: "experiences." },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};
const word = {
  hidden: { opacity: 0, y: "0.6em" },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

export default function Hero() {
  const mx = useMotionValue(50);
  const my = useMotionValue(40);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });

  function handleMouse(e: React.MouseEvent) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 100);
    my.set(((e.clientY - r.top) / r.height) * 100);
  }

  return (
    <section
      id="top"
      onMouseMove={handleMouse}
      className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center overflow-hidden px-6 pt-32 pb-20 lg:px-10"
    >
      {/* gradient mesh */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-20">
        <div className="animate-floaty absolute -left-24 top-10 h-80 w-80 rounded-full bg-sky/50 blur-3xl" />
        <div
          className="animate-floaty absolute right-0 top-44 h-96 w-96 rounded-full bg-indigo-soft blur-3xl"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="animate-floaty absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[#e9e3f7] blur-3xl"
          style={{ animationDelay: "3s" }}
        />
      </div>

      {/* particle constellation graphic */}
      <ParticleField className="pointer-events-none absolute inset-0 -z-10 h-full w-full" />

      {/* cursor spotlight */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 hidden lg:block"
        style={{ background: useSpotlight(sx, sy) }}
      />

      {/* rotating video badge */}
      <RotatingBadge />

      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="flex items-center gap-3"
        >
          {profile.available && (
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo" />
            </span>
          )}
          <span className="kicker">
            {profile.role} · {profile.location}
          </span>
        </motion.div>

        <h1 className="font-display mt-6 max-w-[15ch] font-light leading-[0.94] tracking-tight text-[clamp(2.9rem,8.4vw,6.7rem)]">
          <motion.span
            variants={container}
            initial="hidden"
            animate="show"
            className="block"
          >
            {line1.map((w, i) => (
              <motion.span key={i} variants={word} className="inline-block">
                {w}
                {i < line1.length - 1 ? " " : ""}
              </motion.span>
            ))}
          </motion.span>
          <motion.span
            variants={container}
            initial="hidden"
            animate="show"
            className="block"
          >
            {line2.map((w, i) => (
              <motion.span
                key={i}
                variants={word}
                className={`inline-block ${w.cls ?? ""}`}
              >
                {w.t}
                {i < line2.length - 1 ? " " : ""}
              </motion.span>
            ))}
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft"
        >
          {profile.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.82, ease }}
          className="mt-10 flex flex-wrap items-center gap-5"
        >
          <Magnetic className="inline-block">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper shadow-soft transition-colors hover:bg-indigo"
            >
              View my work
              <span className="transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
          </Magnetic>
          <a href="#contact" className="link-underline text-sm font-medium text-ink">
            Get in touch
          </a>
        </motion.div>

        {/* stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-14 flex flex-wrap gap-x-10 gap-y-6 border-t border-line pt-8"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="min-w-[110px]">
              <CountUp
                value={stat.value}
                className="font-display text-3xl text-ink lg:text-4xl"
              />
              <p className="mt-1 text-xs leading-snug text-ink-faint">
                {stat.label}
              </p>
            </div>
          ))}
          <div className="ml-auto flex flex-wrap items-end gap-x-6 gap-y-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="link-underline font-mono text-xs uppercase tracking-wider text-ink-faint hover:text-ink"
              >
                {s.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function RotatingBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, rotate: -30 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1, delay: 0.5, ease }}
      className="absolute right-8 top-28 hidden h-44 w-44 lg:block xl:right-10"
    >
      <div className="absolute inset-0 rounded-full border border-line bg-paper/70 backdrop-blur-sm" />
      <div className="absolute inset-[16%] overflow-hidden rounded-full">
        <video
          className="h-full w-full object-cover [filter:grayscale(1)_contrast(1.05)]"
          autoPlay
          muted
          loop
          playsInline
          poster={img.heroAbstract}
        >
          <source src={ambientVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-indigo mix-blend-color" />
        <div className="absolute inset-0 bg-indigo-deep/25" />
      </div>
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full animate-spin [animation-duration:22s]"
        aria-hidden
      >
        <defs>
          <path
            id="badgePath"
            d="M50,50 m-42,0 a42,42 0 1,1 84,0 a42,42 0 1,1 -84,0"
            fill="none"
          />
        </defs>
        <text className="fill-ink font-mono uppercase" style={{ fontSize: "5.4px", letterSpacing: "1.6px" }}>
          <textPath href="#badgePath">
            Open to work • Software Engineer • Backend •
          </textPath>
        </text>
      </svg>
    </motion.div>
  );
}

function useSpotlight(x: MotionValue<number>, y: MotionValue<number>) {
  return useTransform(
    [x, y],
    ([px, py]) =>
      `radial-gradient(600px circle at ${px}% ${py}%, rgba(59,78,224,0.10), transparent 70%)`
  );
}
