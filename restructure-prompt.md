# ISketch Interiors - Next.js Project Restructuring Prompt

> **Target Model:** Claude Opus 4.6 (1M context)
> **Purpose:** Review and restructure the ISketch Next.js project folder/file architecture to meet the latest industry-standard professional patterns used by top-tier agencies and production-grade Next.js applications.

---

## Your Role

You are a **senior Next.js architect and frontend engineering lead** with deep expertise in:

- Next.js 16+ App Router architecture and conventions
- React 19 Server Components vs Client Components optimization
- Tailwind CSS v4 project organization
- shadcn/ui component library best practices
- Large-scale frontend project structuring used by top agencies (Vercel, Linear, Cal.com, Dub.co)
- Colocation patterns, barrel exports, and module boundaries
- Performance-first architecture (code splitting, lazy loading, bundle optimization)

---

## Project Overview

**ISketch Interiors** is a luxury interior design studio portfolio website built with the following tech stack:

### Core Framework & Runtime

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 16.1.6 | App Router, SSR/SSG, Image Optimization |
| React | 19.2.4 | UI Library |
| TypeScript | 5.7.3 | Type Safety (strict mode enabled) |
| Node.js | 22+ | Runtime |

### Styling & Animation

| Technology | Version | Purpose |
|---|---|---|
| Tailwind CSS | 4.2.0 | Utility-first CSS framework (v4 new engine) |
| @tailwindcss/postcss | 4.2.0 | PostCSS integration for Tailwind v4 |
| tw-animate-css | 1.3.3 | Animation utility classes |
| Framer Motion | 12.38.0 | Advanced declarative animations |
| Lenis | 1.3.19 | Smooth scroll library |
| class-variance-authority | 0.7.1 | Component variant management (CVA) |
| clsx | 2.1.1 | Conditional class composition |
| tailwind-merge | 3.3.1 | Intelligent Tailwind class merging |

### UI Component Libraries

| Technology | Version | Purpose |
|---|---|---|
| Radix UI | Latest | 27+ headless primitives (Accordion, Dialog, Menu, Select, Slider, Toast, Tooltip, etc.) |
| shadcn/ui | Latest (new-york style) | Pre-built component system on Radix |
| Lucide React | 0.564.0 | Icon library |
| cmdk | 1.1.1 | Command palette component |
| Embla Carousel | 8.6.0 | Touch-friendly carousel |
| Vaul | 1.1.2 | Drawer component |
| Sonner | 1.7.1 | Toast notifications |
| Recharts | 2.15.0 | Charting library |

### Forms & Validation

| Technology | Version | Purpose |
|---|---|---|
| React Hook Form | 7.54.1 | Form state management |
| @hookform/resolvers | 3.9.1 | Validation resolvers |
| Zod | 3.24.1 | Schema validation |

### Analytics & Performance

| Technology | Version | Purpose |
|---|---|---|
| @vercel/analytics | 1.6.1 | Vercel Analytics |
| @vercel/speed-insights | 2.0.0 | Core Web Vitals monitoring |

### Theming

| Technology | Version | Purpose |
|---|---|---|
| next-themes | 0.4.6 | Dark/light mode support |

### Package Manager

- **pnpm** (lockfile: `pnpm-lock.yaml`)

### Configuration Files

- `next.config.mjs` - Image optimization (AVIF/WebP), custom headers for asset caching (1-year immutable), TypeScript build error bypass
- `tsconfig.json` - ES6 target, strict mode, bundler resolution, `@/*` path alias
- `postcss.config.mjs` - `@tailwindcss/postcss` plugin (Tailwind v4)
- `components.json` - shadcn/ui config (new-york style, RSC enabled, Lucide icons, CSS variables, neutral base color)
- `globals.css` - Tailwind v4 imports, CSS custom properties for theming (oklch color space), custom font families (Montserrat sans-serif + Iowan Old Style serif), dark mode variables

---

## Current Folder Structure (Complete)

```
ISketch/
├── .git/
├── .gitignore
├── .next/                              # Build output (ignored)
├── node_modules/                       # Dependencies (ignored)
│
├── app/                                # Next.js App Router
│   ├── layout.tsx                      # Root layout - fonts (Montserrat + Iowan Old Style), metadata, SmoothScroll + LayoutShell providers, Vercel Analytics/SpeedInsights
│   ├── page.tsx                        # Home page - HeroSection, AboutSection, ProjectsSection, ContactSection
│   ├── globals.css                     # Global styles, Tailwind v4 config, CSS variables, font definitions, dark mode
│   ├── not-found.tsx                   # Custom 404 page - animated, with navigation links (client component)
│   │
│   ├── about/
│   │   └── page.tsx                    # About page - AboutHero, AboutStorySection, AboutTeamSection, AboutApproachSection, AboutValuesSection, LatestProjectSection, CTASection
│   │
│   ├── contact/
│   │   └── page.tsx                    # Contact page - client component, PageHeading, 4 contact cards (Address, Phone, Email, Social), IntersectionObserver animations
│   │
│   ├── portfolio/
│   │   ├── page.tsx                    # Portfolio grid page - PortfolioGrid, CTASection, static render
│   │   └── [slug]/
│   │       └── page.tsx               # Dynamic project detail - generateStaticParams, generateMetadata, hero image, overview, gallery, prev/next navigation
│   │
│   ├── projects/
│   │   └── page.tsx                    # Projects page - client component, featured (parallax) + grid layout, scroll animations
│   │
│   ├── services/
│   │   └── page.tsx                    # Services page - ServiceHero, ServicesIntroSection, ServicesDetailSection, ServicesProcessSection, ServicesFeesSection
│   │
│   ├── privacy-policy/
│   │   └── page.tsx                    # Privacy policy - LegalPageLayout with privacyPolicySections data
│   │
│   └── terms-conditions/
│       └── page.tsx                    # Terms & conditions - LegalPageLayout with termsConditionsSections data
│
├── components/
│   ├── common/
│   │   ├── fancy-button.tsx            # Styled CTA button with keyboard-inspired design (uses Next.js Link)
│   │   └── isketch-logo.tsx            # Inline SVG logo component, accepts className prop
│   │
│   ├── layout/
│   │   ├── layout-shell.tsx            # Root layout wrapper - LayoutProvider context, conditional Header/Footer/WhatsAppButton
│   │   ├── header.tsx                  # Fixed nav header - scroll-aware hide/show, mobile hamburger menu, Lenis integration, lightbox-aware
│   │   └── footer.tsx                  # Dark footer - multi-column nav, social links, legal links, IntersectionObserver animations
│   │
│   ├── providers/
│   │   ├── layout-context.tsx          # React Context for hideChrome flag (controls Header/Footer visibility)
│   │   └── smooth-scroll.tsx           # Lenis smooth scroll provider - prefers-reduced-motion aware, global window.__lenis
│   │
│   ├── sections/
│   │   ├── hero-section.tsx            # Home hero - double-buffered video switching (A/B players), rotating tagline with Framer Motion AnimatePresence
│   │   ├── about-section.tsx           # Home about preview - two-column layout, useImageReady wipe-reveal
│   │   ├── projects-section.tsx        # Home featured projects - 3-column grid (server component)
│   │   ├── contact-section.tsx         # Home contact CTA - email/phone display (server component)
│   │   ├── featured-section.tsx        # Scrolling marquee of publication mentions (currently commented out on home page)
│   │   ├── about-story-section.tsx     # About: studio story section
│   │   ├── about-team-section.tsx      # About: team members section
│   │   ├── about-approach-section.tsx  # About: design approach section
│   │   ├── about-values-section.tsx    # About: core values section
│   │   ├── latest-project-section.tsx  # About: latest project showcase
│   │   ├── portfolio-grid.tsx          # Portfolio: filterable grid with lightbox, 2-column layout
│   │   ├── services-intro-section.tsx  # Services: introduction section
│   │   ├── services-detail-section.tsx # Services: 4 service offerings detail
│   │   ├── services-process-section.tsx# Services: 4-step design process
│   │   └── services-fees-section.tsx   # Services: pricing/fees section
│   │
│   └── ui/
│       ├── container.tsx               # Max-width wrapper (1400px, responsive padding) - server component
│       ├── section-heading.tsx         # Section header pattern (label + heading) - server component
│       ├── page-heading.tsx            # Hero page heading with staggered animations - client component
│       ├── project-card.tsx            # Portfolio card with useImageReady reveal, hover effects, lightbox support - client component
│       ├── portfolio-filter.tsx        # Animated filter tabs with sliding indicator (desktop pills + mobile underlines) - client component
│       ├── image-lightbox.tsx          # Full-screen gallery viewer with touch gestures, keyboard nav, swipe dismiss - client component
│       ├── reveal-image.tsx            # Image with wipe-reveal animation using useImageReady - client component
│       ├── project-gallery.tsx         # Staggered 2-column gallery with lightbox integration - client component
│       ├── service-image-carousel.tsx  # Auto-rotating Embla carousel with dot indicators - client component
│       ├── cta-section.tsx             # CTA section with 4 variants (default/secondary/dark/warm) - client component
│       ├── whatsapp-button.tsx         # Floating WhatsApp FAB with delayed appearance - client component
│       ├── legal-page-layout.tsx       # Dual layout for legal pages (desktop sidebar TOC + mobile accordion) - client component
│       ├── about-hero.tsx              # Full-screen hero with bg image, scroll indicator - client component
│       └── service-hero.tsx            # Full-screen hero for services page - client component
│
├── data/
│   ├── navigation.ts                   # NavLink type, navigationLinks, footerLinks, socialLinks (Instagram, Facebook)
│   ├── projects.ts                     # ProjectSummary/ProjectDetail types, featuredProjects (3), portfolioProjects (9), portfolioCategories, projectDetails (by slug)
│   ├── services.ts                     # Service/ProcessStep types, 4 services, 4-step designProcess
│   ├── about.ts                        # Value/Award types, 3 values, 4 awards, 6 publications
│   ├── contact.ts                      # ContactDetail/SelectOption types, studioContact (email/phones), contactDetails (4 cards with Lucide icons)
│   └── legal.ts                        # LegalSection interface, privacyPolicySections (8), termsConditionsSections (9)
│
├── hooks/
│   └── use-image-ready.ts              # Custom hook: IntersectionObserver + Image.decode() + 3s fallback, returns imageRef/containerRef/shouldReveal/isInView
│
├── lib/
│   └── utils.ts                        # cn() function using clsx + tailwind-merge
│
├── public/
│   ├── fonts/
│   │   ├── Iowan Old Style/            # OTF font (bold weight + COPYRIGHT.txt)
│   │   └── iowanoldst-bt/              # 6 TTF files (regular, italic, bold, bold-italic, black, black-italic)
│   │
│   ├── images/
│   │   ├── hero.jpg, hero2.webp        # Hero images
│   │   ├── about.jpg, about-hero.jpg   # About page images
│   │   ├── project-1.jpg ... project-6.jpg  # Portfolio project images
│   │   ├── p1.jpg, p2.jpg, p3.jpg      # Featured project images
│   │   ├── services-hero.jpg           # Services hero image
│   │   └── team.jpg, team2.jpg         # Team images
│   │
│   ├── videos/
│   │   ├── hero-1.mp4 ... hero-4.mp4   # 4 hero section videos
│   │   ├── Isketch Video1.mp4          # Promotional video
│   │   └── ref01.mp4, ref02.mp4, ref03.mp4  # Reference videos
│   │
│   ├── ISketch Logo/                   # Brand logo assets (14 PNGs, 2 SVGs, 1 JPG, 2 PDFs, 1 mockup, 1 TSX file)
│   │
│   ├── icon.svg                        # Favicon
│   ├── placeholder-logo.png
│   ├── placeholder-logo.svg
│   ├── placeholder.jpg
│   ├── placeholder.svg
│   └── placeholder-user.jpg
│
├── components.json                     # shadcn/ui configuration
├── next.config.mjs                     # Next.js configuration
├── postcss.config.mjs                  # PostCSS configuration
├── tsconfig.json                       # TypeScript configuration
├── tsconfig.tsbuildinfo                # TypeScript build info
├── next-env.d.ts                       # Next.js TypeScript declarations
└── package.json                        # Dependencies & scripts
```

---

## Current Architecture Patterns

### Component Classification

| Pattern | Components | Count |
|---|---|---|
| Server Components (no "use client") | container, section-heading, projects-section, contact-section | 4 |
| Client Components ("use client") | All others (header, footer, hero-section, all ui/, all providers, etc.) | ~25+ |

### Data Flow

- **Static data files** in `data/` directory export typed arrays/objects
- **No API routes** exist (purely static site with SSG)
- **No middleware** configured
- **No database** or external data fetching
- `generateStaticParams()` used for portfolio/[slug] dynamic routes
- `generateMetadata()` used for per-page SEO

### State Management

- React Context (`LayoutProvider`) for header/footer visibility
- Local component state via `useState`/`useRef` for animations and interactions
- No global state library (no Redux, Zustand, Jotai, etc.)

### Animation Architecture

- `IntersectionObserver` for scroll-triggered reveals (manual implementation)
- `Framer Motion` for complex state transitions (hero tagline rotation)
- CSS transitions via Tailwind for micro-interactions
- Custom `useImageReady()` hook for image decode + viewport-aware reveal
- Lenis for global smooth scrolling

### Missing Next.js Special Files

- No `error.tsx` files (no error boundaries)
- No `loading.tsx` files (no loading UI/skeletons)
- No `template.tsx` files
- No `opengraph-image.tsx` files
- No `sitemap.ts` or `robots.ts` files
- No route groups `(group)` used
- No parallel routes or intercepting routes
- No `middleware.ts`

### Known Issues & Observations

1. **TSX file in public directory**: `/public/ISketch Logo/Isketch.tsx` should not be in public/
2. **Spaces in directory names**: `/public/ISketch Logo/` has spaces (problematic for URLs)
3. **No `.env.example`**: No environment variable documentation
4. **Placeholder files in public**: Multiple unused placeholder files
5. **v0 origin**: `.gitignore` reveals this was scaffolded with v0 (Vercel AI)
6. **Flat sections directory**: All 15 section components in a single `components/sections/` folder with no sub-grouping
7. **No barrel exports**: No `index.ts` files for cleaner imports
8. **Mixed naming conventions**: Some files use kebab-case consistently but directory names don't (e.g., `ISketch Logo`)

---

## Your Task

Analyze the entire project structure above and propose a **comprehensive folder/file restructuring** that transforms this project into a production-grade, industry-standard Next.js 16 application architecture. Your restructuring should follow the patterns used by leading Next.js projects (Vercel's own templates, Cal.com, Dub.co, Linear, Taxonomy).

### What to Evaluate & Improve

1. **App Router Organization**
   - Should route groups `(marketing)`, `(legal)`, etc. be introduced?
   - Should shared layouts be created for route groups?
   - Should `loading.tsx`, `error.tsx`, `template.tsx` be added?
   - Should `sitemap.ts`, `robots.ts`, `opengraph-image.tsx` be generated?
   - Is the current route structure optimal or should routes be reorganized?

2. **Component Architecture**
   - Is the current `common/`, `layout/`, `providers/`, `sections/`, `ui/` split optimal?
   - Should sections be colocated with their pages instead of in a shared folder?
   - Should feature-based organization replace the current type-based organization?
   - Should page-specific components live alongside their routes (colocation)?
   - Are barrel exports (`index.ts`) needed?

3. **Data Layer**
   - Should `data/` be renamed to `content/`, `constants/`, or stay as-is?
   - Should data files be colocated with their consuming pages?
   - Should types be extracted to a dedicated `types/` directory?

4. **Hooks & Utilities**
   - Is the current `hooks/` and `lib/` structure sufficient?
   - Should utilities be split further (e.g., `lib/animations.ts`, `lib/constants.ts`)?

5. **Public Assets**
   - How should `/public/` be reorganized for professional standards?
   - Fix spaces in directory names
   - Remove misplaced files (TSX in public)
   - Organize logo variants properly
   - Should images be further categorized?

6. **Configuration & DX**
   - Should a `.env.example` be added?
   - Should `next.config.mjs` be restructured?
   - Should ESLint/Prettier configs be enhanced?
   - Should a `CLAUDE.md` or project documentation be added?

7. **Performance & SEO Files**
   - Should `sitemap.ts` and `robots.ts` be auto-generated?
   - Should `opengraph-image.tsx` be created per route?
   - Should `manifest.ts` (PWA) be considered?

8. **Type Safety**
   - Should shared types be centralized in a `types/` directory?
   - Should component prop types be exported separately?

---

## Constraints (MUST Follow)

1. **DO NOT change any functionality** - Every page, component, animation, and interaction must work identically after restructuring
2. **DO NOT change the tech stack** - Keep all existing dependencies; do not add or remove packages
3. **DO NOT modify component internals** - Only move/rename files and update import paths
4. **DO NOT change route URLs** - All existing routes (`/about`, `/contact`, `/portfolio`, `/portfolio/[slug]`, `/projects`, `/services`, `/privacy-policy`, `/terms-conditions`) must remain the same
5. **DO NOT alter styling or theming** - CSS variables, Tailwind config, color scheme, fonts must stay identical
6. **DO NOT change data content** - All project data, text, images, videos remain untouched
7. **Preserve all metadata** - Page titles, descriptions, and SEO tags must remain
8. **Preserve Server/Client boundaries** - Don't change which components are server vs client unless there's a clear optimization

---

## Expected Output Format

### Part 1: Analysis Summary

Provide a brief analysis of what's wrong or suboptimal with the current structure and why changes are needed. Reference specific industry patterns and projects as benchmarks.

### Part 2: Proposed New Folder Structure

Present the **complete** new folder tree with:
- Every file and folder listed
- A brief comment for any file that was **moved**, **renamed**, or **newly created**
- Clear indication of what's new vs what's moved

```
ISketch/
├── app/
│   ├── (marketing)/                    # [NEW] Route group for marketing pages
│   │   ├── layout.tsx                  # [NEW] Shared marketing layout
│   │   ├── ...
│   ...
```

### Part 3: File Migration Map

A table mapping every current file to its new location:

| Current Path | New Path | Action |
|---|---|---|
| `components/sections/hero-section.tsx` | `app/(marketing)/_components/hero-section.tsx` | Moved (colocated with page) |
| ... | ... | ... |

### Part 4: New Files to Create

List any new files that need to be created (e.g., `sitemap.ts`, `robots.ts`, `loading.tsx`, barrel exports) with their purpose and minimal content description.

### Part 5: Import Path Updates

Summarize the import path changes needed. Group by pattern (e.g., "All `@/components/sections/*` imports become `@/app/(marketing)/_components/*`").

### Part 6: Verification Checklist

A checklist to verify the restructuring is complete and nothing is broken:
- [ ] All routes render correctly
- [ ] All animations work
- [ ] All images/videos load
- [ ] Build succeeds (`pnpm build`)
- [ ] No TypeScript errors
- [ ] No broken imports
- [ ] Lighthouse scores maintained
- [ ] Dark mode still works

---

## Quality Bar

Your proposed structure should be one that a senior Next.js engineer at Vercel, Linear, or Cal.com would approve in a code review. It should:

- Follow the **colocation principle** (related files live together)
- Use **route groups** for logical page grouping
- Have **clear module boundaries** between features
- Support **scalability** (easy to add new pages/sections)
- Use **consistent naming conventions** throughout
- Minimize **import depth** (no deeply nested relative imports)
- Follow the **official Next.js documentation** recommendations for project organization

---

*This prompt contains 100% accurate context about the ISketch Interiors project as of its current state. No assumptions have been made - every file, dependency, and pattern listed above has been verified by reading the actual source code.*
