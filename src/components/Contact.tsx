"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { profile, socials } from "@/lib/data";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${name || "someone"}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}\n${email}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section
      id="contact"
      className="border-t border-line bg-paper/50 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionHeading
          index="06"
          kicker="Contact"
          title="Let's build something."
          lead="Open to internship and new-grad software roles. Have a project or a question? Send a note."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-12">
          {/* Direct details */}
          <div className="lg:col-span-5">
            <Reveal>
              <a
                href={`mailto:${profile.email}`}
                className="group block"
              >
                <span className="kicker">Email</span>
                <p className="font-display mt-2 break-all text-2xl text-ink transition-colors group-hover:text-indigo sm:text-3xl">
                  {profile.email}
                </p>
              </a>

              <div className="mt-8 space-y-1">
                <span className="kicker">Phone</span>
                <p className="text-lg text-ink-soft">{profile.phone}</p>
              </div>

              <div className="mt-8">
                <span className="kicker">Elsewhere</span>
                <div className="mt-3 flex flex-wrap gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-line bg-paper px-4 py-2 text-sm text-ink-soft transition-all hover:-translate-y-0.5 hover:border-indigo hover:text-indigo"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl border border-line bg-paper p-7 shadow-soft lg:p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Name"
                    id="name"
                    value={name}
                    onChange={setName}
                    placeholder="Your name"
                  />
                  <Field
                    label="Email"
                    id="email"
                    type="email"
                    value={email}
                    onChange={setEmail}
                    placeholder="you@company.com"
                  />
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="message"
                    className="font-mono text-xs uppercase tracking-wider text-ink-faint"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me a little about the role or project…"
                    className="mt-2 w-full resize-none rounded-xl border border-line bg-cream px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-indigo"
                  />
                </div>
                <button
                  type="submit"
                  className="group mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-all hover:bg-indigo hover:shadow-lift"
                >
                  Send message
                  <span className="transition-transform group-hover:translate-x-1">
                    &rarr;
                  </span>
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  value,
  onChange,
  type = "text",
  placeholder,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="font-mono text-xs uppercase tracking-wider text-ink-faint"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-line bg-cream px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-indigo"
      />
    </div>
  );
}
