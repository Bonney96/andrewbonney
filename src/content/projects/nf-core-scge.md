---
title: "nf-core/scge Pipeline"
description: "Cloud-native tumor-normal sequencing pipeline for the NIH Common Fund's Somatic Cell Genome Editing program. Built with Nextflow DSL2 and DRAGEN hardware acceleration on AWS."
repo: "https://github.com/dhslab/nf-core-scge"
tags: ["Nextflow", "AWS Batch", "DRAGEN", "nf-core", "Genomics"]
featured: true
order: 5
status: "portfolio"
category: "research"
---

## The Problem

The NIH Common Fund's Somatic Cell Genome Editing (SCGE) program required a reproducible, scalable tumor-normal variant calling pipeline capable of handling petabyte-scale sequencing datasets. Existing workflows lacked the cloud elasticity and hardware acceleration needed for high-depth clinical-grade analysis under tight nf-core reproducibility standards.

## The Solution

Co-developed a cloud-native Nextflow DSL2 pipeline adhering to full nf-core community conventions — enabling automated, reproducible somatic variant calling at NIH scale.

## Architecture

- **Nextflow DSL2** for modular, composable workflow components with strict versioning
- **Illumina DRAGEN** hardware acceleration on AWS Batch for high-depth tumor-normal variant calling — dramatically reducing compute time vs. software-only approaches
- **nf-core** conventions for reproducibility, automated testing, CI/CD, and community contribution standards
- **Docker/Singularity** dual containerization for portability across HPC and cloud environments
- **AWS Batch** elastic compute scaling — spin up and tear down resources automatically based on input queue depth

## Key Results

- Minimized runtime for high-depth tumor-normal variant calling through DRAGEN acceleration
- Full compliance with nf-core community standards, enabling peer review and external validation
- Handles petabyte-scale sequencing datasets with automated ingestion and provenance tracking
- Production-deployed for active NIH SCGE program research cohorts
