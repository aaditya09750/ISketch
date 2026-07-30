# Claude Guide

## Purpose

This file is the agent-facing map for the existing ISketch repository. Treat it as the shortest path to the right file, the right scope, and the right constraints.

## Repo Map

| Path                    | Owns                                                              |
| ----------------------- | ----------------------------------------------------------------- |
| `app/`                  | all routes, layouts, metadata, robots, sitemap, and page-level UI |
| `app/(marketing)/`      | the public studio pages                                           |
| `app/(legal)/`          | privacy and terms pages                                           |
| `components/layout/`    | app shell, header, footer, and WhatsApp CTA                       |
| `components/providers/` | layout and scroll providers                                       |
| `components/shared/`    | cross-page reusable UI pieces                                     |
| `data/`                 | canonical content source                                          |
| `hooks/`                | browser-interaction helpers                                       |
| `lib/`                  | pure helpers and schema builders                                  |
| `types/`                | shared contracts                                                  |

## Commands

```bash
pnpm install
pnpm dev
pnpm lint
pnpm format:check
pnpm typecheck
pnpm build
```

## Working Rules

- Keep the site static.
- Keep canonical content in `data/*.ts`.
- Keep route changes reflected in `app/sitemap.ts`.
- Keep legal pages noindex.
- Keep `README.md`, `ARCHITECTURE.md`, and `SECURITY.md` aligned with the actual code.
- Do not invent backend, auth, database, or queue workflows.

## Where to Look First

- Public page content: `app/(marketing)/**`
- Legal copy: `data/legal.ts`
- Contact/NAP: `data/contact.ts`
- Navigation: `data/navigation.ts`
- Project records: `data/projects.ts`
- Service records: `data/services.ts`

## Avoid

- Inventing a monorepo layout.
- Adding backend infrastructure.
- Adding database or auth scaffolding.
- Writing docs that claim unsupported features.
