export interface TimelineEntry {
  date: string;
  title: string;
  organization: string;
  location: string;
  description: string;
  type: 'education' | 'work';
  tags?: string[];
}

export const timelineEntries: TimelineEntry[] = [
  {
    date: 'Aug 2024 — Present',
    title: 'Bioinformatics Research Assistant',
    organization: 'Washington University School of Medicine — Spencer Lab',
    location: 'St. Louis, MO',
    description: 'Engineering reproducible Nextflow pipelines for multi-omic datasets (RNA-seq, WGBS, Hi-C) in AML research. Developing CNN/PyTorch frameworks for DNA methylation prediction. Orchestrating petabyte-scale ETL on AWS Batch/S3.',
    type: 'work',
    tags: ['Nextflow', 'PyTorch', 'AWS', 'Hi-C', 'WGBS'],
  },
  {
    date: 'May 2024 — Aug 2024',
    title: 'Analytical R&D Data Scientist',
    organization: 'Pfizer',
    location: 'Chesterfield, MO',
    description: 'Developed computer vision algorithms for high-content microscopy data. Replaced manual cell counting with reproducible R/Python scripts, increasing throughput by 300%. Reduced analysis error rates by 40%.',
    type: 'work',
    tags: ['Computer Vision', 'Python', 'R', 'Microscopy'],
  },
  {
    date: 'Dec 2022 — Dec 2024',
    title: 'M.S. Bioinformatics & Computational Biology',
    organization: 'Saint Louis University',
    location: 'St. Louis, MO',
    description: 'GPA: 3.97/4.00. Graduate research in deep learning for structural RNA classification, molecular dynamics simulations of drug-receptor interactions, and benchmarking methylation detection pipelines.',
    type: 'education',
    tags: ['Neural Networks', 'Molecular Dynamics', 'Benchmarking'],
  },
  {
    date: 'Jul 2021 — Jan 2024',
    title: 'Scientist II — Biochemistry & Instrumental Analysis',
    organization: 'ThermoFisher Scientific',
    location: 'St. Louis, MO',
    description: 'Technical Lead for analytical biochemistry assays. Built Python parsers for automated instrument data ingestion (CGE, PCR). Maintained 99.8% data accuracy across 200+ monthly samples.',
    type: 'work',
    tags: ['Python', 'Analytical Chemistry', 'Automation'],
  },
  {
    date: 'May 2021 — Aug 2021',
    title: 'QC Scientist — Analytical Chemistry',
    organization: 'Firmenich',
    location: 'St. Louis, MO',
    description: 'Processed and verified high-volume GC-MS spectral data for 150+ compounds under strict data integrity standards.',
    type: 'work',
    tags: ['GC-MS', 'Quality Control'],
  },
  {
    date: 'Aug 2020 — May 2021',
    title: 'Genetic QA Lab Technician',
    organization: 'Bayer',
    location: 'Creve Coeur, MO',
    description: 'High-throughput DNA extractions using Biomek automation systems, processing 500+ samples weekly in an ISO 9001 compliant quality lab.',
    type: 'work',
    tags: ['DNA Extraction', 'Automation', 'ISO 9001'],
  },
  {
    date: 'Aug 2015 — May 2019',
    title: 'B.S. Biology',
    organization: 'University of Missouri–Kansas City',
    location: 'Kansas City, MO',
    description: 'Undergraduate studies in biological sciences with emphasis on molecular biology and genetics.',
    type: 'education',
    tags: ['Biology', 'Genetics'],
  },
];
