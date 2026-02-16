export interface Skill {
  name: string;
  level?: 'advanced' | 'proficient' | 'familiar';
}

export interface SkillCategory {
  label: string;
  id: string;
  accent: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    label: 'Languages',
    id: 'lang',
    accent: 'moss',
    skills: [
      { name: 'Python', level: 'advanced' },
      { name: 'R', level: 'advanced' },
      { name: 'Bash', level: 'proficient' },
      { name: 'Rust', level: 'familiar' },
      { name: 'SQL', level: 'proficient' },
      { name: 'Java', level: 'familiar' },
    ],
  },
  {
    label: 'Workflow & Cloud',
    id: 'infra',
    accent: 'indigo',
    skills: [
      { name: 'Nextflow DSL2', level: 'advanced' },
      { name: 'Docker/Singularity', level: 'advanced' },
      { name: 'AWS (Batch, S3, EC2)', level: 'proficient' },
      { name: 'Git/GitHub', level: 'advanced' },
      { name: 'Linux/HPC Admin', level: 'proficient' },
    ],
  },
  {
    label: 'Bioinformatics',
    id: 'bio',
    accent: 'terracotta',
    skills: [
      { name: 'GATK', level: 'proficient' },
      { name: 'STAR / Bowtie2', level: 'proficient' },
      { name: 'SAMtools / BEDtools', level: 'advanced' },
      { name: 'Seurat / DESeq2', level: 'proficient' },
      { name: 'Bismark / MACS', level: 'proficient' },
      { name: 'Peakachu / HOMER', level: 'proficient' },
      { name: 'BioPython / BioPerl', level: 'proficient' },
    ],
  },
  {
    label: 'Data Science & AI',
    id: 'ai',
    accent: 'amber',
    skills: [
      { name: 'PyTorch', level: 'advanced' },
      { name: 'TensorFlow', level: 'proficient' },
      { name: 'Scikit-Learn', level: 'advanced' },
      { name: 'Pandas / NumPy', level: 'advanced' },
      { name: 'Explainable AI (SHAP, Captum)', level: 'proficient' },
      { name: 'Computer Vision (CNNs)', level: 'proficient' },
    ],
  },
  {
    label: 'Regulatory & QC',
    id: 'reg',
    accent: 'text-muted',
    skills: [
      { name: 'ISO 9001' },
      { name: 'FDA Validation (21 CFR Part 11)' },
      { name: 'GLP/GMP' },
      { name: 'Data Integrity & Audit Trails' },
    ],
  },
];
