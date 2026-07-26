---
name: inspira-ui
description: Use when building or styling a Vue or Nuxt UI and the user wants animated, Aceternity-UI/Magic-UI-style components (backgrounds, buttons, cards, cursors, device mocks, input/forms, special effects, testimonials, text animations, data visualization). Not applicable to React/Next.js/Svelte projects — inspira-ui is Vue/Nuxt + Tailwind CSS v4 only. For animation logic itself (not pre-built components), prefer the motion-dev-animations skill.
allowed-tools: Read, Write, Edit, Bash, Glob, Grep
user-invocable: true
argument-hint: "[request]"
---

# Inspira UI

[Inspira UI](https://inspira-ui.com) ([unovue/inspira-ui](https://github.com/unovue/inspira-ui)) is a
community-driven Vue/Nuxt port of Aceternity UI and Magic UI. It is **not an npm component
library you import** — like shadcn, you copy a component's source file(s) directly into the
project and own the code from then on. There is no CLI or SKILL packaged by upstream; this file
documents how to use it manually.

## When this applies

Only use this for projects on Vue 3 or Nuxt 3 with Tailwind CSS v4. Check `package.json` for
`vue`/`nuxt` before reaching for this — it does not apply to React, Next.js, Svelte, or Astro
projects (use `motion-dev-animations` or another framework-appropriate skill there instead).

## One-time project setup

1. Tailwind CSS v4 must already be installed (Vite or Nuxt guide).
2. Install supporting packages:
   ```bash
   npm install @vueuse/core motion-v tw-animate-css @inspira-ui/plugins
   ```
3. Follow the [motion-v Vue/Nuxt setup guide](https://motion.dev/docs/vue).
4. Add the Inspira UI CSS variables to `main.css` (skip if already using shadcn-vue) — see
   `https://inspira-ui.com/getting-started/installation` for the exact block (theme tokens for
   background/foreground/card/popover/primary/secondary/muted/accent/destructive/border/ring in
   both light and `.dark` variants).
5. Optional: add [Iconify for Vue](https://iconify.design/docs/icon-components/vue/) — several
   components use `<Icon>`.

## Adding a component

Components are not published to npm; fetch the source directly from GitHub and vendor it in:

1. Browse categories at `https://inspira-ui.com/components` or list files under
   `https://github.com/unovue/inspira-ui/tree/main/app/components/inspira/ui/<component-slug>/`.
2. Fetch the `.vue` file(s) for the chosen component from that path (e.g.
   `raw.githubusercontent.com/unovue/inspira-ui/main/app/components/inspira/ui/gradient-button/GradientButton.vue`)
   and copy them into this project's own components directory (e.g. `components/ui/`).
3. Check the matching docs page under
   `https://github.com/unovue/inspira-ui/tree/main/content/en/2.components/<category>/<slug>.md`
   for the prop API table and a usage demo before wiring it up.
4. Treat the copied file as project source from then on — it is not kept in sync with upstream
   automatically; re-fetch manually to pick up updates.

## Component categories (as of this install)

| Category | Examples |
|---|---|
| `backgrounds` (26) | aurora, meteors, grid, particles, beams |
| `buttons` (5) | gradient, ripple, rainbow |
| `cards` (8) | 3d card, evervault, hover effects |
| `cursors` (5) | custom cursor, springy cursor |
| `device-mocks` (2) | phone/browser frames |
| `input-and-forms` (6) | animated inputs, file upload |
| `miscellaneous` (24) | dock, timeline, marquee |
| `special-effects` (14) | sparkles, confetti, glow |
| `testimonials` (3) | animated testimonial layouts |
| `text-animations` (23) | typewriter, text reveal, hyper text |
| `visualization` (15) | globe, charts, animated beams |

Full, current list: `https://inspira-ui.com/components`.
