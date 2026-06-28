import Reveal from "./Reveal";

type Props = {
  index: string;
  kicker: string;
  title: string;
  lead?: string;
};

/** Consistent editorial section header: index · kicker · serif title. */
export default function SectionHeading({ index, kicker, title, lead }: Props) {
  return (
    <div className="max-w-2xl">
      <Reveal>
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-ink-faint">{index}</span>
          <span className="h-px w-8 bg-line-strong" />
          <span className="kicker">{kicker}</span>
        </div>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="font-display mt-5 text-4xl font-light leading-[1.05] tracking-tight text-ink sm:text-5xl">
          {title}
        </h2>
      </Reveal>
      {lead && (
        <Reveal delay={0.1}>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft text-balance">
            {lead}
          </p>
        </Reveal>
      )}
    </div>
  );
}
