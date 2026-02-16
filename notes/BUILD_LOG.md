# Build Log

## Session 1 — 2026-02-16

### Step 1: Project Initialization ✅
- Created Astro 5 project with TypeScript strict mode
- Installed dependencies: astro, tailwindcss v4, @tailwindcss/vite, @astrojs/sitemap, @astrojs/check, fontsource fonts (Lora, JetBrains Mono, Inter), wrangler, typescript
- Created config files: astro.config.mjs, tsconfig.json, wrangler.toml, .env.example, .gitignore
- Verified clean build

### Step 2: Notes Directory ✅
- Created notes/PRD.md, notes/DESIGN_DECISIONS.md, notes/BUILD_LOG.md

### Step 3: Design Tokens & Global CSS ✅
- Tailwind v4 theme with Cognitive Brutalism palette (warm dark mode)
- Font imports: Lora (serif), JetBrains Mono (mono), Inter (sans)
- Noise/grain overlay via SVG filter + body::after
- Custom hairline border utilities
- Custom scrollbar styling, selection colors
- DNA helix favicon.svg, robots.txt

### Step 4: Base Layout & Shared Components ✅
- BaseLayout.astro with ClientRouter (view transitions), SEO, header/footer
- SEO.astro with OpenGraph + Twitter card meta
- Header.astro with serif name, mono nav links, mobile menu, backdrop blur
- Footer.astro with telemetry-style layout + "System Online" indicator
- lib/constants.ts with site metadata, nav links, external project URLs
- lib/api.ts with typed apiClient<T>() for future VPS backend

### Step 5: Home Page Sections ✅
- Hero.astro: name in Lora, title in JetBrains Mono, status line, DNA gradient bg, CTAs
- ProjectGrid.astro: responsive 2-column grid with section numbering
- ProjectCard.astro: skeletonized cards with status badges, tag pills, hover effects
- Timeline.astro: vertical timeline with colored dots per type (education/work)
- TimelineEntry.astro: serif dates, mono details, tag pills
- LabSection.astro: terminal-style card with EpiBench CLI simulation
- ContactLinks.astro: inline SVG icons for GitHub, LinkedIn, email
- index.astro: composes all sections

### Step 6: Content Collections & Data ✅
- content.config.ts with Zod schema (title, description, url, tags, status, featured, order)
- 4 project markdown files: stl-bcb, gateway-watch, deflab, epibench
- data/timeline.ts: 3 entries (current work, SLU, UMKC)
- data/social.ts: GitHub, LinkedIn, email

### Step 7: Detail Pages ✅
- projects/[slug].astro: dynamic route with full content rendering, metadata bar, prose styling
- projects/index.astro: full project listing with grid
- lab.astro: expanded lab page with architecture diagram, planned features checklist
- 404.astro: "Sequence Not Found" themed error with path display

### Step 8: Polish & Verification ✅
- Fixed ViewTransitions → ClientRouter (Astro 5 rename)
- Removed unused props from components
- `astro check`: 0 errors, 0 warnings, 0 hints
- `astro build`: 8 pages built successfully
- All CSS/fonts/theme rendering confirmed

## Build Stats
- 8 pages generated
- 0 TypeScript errors
- JS bundles: ~15.5KB (ClientRouter for view transitions)
- Build time: ~9s

## Files Created (28 total)
```
package.json, tsconfig.json, astro.config.mjs, wrangler.toml, .env.example, .gitignore
public/favicon.svg, public/noise.svg, public/robots.txt
src/styles/global.css
src/layouts/BaseLayout.astro
src/components/SEO.astro, Header.astro, Footer.astro, Hero.astro
src/components/ProjectCard.astro, ProjectGrid.astro
src/components/Timeline.astro, TimelineEntry.astro
src/components/LabSection.astro, ContactLinks.astro
src/content.config.ts
src/content/projects/stl-bcb.md, gateway-watch.md, deflab.md, epibench.md
src/data/timeline.ts, social.ts
src/lib/constants.ts, api.ts
src/pages/index.astro, 404.astro, lab.astro
src/pages/projects/index.astro, [slug].astro
notes/PRD.md, DESIGN_DECISIONS.md, BUILD_LOG.md
```
