---
title: "nf-core/scge Pipeline"
description: "Cloud-native tumor-normal sequencing pipeline for the NIH Common Fund's Somatic Cell Genome Editing program. Built with Nextflow DSL2 and DRAGEN hardware acceleration on AWS."
repo: "https://github.com/Bonney96"
tags: ["Nextflow", "AWS Batch", "DRAGEN", "nf-core", "Genomics"]
featured: true
order: 5
status: "portfolio"
category: "research"
---

Co-developed a scalable Nextflow pipeline for the NIH Common Fund's Somatic Cell Genome Editing (SCGE) program, adhering to strict nf-core reproducibility standards.

### Architecture

- **Nextflow DSL2** for modular, reusable workflow components
- **Illumina DRAGEN** hardware acceleration on AWS Batch for high-depth sequencing data processing
- **nf-core** conventions for reproducibility, testing, and CI/CD
- **Docker/Singularity** containerization for environment isolation

### Key Achievements

- Minimized runtime for high-depth tumor-normal variant calling
- Full compliance with nf-core community standards
- Integrated with AWS Batch for elastic cloud compute scaling
- Handles petabyte-scale sequencing datasets with automated ingestion
