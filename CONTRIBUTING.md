# Contributing

This repository is intentionally small and content-driven. Changes should preserve the static-site architecture, keep the SEO surface coherent, and avoid introducing backend systems that the product does not need.

## Local Setup

### Prerequisites

- Node.js 22+
- pnpm
- Git

### Install

```bash
pnpm install
```

### Run the Site

```bash
pnpm dev
```

### Verify Before You Open a PR

```bash
pnpm lint
pnpm format:check
pnpm typecheck
pnpm build
```

## Branch Naming

Use short names that describe the change.

- `feat/<scope>` for new work
- `fix/<scope>` for bug fixes
- `docs/<scope>` for documentation updates
- `chore/<scope>` for maintenance

## Commit Messages

Use Conventional Commits.

Examples:

- `feat: add docs navigation section`
- `fix: align sitemap route list`
- `docs: expand architecture notes`

## Code Style

- Keep TypeScript strict and explicit.
- Keep changes local to the file that owns the behavior.
- Prefer content updates in `data/*.ts` over duplicated copy in components.
- Do not add new backend, auth, database, or queue surfaces without a separate request.
- Preserve the existing motion and accessibility patterns when editing UI code.

## Review Checklist

- The site still builds locally.
- Internal links and route references resolve.
- The change is reflected in `app/sitemap.ts` if it introduces a route.
- The change is reflected in `README.md` if it affects public-facing behavior.
- New docs do not invent unsupported backend capabilities.

## Good First Issues

- Improve a section in `README.md` or `ARCHITECTURE.md`.
- Fix an internal documentation link.
- Add a missing route reference to the docs.
- Tighten a metadata description or SEO note.
