export const SITE = {
  title: 'Andrew Bonney',
  description: 'Bioinformatics Engineer & Computational Systems Builder — genomic pipeline development, machine learning for biology, and production infrastructure at Washington University in St. Louis.',
  url: 'https://andrewbonney.cloud',
  apiUrl: import.meta.env.PUBLIC_API_BASE_URL || 'https://api.andrewbonney.cloud',
} as const;

export const NAV_LINKS = [
  { label: 'Projects', href: '/#projects' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Experience', href: '/#timeline' },
  { label: 'Lab', href: '/lab' },
] as const;

export const EXTERNAL_PROJECTS = {
  stlBcb: 'https://stl-bcb.pages.dev',
  gatewayWatch: 'https://gateway-watch.pages.dev',
  deflab: 'https://deflab-website.pages.dev',
} as const;
