"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import TiltCard from "./TiltCard";
import CountUp from "./CountUp";
import { projects, socials, type Project } from "@/lib/data";
import { img } from "@/lib/images";

const covers = [img.serverNetwork, img.automation];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const [vh, setVh] = useState(0);

  useEffect(() => {
    const calc = () => {
      const isLg = window.matchMedia("(min-width: 1024px)").matches;
      if (!isLg || !trackRef.current) {
        setDistance(0);
        return;
      }
      setVh(window.innerHeight);
      setDistance(Math.max(0, trackRef.current.scrollWidth - window.innerWidth));
    };
    calc();
    const t = setTimeout(calc, 700); // recalc after fonts/images settle
    window.addEventListener("resize", calc);
    return () => {
      window.removeEventListener("resize", calc);
      clearTimeout(t);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: sectionRef });
  const xRaw = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const x = useSpring(xRaw, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <section id="work" className="border-t border-line bg-paper/50">
      {/* ── Desktop: pinned horizontal scroll ── */}
      <div
        ref={sectionRef}
        style={distance ? { height: distance + vh } : undefined}
        className="relative hidden lg:block"
      >
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex items-stretch gap-8 px-10 will-change-transform"
          >
            {/* intro panel */}
            <div className="flex w-[36vw] max-w-[480px] shrink-0 flex-col justify-center">
              <SectionHeading
                index="04"
                kicker="Projects"
                title="Things I've built."
                lead="Personal builds where I got to go deep — from low-level systems to automation."
              />
              <div className="mt-8 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-ink-faint">
                <span>Scroll to explore</span>
                <span className="text-indigo">⟶</span>
              </div>
            </div>

            {projects.map((project, i) => (
              <div key={project.title} className="w-[44vw] max-w-[640px] shrink-0">
                <ProjectCard project={project} cover={covers[i]} index={i} />
              </div>
            ))}

            <div className="w-[62vw] max-w-[860px] shrink-0">
              <CompetitivePanel />
            </div>

            {/* outro / CTA panel */}
            <div className="flex w-[34vw] max-w-[440px] shrink-0 flex-col justify-center">
              <span className="kicker">More</span>
              <h3 className="font-display mt-4 text-4xl font-light leading-tight text-ink">
                There&rsquo;s more on GitHub.
              </h3>
              <p className="mt-4 text-ink-soft">
                Source, commits, and experiments live on my profile.
              </p>
              <a
                href={socials[0].href}
                target="_blank"
                rel="noreferrer"
                className="group mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-indigo"
              >
                Visit GitHub
                <span className="transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Mobile / tablet: vertical stack fallback ── */}
      <div className="px-6 py-24 lg:hidden">
        <SectionHeading
          index="04"
          kicker="Projects"
          title="Things I've built."
          lead="Personal builds where I got to go deep — from low-level systems to automation."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.08}>
              <ProjectCard project={project} cover={covers[i]} index={i} />
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <div className="mt-6">
            <CompetitivePanel />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  cover,
  index,
}: {
  project: Project;
  cover: string;
  index: number;
}) {
  return (
    <TiltCard className="group h-full" max={4}>
      <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-paper shadow-soft transition-shadow duration-300 hover:shadow-lift">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={cover}
            alt={`${project.title} cover`}
            fill
            sizes="(max-width: 1024px) 100vw, 640px"
            className="object-cover grayscale-[0.3] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
          <div className="absolute inset-0 bg-indigo/15 mix-blend-multiply" />
          <span className="absolute left-5 top-5 rounded-full bg-white/15 px-3 py-1 font-mono text-xs uppercase tracking-wider text-white backdrop-blur-md">
            {project.kind}
          </span>
          <span className="absolute bottom-4 right-5 font-mono text-xs text-white/70">
            0{index + 1}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-7">
          <h3 className="font-display text-2xl leading-tight text-ink">
            {project.title}
          </h3>
          <p className="mt-3 leading-relaxed text-ink-soft">{project.blurb}</p>

          <ul className="mt-5 space-y-2.5">
            {project.points.map((point) => (
              <li key={point} className="flex gap-3 text-sm text-ink-soft">
                <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-indigo" />
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap gap-2 pt-6">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-md bg-indigo-tint px-2.5 py-1 font-mono text-xs text-indigo-deep"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </article>
    </TiltCard>
  );
}

function CompetitivePanel() {
  return (
    <div className="relative h-full overflow-hidden rounded-3xl border border-line text-paper">
      <Image
        src={img.matrixCode}
        alt="Code background"
        fill
        sizes="(max-width: 1024px) 100vw, 860px"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-ink/85" />
      <div className="absolute inset-0 bg-indigo-deep/30 mix-blend-multiply" />

      <div className="relative grid h-full items-center gap-6 p-8 sm:grid-cols-2 lg:p-12">
        <div>
          <span className="kicker !text-sky">Competitive Programming</span>
          <h3 className="font-display mt-4 text-3xl leading-tight">
            Sharp on the fundamentals.
          </h3>
          <p className="mt-3 max-w-md leading-relaxed text-paper/70">
            Consistent practice keeps data structures and problem-solving second
            nature — the groundwork that makes everything else faster.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/15">
          <div className="bg-ink/60 p-6 backdrop-blur-sm">
            <CountUp value="280+" className="font-display text-4xl text-white" />
            <p className="mt-1 text-sm text-paper/70">LeetCode solved</p>
            <p className="mt-3 font-mono text-xs text-paper/40">
              Arrays · DP · Trees · Linked Lists
            </p>
          </div>
          <div className="bg-ink/60 p-6 backdrop-blur-sm">
            <div className="font-display text-4xl text-white">Div 3</div>
            <p className="mt-1 text-sm text-paper/70">CodeChef</p>
            <p className="mt-3 font-mono text-xs text-paper/40">Rated contests</p>
          </div>
        </div>
      </div>
    </div>
  );
}
