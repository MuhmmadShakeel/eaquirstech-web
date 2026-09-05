export type Service = {
  num: string;
  title: string;
  description: string;
  points: string[];
  icon: string;
};

export const services: Service[] = [
  {
    num: '01',
    title: 'Product engineering',
    description:
      'Full-stack web and mobile builds on architecture that survives the second year — not just the demo.',
    points: ['Next.js & NestJS platforms', 'REST and typed APIs', 'PostgreSQL data modelling'],
    icon: 'code',
  },
  {
    num: '02',
    title: 'ERP & internal systems',
    description:
      'Operations software shaped around how a business actually runs: inventory, accounting, roles, approvals.',
    points: ['Multi-tenant architecture', 'Role-based access control', 'Reporting and audit trails'],
    icon: 'layers',
  },
  {
    num: '03',
    title: 'AI & automation',
    description:
      'LLM features that hold up in production — retrieval, agents and assistants wired into your real data.',
    points: ['LangChain & OpenAI integration', 'Document and retrieval pipelines', 'Workflow automation'],
    icon: 'spark',
  },
  {
    num: '04',
    title: 'Rescue & modernization',
    description:
      'Abandoned vendors, unmaintainable prototypes, legacy systems past their limit. We take them over and stabilise them.',
    points: ['Codebase audit and triage', 'Zero-downtime replacement', 'Performance remediation'],
    icon: 'shield',
  },
  {
    num: '05',
    title: 'Payments & integrations',
    description:
      'Money movement and third-party systems done carefully — idempotent, reconciled and observable.',
    points: ['Stripe & billing flows', 'Social login and identity', 'Calendar, storage and media'],
    icon: 'link',
  },
  {
    num: '06',
    title: 'Product design',
    description:
      'Interface and interaction design for dense, information-heavy software that still feels calm to use.',
    points: ['Design systems', 'Dashboard and data UX', 'Responsive interface design'],
    icon: 'pen',
  },
];
