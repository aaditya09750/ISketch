# Architecture

## System Context

```mermaid
flowchart LR
  Visitor[Visitor in browser] --> NextApp[ISketch Next.js App Router]
  NextApp --> StaticData[data/*.ts]
  NextApp --> PublicAssets[public/images, public/fonts, public/videos]
  NextApp --> SEO[Metadata API + JSON-LD]
  Visitor --> Contact[External contact channels\nmail / tel / WhatsApp]
```

ISketch is a static, content-driven Next.js 16 site. There is no backend service, database, CMS, auth layer, or user-generated content flow. The application renders from typed TypeScript content modules and static assets, then ships as a prebuilt marketing site.

## Request Pipeline

1. A visitor requests a public route such as `/`, `/about`, `/services`, `/portfolio`, `/portfolio/[slug]`, `/projects`, or `/contact`.
2. Next.js resolves the App Router page and composes shared layout components.
3. Page components read from `data/*.ts` and `types/index.ts`.
4. The app emits metadata, Open Graph tags, robots directives, sitemap entries, and JSON-LD from the static content.
5. The browser receives static HTML, CSS, and client islands for motion or viewport effects.

## Primary Workflow Sequence

```mermaid
sequenceDiagram
  actor Visitor
  participant Browser
  participant App as ISketch App
  participant Data as data/projects.ts

  Visitor->>Browser: Open /portfolio or /portfolio/[slug]
  Browser->>App: Request route
  App->>Data: Read static project content
  App-->>Browser: Rendered portfolio page
  Visitor->>Browser: Review project details
  Visitor->>Browser: Click Contact / WhatsApp / tel / mail link
```

The portfolio detail route is statically generated from `generateStaticParams()` and the project records in `data/projects.ts`.

## Data Model

```mermaid
erDiagram
  PROJECT_SUMMARY {
    string id
    string title
    string location
    string category
    string image
  }

  PROJECT_DETAIL {
    string title
    string location
    string category
    string year
    string scope
    string description
    string challenge
    string solution
  }

  SERVICE {
    string number
    string title
    string description
  }

  VALUE {
    string title
    string description
  }

  PROJECT_SUMMARY ||--|| PROJECT_DETAIL : "expands to"
```

The actual source of truth lives in `data/projects.ts`, `data/services.ts`, `data/about.ts`, `data/contact.ts`, and `data/legal.ts`.

## Known Limitations

- No CMS or admin editing surface.
- No API routes or persisted data.
- No authentication, payments, file uploads, or queueing.
- Content updates require editing TypeScript data files and rebuilding.

## Evolution Paths

- If editorial updates become frequent, introduce a CMS behind a narrow content adapter.
- If the studio needs lead capture, add a form workflow and a server-side transport layer.
- If multilingual expansion becomes necessary, add locale-aware routing and translated content modules.