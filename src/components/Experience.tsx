import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32"
    >
      <SectionHeading
        index="03"
        kicker="Experience"
        title="Where I've shipped."
        lead="Two internships, real products, production code reviewed by teams."
      />

      <div className="mt-16">
        {experiences.map((exp, i) => (
          <Reveal key={exp.company} delay={i * 0.05}>
            <article className="group grid gap-6 border-t border-line py-10 transition-all duration-300 hover:border-indigo/40 lg:grid-cols-12 lg:px-4 lg:hover:bg-paper/60">
              {/* meta */}
              <div className="lg:col-span-4">
                <p className="font-mono text-sm text-indigo">{exp.period}</p>
                <h3 className="font-display mt-3 text-2xl leading-tight text-ink transition-colors duration-300 group-hover:text-indigo">
                  {exp.company}
                </h3>
                <p className="mt-1 text-sm text-ink-soft">{exp.role}</p>
                <span className="mt-3 inline-block rounded-full bg-indigo-tint px-3 py-1 font-mono text-xs uppercase tracking-wider text-indigo-deep">
                  {exp.type}
                </span>
              </div>

              {/* detail */}
              <div className="lg:col-span-8">
                <p className="text-lg text-ink">{exp.summary}</p>
                <ul className="mt-5 space-y-3">
                  {exp.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-ink-soft"
                    >
                      <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-indigo" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-line px-2.5 py-1 font-mono text-xs text-ink-soft"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
        <div className="border-t border-line" />
      </div>
    </section>
  );
}
