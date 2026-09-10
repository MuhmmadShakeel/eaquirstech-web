export type Project = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  stack: string[];
  metrics: { value: string; label: string }[];
  href?: string;
  image: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'openinterview',
    name: 'OpenInterview.me',
    category: 'OpenInterview.me',
    summary: 'An AI-generated prototype rescued into a production hiring platform with LangChain + Stripe.',
    description:
      'Rebuilt a fragile AI-generated prototype into a hardened hiring platform: a validated Express API, idempotent Stripe payments, social login, interview scheduling with calendar invites, and a LangChain-backed AI assistant.',
    stack: [
      'Next.js', 'NestJS', 'Node.js', 'JavaScript', 'PostgreSQL', 'Tailwind CSS', 'TypeScript',
      'Express.js', 'Zod', 'Neon DB', 'JWT',
      'Stripe', 'Social Login', 'Cloudinary', 'LangChain', 'OpenAI API', 'ICS Calendar',
    ],
    metrics: [
      { value: 'Idempotent', label: 'Payment flow' },
      { value: 'Prototype → prod', label: 'Rescue engagement' },
    ],
    href: 'https://openinterview.me',
    image: '/mockups/laptop-phone-login.png',
    featured: true,
  },
  {
    slug: 'turner10',
    name: 'Turner 10',
    category: 'Real Estate ERP',
    summary: 'Projects, properties, customers and accounting in one controlled workspace.',
    description:
      'A multi-tenant ERP for property development: project and inventory tracking, customer files, instalment plans and accounting, under role-based access and multi-language support.',
    stack: ['Next.js', 'NestJS', 'Node.js', 'JavaScript', 'PostgreSQL', 'Tailwind CSS', 'TypeScript', 'Role-Based Access'],
    metrics: [
      { value: '4 modules', label: 'Unified workspace' },
      { value: '3 languages', label: 'EN · UR · AR' },
    ],
    href: 'https://turner10.eaquirstech.com',
    image: '/mockups/imac-white.png',
    featured: true,
  },
  {
    slug: 'ehms',
    name: 'EHMS',
    category: 'Hospital Management System',
    summary: 'A complete hospital system replaced in six weeks — zero disruption to patient care.',
    description:
      'The incumbent vendor abandoned support and left a hospital running on an unmaintained system. We replaced it end to end with zero disruption to patient care, and a 95% performance improvement on core workflows.',
    stack: ['Next.js', 'NestJS', 'Node.js', 'JavaScript', 'PostgreSQL', 'Tailwind CSS', 'TypeScript'],
    metrics: [
      { value: '95%', label: 'Faster core workflows' },
      { value: '0 days', label: 'Care disruption' },
    ],
    href: 'https://ehms.eaquirstech.com/',
    image: '/mockups/imac-dark.png',
    featured: true,
  },
  {
    slug: 'ophir',
    name: 'Ophir',
    category: 'Jewellery ERP',
    summary: 'Purity-aware inventory, production, and sales control built for the jewellery trade.',
    description:
      'An ERP shaped around how jewellery businesses actually operate — weight- and purity-aware inventory, production stages, consignment management and sales — with Redis caching keeping heavy stock queries responsive.',
    stack: ['Next.js', 'NestJS', 'Node.js', 'JavaScript', 'PostgreSQL', 'Tailwind CSS', 'TypeScript', 'Redis'],
    metrics: [
      { value: 'Redis-backed', label: 'Sub-second stock reads' },
      { value: 'Multi-branch', label: 'Inventory control' },
    ],
    href: 'https://ophir.eaquirstech.com/',
    image: '/mockups/macbook-dark.png',
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
