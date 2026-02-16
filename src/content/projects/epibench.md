---
title: "EpiBench Lite"
description: "An interactive bioinformatics demo for epigenetic analysis. Upload genomic data, run methylation predictions, and visualize results in real-time."
url: "https://andrewbonney.cloud/lab"
tags: ["Bioinformatics", "Python", "Machine Learning", "FastAPI"]
featured: true
order: 4
status: "coming-soon"
---

EpiBench Lite brings epigenetic analysis to the browser. Users can upload CSV or FASTA files, and the backend processes them using Python with pandas and scikit-learn to generate methylation predictions.

The tool demonstrates the full headless architecture: static frontend on Cloudflare Pages communicating with a FastAPI backend on the VPS for heavy computational work.

### Planned Features

- File upload (CSV/FASTA) with client-side validation
- Real-time processing status indicators
- Interactive result visualization with heatmaps
- Downloadable analysis reports
