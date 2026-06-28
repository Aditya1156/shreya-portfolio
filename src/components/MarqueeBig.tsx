const words = [
  "Backend",
  "Full-Stack",
  "Node.js",
  "MongoDB",
  "REST APIs",
  "Problem Solving",
];

/** Oversized outline-text marquee — a bold graphic band between sections. */
export default function MarqueeBig({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="overflow-hidden border-y border-line bg-cream py-6 lg:py-10">
      <div
        className={`flex w-max ${reverse ? "animate-marquee-rev" : "animate-marquee"}`}
      >
        {[0, 1].map((dup) => (
          <div key={dup} className="flex items-center" aria-hidden={dup === 1}>
            {words.map((w, i) => (
              <span key={`${dup}-${w}`} className="flex items-center">
                <span
                  className={`font-display px-6 text-5xl font-light tracking-tight lg:text-8xl ${
                    i % 2 === 0 ? "text-ink" : "text-stroke-indigo"
                  }`}
                >
                  {w}
                </span>
                <span className="text-2xl text-indigo lg:text-4xl">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
