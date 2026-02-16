# Brainstorm: Site Improvements

## Immediate Fixes

### 1. Readability — Lighten the Dark Mode
The background (#1a1a1a) is too dark and text (#e8e0d8) doesn't contrast enough. Shift the palette:
- Base: `#1a1a1a` → `#1c1c1e` (slightly warmer, lighter)
- Surface: `#242424` → `#2a2a2c`
- Elevated: `#2e2e2e` → `#343436`
- Text: `#e8e0d8` → `#ede7df` (brighter warm white)
- Muted text: `#8a8278` → `#9a9490` (more legible)
- Faint text: `#5a5550` → `#6a6560` (not as invisible)

### 2. Update Resume Data
Replace placeholder timeline/social data with real resume content:
- WashU Spencer Lab (Aug 2024 - Present)
- Pfizer R&D (May 2024 - Aug 2024)
- ThermoFisher (Jul 2021 - Jan 2024)
- Firmenich QC (May 2021 - Aug 2021)
- Bayer QA (Aug 2020 - May 2021)
- SLU MS Bioinformatics (Dec 2022 - Dec 2024, GPA 3.97)
- UMKC BS Biology (Aug 2015 - May 2019)
- Update email to abonney@wustl.edu
- Update LinkedIn to /in/andrew-bonney/

## Creative Ideas

### 3. "Skills Matrix" — Exposed Data Aesthetic
A grid/table of technical skills styled like a terminal readout or instrument panel.
- Languages: Python (Advanced), R (Advanced), Bash, Rust, SQL, Java
- Workflow: Nextflow DSL2, Docker/Singularity, AWS, Git, Linux/HPC
- Bio tools: GATK, STAR, Bowtie2, SAMtools, etc.
- AI: PyTorch, TensorFlow, Scikit-Learn, SHAP, CNNs
- Render as a "skeletonized" grid with proficiency indicators (monospace bars or dots)
- Group by category with hairline separators

### 4. View Transitions — Morph Between Pages
Use `transition:name` on project card titles so they morph into the detail page heading.
Use `transition:animate={slide()}` for page transitions. This is free with ClientRouter.

### 5. Syntax Highlighting Theme
Configure Shiki with a custom dark theme that matches the Cognitive Brutalism palette.
Use `github-dark-dimmed` or `vitesse-dark` as base — they have warm tones.
Code blocks in project detail pages will look native to the design.

### 6. "Experience" Section — Full Professional Timeline
Instead of 3 entries, show the full career path:
- Each position with company, dates, key achievements
- Color-code: work (moss), education (indigo), project (amber)
- Show the progression from lab tech → QC → Scientist → R&D → Bioinformatics

### 7. "Select Projects" Section
Beyond the 4 deployed sites, add cards for:
- nf-core/scge Cloud-Native Pipeline (Nextflow, AWS Batch, DRAGEN)
- DeepLabCut Imaging Pipeline (ML pose estimation, zebrafish)
- BERT for Sequence Classification (transformers, gene function)
- EpiBench (CNN/PyTorch, methylation)
These can be content collection entries with status "portfolio" (not deployed sites)

### 8. Tech Stack Badge Visualization
Instead of plain tag pills, render tech badges with subtle color coding:
- Python: moss green
- R: indigo
- Docker: indigo
- AWS: amber
- PyTorch: terracotta
This creates a visual "heat signature" of the tech landscape

### 9. Professional Affiliations
Small section: ISCB member, SLU IDBI member
Adds academic credibility

### 10. Dynamic Page Titles
The telemetry footer could show:
- Current page route
- Number of projects
- Last updated date (from git or build time)

### 11. Smooth Scroll Navigation
The home page has anchor sections (#projects, #timeline, #lab, #contact).
CSS `scroll-behavior: smooth` is already set.
Add `scroll-padding-top: 5rem` to account for fixed header. ✅ Already done.

### 12. Image Optimization
Use Astro's `<Image />` and `<Picture />` components for any future images.
- Hero headshot with `loading="eager"` and `fetchpriority="high"`
- Project thumbnails with `loading="lazy"`
- Auto WebP/AVIF conversion

### 13. Keyboard Navigation & Accessibility
- Add `aria-label` attributes to icon-only buttons
- Ensure focus-visible styles on interactive elements
- Skip-to-content link for screen readers

### 14. "Publications" or "Research" Section (Future)
If Andrew publishes papers, add a research section with citations.
Could pull from ORCID API in the future.

### 15. RSS Feed (Future)
If blog/writing is added later, Astro has built-in RSS feed support.

## Priority Implementation Order
1. Fix readability (lighten palette) — CRITICAL
2. Update with real resume data — HIGH
3. Add Skills Matrix section — HIGH
4. Add full experience timeline — HIGH
5. Add Select Projects entries — HIGH
6. View transitions morph effects — MEDIUM
7. Shiki syntax highlighting config — MEDIUM
8. Affiliations section — LOW
