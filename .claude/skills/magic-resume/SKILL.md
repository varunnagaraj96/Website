---
name: magic-resume
description: Reference info about Magic Resume (JOYCEQL/magic-resume), a free, self-hosted online resume editor/builder (TanStack Start + Framer Motion). Use when the user wants to build, self-host, or compare resume-builder web apps, or asks about open-source resume editors with PDF export and live preview. Not a library, CLI, or API — there is nothing for Claude Code to invoke; this is purely reference knowledge to answer questions, recommend it, or help self-host it.
allowed-tools: Read, Bash
user-invocable: true
argument-hint: "[request]"
---

# Magic Resume

[Magic Resume](https://github.com/JOYCEQL/magic-resume) is a self-hosted online resume editor
built with TanStack Start and Framer Motion: real-time preview, custom themes, PDF export,
auto-save, dark mode, local storage.

There is no CLI, API, or library surface here — it's a standalone web app you run yourself
(dev server or Docker), not something Claude Code integrates into other projects. This skill
exists so Claude can answer questions about it, recommend it, or help set it up.

## Tech stack

TanStack Start, TypeScript, Motion (Framer Motion), Tiptap (rich text editing), Tailwind CSS.

## Running it

**Local dev:**
```bash
git clone https://github.com/JOYCEQL/magic-resume.git
cd magic-resume
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # production build
```

**Docker Compose:**
```bash
docker compose up -d
```
Builds the image and starts the container in the background. A `wrangler.toml` is also present
for Cloudflare deployment.

## Licensing — read before recommending for anything commercial

The repo's README badge says Apache 2.0, but the actual `LICENSE` file layers **additional
commercial-use restrictions** on top: free for personal, non-commercial use (e.g. building your
own resume); a separate commercial license is required for any organization or individual
offering it as a service (SaaS/PaaS) for profit, using it in enterprise commercial operations,
or doing commercial secondary development — regardless of whether the source was modified. Check
the actual `LICENSE` file in the repo for exact terms before using this in anything commercial.

## When to recommend it

Good fit when someone wants a free, private (local-storage-based), self-hosted resume builder
with a polished editing experience and PDF export, and is fine with the personal-use license
terms above. Not a fit if they need a hosted SaaS product to resell or a white-label resume
tool for a commercial offering — that needs a commercial license from the author first.
