import { notFound } from 'next/navigation';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';

const pages = {
  'product-engineering': {
    eyebrow: '01 · Product Engineering', title: 'From first system map to a confident launch.',
    intro: 'Senior engineers build the product, the platform, and the release process as one accountable delivery team.',
    image: '/mockups/delivery-system.png', proof: '/mockups/laptop-dashboard.png',
    items: [
      { slug: 'full-stack-web-development', title: 'Full-stack web development', description: 'Production-grade web applications built across frontend, backend, data, and deployment.' },
      { slug: 'mobile-app-development', title: 'Mobile app development', description: 'Cross-platform mobile experiences designed for dependable release and long-term support.' },
      { slug: 'api-backend-architecture', title: 'API & backend architecture', description: 'Secure, scalable APIs and domain models that keep product logic dependable as usage grows.' },
      { slug: 'devops-cicd', title: 'DevOps & CI/CD pipelines', description: 'Automated testing, deployment, monitoring, and infrastructure practices from the first release.' },
      { slug: 'mvp-development', title: 'MVP development', description: 'A focused, launch-ready product scope that proves the right idea without compromising the foundation.' },
    ],
  },
  'business-systems': {
    eyebrow: '02 · ERP & Business Systems', title: 'Operations software that fits how you actually work.',
    intro: 'Purpose-built ERP and internal platforms that bring people, approvals, reporting, and data into one reliable system.',
    image: '/mockups/desktop-dashboard.png', proof: '/mockups/hero-platform.png',
    items: [
      { slug: 'real-estate-erp', title: 'Real estate ERP', description: 'Property inventory, customer records, agent workflows, project milestones, and reporting in one system.' },
      { slug: 'healthcare-management', title: 'Healthcare management system', description: 'Reliable patient, billing, pharmacy, laboratory, and clinical workflows built around daily operations.' },
      { slug: 'inventory-manufacturing', title: 'Inventory & manufacturing ERP', description: 'Stock, production, supplier, and traceability workflows that make operational data actionable.' },
      { slug: 'custom-erp-build', title: 'Custom ERP build', description: 'A business system shaped to your exact roles, approvals, reports, and operating process.' },
      { slug: 'multi-tenant-platforms', title: 'Multi-tenant SaaS platforms', description: 'Tenant-aware product architecture, subscriptions, access controls, and operational tooling at scale.' },
    ],
  },
  'ai-automation': {
    eyebrow: '03 · AI & Automation', title: 'AI that earns its place in your operation.',
    intro: 'Practical AI systems designed around real data, real decisions, and the safeguards production workloads require.',
    image: '/mockups/ai-orchestration.png', proof: '/mockups/mobile-login.png',
    items: [
      { slug: 'llm-integration', title: 'LLM integration', description: 'Language models connected to your product with context, guardrails, evaluation, and observability.' },
      { slug: 'ai-powered-chatbots', title: 'AI-powered chatbots', description: 'Knowledge-aware assistants for support, internal operations, and customer conversations.' },
      { slug: 'workflow-automation', title: 'Workflow automation', description: 'Automated routing, scoring, summarising, and operational steps that remove repetitive manual work.' },
      { slug: 'data-extraction-analytics', title: 'Data extraction & analytics', description: 'Structured insight from documents, images, and business data for better decisions.' },
      { slug: 'custom-ai-model-integration', title: 'Custom AI model integration', description: 'Domain-specific model capability, deployment, and evaluation designed for your real use case.' },
    ],
  },
  'rescue-modernization': {
    eyebrow: '04 · Rescue & Modernization', title: 'The path from inherited risk to a stable platform.',
    intro: 'We take over critical systems, map the risk, and make improvements without disrupting the work already depending on them.',
    image: '/mockups/ai-orchestration.png', proof: '/mockups/desktop-dashboard.png',
    items: [
      { slug: 'codebase-rescue', title: 'Codebase rescue', description: 'A technical assessment and practical remediation plan for code that has become difficult to ship safely.' },
      { slug: 'vendor-replacement', title: 'Vendor replacement', description: 'A controlled transition from an unreliable vendor with continuity, migration, and handover planning.' },
      { slug: 'legacy-system-rewrite', title: 'Legacy system rewrite', description: 'A staged modernisation path that protects day-to-day operations while replacing fragile technology.' },
      { slug: 'performance-remediation', title: 'Performance remediation', description: 'Measured fixes for slow queries, unstable infrastructure, bottlenecks, and avoidable operational cost.' },
    ],
  },
  'specialist-services': {
    eyebrow: '05 · Specialist Services', title: 'The specialist capability your product needs next.',
    intro: 'Focused expertise that strengthens an existing roadmap without adding a layer of unnecessary process.',
    image: '/mockups/systems-architecture.png', proof: '/mockups/watch-platform.png',
    items: [
      { slug: 'payments-integrations', title: 'Payments & integrations', description: 'Secure payments, subscriptions, webhooks, and third-party integrations handled end to end.' },
      { slug: 'product-design-ux', title: 'Product design & UX', description: 'Clear interfaces and design systems that help people complete important work with confidence.' },
      { slug: 'quality-assurance', title: 'Quality assurance', description: 'Practical manual and automated testing that protects quality before software reaches users.' },
      { slug: 'staff-augmentation', title: 'Staff augmentation', description: 'Senior Eaquirs engineers embedded into your team with a rapid, accountable start.' },
    ],
  },
} as const;

type Category = keyof typeof pages;

export function generateStaticParams() {
  return Object.keys(pages).map((category) => ({ category }));
}

export default async function ServiceCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const page = pages[category as Category];
  if (!page) notFound();

  return (
    <>
      <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-navy pt-24 text-white">
        <div className="container-site grid w-full items-center gap-10 py-14 lg:grid-cols-[1fr_0.9fr]">
          <div className="max-w-3xl">
            <p className="text-micro font-bold uppercase tracking-label text-amber">{page.eyebrow}</p>
            <h1 className="mt-5 text-h1 font-bold leading-[1.04] text-white">{page.title}</h1>
            <p className="mt-6 max-w-2xl text-body-lg text-on-dark-muted">{page.intro}</p>
            <div className="mt-9 flex flex-wrap gap-4"><Button href="/contact" size="lg" arrow className="bg-amber text-white hover:bg-amber-bright">Discuss your project</Button><Button href="/work" size="lg" variant="outline" className="border-white/20 bg-transparent text-white hover:border-amber hover:text-amber">See live work</Button></div>
          </div>
          <div className="relative mx-auto w-full max-w-xl border border-white/15 bg-white/[0.03] p-3 sm:p-4"><div aria-hidden className="absolute inset-3 border border-amber/25" /><img src={page.image} alt={`${page.eyebrow} service visual`} className="relative w-full object-contain" /></div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-site">
          <div className="grid items-end gap-6 border-b border-line pb-7 lg:grid-cols-[1fr_0.8fr]"><div><p className="text-micro font-bold uppercase tracking-label text-amber">Capabilities</p><h2 className="mt-3 text-h2 font-bold text-ink">What this engagement can include</h2></div><p className="text-body-sm leading-relaxed text-body">Defined around your workflow, delivery constraints, and the outcome your team needs to achieve.</p></div>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {page.items.map((item, index) => <Link key={item.title} href={`/services/${category}/${item.slug}`} className="group flex min-h-44 flex-col rounded-xl border border-line bg-white p-5 transition-all duration-base hover:-translate-y-1 hover:border-amber/50"><div className="flex items-center justify-between"><span className="text-micro font-bold text-amber">0{index + 1}</span><span className="h-px w-8 bg-line transition-all duration-base group-hover:w-14 group-hover:bg-amber" /></div><h3 className="mt-6 text-[1.15rem] font-semibold leading-snug text-ink">{item.title}</h3><p className="mt-2 text-body-sm leading-relaxed text-body">{item.description}</p><div className="mt-auto flex items-center gap-2 pt-4 text-body-sm font-semibold text-amber-deep">Explore scope <Icon name="arrow" className="h-4 w-4" /></div></Link>)}
          </div>
        </div>
      </section>

      <section className="section-y section-light"><div className="container-site grid items-center gap-10 lg:grid-cols-2"><div><p className="text-micro font-bold uppercase tracking-label text-amber">Built for reality</p><h2 className="mt-3 text-h2 font-bold text-ink">Clear scope. Visible progress. Working software.</h2><p className="mt-5 text-body text-body">Every engagement starts with the decisions that matter and continues with frequent working reviews—not long periods of silence.</p><Button href="/contact" size="lg" arrow className="mt-8 bg-amber text-white hover:bg-amber-bright">Start with a conversation</Button></div><div className="overflow-hidden rounded-2xl border border-line bg-white shadow-card"><img src={page.proof} alt="Eaquirs Tech work" className="w-full object-contain" /></div></div></section>
    </>
  );
}
