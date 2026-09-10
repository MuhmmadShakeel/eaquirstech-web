export const siteConfig = {
  name: 'Eaquirs Tech',
  tagline: 'AI-native software engineering partner',
  url: 'https://eaquirstech.com',
  description:
    'Eaquirs Tech designs, builds and rescues production software — ERP platforms, AI systems, web and mobile products — for founders and operating teams who need working systems, not prototypes.',
  email: 'hello@eaquirstech.com',
  location: 'Bahawalpur, Pakistan — working with teams worldwide',
  social: {
    linkedin: '#',
    github: '#',
    twitter: '#',
  },
  stats: [
    { value: '95%', label: 'Performance gain', note: 'Hospital system rebuild' },
    { value: '6 wks', label: 'Full system replacement', note: 'Zero care disruption' },
    { value: '4', label: 'Production platforms', note: 'Live and serving users' },
    { value: '2', label: 'Industry ERPs shipped', note: 'Real estate and jewellery' },
  ],
} as const;

/** @deprecated Use siteConfig */
export const site = siteConfig;

/**
 * Headline figures.
 * Every number here is traceable to a delivered project in lib/content/projects.ts.
 */
export const headlineStats = siteConfig.stats;
