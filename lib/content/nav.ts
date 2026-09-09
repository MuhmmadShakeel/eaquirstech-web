export type NavLink = { label: string; href: string; desc?: string };
export type NavColumn = { heading: string; links: NavLink[] };
export type NavItem = {
  label: string;
  href: string;
  mega?: NavColumn[];
  simple?: NavLink[];
};

export const navItems: NavItem[] = [
  {
    label: 'Services',
    href: '/services',
    mega: [
      {
        heading: 'Product Engineering',
        links: [
          { label: 'Full-stack web development', href: '/services/product-engineering/full-stack-web-development', desc: 'Next.js · NestJS · Node.js' },
          { label: 'Mobile app development', href: '/services/product-engineering/mobile-app-development', desc: 'React Native · Flutter' },
          { label: 'API & backend architecture', href: '/services/product-engineering/api-backend-architecture', desc: 'REST · GraphQL · Microservices' },
          { label: 'DevOps & CI/CD', href: '/services/product-engineering/devops-cicd', desc: 'Docker · Automated pipelines' },
          { label: 'MVP development', href: '/services/product-engineering/mvp-development', desc: 'From idea to working product' },
        ],
      },
      {
        heading: 'ERP & Business Systems',
        links: [
          { label: 'Real estate ERP', href: '/services/business-systems/real-estate-erp', desc: 'Projects · inventory · finance' },
          { label: 'Healthcare management', href: '/services/business-systems/healthcare-management', desc: 'Patient care · billing · records' },
          { label: 'Inventory & manufacturing', href: '/services/business-systems/inventory-manufacturing', desc: 'Weight-aware · purity tracking' },
          { label: 'Custom ERP build', href: '/services/business-systems/custom-erp-build', desc: 'Shaped to your workflow' },
          { label: 'Multi-tenant platforms', href: '/services/business-systems/multi-tenant-platforms', desc: 'Role-based · scalable' },
        ],
      },
      {
        heading: 'AI & Automation',
        links: [
          { label: 'LLM integration', href: '/services/ai-automation/llm-integration', desc: 'OpenAI · LangChain · RAG' },
          { label: 'AI-powered chatbots', href: '/services/ai-automation/ai-powered-chatbots', desc: 'Document Q&A · support agents' },
          { label: 'Workflow automation', href: '/services/ai-automation/workflow-automation', desc: 'AI-driven process engines' },
          { label: 'Data extraction & analytics', href: '/services/ai-automation/data-extraction-analytics', desc: 'Structured insights from raw data' },
          { label: 'Custom AI model integration', href: '/services/ai-automation/custom-ai-model-integration', desc: 'Fine-tuning · deployment · ops' },
        ],
      },
      {
        heading: 'Rescue & Modernization',
        links: [
          { label: 'Codebase rescue', href: '/services/rescue-modernization/codebase-rescue', desc: 'Prototype → production hardening' },
          { label: 'Vendor replacement', href: '/services/rescue-modernization/vendor-replacement', desc: 'Zero-downtime handover' },
          { label: 'Legacy system rewrite', href: '/services/rescue-modernization/legacy-system-rewrite', desc: 'Modernise without disruption' },
          { label: 'Performance remediation', href: '/services/rescue-modernization/performance-remediation', desc: 'Database · caching · infra' },
        ],
      },
      {
        heading: 'More',
        links: [
          { label: 'Payments & integrations', href: '/services/specialist-services/payments-integrations', desc: 'Stripe · social login · calendar' },
          { label: 'Product design & UX', href: '/services/specialist-services/product-design-ux', desc: 'Dashboards · design systems' },
          { label: 'Quality assurance', href: '/services/specialist-services/quality-assurance', desc: 'Manual · automated · load testing' },
          { label: 'Staff augmentation', href: '/services/specialist-services/staff-augmentation', desc: 'Senior engineers embedded in your team' },
        ],
      },
    ],
  },
  {
    label: 'Consultancy',
    href: '/consultancy',
    simple: [
      { label: 'Tech Strategy', href: '/consultancy#tech-strategy', desc: 'Architecture decisions · stack selection' },
      { label: 'AI Consulting', href: '/consultancy#ai', desc: 'Where and how AI fits your product' },
      { label: 'Product Consulting', href: '/consultancy#product', desc: 'Scope · MVP · roadmap' },
      { label: 'Digital Transformation', href: '/consultancy#digital', desc: 'Modernise operations with software' },
      { label: 'Architecture Review', href: '/consultancy#arch', desc: 'Audit your current system for risk' },
      { label: 'IT Outsourcing Advisory', href: '/consultancy#outsourcing', desc: 'Build vs buy · vendor selection' },
      { label: 'Security & Compliance Review', href: '/consultancy#security', desc: 'OWASP · data-protection readiness' },
      { label: 'Fractional CTO', href: '/consultancy#cto', desc: 'Senior technical leadership on demand' },
    ],
  },
  {
    label: 'Industries',
    href: '/industries',
    simple: [
      { label: 'Real Estate', href: '/industries#real-estate', desc: 'Project · property · finance systems' },
      { label: 'Healthcare', href: '/industries#healthcare', desc: 'Patient care · hospital management' },
      { label: 'Manufacturing & Jewellery', href: '/industries#manufacturing', desc: 'Inventory · production · trade' },
      { label: 'HR & Hiring', href: '/industries#hr', desc: 'ATS · scheduling · AI screening' },
      { label: 'Fintech', href: '/industries#fintech', desc: 'Payments · wallets · compliance' },
      { label: 'Logistics', href: '/industries#logistics', desc: 'Fleet · dispatch · supply chain' },
      { label: 'SaaS', href: '/industries#saas', desc: 'Multi-tenant · billing · onboarding' },
      { label: 'E-commerce & Retail', href: '/industries#ecommerce', desc: 'Storefronts · inventory · orders' },
    ],
  },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
