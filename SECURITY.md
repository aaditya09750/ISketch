# Security Policy

## Supported Surface

This repository is a static, content-driven Next.js site. The supported surface is the current production deployment and the current `main` branch.

There is no database, auth system, API route surface, or user-upload path in the current codebase.

## Reporting a Vulnerability

Do not open a public issue for security problems.

Email suspected issues to the studio contact listed in [README.md](README.md) and include:

- A short description of the issue.
- The affected route or file.
- Steps to reproduce.
- Any proof-of-concept details that help triage.

## What Is In Scope

- Client-side code.
- Static assets.
- Metadata, JSON-LD, and sitemap output.
- Build config and dependency risk.
- Accidental exposure of private contact or project data.

## What Is Not In Scope

- SQL injection.
- Auth bypass.
- SSRF.
- Server-side request handling bugs.

Those classes are not present in the current implementation.

## Response Targets

- Acknowledge the report promptly.
- Triage it within a reasonable maintenance window.
- Ship any fix as a normal site deployment.