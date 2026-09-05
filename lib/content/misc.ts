/** Technologies we actually ship with — drawn from the four live platforms. */
export const stack = [
  'Next.js', 'NestJS', 'Node.js', 'Express.js', 'TypeScript', 'React',
  'PostgreSQL', 'Neon DB', 'Redis', 'SQL Server', 'Prisma', 'Dapper',
  'C# .NET', 'Entity Framework', 'LangChain', 'OpenAI API',
  'Stripe', 'JWT', 'Zod', 'Cloudinary', 'Docker', 'Tailwind CSS',
];

export const industries = [
  { label: 'Real estate', icon: 'building' },
  { label: 'Healthcare', icon: 'health' },
  { label: 'Manufacturing', icon: 'factory' },
  { label: 'Retail & trade', icon: 'store' },
  { label: 'HR & hiring', icon: 'users' },
  { label: 'Fintech', icon: 'card' },
  { label: 'Logistics', icon: 'truck' },
  { label: 'SaaS', icon: 'cloud' },
];

export const differentiators = [
  {
    title: 'Senior engineers only',
    description:
      'The person who scopes your project is the person who writes the code. No handoff to a junior bench after the contract is signed.',
  },
  {
    title: 'We take the hard ones',
    description:
      'Abandoned vendors, prototypes that cannot go to production, legacy systems past their limit. Rescue work is a specialism, not an exception.',
  },
  {
    title: 'AI-assisted, engineer-reviewed',
    description:
      'We use AI tooling to move faster through the mechanical work. Every line still passes a senior review before it reaches your users.',
  },
  {
    title: 'Working software weekly',
    description:
      'You see the running system every week from the first sprint. No six-week silence ending in a surprise.',
  },
];

export const engagementModels = [
  {
    name: 'Fixed scope',
    tagline: 'For a defined build with a clear finish line.',
    points: ['Scope and price agreed upfront', 'Milestone-based delivery', 'Best for a first version or a rebuild'],
    featured: false,
  },
  {
    name: 'Dedicated team',
    tagline: 'For continuous product work that keeps evolving.',
    points: ['A pod that stays with your product', 'Monthly retainer', 'Scale the team up or down as needed'],
    featured: true,
  },
  {
    name: 'Hourly',
    tagline: 'For support, extensions and unpredictable scope.',
    points: ['Pay only for hours used', 'Weekly time reporting', 'No long-term commitment'],
    featured: false,
  },
];

/**
 * Client testimonials.
 * Deliberately empty. Add entries only with the client's written permission and
 * their real name, role and company — the section renders nothing while empty,
 * which is far better than shipping invented quotes.
 */
export const testimonials: {
  quote: string;
  name: string;
  role: string;
  company: string;
}[] = [];
