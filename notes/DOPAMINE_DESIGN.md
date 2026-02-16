# Dopamine Design Notes

## The Problem
The site reads like a document. It doesn't *reward* the user for scrolling or clicking.
Background readability is better but still not over the "pleasant" threshold.

## Root Causes — Readability
1. **Muted text is overused and too dim.** Most body text (descriptions, paragraphs) uses `text-muted` which at `#a09890` on `#1e1e20` is ~4.5:1 contrast — bare minimum WCAG AA. Needs to be brighter.
2. **Faint text** (`#706860`) at ~2.8:1 is below WCAG AA for normal text. Fine for labels but used too broadly.
3. **Surface cards** don't lift enough from background — cards feel flat, not like containers you want to look inside.

## Root Causes — Dopamine
1. **No entrance animations.** Everything appears static. No sense of "arrival."
2. **Card hover effects are too subtle.** Border change is barely noticeable.
3. **No scroll reward.** User scrolls and nothing changes — no progressive reveal.
4. **Hero is flat.** Big text on dark background. No motion, no shimmer.
5. **Skills bars are static.** They should fill/animate when scrolled into view.
6. **No color warmth.** The accent colors exist but are confined to tiny badges.

## Solutions — Readability Fixes
- Bump `text-muted` from `#a09890` → `#b5ada5` (5.5:1 contrast)
- Bump `text-faint` from `#706860` → `#857d75` (3.5:1 — fine for labels/captions)
- Increase card surface contrast: surface `#282830` → `#2c2c34`
- Slightly increase body text line height

## Solutions — Dopamine (CSS-only, zero JS except existing inline scripts)

### 1. Staggered Entrance Animations
Each home page section fades in + slides up when it enters the viewport.
Uses CSS `animation-timeline: view()` (scroll-driven animations) — supported in Chrome/Edge/Firefox.
Graceful degradation: Safari users see static content (no harm).

### 2. Hero Ambient Gradient
Slow-moving radial gradient in the hero background. Pure CSS `@keyframes`.
Think: northern lights but extremely subtle. Warm moss/indigo hues drifting.
This creates a "living" feel — the page isn't a dead document.

### 3. Card Hover Glow
On hover: colored border glow using box-shadow with accent color.
Different color per status: moss for live, terracotta for research, indigo for coming-soon.
Plus a subtle `transform: translateY(-2px)` lift.

### 4. Skills Bars Animation
Proficiency bars start empty and fill to their level.
Uses CSS `@keyframes` with `animation-timeline: view()` so they fill as user scrolls to them.
Pure dopamine — watching bars fill = satisfaction.

### 5. Timeline Dot Glow
Timeline dots pulse/glow when their entry comes into view.
The "Present" dot gets a persistent breathing pulse.

### 6. Section Reveal Lines
The hairline borders under section headers could draw/extend from left to right on scroll.
Subtle but gives a sense of "the page is responding to you."

### 7. Interactive Cursor Feedback
Buttons and links get slight scale bump on hover (`transform: scale(1.02)`)
with snappy `transition: all 150ms ease-out`.

## What NOT to Do
- No infinite scroll / dark patterns
- No loading spinners for content that's already there
- No random/variable reward mechanics (this is a portfolio, not social media)
- No sound effects
- No auto-playing anything
- Keep animations under 300ms for snappiness, under 600ms for entrances
- Respect `prefers-reduced-motion` — disable all animations for those users

## Priority
1. Readability fix (text contrast + surface lift) — MUST
2. Hero ambient gradient — HIGH (first impression)
3. Card hover glow — HIGH (most interactive element)
4. Staggered entrance animations — HIGH (scroll reward)
5. Skills bars animation — MEDIUM (satisfying but secondary)
6. Timeline dots — LOW (nice touch)
