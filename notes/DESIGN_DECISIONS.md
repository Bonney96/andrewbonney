# Design Decisions

## Framework: Astro 5 (over React/Next.js)

**Decision:** Use Astro 5 with static output for the initial scaffolding.

**Rationale:**
- The "Cognitive Brutalism" aesthetic is visual (typography, color, texture, layout) — no JS runtime needed
- Astro ships zero JS by default → Lighthouse 99-100, sub-0.5s FCP
- Astro is owned by Cloudflare → first-class Pages support
- Island architecture allows adding React/Blueprint JS later for interactive features only where needed
- The rest of the site stays pure HTML/CSS = instant load

**Future path:** When EpiBench Lite / live telemetry need interactivity, add `@astrojs/react` and mount Blueprint JS components as islands on just those pages.

## CSS: Tailwind v4 (over Blueprint CSS / vanilla)

**Decision:** Use Tailwind CSS v4 via Vite plugin.

**Rationale:**
- CSS-first configuration (no tailwind.config.js)
- Lightning CSS engine — 5x faster builds
- Utility-first with custom theme tokens for Cognitive Brutalism palette
- Ships only what's used → tiny CSS output
- No runtime cost

## Typography: Self-hosted fonts (over Google Fonts CDN)

**Decision:** Use @fontsource packages for Lora, JetBrains Mono, Inter.

**Rationale:**
- No round-trip to Google Fonts CDN = faster FCP
- Privacy (no Google tracking)
- Subsettable to Latin characters (~20KB per font vs ~100KB)

## Content: Astro Content Collections (over hardcoded data)

**Decision:** Use Content Collections for project data.

**Rationale:**
- Type-safe frontmatter schemas via Zod
- Markdown rendering for project descriptions
- Easy to add/remove/edit projects
- Generates individual project pages via dynamic routes

## Dark mode: Default dark (no toggle initially)

**Decision:** Ship with dark mode as default. Light mode toggle deferred.

**Rationale:**
- "Cognitive Brutalism" aesthetic is dark-first
- Avoids FOUC (flash of unstyled content) from theme detection
- Reduces scaffolding complexity
- Toggle can be added later with ~200B inline script
