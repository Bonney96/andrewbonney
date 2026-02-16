# Product Requirements Document (PRD)

**Project Name:** AndrewBonney.cloud (The "Headless" Hub)
**Version:** 1.0
**Date:** February 16, 2026
**Status:** In Development

## Executive Summary

Deploy a high-performance, cost-efficient personal hub that consolidates the user's professional identity (Bioinformatics Scientist) and technical portfolio.

**Core Philosophy:** "Headless Architecture." The frontend (static, fast, global) is decoupled from the backend (dynamic, heavy, computational).

**Primary Goal:** Transition andrewbonney.cloud from a parked domain to a live "Central Command" that links to existing projects and hosts dynamic Python-based bioinformatics demos.

## Technical Architecture

### The "Headless" Stack

- **Frontend (The Face):** Cloudflare Pages — GitHub repo Bonney96/andrewbonney. Zero latency, DDoS protected.
- **Backend (The Brain):** Hostinger VPS (KVM 2) — IP: 187.77.4.215, Ubuntu 24.04 LTS. API Server, Database Host, Python/Bioinformatics processing.
- **DNS & Security:** Cloudflare — SSL termination, DNS routing, firewall.

### DNS Records

- `A` Record `@` → Cloudflare Pages (auto-managed)
- `CNAME` Record `www` → andrewbonney.cloud
- `A` Record `api` → 187.77.4.215 (Proxied/Orange Cloud)
- `A` Record `ssh` → 187.77.4.215 (DNS Only/Grey Cloud)

### VPS Stack

- Web Server: Nginx (Reverse Proxy)
- App Server: Gunicorn or Uvicorn
- Language: Python 3.12+
- Security: UFW (80/443/22), Fail2Ban

## Functional Requirements

### Portfolio Module (Frontend)

- Landing page: "Bioinformatics Scientist & Developer"
- Project grid linking to:
  - St. Louis BCB Collective (stl-bcb.pages.dev)
  - Gateway Watch (gateway-watch.pages.dev)
  - DefLab (deflab-website.pages.dev)
- Resume section: timeline of education (SLU, UMKC) and work history

### Lab Module (Backend Integration)

- **EpiBench Lite Demo:**
  1. User uploads CSV/FASTA file on frontend
  2. Frontend POSTs to api.andrewbonney.cloud/predict
  3. VPS runs Python script (pandas/scikit-learn)
  4. VPS returns JSON results
  5. Frontend renders chart/graph

## Design Direction: "Cognitive Brutalism"

**"The Lab in the Library"** — high-tech bioinformatics lab inside an ancient university library.

### Typography
- Headers: High-contrast serif (Lora)
- Data/UI: Monospace (JetBrains Mono)
- Body: Sans-serif (Inter)

### Palette: "Warm Dark Mode"
- Backgrounds: Charcoal, espresso, slate
- Accents: Moss green, indigo, terracotta, warm amber
- Text: Warm off-white (not pure white)
- Texture: Subtle noise/grain overlay

### UI Philosophy
- "Skeletonized" layout — expose the structure with elegant hairlines
- Progressive disclosure — summary first, technical depth on interaction
- Telemetry-style footer with build info

## Costs

- Domain: ~$12/year (Hostinger)
- VPS: Prepaid until 2027-02-07
- Cloudflare: Free tier
- **Monthly cost: $0.00**
