import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-y border-line bg-paper/50 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionHeading
          index="02"
          kicker="Skills"
          title="The toolkit."
          lead="What I reach for when building — grouped by where it fits in the stack."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.06}>
              <div className="group h-full rounded-2xl border border-line bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky hover:shadow-lift">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-xl text-ink">
                    {group.title}
                  </h3>
                  <span className="font-mono text-xs text-ink-faint">
                    0{gi + 1}
                  </span>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line bg-cream px-3 py-1.5 text-sm text-ink-soft transition-colors group-hover:border-indigo-soft"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
