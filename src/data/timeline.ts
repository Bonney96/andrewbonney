export interface TimelineEntry {
  date: string;
  title: string;
  organization: string;
  description: string;
  type: 'education' | 'work';
  tags?: string[];
}

export const timelineEntries: TimelineEntry[] = [
  {
    date: 'Present',
    title: 'Bioinformatics Scientist',
    organization: 'Independent',
    description: 'Building computational tools for genomic analysis, methylation profiling, and bioinformatics research. Developing open-source solutions for the scientific community.',
    type: 'work',
    tags: ['Python', 'Genomics', 'Machine Learning'],
  },
  {
    date: '2020 — 2024',
    title: 'M.S. Bioinformatics',
    organization: 'Saint Louis University',
    description: 'Graduate research in computational biology and bioinformatics. Focused on epigenetic analysis, methylation patterns, and developing reproducible analysis pipelines.',
    type: 'education',
    tags: ['Bioinformatics', 'Research', 'Data Science'],
  },
  {
    date: '2014 — 2018',
    title: 'B.S. Biology',
    organization: 'University of Missouri–Kansas City',
    description: 'Undergraduate studies in biological sciences with emphasis on molecular biology and genetics. Foundation in scientific methodology and laboratory techniques.',
    type: 'education',
    tags: ['Biology', 'Genetics', 'Research'],
  },
];
