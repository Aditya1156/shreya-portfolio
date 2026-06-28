import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import TiltCard from "./TiltCard";
import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32"
    >
      <SectionHeading
        index="05"
        kicker="Credentials"
        title="Certified & verified."
        lead="Job simulations and certifications from teams whose products I'd want to build."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <Reveal key={cert.name} delay={(i % 3) * 0.06}>
            <TiltCard max={6} className="h-full">
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-paper p-6 transition-all duration-300 hover:border-indigo-soft hover:shadow-lift">
                <div className="flex items-start justify-between gap-3">
                  <span className="font-display text-lg text-indigo">
                    {cert.issuer}
                  </span>
                  <span className="font-mono text-xs text-ink-faint transition-colors group-hover:text-indigo">
                    ✦
                  </span>
                </div>
                <h3 className="mt-2 font-medium text-ink">{cert.name}</h3>
                <p className="mt-auto pt-4 font-mono text-xs leading-relaxed text-ink-faint">
                  {cert.detail}
                </p>
                <span className="mt-4 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-indigo to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
