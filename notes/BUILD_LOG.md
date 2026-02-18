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

---

## Session 2 — 2026-02-16 (Improvements)

### Fix: Palette Readability ✅
- Lightened all background colors (~2-3 steps warmer/lighter)
- Brightened text and muted text for better contrast
- Bumped accent colors slightly for visibility
- Increased hairline border opacity

### Update: Real Resume Data ✅
- Full professional timeline: WashU, Pfizer, ThermoFisher, Firmenich, Bayer, SLU, UMKC
- Updated social links: abonney@wustl.edu, /in/andrew-bonney/
- Updated hero tagline with real professional summary
- Added location field to timeline entries

### New: Skills Matrix Section ✅
- Terminal-style grid organized by category
- 5 categories: Languages, Workflow & Cloud, Bioinformatics, Data Science & AI, Regulatory & QC
- Monospace proficiency bars (████████ advanced / ██████░░ proficient / ████░░░░ familiar)
- Category accent colors matching design system

### New: Research Projects ✅
- Added 3 new content collection entries: nf-core/scge, DeepLabCut, BERT Sequence Classification
- New `category` field (deployment vs research) and `portfolio` status
- ProjectGrid now shows "Active Deployments" and "Research & Select Projects" sub-sections

### New: View Transitions ✅
- `transition:name` on project card titles → morphs to detail page heading
- Smooth cross-page animations via ClientRouter

### New: Shiki Syntax Highlighting ✅
- Configured `vitesse-dark` theme for markdown code blocks
- Word wrap enabled

### Updated Nav
- Added "Skills" and "Experience" nav links
- Renamed "Timeline" section to "Experience"
- Renumbered all sections (01-05)

---

## Session 3 — 2026-02-16 (Dopamine & Readability)

### Fix: Final Readability Pass ✅
- Bumped `text-muted` from `#a09890` → `#b5ada5` (~5.5:1 contrast ratio — comfortably above WCAG AA)
- Bumped `text-faint` from `#706860` → `#857d75` (~3.5:1 — appropriate for labels/captions)
- Increased card surface contrast: `#282830` → `#2c2c34` for better card lift
- Elevated surfaces: `#2e2e2e` → `#343440`
- Added `line-height: 1.7` to body for better reading rhythm
- Made accents more vivid: moss `#8ab87a`, indigo `#8898d0`, terracotta `#d88868`, amber `#d0b070`

### New: Hero Ambient Glow Orbs ✅
- Replaced static gradient with 3 animated radial glow orbs (moss, indigo, amber)
- Each orb uses `filter: blur(80px)` with slow `drift` keyframe animations (12-16s cycles)
- Gradient overlay preserves text readability: `from-base/60 via-base/80 to-base`
- Creates "living" feel without any JavaScript

### New: Card Hover Glow Effects ✅
- Added `card-hover` base class with `translateY(-3px)` lift + box-shadow
- Status-aware color variants: `card-hover--moss`, `card-hover--indigo`, `card-hover--amber`, `card-hover--terracotta`
- Applied to: ProjectCard, SkillsMatrix cards, LabSection terminal, ContactLinks buttons
- 200ms ease-out transitions for snappy feel

### New: Scroll-Driven Entrance Animations ✅
- `animate-on-scroll` class uses CSS `animation-timeline: view()` for scroll-driven fade-in-up
- `@supports` fallback for browsers without scroll-driven animations (one-shot 0.6s animation)
- Applied to: ProjectCard, SkillsMatrix cards, TimelineEntry, LabSection card

### New: Skills Bar Fill Animation ✅
- Changed proficiency display from monospace text bars (████) to visual `<div>` bars
- Bars animate fill width using `skill-bar-fill` keyframe with `animation-timeline: view()`
- Width classes per level: advanced 85%, proficient 65%, familiar 45%
- Color-coded per category accent

### New: Section Divider Draw Animation ✅
- `section-divider::after` pseudo-element draws a hairline from left to right on scroll
- Uses `@keyframes draw-line` with `scaleX(0)` → `scaleX(1)`
- Applied to all section headers (Hero, ProjectGrid, SkillsMatrix, Timeline, Lab, Contact)

### New: Breathing Status Pulse ✅
- Custom `status-pulse` class with `@keyframes breathe` (3s cycle)
- Includes subtle box-shadow glow that expands and contracts
- Applied to: Hero status dot, Footer "System Online" dot
- Replaces generic Tailwind `animate-pulse`

### New: Hover Lift for Interactive Elements ✅
- `.hover-lift` utility class for CTA buttons with `translateY(-1px)` on hover
- Applied to Hero CTA buttons

### Accessibility: prefers-reduced-motion ✅
- Full `@media (prefers-reduced-motion: reduce)` block
- Disables all animations and transitions (duration → 0.01ms)
- Hero glow orbs freeze at static low opacity
- No user is forced into motion they don't want

### Notes ✅
- Created `notes/DOPAMINE_DESIGN.md` documenting root cause analysis and solutions

## Session 4 — 2026-02-17 (Visual Appeal & Personalization)

### New: Profile Headshot in Hero ✅
- Copied `notes/andrew-headshot.png` → `public/andrew-headshot.png`
- Restructured Hero.astro into a two-column layout (text left, photo right on desktop; stacked on mobile)
- Photo styled with hairline-strong border, rounded-sm, and a moss/30 offset accent frame
- `loading="eager"` + `fetchpriority="high"` for fast first paint

### New: Colored Tech Tags ✅
- Added `tagColors` map to ProjectCard.astro
- Four categories: moss (languages/bio), amber (cloud/pipeline), indigo (containers/web/tooling), terracotta (AI/ML)
- Tags with no mapping fall back to the existing faint hairline style
- Applies to all project card footers

### Update: Richer Contact Section ✅
- Added invitation paragraph before link buttons
- Added affiliations badge row below buttons: ISCB Member, SLU IDBI, WashU Spencer Lab

## Build Stats (Session 4)
- 11 pages generated
- 0 errors, 0 warnings
- Build time: 2.62s

## Build Stats (Session 3)
- 11 pages generated
- 0 errors, 0 warnings, 0 hints
- Build time: 2.17s

## Build Stats (Session 2)
- 11 pages generated (3 new project detail pages)
- 0 TypeScript errors
- Build time: 2.28s

## Build Stats (Session 1)
- 8 pages generated
- 0 TypeScript errors
- JS bundles: ~15.5KB (ClientRouter for view transitions)
- Build time: ~9s

## Files Created/Modified (34 total)
```
package.json, tsconfig.json, astro.config.mjs, wrangler.toml, .env.example, .gitignore
public/favicon.svg, public/noise.svg, public/robots.txt
src/styles/global.css
src/layouts/BaseLayout.astro
src/components/SEO.astro, Header.astro, Footer.astro, Hero.astro
src/components/ProjectCard.astro, ProjectGrid.astro
src/components/SkillsMatrix.astro (new in Session 2)
src/components/Timeline.astro, TimelineEntry.astro
src/components/LabSection.astro, ContactLinks.astro
src/content.config.ts
src/content/projects/stl-bcb.md, gateway-watch.md, deflab.md, epibench.md
src/content/projects/nf-core-scge.md, deeplabcut.md, bert-sequence.md (new in Session 2)
src/data/timeline.ts, social.ts, skills.ts (new in Session 2)
src/lib/constants.ts, api.ts
src/pages/index.astro, 404.astro, lab.astro
src/pages/projects/index.astro, [slug].astro
notes/PRD.md, DESIGN_DECISIONS.md, BUILD_LOG.md, BRAINSTORM.md, DOPAMINE_DESIGN.md
```
