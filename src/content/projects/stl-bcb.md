---
title: "Biointal — Bioinformatics Agency"
description: "A vertically integrated bioinformatics agency serving the St. Louis biotech ecosystem. Infrastructure, analysis, and talent — from a scientist who speaks the language."
url: "https://stl-bcb.pages.dev"
tags: ["Bioinformatics", "Community", "Web"]
featured: true
order: 1
status: "live"
category: "deployment"
---

## The Thesis

Traditional recruiters can't read a Nextflow script. Consulting firms don't know the difference between STAR and HISAT2. The person best positioned to identify, vet, and place bioinformatics talent — or build a lab's first cloud pipeline — is a bioinformatician.

Biointal is built on that gap.

## The Strategy: Community as Moat

The St. Louis bioscience ecosystem — WashU, SLU, Cortex Innovation Community, and a growing biotech cluster — is talent-hungry and geographically cohesive. The STL BCB Collective established a community presence first: a recognized hub for researchers, events, and resources across institutions. That credibility becomes the trust layer for everything that follows.

When you're the connective tissue of an ecosystem, you're not selling — you're already in the room.

## The Business Model: "The Agency Triad"

Three revenue lines, one technical identity:

**Pillar A — Infrastructure (The Wedge)**
"Lab-in-a-Box." Automated, containerized Nextflow pipelines on AWS Batch for PIs drowning in manual data transfers and unoptimized EC2 spend. Project-based fees get you in the door and prove competence before anything else.

**Pillar B — Analysis (The Retainer)**
Fractional Bioinformatics Lead. Publication-ready figures — Circos plots, UMAPs, differential expression — ghost-authored for grants and papers. Monthly retainer provides predictable cash flow and deepens client relationships.

**Pillar C — Talent (The Exit)**
A pre-vetted candidate registry: GitHub-audited bioinformaticians, filtered for reproducibility, cloud skills, and domain expertise. Placed at a flat fee when a lab outgrows consulting and needs a full-time hire. Candidate identities are intentionally anonymized in public profiles — preventing labs from bypassing the placement fee by sourcing directly.

## Technical Execution

- **Hugo** SSG + Tailwind CSS deployed on Cloudflare Pages — clinical, fast, zero maintenance
- **Pagefind** client-side search with full faceted filtering (skills, domain, visa status, availability) — no backend required
- **Candidate anonymization by design** — no GitHub/LinkedIn links on public profiles; code snippets prove skill without revealing identity
- **Tally.so** intake forms for candidate applications and employer inquiries
- **Performance protocol** — WebP image generation via render hook, immutable cache headers for assets, lazy-loaded Pagefind WASM to prevent blocking on initial load

## Current State

Early-stage and operational: 3 pre-vetted candidates in the registry, employer pipeline in development, vetting protocol (GitHub audit → domain interview → verified badge) defined and running. The community platform feeds organic leads on both sides of the marketplace.

This is the starting point.
