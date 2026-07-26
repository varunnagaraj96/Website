---
name: how-it-works
description: Explain how claude-mem captures observations, when memory injection kicks in, and where data lives. Use when the user asks "how does claude-mem work?" or "what is this thing doing?".
user-invocable: true
argument-hint: "[request]"
---

> **Reference only — not functional here.** This skill is part of [claude-mem](https://github.com/thedotmack/claude-mem) and expects its worker service + SQLite/Chroma database, set up by `npx claude-mem install` (or the `/plugin` marketplace flow). That installer was not run in this repo — only the skill definitions were copied in for reference. Invoking this as-is will fail or no-op since there is no memory database behind it.

# How claude-mem works

## What it does

Every Read, Edit, and Bash that Claude makes turns into a compressed observation. Observations get summarized at session end. Relevant ones get auto-injected into future prompts so the next session starts with context from the last one — no re-explaining the codebase, no re-discovering decisions.

## When it kicks in

Memory injection starts on your second session in a project.

The first session in a fresh project seeds memory; subsequent sessions receive auto-injected context for relevant past work. Run `/learn-codebase` if you want to front-load the entire repo into memory in a single pass (~5 minutes, optional).

## Where data lives

Everything stays in ~/.claude-mem on this machine.

Nothing leaves your machine except calls to whichever AI provider you configured for compression (Claude / OpenRouter / Gemini). The SQLite database, vector index, logs, and settings all live under that directory and are removed cleanly on `npx claude-mem uninstall`.
