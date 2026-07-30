# Security Policy

## Overview

ISketch is a static, content-driven Next.js site. The security posture is intentionally small: no database, no authentication, no API routes, and no user-upload surface.

The supported surface is the current production deployment and the current `main` branch.

## How to Report a Vulnerability

Do not file a public issue or PR for a security problem.

Send a private report to `studio@isketchinteriors.com` and include:

- A short summary of the issue.
- The affected route, component, or data file.
- Steps to reproduce.
- Any screenshots, logs, or proof-of-concept notes that help triage.

If the report touches contact details or unpublished project material, keep that information private as well.

## In Scope

| Area            | Examples                                                     |
| --------------- | ------------------------------------------------------------ |
| Client code     | browser-side logic, motion, navigation, and UI state         |
| Static assets   | images, videos, fonts, icons, and other public files         |
| SEO output      | metadata, canonical URLs, robots, sitemap, JSON-LD           |
| Build/config    | Next.js config, TypeScript config, linting, CI, and hooks    |
| Dependency risk | vulnerable packages or build tooling                         |
| Data exposure   | accidental leakage of private contact or project information |

## Out of Scope

| Area          | Reason                                  |
| ------------- | --------------------------------------- |
| SQL injection | there is no database layer              |
| Auth bypass   | there is no auth system                 |
| SSRF          | there is no server-side request handler |
| Upload abuse  | there is no upload surface              |
| API abuse     | there are no public API routes          |

## Response Expectations

- Acknowledge the report promptly.
- Triage within a reasonable maintenance window.
- Ship fixes as a normal site deployment.

## Current Security Controls

- HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, and Permissions-Policy are already set in `next.config.mjs`.
- The site is static and content-only.
- No real secrets should be committed.
