# Shreya Sawarn — Portfolio

A single-page portfolio for Shreya Sawarn, built with a modern, production-grade stack and a custom editorial design system (soft indigo on warm off-white).

## Stack

- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS v4**
- **Framer Motion** — scroll reveals, micro-interactions
- Fonts: **Fraunces** (display serif), **Plus Jakarta Sans** (body), **JetBrains Mono** (labels)

## Run it

```bash
npm install      # already done
npm run dev      # start dev server → http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

> If port 3000 is busy, Next picks the next free port and prints the URL.

## Where to edit content

**Everything is in one file:** [`src/lib/data.ts`](src/lib/data.ts).
Update the profile, skills, experience, projects, certifications, and links there —
the whole site updates automatically. No need to touch the components for content changes.

## Highlights

- Animated **intro preloader** (counts 0→100, then curtain-wipes away)
- **Custom cursor** + live **particle-constellation** canvas in the hero (reacts to your mouse)
- Oversized kinetic typography, a **rotating circular video badge**, giant outline-text marquees
- A vivid-indigo **statement section** where text fills word-by-word on scroll
- **Pinned horizontal-scroll project gallery** on desktop (vertical stack on mobile)
- 3D-tilt cards, parallax images, count-up stats, magnetic buttons
- Auto-generated **favicon** and **social-share (OG) image**

## Structure

```
src/
├─ app/
│  ├─ layout.tsx            # fonts + SEO metadata
│  ├─ page.tsx              # assembles all sections
│  ├─ globals.css           # design tokens, theme, base styles
│  ├─ icon.svg              # favicon (monogram)
│  └─ opengraph-image.tsx   # generated share image
├─ components/
│  ├─ Preloader.tsx  Cursor.tsx  ScrollProgress.tsx
│  ├─ Nav.tsx        Hero.tsx    ParticleField.tsx
│  ├─ MarqueeBig.tsx About.tsx   Skills.tsx
│  ├─ Statement.tsx  Experience.tsx  Projects.tsx
│  ├─ Certifications.tsx  Contact.tsx  Footer.tsx
│  └─ (helpers) Reveal · SectionHeading · CountUp · Magnetic · TiltCard · ParallaxImage
└─ lib/
   ├─ data.ts              # ← all text content lives here
   └─ images.ts            # verified stock image URLs
```

Ambient background video: `public/ambient.mp4`.

## Deploy (free)

Push to GitHub, then import the repo at [vercel.com](https://vercel.com) — zero config, deploys on every push.

## Design notes

- Color: warm off-white `#f8f6f1`, ink `#14141c` (never pure black), indigo accent `#3b4ee0`.
- Deliberate touches to avoid a generic/AI feel: serif+sans+mono pairing, numbered sections,
  paper-grain texture, asymmetric hero, restrained motion (respects `prefers-reduced-motion`).
