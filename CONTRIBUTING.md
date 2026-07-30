# Contributing

## Setup

Use pnpm.

```bash
pnpm install
pnpm dev
pnpm lint
npx tsc --noEmit
pnpm build
```

## Branching

- Use short, purpose-specific branches.
- Prefer `feat/<scope>`, `fix/<scope>`, or `chore/<scope>`.

## Commit Messages

Use Conventional Commits.

Examples:

- `feat: add architecture notes`
- `fix: correct sitemap links`
- `docs: update contributor guide`

## Code Style

- Keep TypeScript strict and explicit.
- Match the existing file style in the file you are editing.
- Avoid unnecessary abstractions.
- Do not introduce backend, auth, or database code without a separate request.

## PR Checklist

- Local build passes.
- Lint and type-check pass.
- README links resolve.
- New docs or content match the live ISketch routes and data files.

## Good First Issues

- Improve a docs section.
- Tighten a metadata description.
- Fix a broken internal link.
- Add missing route references to the sitemap or README.