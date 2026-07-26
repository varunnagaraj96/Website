---
name: lenis
description: Use when the user wants smooth/inertia scrolling on a website, wants to sync scroll-driven animations (GSAP ScrollTrigger, WebGL/Three.js scenes, parallax) to a single scroll loop, or reports smooth-scroll bugs (modals not scrolling, scroll-snap conflicts, ScrollTrigger drift, anchor links not working). Backed by Lenis (darkroomengineering/lenis), a dependency-free JS library that wraps native scroll. Not a component library — it does not render UI.
allowed-tools: Read, Write, Edit, Bash, Glob, Grep
user-invocable: true
argument-hint: "[request]"
---

# Lenis

[Lenis](https://github.com/darkroomengineering/lenis) is a lightweight, dependency-free smooth
scroll library. It wraps the browser's native scroll (so `position: sticky`, anchor links, and
accessibility keep working) rather than reimplementing scroll from scratch. Framework adapters
exist for vanilla JS, React, Vue/Nuxt, and a separate scroll-snap plugin.

## Install

```bash
npm i lenis
```

## Setup by framework

**Vanilla JS**, with `autoRaf`:
```js
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

const lenis = new Lenis({ autoRaf: true })
lenis.on('scroll', (e) => { /* e.g. sync WebGL scene */ })
```

Or with a custom raf loop (needed when driving other animation systems off the same tick):
```js
const lenis = new Lenis()
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)
```

**React** — `import { ReactLenis, useLenis } from 'lenis/react'`, mount `<ReactLenis root />`
once near the app root, then `useLenis((lenis) => { ... })` anywhere to read scroll state.

**Vue** — `app.use(LenisVue)` (from `lenis/vue`), then `<VueLenis root>` + `useLenis()`.

**Nuxt** — add `'lenis/nuxt'` to `modules` in `nuxt.config.js`; no manual plugin registration.

Always import `lenis/dist/lenis.css` (or use the CDN `<link>`) — several behaviors (like
`autoToggle`) depend on it.

## GSAP ScrollTrigger sync

This is the most common integration; get it right or ScrollTrigger and Lenis drift apart:
```js
const lenis = new Lenis()
lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time) => lenis.raf(time * 1000)) // seconds -> ms
gsap.ticker.lagSmoothing(0)
```
Don't also call `requestAnimationFrame(raf)` yourself when driving Lenis off `gsap.ticker` — pick
one raf source.

## Key options (pass to `new Lenis({...})`)

- `duration` (1.2) / `easing` — animation timing, ignored if `lerp` is set
- `lerp` (0.1) — interpolation intensity, simplest way to tune "smoothness"
- `orientation` / `gestureOrientation` — `vertical` (default), `horizontal`, or `both`
- `wrapper` / `content` — custom scroll container instead of `window`/`document.documentElement`
- `smoothWheel` (true), `syncTouch` (false) — whether wheel/touch input is smoothed
- `anchors` — set `true` to keep `<a href="#id">` working with smooth scroll
- `infinite` — infinite scroll loops (needs `syncTouch: true` on touch devices)
- `prevent(node)` — function returning `true` to exclude an element's events from smoothing

## Nested / modal scroll

Prefer `data-lenis-prevent` on the scrollable child over the `allowNestedScroll` option — the
latter walks the DOM on every scroll event and can cost performance:
```html
<div data-lenis-prevent>modal content that should scroll natively</div>
```
Variants: `data-lenis-prevent-wheel`, `-touch`, `-vertical`, `-horizontal`. Or pass
`prevent: (node) => node.id === 'modal'` as a JS alternative to the HTML attribute.

## Core API cheat sheet

- `lenis.scrollTo(target, options)` — `target`: px, CSS selector, keyword (`top`/`bottom`/...),
  or element. `options`: `offset`, `duration`, `easing`, `immediate`, `lock`, `onComplete`.
- `lenis.stop()` / `lenis.start()` — pause/resume (e.g. while a modal is open)
- `lenis.resize()` — call manually if `autoResize: false`
- `lenis.destroy()` — full cleanup
- Properties worth reading: `lenis.progress` (0–1), `lenis.velocity`, `lenis.direction` (1 up /
  -1 down), `lenis.isScrolling`

## Known limitations (check here before debugging further)

- No CSS `scroll-snap` support — use the separate `lenis/snap` (`@studio-freight`-era name;
  now `packages/snap` in this monorepo) package instead.
- Capped to 60fps on Safari, 30fps in low-power mode — not a bug in your integration.
- Does not smooth-scroll across iframes (they don't forward wheel events).
- `syncTouch` can be unstable on iOS < 16.

## Troubleshooting checklist

1. Recommended CSS imported? Missing it breaks `autoToggle` and other behaviors silently.
2. `autoRaf: true` set, or is something actually calling `lenis.raf(time)` every frame?
3. GSAP ScrollTrigger: is `ScrollTrigger.update` wired to the `scroll` event, and is
   `lagSmoothing(0)` set? Drift between GSAP pins and content is almost always this.
4. Does the element scroll fine with Lenis removed? Rules out an unrelated CSS/overflow bug.
5. Modal/dropdown not scrolling? Add `data-lenis-prevent`, don't fight it with global options.
