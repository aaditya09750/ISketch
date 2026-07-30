# AGENTS.md

> Standardised instructions for AI coding agents working on this repository.
> Compatible with Claude Code, OpenAI Codex, Cursor, Aider, Jules, Sourcegraph
> Amp, Continue, Windsurf, and any other agent that reads the `AGENTS.md`
> convention (see [agents.md](https://agents.md)).
>
> If you are an agent: **read this file before taking any action**. It is the
> single source of truth for setup, conventions, architecture, and guardrails
> in this codebase. Treat it as the project owner speaking to you directly.

---

## 1. Project Overview

**ISketch Interiors** is a production-grade marketing portfolio for a luxury
interior design studio. It is a **statically-driven, content-first website** —
there is no CMS, no database, no API routes, no authentication, and no user
input. All content lives in typed TypeScript files under [`data/`](data/).

- **Live purpose:** lead generation through portfolio showcase and contact CTAs.
- **Deployment target:** Vercel (Edge + ISR-ready).
- **Audience:** high-end residential and international clients (UK, UAE,
  Monaco, Singapore).
- **Author:** Aaditya Gunjal (Full Stack Developer).
- **License:** MIT (see [LICENSE](LICENSE)).

The site is intentionally lean: cinematic visuals, sub-second LCP targets, and
zero server-side attack surface. Optimise every change for **performance,
accessibility, and SEO** — in that order.

---

## 2. Tech Stack (authoritative versions)

| Layer             | Tool                                          | Version          | Notes                                                                  |
| ----------------- | --------------------------------------------- | ---------------- | ---------------------------------------------------------------------- |
| Framework         | Next.js                                       | `16.1.6`         | App Router only — no `pages/` directory                                |
| UI runtime        | React                                         | `19.2.4`         | Server Components by default                                           |
| Language          | TypeScript                                    | `5.7.3`          | `strict: true` in [tsconfig.json](tsconfig.json)                       |
| Styling           | Tailwind CSS                                  | `4.2.0`          | v4 engine via `@tailwindcss/postcss`                                   |
| Animation         | Framer Motion                                 | `12.38.0`        | Declarative + scroll-driven                                            |
| Smooth scroll     | Lenis                                         | `1.3.19`         | Disabled under `prefers-reduced-motion`                                |
| UI primitives     | Radix UI + shadcn/ui                          | latest           | `new-york` style, RSC enabled                                          |
| Forms (if needed) | React Hook Form + Zod                         | latest           | Currently unused — no forms shipped                                    |
| Icons             | Lucide React                                  | `0.564.0`        | Tree-shakeable                                                         |
| Carousel          | Embla Carousel React                          | `8.6.0`          | Touch-friendly                                                         |
| Analytics         | `@vercel/analytics`, `@vercel/speed-insights` | `1.6.1`, `2.0.0` | Auto-injected in [app/layout.tsx](app/layout.tsx)                      |
| Package manager   | **pnpm**                                      | —                | Lockfile is [pnpm-lock.yaml](pnpm-lock.yaml). **Do not** use npm/yarn. |
| Node              | —                                             | `>= 22`          | Required by Next 16                                                    |

When upgrading any dependency, update this table in the same commit.

---

## 3. Setup Commands

```bash
pnpm install              # install dependencies (always use pnpm)
pnpm dev                  # start dev server at http://localhost:3000
pnpm build                # production build
pnpm start                # serve production build locally
pnpm lint                 # run ESLint (eslint .)
npx tsc --noEmit          # type-check without emitting files
```

> `next.config.mjs` sets `ignoreBuildErrors: true` — **TypeScript errors do
> NOT fail `pnpm build`**. Always run `npx tsc --noEmit` before committing or
> claiming a task is done.

### First-time setup checklist for an agent

1. Run `pnpm install`. If it fails, do **not** fall back to `npm install` —
   ask the user; the lockfile is pnpm.
2. Copy [`.env.example`](.env.example) → `.env.local` (no required vars today).
3. Run `pnpm dev` and confirm the homepage renders at `http://localhost:3000`.
4. Run `pnpm lint` and `npx tsc --noEmit` to establish a clean baseline before
   any edit.

---

## 4. Repository Layout

```
ISketch/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout — fonts, metadata, providers, JSON-LD
│   ├── globals.css               # Tailwind v4 config + CSS variables + custom keyframes
│   ├── sitemap.ts                # Dynamic XML sitemap (16 URLs)
│   ├── robots.ts                 # robots.txt
│   ├── not-found.tsx             # Custom 404
│   ├── maintenance/              # Maintenance page (served by middleware)
│   ├── _components/              # App-level shared components (not route-bound)
│   │
│   ├── (marketing)/              # Route group — indexable business pages
│   │   ├── page.tsx              # Home
│   │   ├── loading.tsx           # Loading UI for the segment
│   │   ├── error.tsx             # Error boundary with retry
│   │   ├── _components/          # HOME-only sections (hero, about, projects, contact)
│   │   ├── about/                # /about + its _components
│   │   ├── services/             # /services + its _components
│   │   ├── portfolio/            # /portfolio + [slug] (SSG)
│   │   ├── projects/             # /projects (parallax showcase)
│   │   └── contact/              # /contact
│   │
│   └── (legal)/                  # Route group — noindex legal pages
│       ├── _components/          # Shared LegalPageLayout
│       ├── privacy-policy/
│       └── terms-conditions/
│
├── components/
│   ├── layout/                   # App-shell: header, footer, layout-shell, whatsapp-button
│   ├── providers/                # React Context: layout-context, smooth-scroll
│   └── shared/                   # Cross-page reusable: container, fancy-button, isketch-logo,
│                                 # page-heading, section-heading, project-card, image-lightbox,
│                                 # reveal-image, structured-data, cta-section
│
├── data/                         # Typed static content (the "CMS")
│   ├── projects.ts               # 9 portfolio projects + detail objects
│   ├── services.ts               # 4 services + 4-step process
│   ├── about.ts                  # Values, awards, publications
│   ├── contact.ts                # NAP (name/address/phone) — single source of truth
│   ├── navigation.ts             # Nav links + social links
│   ├── legal.ts                  # Privacy + terms section bodies
│   └── index.ts                  # Barrel exports
│
├── hooks/
│   ├── use-image-ready.ts        # IntersectionObserver + img.decode() + 3s fallback
│   └── use-intersection.ts       # Shared observer singleton (one per threshold)
│
├── lib/
│   ├── utils.ts                  # cn() helper — clsx + tailwind-merge
│   └── schema.ts                 # JSON-LD generators (pure functions, no React)
│
├── types/index.ts                # Shared TypeScript types (NavLink, ProjectDetail, Service, …)
│
├── public/                       # Static assets
│   ├── images/                   # Optimised AVIF/WebP project & hero images
│   ├── videos/                   # 4 hero videos (hero-1..hero-4.mp4)
│   ├── fonts/                    # Iowan Old Style WOFF2 (6 variants)
│   ├── logos/                    # Brand marks
│   ├── icon.svg                  # Favicon
│   └── llms.txt                  # Guidance for AI crawlers
│
├── middleware.ts                 # Sitewide maintenance-mode rewrite
├── next.config.mjs               # Image formats, cache headers, security headers
├── tsconfig.json                 # strict TS, @/* path alias maps to project root
├── components.json               # shadcn/ui config (style: new-york, rsc: true)
├── README.md                     # Human-facing documentation
└── AGENTS.md                     # ← you are here (single source of truth for AI agents)
```

### Where to put new things

| You are adding…                      | Put it in…                                                       |
| ------------------------------------ | ---------------------------------------------------------------- |
| A new top-level page                 | `app/(marketing)/<route>/page.tsx`                               |
| Components used **only** by one page | `app/(marketing)/<route>/_components/`                           |
| Components reused across pages       | `components/shared/`                                             |
| App-shell chrome (nav, footer, FAB)  | `components/layout/`                                             |
| A React Context provider             | `components/providers/`                                          |
| Static content (projects, copy)      | `data/<topic>.ts` and export from `data/index.ts`                |
| A shared type                        | `types/index.ts`                                                 |
| A custom hook                        | `hooks/use-<name>.ts` (kebab-case file, camelCase export)        |
| A pure helper or schema generator    | `lib/`                                                           |
| A legal page                         | `app/(legal)/<route>/page.tsx` + section data in `data/legal.ts` |

---

## 5. Code Style & Conventions

### General

- **TypeScript everywhere.** No `.js`/`.jsx` source files. `allowJs` is on for
  legacy compat only.
- **Strict mode is on.** No `any`. Prefer `unknown` + narrowing, or define a
  type in [`types/index.ts`](types/index.ts).
- **Path alias:** `@/*` → project root. Use `@/components/shared/container`,
  never `../../components/shared/container`.
- **File naming:** kebab-case for files (`project-card.tsx`), PascalCase for
  React component exports (`ProjectCard`), camelCase for hooks and utilities.
- **Barrel files** (`index.ts`) exist in `_components/`, `components/*/`,
  and `data/`. Add new exports to the relevant barrel.
- **Imports:** sort by external → `@/` aliases → relative. No unused imports.
- **Quotes:** double quotes in TS/JSX (matches existing files).
- **Semicolons:** the codebase is mixed. Match the file you're editing; do
  **not** mass-reformat existing files.

### Components

- **Server Components by default.** Only add `"use client"` when you need:
  browser APIs, event handlers, state, refs, or hooks like `useEffect`.
- A client boundary should be **as deep in the tree as possible** — split the
  page into a server shell that imports a small client island, not the
  inverse.
- Examples of server components in this repo: `container`, `section-heading`,
  `projects-section`, `contact-section`, `fancy-button`, `isketch-logo`,
  `structured-data`.
- Examples of legitimate client components: `header` (scroll), `hero-section`
  (video playback), `image-lightbox` (touch gestures), `smooth-scroll`
  (Lenis), anything using `IntersectionObserver`.

### Styling

- **Tailwind v4 utility-first.** No CSS Modules, no styled-components, no
  inline `<style>` tags.
- Compose conditional classes with `cn()` from [`lib/utils.ts`](lib/utils.ts):

  ```tsx
  import { cn } from "@/lib/utils"
  ;<div className={cn("base-class", isActive && "active-class", className)} />
  ```

- **Design tokens live in [`app/globals.css`](app/globals.css)** as CSS
  custom properties in oklch colour space. Reference them via Tailwind
  (`bg-primary`, `text-secondary`) — do **not** hardcode hex/rgb in JSX.
- Custom keyframes (`wipeSlide`, `gentleBounce`, `fadeUp`, `marquee`) are
  defined in `globals.css`. Reuse before inventing new ones.
- Dark-mode variables are already defined; new components must work in both
  themes without extra effort.

### Animation

- Use **Framer Motion** for declarative + scroll-driven animation
  (`motion.*`, `AnimatePresence`, `useScroll`, `useTransform`).
- Use **CSS keyframes** for simple, always-on effects (marquee, bounce).
- **Always** respect `prefers-reduced-motion`. Either:
  - guard with the media query in CSS, or
  - early-return the animation in the hook (see how `smooth-scroll.tsx`
    handles Lenis).
- Reuse the shared `useIntersection` singleton — do not instantiate
  `new IntersectionObserver()` in components. The singleton already
  deduplicates by threshold across the entire app (≈20 → 1 observer).

### Comments

- **Default to no comments.** Well-named identifiers explain the _what_.
- Write a comment only when the _why_ is non-obvious: a subtle invariant, a
  perf workaround, a browser quirk. The hero section and `useImageReady`
  hook are good examples of warranted comments.
- Do **not** leave `// TODO`, `// removed X`, or PR-context comments in code.

---

## 6. Architecture & Key Patterns

### Data flow

The site has **no backend**. Content flows one-way:

```
data/*.ts  →  page.tsx (Server Component)  →  HTML at build time
```

- `app/(marketing)/portfolio/[slug]/page.tsx` uses `generateStaticParams()`
  to SSG every project at build time.
- `generateMetadata()` produces per-page SEO. Use it on every new route.
- Layout chrome visibility (used by `not-found.tsx`) is coordinated through
  `LayoutContext` in [`components/providers/layout-context.tsx`](components/providers/layout-context.tsx).

### Image-reveal pattern

The signature visual effect of the site. Implemented by
[`hooks/use-image-ready.ts`](hooks/use-image-ready.ts):

1. `useIntersection` reports when the element enters the viewport.
2. `img.decode()` reports when the image is decoded and paint-ready.
3. `shouldReveal = isInView && isImageReady` — wipe-reveal only when both
   are true.
4. A 3 s fallback guarantees the image eventually appears even if `decode()`
   never resolves (broken image, etc.).

When you add a new image-heavy component, **use `useImageReady`** rather than
rolling your own loading logic.

### Double-buffered hero video

`app/(marketing)/_components/hero-section.tsx` keeps two `<video>` elements
mounted (A and B) and crossfades opacity for seamless transitions. Video B
preloading is deferred until Video A reaches 50% playback. Do not regress
this pattern when editing the hero.

### SEO architecture

| Concern                              | Owner                                                                                                  |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `metadataBase`, default OG / Twitter | [`app/layout.tsx`](app/layout.tsx)                                                                     |
| Per-page metadata                    | each `page.tsx` via `generateMetadata`                                                                 |
| JSON-LD schema generators            | [`lib/schema.ts`](lib/schema.ts)                                                                       |
| JSON-LD rendering                    | `<StructuredData>` in [`components/shared/structured-data.tsx`](components/shared/structured-data.tsx) |
| Sitemap                              | [`app/sitemap.ts`](app/sitemap.ts) (dynamic, currently 16 URLs)                                        |
| robots                               | [`app/robots.ts`](app/robots.ts)                                                                       |
| AI crawler guidance                  | [`public/llms.txt`](public/llms.txt)                                                                   |

Schemas in use today: `InteriorDesigner` (root), `WebSite` (root),
`BreadcrumbList` (subpages), `Service` ×4 (services page), `CreativeWork` ×6
(portfolio detail). When adding a new route, decide which schema applies and
add it via `lib/schema.ts` rather than inlining JSON-LD.

Legal pages are **`noindex`** — they must not compete with business pages in
search results.

### Performance contract

These are load-bearing optimisations. Do not regress them without a written
reason.

- **Shared IntersectionObserver singleton** (`hooks/use-intersection.ts`) —
  one observer per threshold, reused across all components.
- **`content-visibility: auto`** on below-fold sections in `globals.css`.
- **Image formats:** AVIF + WebP only, qualities 75/90, 1-year immutable
  cache. Configured in [`next.config.mjs`](next.config.mjs).
- **WOFF2 fonts** with `font-display: swap` declared in `app/layout.tsx`.
- **Hashed JS/CSS** via Next.js default — never disable.
- **Security headers** set globally in `next.config.mjs` (HSTS, XCTO, XFO,
  Referrer-Policy, Permissions-Policy). Do not remove.

---

## 7. Routing Conventions

- App Router only. Server Components by default.
- Route groups `(marketing)` and `(legal)` segment the URL space without
  appearing in URLs.
- Page-private components go in a sibling `_components/` directory
  (underscore-prefixed dirs are **not** treated as routes by Next).
- Dynamic routes use `[slug]`; provide `generateStaticParams` so the page is
  fully SSG at build time.
- Every new public route must:
  1. Export `metadata` (or `generateMetadata`).
  2. Be added to [`app/sitemap.ts`](app/sitemap.ts).
  3. Get a `BreadcrumbList` JSON-LD via `lib/schema.ts` if it is a subpage.
  4. Be linkable from at least one nav surface (header, footer, or a hub
     page).

---

## 8. Common Tasks (Recipes)

### Add a new portfolio project

1. Drop the image(s) into [`public/images/`](public/images/) (AVIF or WebP
   preferred, ≥ 1920 px wide for hero use).
2. Append a summary to `portfolioProjects` in [`data/projects.ts`](data/projects.ts).
3. Add the full `ProjectDetail` entry to `projectDetails` in the same file —
   the type in [`types/index.ts`](types/index.ts) lists every required field.
4. Update `prevProject` / `nextProject` slugs on the new entry **and** its
   neighbours.
5. No further wiring needed — the sitemap, SSG, portfolio grid, and project
   detail page all derive from this data.

### Add a new service

1. Append to `services` in [`data/services.ts`](data/services.ts) following the
   `Service` shape from [`types/index.ts`](types/index.ts).
2. If it should appear in JSON-LD, add a corresponding `Service` schema via
   `getServiceSchema()` in [`lib/schema.ts`](lib/schema.ts).

### Add a new top-level page

1. Create `app/(marketing)/<route>/page.tsx`.
2. Export `metadata` with title, description, and `alternates.canonical`.
3. Add the route URL to [`app/sitemap.ts`](app/sitemap.ts).
4. Add a nav entry in [`data/navigation.ts`](data/navigation.ts) if
   appropriate.
5. If it has subpages, add `BreadcrumbList` JSON-LD.

### Update studio NAP (name / address / phone)

Edit [`data/contact.ts`](data/contact.ts). It is the single source of truth —
contact page, footer, JSON-LD, and WhatsApp button all read from it.

### Change the colour palette

Edit the `:root` and `.dark` blocks in [`app/globals.css`](app/globals.css).
All colours are oklch CSS custom properties referenced by Tailwind utility
classes. Do not introduce hex/rgb literals into components.

### Enable / disable maintenance mode

Set `MAINTENANCE_MODE=true` in the environment (Vercel project → Settings →
Environment Variables, or `.env.local` locally). [`middleware.ts`](middleware.ts)
rewrites every non-asset route to `/maintenance` while sending `Retry-After:
3600` so crawlers do not de-index. Static assets, `/api/*`, `_next/*`,
`robots.txt`, `sitemap.xml`, and favicons are always reachable.

---

## 9. Validation Before You Finish

There is **no automated test suite** in this repo. Treat the following as a
mandatory pre-commit checklist for any non-trivial change:

```bash
pnpm lint                 # must pass
npx tsc --noEmit          # must pass (build does not enforce this)
pnpm build                # must succeed
```

In addition, for any UI change:

1. Run `pnpm dev` and exercise the change in a browser.
2. Check both desktop (≥ `lg`) and mobile (`sm`) breakpoints — the site uses
   Tailwind's default breakpoints and the responsive split is meaningful
   (e.g. `services-process-section` has different desktop vs mobile layouts).
3. Toggle `prefers-reduced-motion: reduce` (DevTools → Rendering) and verify
   nothing breaks.
4. Open DevTools Console — there should be no errors or warnings introduced
   by your change.
5. For Lighthouse-relevant changes, check Performance, Accessibility, and
   SEO scores in the Lighthouse panel.

If you cannot run the dev server (e.g. headless agent environment), say so
explicitly in your report — **do not claim a UI change works without
visual verification**.

---

## 10. Things to Avoid

- ❌ Adding `npm install` / `yarn install` commands or a non-pnpm lockfile.
- ❌ Introducing a CSS-in-JS library, CSS Modules, or `<style>` tags.
- ❌ Adding a database, ORM, API route, or authentication system. The site
  is intentionally static. If a feature requires it (e.g. contact form),
  propose it as a discussion before implementing.
- ❌ Disabling the security headers in [`next.config.mjs`](next.config.mjs).
- ❌ Removing `prefers-reduced-motion` guards from animations.
- ❌ Creating a per-component `IntersectionObserver` instead of using
  `useIntersection`.
- ❌ Inlining JSON-LD in a component instead of routing it through
  `lib/schema.ts` + `<StructuredData>`.
- ❌ Hardcoding colours, font sizes, or spacing instead of using the design
  tokens / Tailwind scale.
- ❌ Using client components when a server component suffices.
- ❌ Committing `.env.local`, `.next/`, `node_modules/`, or
  `tsconfig.tsbuildinfo`.
- ❌ Mass-reformatting files you did not otherwise need to touch.
- ❌ Adding documentation (`*.md`) files unless explicitly requested.
- ❌ Adding speculative abstractions, "future-proofing", feature flags, or
  backwards-compat shims. Three similar lines beats a premature abstraction.

---

## 11. Security

- The site has **no user input, no forms, no API routes** — the attack
  surface is essentially "what Vercel serves statically".
- HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, and
  Permissions-Policy are enforced for **every** route via
  [`next.config.mjs`](next.config.mjs). Keep them.
- Permissions-Policy explicitly disables `camera`, `microphone`, and
  `geolocation`. Do not enable them without a justified product reason.
- Never commit secrets. `.env.local` is gitignored; if you add a new env
  var, document it in [`.env.example`](.env.example) with a comment but
  no real value.
- If you must add a server action or API route in the future, validate every
  input with **Zod** (the dependency is already available).

---

## 12. Environment Variables

Today the site requires **no** env vars to run. The only documented variable is:

| Variable           | Purpose                                                                                         | Default     | Required |
| ------------------ | ----------------------------------------------------------------------------------------------- | ----------- | -------- |
| `MAINTENANCE_MODE` | When `"true"`, [`middleware.ts`](middleware.ts) rewrites every non-asset URL to `/maintenance`. | unset (off) | No       |

Vercel Analytics and Speed Insights are auto-configured by the
`@vercel/*` packages on Vercel deployments and require no keys.

When you add a new env var:

1. Read it through `process.env.NAME` with a sensible default or an early
   throw if it is truly required.
2. Add it to [`.env.example`](.env.example) with a comment explaining its
   purpose and accepted values (no real value).
3. Document it in this table.

---

## 13. Git & Commit Conventions

Recent history follows **Conventional Commits**. Match the style:

```
feat: …       new user-visible feature
fix: …        bug fix
refactor: …   internal restructure, no behaviour change
docs: …       documentation only
perf: …       performance improvement
chore: …      tooling, dependencies, build config
style: …      whitespace, formatting (no logic change)
test: …       test additions or fixes
```

Scopes are encouraged when the change is localised: `feat(UI): …`,
`fix(seo): …`, `refactor(hooks): …`.

Other rules:

- **Never** commit `node_modules/`, `.next/`, `.env.local`,
  `tsconfig.tsbuildinfo`, or `pnpm-lock.yaml` from a non-pnpm tool.
- **Never** rewrite shared history (`push --force` to `main`, amend pushed
  commits, `reset --hard origin/main`) without explicit user instruction.
- **Never** bypass hooks (`--no-verify`) or signing flags. If a hook fails,
  fix the underlying issue.
- Prefer **new commits over amending**. If a hook rejects a commit, fix the
  problem and create a follow-up commit.
- Default branch is `main`. PRs target `main` unless told otherwise.

---

## 14. Agent-Specific Behaviour

This file is the _primary_ spec. Some agents read additional files:

| Agent                       | Reads                             | Action                                                                           |
| --------------------------- | --------------------------------- | -------------------------------------------------------------------------------- |
| Claude Code                 | `AGENTS.md`                       | Native support — the legacy `CLAUDE.md` has been removed in favour of this file. |
| OpenAI Codex / Codex CLI    | `AGENTS.md`                       | Native support — no extra action.                                                |
| Cursor                      | `.cursorrules` _or_ `AGENTS.md`   | Reads this file.                                                                 |
| Aider                       | `CONVENTIONS.md` _or_ `AGENTS.md` | Reads this file.                                                                 |
| Sourcegraph Amp             | `AGENTS.md`                       | Native support.                                                                  |
| Jules / Continue / Windsurf | `AGENTS.md`                       | Native support.                                                                  |

If you are a new agent integrating with this repo and you need a different
file name (e.g. `.cursorrules`), create it as a one-line pointer to this file
rather than duplicating content:

```
See AGENTS.md for project conventions.
```

---

## 15. Project Context for Better Decisions

Knowing _why_ something is the way it is helps you make better judgment
calls on edge cases:

- **Why no CMS?** The client values control, performance, and zero
  third-party runtime risk. Editorial changes are infrequent enough that a
  developer-mediated workflow is acceptable. Do not propose adding a CMS
  without explicit ask.
- **Why no test suite?** The site is heavily visual and animation-driven —
  most regressions are visible, not logical. Static typing + lint + a careful
  manual pass have been the chosen contract. If you need a regression test
  for a subtle bug, propose adding **Vitest** (no test runner is wired up
  today) and confirm before implementing.
- **Why Lenis instead of native scroll?** Premium feel matches the brand
  positioning. The reduced-motion fallback ensures accessibility is not
  compromised.
- **Why oklch?** Perceptual uniformity for the warm luxury palette — the
  cream/tan/brown family is easier to harmonise in oklch than in HSL/RGB.
- **Why static data over MDX?** Type safety. Every project, service, and
  legal section is constrained by a TypeScript type — a malformed entry
  fails the type check rather than silently rendering broken markup.

---

## 16. When in Doubt

- **Smaller is better.** A 3-line fix is preferable to a 30-line refactor.
- **Match the surrounding code.** If the file uses `motion.div` for fades,
  do not introduce a new animation library to add one more fade.
- **Ask before doing anything destructive.** Force pushes, branch deletions,
  schema migrations (n/a here), `rm -rf` on tracked content — confirm first.
- **Surface what you cannot verify.** If you could not run the dev server or
  could not test a code path, say so plainly in your handoff.
- **Respect the perf contract** in [§6](#6-architecture--key-patterns). The
  site's reputation is partly built on it.

---

## 17. Contacts

- **Developer:** aadigunjal0975@gmail.com
- **Project owner email:** aadigunjal0975@gmail.com
- **WhatsApp:** +91 84335 09521
- **Issues:** file in the repository tracker

---

_This document follows the [agents.md](https://agents.md) convention v1.
Last reviewed in line with the codebase at `main` HEAD on 2026-05-17._
