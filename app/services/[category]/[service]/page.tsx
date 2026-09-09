import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';

type ServicePage = { title: string; category: string; summary: string; image: string; deliverables: string[] };

const deliveryRoadmaps: Record<string, { title: string; description: string }[]> = {
  'Product engineering': [
    { title: 'Align the product', description: 'Turn the opportunity, users, constraints, and success measures into a delivery-ready plan.' },
    { title: 'Build in working slices', description: 'Design, engineering, quality checks, and demos move together so progress stays visible.' },
    { title: 'Launch with confidence', description: 'Prepare release, observability, documentation, and the next practical iteration.' },
  ],
  'Business systems': [
    { title: 'Map the operation', description: 'Understand the people, approvals, data, and exceptions that make your workflow unique.' },
    { title: 'Deliver the critical flows', description: 'Build the modules that remove bottlenecks first, with frequent reviews from the people using them.' },
    { title: 'Roll out deliberately', description: 'Support migration, permissions, training, and reporting so the new system earns trust quickly.' },
  ],
  'AI & automation': [
    { title: 'Prove the use case', description: 'Start with the decisions, data quality, and measurable value that justify automation.' },
    { title: 'Engineer reliable workflows', description: 'Connect models, guardrails, human review, and business systems into a dependable flow.' },
    { title: 'Evaluate and improve', description: 'Measure output quality in production and tune the workflow against real cases.' },
  ],
  'Rescue & modernization': [
    { title: 'Stabilise what exists', description: 'Surface the highest risks, protect essential flows, and establish a safe operating baseline.' },
    { title: 'Recover control', description: 'Document the system, reduce technical debt, and deliver the fixes with the largest operational impact.' },
    { title: 'Modernise without disruption', description: 'Sequence replacement work around your live operation, data, and delivery deadlines.' },
  ],
  'Specialist services': [
    { title: 'Focus the brief', description: 'Clarify the specific problem, constraints, and definition of a successful engagement.' },
    { title: 'Embed the capability', description: 'Bring experienced specialists into the work with clear ownership and an efficient working rhythm.' },
    { title: 'Leave stronger foundations', description: 'Hand over practical documentation, tested work, and a clear next step for your team.' },
  ],
};

const services: Record<string, ServicePage> = {
  'product-engineering/full-stack-web-development': { title: 'Full-stack web development', category: 'Product engineering', summary: 'Production-ready web products built across interface, backend, data, and deployment by one accountable team.', image: '/service-visuals/product-engineering.png', deliverables: ['Product architecture', 'Frontend engineering', 'Backend & data services', 'Release-ready deployment'] },
  'product-engineering/mobile-app-development': { title: 'Mobile app development', category: 'Product engineering', summary: 'Reliable mobile experiences designed for real users, app-store delivery, and a roadmap that can grow.', image: '/mockups/mobile-login.png', deliverables: ['iOS & Android delivery', 'Cross-platform builds', 'Secure app integration', 'Ongoing release support'] },
  'product-engineering/api-backend-architecture': { title: 'API & backend architecture', category: 'Product engineering', summary: 'Secure, scalable services and domain models that keep important business logic dependable as demand grows.', image: '/mockups/laptop-dashboard.png', deliverables: ['API design', 'Data modelling', 'Authentication & roles', 'Performance foundations'] },
  'product-engineering/devops-cicd': { title: 'DevOps & CI/CD', category: 'Product engineering', summary: 'Automated delivery practices that make releases safer, faster, observable, and repeatable.', image: '/mockups/laptop-dashboard.png', deliverables: ['Automated pipelines', 'Cloud infrastructure', 'Monitoring & alerts', 'Release governance'] },
  'product-engineering/mvp-development': { title: 'MVP development', category: 'Product engineering', summary: 'A focused first product that validates the right idea while establishing a solid technical foundation.', image: '/mockups/delivery-system.png', deliverables: ['MVP scope', 'Rapid build cycles', 'Launch planning', 'Growth-ready architecture'] },
  'business-systems/real-estate-erp': { title: 'Real estate ERP', category: 'Business systems', summary: 'One dependable system for properties, customers, agents, payments, approvals, and project reporting.', image: '/mockups/desktop-dashboard.png', deliverables: ['Project & plot management', 'Customer payment records', 'Agent workflows', 'Executive reporting'] },
  'business-systems/healthcare-management': { title: 'Healthcare management', category: 'Business systems', summary: 'Operational software that connects patient records, billing, pharmacy, laboratory, and clinical workflows.', image: '/mockups/desktop-dashboard.png', deliverables: ['Patient administration', 'Billing workflows', 'Clinical operations', 'Role-based access'] },
  'business-systems/inventory-manufacturing': { title: 'Inventory & manufacturing', category: 'Business systems', summary: 'Clear operational control for stock, suppliers, production stages, traceability, and reporting.', image: '/mockups/desktop-dashboard.png', deliverables: ['Stock control', 'Production workflows', 'Supplier management', 'Operational reporting'] },
  'business-systems/custom-erp-build': { title: 'Custom ERP build', category: 'Business systems', summary: 'A business platform shaped around your own roles, approvals, reports, and operating model.', image: '/mockups/hero-platform.png', deliverables: ['Workflow discovery', 'Custom modules', 'Approval systems', 'Live business dashboards'] },
  'business-systems/multi-tenant-platforms': { title: 'Multi-tenant platforms', category: 'Business systems', summary: 'Subscription-ready SaaS architecture with secure tenant separation, permissions, and operational tooling.', image: '/mockups/hero-platform.png', deliverables: ['Tenant architecture', 'Subscriptions & billing', 'Access controls', 'Platform operations'] },
  'ai-automation/llm-integration': { title: 'LLM integration', category: 'AI & automation', summary: 'Language-model features connected to your product with reliable context, guardrails, and evaluation.', image: '/mockups/ai-orchestration.png', deliverables: ['RAG & knowledge retrieval', 'Prompt engineering', 'Safety guardrails', 'Evaluation & monitoring'] },
  'ai-automation/ai-powered-chatbots': { title: 'AI-powered chatbots', category: 'AI & automation', summary: 'Knowledge-aware assistants that improve customer support and internal operations without losing control.', image: '/mockups/mobile-login.png', deliverables: ['Support assistants', 'Document Q&A', 'Human hand-off', 'Conversation analytics'] },
  'ai-automation/workflow-automation': { title: 'Workflow automation', category: 'AI & automation', summary: 'Automation that routes, summarises, scores, and completes repetitive operational work with traceability.', image: '/mockups/ai-orchestration.png', deliverables: ['Process mapping', 'Automated routing', 'Approvals & alerts', 'Operational audit trail'] },
  'ai-automation/data-extraction-analytics': { title: 'Data extraction & analytics', category: 'AI & automation', summary: 'Turn documents, images, and scattered business data into structured information and practical insight.', image: '/mockups/ai-orchestration.png', deliverables: ['Document extraction', 'Data normalisation', 'Insight dashboards', 'Decision-ready reports'] },
  'ai-automation/custom-ai-model-integration': { title: 'Custom AI model integration', category: 'AI & automation', summary: 'Domain-specific AI capabilities engineered, evaluated, and deployed for the outcomes your team needs.', image: '/mockups/ai-orchestration.png', deliverables: ['Use-case evaluation', 'Model integration', 'Quality testing', 'Production operations'] },
  'rescue-modernization/codebase-rescue': { title: 'Codebase rescue', category: 'Rescue & modernization', summary: 'A clear technical recovery plan for software that has become hard to change, trust, or release safely.', image: '/mockups/systems-architecture.png', deliverables: ['Codebase assessment', 'Risk prioritisation', 'Stability improvements', 'Recovery roadmap'] },
  'rescue-modernization/vendor-replacement': { title: 'Vendor replacement', category: 'Rescue & modernization', summary: 'A controlled handover from an unreliable vendor that protects continuity while rebuilding confidence.', image: '/mockups/systems-architecture.png', deliverables: ['Technical handover', 'Continuity planning', 'Knowledge recovery', 'Delivery transition'] },
  'rescue-modernization/legacy-system-rewrite': { title: 'Legacy system rewrite', category: 'Rescue & modernization', summary: 'A staged modernisation path that replaces fragile technology without interrupting day-to-day operations.', image: '/mockups/desktop-dashboard.png', deliverables: ['Legacy assessment', 'Phased migration', 'Data transition', 'Modern platform delivery'] },
  'rescue-modernization/performance-remediation': { title: 'Performance remediation', category: 'Rescue & modernization', summary: 'Measured fixes for slow queries, unstable infrastructure, bottlenecks, and avoidable operational cost.', image: '/mockups/laptop-dashboard.png', deliverables: ['Performance analysis', 'Database optimisation', 'Infrastructure tuning', 'Ongoing observability'] },
  'specialist-services/payments-integrations': { title: 'Payments & integrations', category: 'Specialist services', summary: 'Secure payments, subscriptions, webhooks, and third-party systems implemented end to end.', image: '/mockups/watch-platform.png', deliverables: ['Payment gateways', 'Subscription billing', 'Third-party APIs', 'Secure webhooks'] },
  'specialist-services/product-design-ux': { title: 'Product design & UX', category: 'Specialist services', summary: 'Clear, thoughtful interfaces and design systems that help people complete valuable work with confidence.', image: '/mockups/watch-platform.png', deliverables: ['User journeys', 'Product interfaces', 'Design systems', 'Usability refinement'] },
  'specialist-services/quality-assurance': { title: 'Quality assurance', category: 'Specialist services', summary: 'Practical manual and automated testing that protects software quality before it reaches users.', image: '/mockups/laptop-dashboard.png', deliverables: ['Test strategy', 'Manual QA', 'Automation coverage', 'Release validation'] },
  'specialist-services/staff-augmentation': { title: 'Staff augmentation', category: 'Specialist services', summary: 'Senior Eaquirs engineers embedded with your team for focused capacity and accountable delivery.', image: '/mockups/delivery-system.png', deliverables: ['Senior engineering talent', 'Fast onboarding', 'Team collaboration', 'Flexible engagement'] },
};

export function generateStaticParams() {
  return Object.keys(services).map((key) => { const [category, service] = key.split('/'); return { category, service }; });
}

export async function generateMetadata({ params }: { params: Promise<{ category: string; service: string }> }): Promise<Metadata> {
  const { category, service } = await params;
  const page = services[`${category}/${service}`];
  if (!page) return {};

  return { title: `${page.title} | Eaquirs Tech`, description: page.summary };
}

export default async function IndividualServicePage({ params }: { params: Promise<{ category: string; service: string }> }) {
  const { category, service } = await params;
  const page = services[`${category}/${service}`];
  if (!page) notFound();
  const roadmap = deliveryRoadmaps[page.category];

  return <>
    <section className="relative isolate flex min-h-[100svh] items-start overflow-hidden bg-[#000] pt-[var(--header-h)] text-white">
      <div aria-hidden className="absolute inset-0 bg-grid-dark opacity-60" />
      <div className="container-site relative grid w-full items-center gap-8 py-6 sm:py-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-12">
        <div className="max-w-2xl">
          <p className="text-micro font-bold uppercase tracking-label text-amber">{page.category}</p>
          <h1 className="mt-5 text-h1 font-bold leading-[1.04] text-white md:text-display">{page.title}</h1>
          <p className="mt-6 text-body-lg text-on-dark-muted">{page.summary}</p>
          <Button href="/contact" size="lg" arrow className="mt-9 h-15 w-full max-w-[25rem] bg-amber px-10 text-base text-white hover:bg-amber-bright">Discuss your project</Button>
        </div>
        <div className="relative mx-auto w-full max-w-xl border border-white/15 bg-white/[0.03] p-3 sm:p-4">
          <div aria-hidden className="absolute inset-3 border border-amber/25" />
          <img src={page.image} alt={`${page.title} service visual`} className="relative w-full object-contain" />
        </div>
      </div>
    </section>
    <section className="flex min-h-[100svh] items-center bg-white py-16 sm:py-20">
      <div className="container-site w-full">
        <div className="max-w-2xl"><p className="text-micro font-bold uppercase tracking-label text-amber">What we deliver</p><h2 className="mt-3 text-h2 font-bold text-ink">A focused service, built around your operation.</h2></div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{page.deliverables.map((item, index) => <article key={item} className="min-h-40 rounded-xl border border-line bg-white p-5"><span className="text-micro font-bold text-amber">0{index + 1}</span><h3 className="mt-7 text-lg font-semibold text-ink">{item}</h3></article>)}</div>
      </div>
    </section>

    <section className="flex min-h-[100svh] items-center bg-[#f7f9fc] py-16 sm:py-20">
      <div className="container-site w-full">
        <div className="mx-auto max-w-3xl text-center"><p className="text-micro font-bold uppercase tracking-label text-amber">Engagement outcomes</p><h2 className="mt-3 text-h2 font-bold text-ink">Built to create a useful result, not activity.</h2><p className="mt-5 text-body leading-relaxed text-body">{page.title} work is shaped around the operational result your team needs to see—not a generic package of hours.</p></div>
        <div className="mx-auto mt-10 grid max-w-7xl items-center gap-5 lg:grid-cols-[1fr_0.82fr_1fr] lg:gap-8">
          <div className="grid gap-5">{page.deliverables.slice(0, 2).map((item, index) => <article key={item} className="min-h-32 rounded-[1.75rem] border border-line bg-white px-6 py-5 shadow-card transition-transform duration-base hover:-translate-y-1 lg:first:rounded-br-[4.5rem] lg:last:rounded-tr-[4.5rem]"><div className="flex items-center gap-4"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-wash text-amber-deep"><Icon name={index ? 'chart' : 'check'} className="h-5 w-5" strokeWidth={2} /></div><div><h3 className="text-body font-semibold text-ink">{item}</h3><p className="mt-1 text-body-sm leading-relaxed text-body">A defined outcome with clear ownership and a practical measure of progress.</p></div></div></article>)}</div>
          <div className="relative order-first mx-auto flex aspect-square w-full max-w-[25rem] items-center justify-center overflow-hidden rounded-full border-[10px] border-white bg-[#0d0d0d] p-7 shadow-mega lg:order-none"><div aria-hidden className="absolute inset-4 rounded-full border border-amber/30" /><img src={page.image} alt={`${page.title} delivery visual`} className="relative h-full w-full object-contain" /></div>
          <div className="grid gap-5">{page.deliverables.slice(2).map((item, index) => <article key={item} className="min-h-32 rounded-[1.75rem] border border-line bg-white px-6 py-5 shadow-card transition-transform duration-base hover:-translate-y-1 lg:first:rounded-bl-[4.5rem] lg:last:rounded-tl-[4.5rem]"><div className="flex items-center gap-4"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-wash text-amber-deep"><Icon name={index ? 'chart' : 'check'} className="h-5 w-5" strokeWidth={2} /></div><div><h3 className="text-body font-semibold text-ink">{item}</h3><p className="mt-1 text-body-sm leading-relaxed text-body">A defined outcome with clear ownership and a practical measure of progress.</p></div></div></article>)}</div>
        </div>
      </div>
    </section>

    <section className="flex min-h-[100svh] items-center bg-[#000] py-16 text-white sm:py-20">
      <div className="container-site w-full"><div className="mx-auto max-w-3xl text-center"><p className="text-micro font-bold uppercase tracking-label text-amber">How we work</p><h2 className="mt-3 text-h2 font-bold text-white">A clear path from first conversation to useful software.</h2><p className="mt-5 text-body text-white/65">The exact scope changes with the work. The delivery rhythm does not: decisions are visible, progress is tangible, and risks are surfaced early.</p></div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">{roadmap.map((step, index) => <article key={step.title} className="relative rounded-xl border border-white/15 bg-white/[0.04] p-6"><span className="text-micro font-bold text-amber">0{index + 1}</span><h3 className="mt-8 text-[1.2rem] font-semibold text-white">{step.title}</h3><p className="mt-3 text-body-sm leading-relaxed text-white/65">{step.description}</p></article>)}</div>
      </div>
    </section>

  </>;
}
