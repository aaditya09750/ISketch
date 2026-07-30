# Claude Guide

## Repo Map

- `app/` contains all routes.
- `app/(marketing)/` contains the public studio pages.
- `app/(legal)/` contains privacy and terms pages.
- `components/` contains shared shell and UI pieces.
- `data/` is the canonical content source.
- `hooks/` holds browser interaction helpers.
- `lib/` holds pure helpers and schema builders.
- `types/` defines shared contracts.

## Commands

```bash
pnpm install
pnpm dev
pnpm lint
npx tsc --noEmit
pnpm build
```

## Conventions

- Keep the site static.
- Keep content in `data/*.ts`.
- Keep route changes reflected in `app/sitemap.ts`.
- Keep legal pages `noindex`.
- Keep docs honest about the lack of backend, database, auth, and API routes.

## Avoid

- Inventing a monorepo layout.
- Adding backend infrastructure.
- Adding database or auth scaffolding.
- Adding docs that claim features not present in the repo.