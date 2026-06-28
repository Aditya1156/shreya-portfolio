import { profile, sections, socials } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-14 lg:px-10">
        <div className="flex flex-col justify-between gap-10 lg:flex-row">
          <div className="max-w-sm">
            <a href="#top" className="font-display text-2xl text-ink">
              {profile.name}
            </a>
            <p className="mt-3 leading-relaxed text-ink-soft">
              {profile.role} · {profile.focus}. Currently open to new
              opportunities.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <nav>
              <p className="kicker">Navigate</p>
              <ul className="mt-4 space-y-2">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="link-underline text-sm text-ink-soft hover:text-ink"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <nav className="col-span-1">
              <p className="kicker">Connect</p>
              <ul className="mt-4 space-y-2">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="link-underline text-sm text-ink-soft hover:text-ink"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-ink-faint">
            © {profile.name}. Built with Next.js & Tailwind.
          </p>
          <a
            href="#top"
            className="link-underline font-mono text-xs uppercase tracking-wider text-ink-faint hover:text-ink"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
