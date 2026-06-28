import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ParallaxImage from "./ParallaxImage";
import { about } from "@/lib/data";
import { img } from "@/lib/images";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32">
      <SectionHeading index="01" kicker="About" title="A short version." />

      <div className="mt-14 grid gap-12 lg:grid-cols-12">
        {/* Image */}
        <div className="lg:col-span-5">
          <Reveal>
            <div className="relative">
              <ParallaxImage
                src={img.workspace}
                alt="Developer workspace with code on screen"
                className="aspect-[4/5] rounded-[28px] border border-line shadow-lift"
                sizes="(max-width: 1024px) 100vw, 40vw"
                range={40}
              />
              {/* floating caption chip */}
              <div className="absolute -bottom-5 -right-3 rounded-2xl border border-line bg-paper px-5 py-3 shadow-soft">
                <p className="font-display text-lg leading-none text-ink">
                  3<span className="align-super text-xs">rd</span> year
                </p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-ink-faint">
                  Engineering · VTU
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Text + education */}
        <div className="lg:col-span-7">
          <div className="space-y-6">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p
                  className={`leading-relaxed text-ink-soft ${
                    i === 0 ? "text-xl text-ink" : "text-lg"
                  }`}
                >
                  {p}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12}>
            <div className="mt-8 rounded-3xl border border-line bg-paper p-7 shadow-soft">
              <span className="kicker">Education</span>
              <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl leading-tight text-ink">
                    {about.education.degree}
                  </h3>
                  <p className="mt-1 text-ink-soft">{about.education.school}</p>
                </div>
                <span className="rounded-full bg-indigo-tint px-4 py-1.5 font-mono text-sm text-indigo-deep">
                  {about.education.detail}
                </span>
              </div>
              <div className="mt-5 flex flex-wrap gap-x-8 gap-y-2 border-t border-line pt-5 text-sm">
                <Meta label="Location" value={about.education.place} />
                <Meta label="Timeline" value={about.education.period} />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="font-mono text-xs uppercase tracking-wider text-ink-faint">
        {label}
      </span>
      <span className="font-medium text-ink">{value}</span>
    </div>
  );
}
