import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Icon, { type IconName } from '@/components/ui/Icon';
import SectionHeading from '@/components/ui/SectionHeading';
import ServicesHeroImage from './_ServicesHeroImage';
import { revealProps } from '@/lib/reveal';

export const metadata: Metadata = {
  title: 'Services | Eaquirs Tech',
  description:
    'Full-stack product engineering, ERP systems, AI automation, legacy rescue and modernization â€” delivered by senior engineers from Lahore, Pakistan.',
};

/* â”€â”€â”€ re-usable service card â”€â”€â”€ */
function ServiceCard({ title, desc, tags }: { title: string; desc: string; tags: string[] }) {
  return (
    <div className="group rounded-xl border border-line bg-white p-6 shadow-card transition-all duration-base hover:-translate-y-0.5 hover:shadow-card-hover hover:border-amber/30">
      <h4 className="text-[1.05rem] font-semibold text-ink">{title}</h4>
      <p className="mt-2 text-body-sm text-body leading-relaxed">{desc}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {tags.map((t) => (
          <span key={t} className="rounded-md border border-amber/20 bg-amber-wash px-2.5 py-0.5 text-micro text-amber-deep font-medium">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* â”€â”€â”€ section divider â”€â”€â”€ */
function SectionAnchor({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      {children}
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* â”€â”€ Hero â”€â”€ */}
      <section className="section-dark relative overflow-hidden min-h-[90vh] flex items-center pt-36 pb-20">
        <div aria-hidden className="glow-amber-dark pointer-events-none absolute inset-0" />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" />
        <div className="container-site relative w-full">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            {/* Left: copy */}
            <div>
              <p className="text-micro font-bold uppercase tracking-label text-amber mb-5">What we build</p>
              <h1 className="text-h1 font-bold leading-[1.05] text-white">
                Software services that ship â€”<br className="hidden md:block" /> not slide decks that stall
              </h1>
              <p className="mt-6 text-body-lg text-on-dark-muted">
                From greenfield SaaS products to emergency vendor rescues â€” we cover every phase of the software lifecycle.
                Senior engineers only. Working software weekly.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/contact" size="lg" className="bg-amber text-white hover:bg-amber-bright" arrow>
                  Get a free scope review
                </Button>
                <Button href="/work" variant="ghost" size="lg" className="text-white/70 hover:text-white">
                  See live platforms
                </Button>
              </div>
              {/* Quick stats */}
              <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
                {[
                  { value: '4', label: 'Live platforms' },
                  { value: '6 wks', label: 'Fastest delivery' },
                  { value: '95%', label: 'Perf gain' },
                ].map((s) => (
                  <div key={s.label}>
                    <dt className="text-[1.8rem] font-light text-amber leading-none">{s.value}</dt>
                    <dd className="mt-1.5 text-micro text-on-dark-muted">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
            {/* Right: device mockup */}
            <div className="hidden lg:block">
              <ServicesHeroImage />
            </div>
          </div>
        </div>
      </section>

      {/* â”€â”€ Quick-nav strip â”€â”€ */}
      <nav className="sticky top-[var(--header-h)] z-30 border-b border-line bg-white/95 backdrop-blur-sm">
        <div className="container-site">
          <ul className="flex gap-0 overflow-x-auto scrollbar-none">
            {[
              ['Product Engineering', '#product-engineering'],
              ['ERP & Systems', '#erp'],
              ['AI & Automation', '#ai'],
              ['Rescue & Modernization', '#rescue'],
              ['More', '#more'],
            ].map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block whitespace-nowrap px-5 py-4 text-body-sm font-medium text-body transition-colors duration-fast hover:text-amber"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          01 Â· PRODUCT ENGINEERING
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <SectionAnchor id="product-engineering">
        <div className="section-y bg-white min-h-[85vh] flex flex-col justify-center">
          <div className="container-site">
            <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.5fr]">
              {/* Left */}
              <div className="lg:sticky lg:top-32">
                <p className="text-micro font-bold uppercase tracking-label text-amber mb-3">01 Â· Product Engineering</p>
                <h2 className="text-h2 font-bold text-ink leading-tight">
                  End-to-end product builds
                </h2>
                <p className="mt-5 text-body text-body leading-relaxed">
                  We take products from idea through architecture, implementation, and deployment. Every system is
                  production-ready from the first sprint â€” built to handle scale, edge cases, and the inevitable
                  requirement changes that come three months in.
                </p>
                <ul className="mt-8 flex flex-col gap-3">
                  {[
                    'Senior engineers on every project, no junior handoff',
                    'TypeScript-first, type-safe from API to UI',
                    'Automated CI/CD from day one',
                    'Real-time demos every sprint',
                  ].map((pt) => (
                    <li key={pt} className="flex items-start gap-3 text-body-sm text-body">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-amber" strokeWidth={2.2} />
                      {pt}
                    </li>
                  ))}
                </ul>
                <Button href="/contact" variant="outline" size="md" className="mt-8" arrow>
                  Start a project
                </Button>
              </div>

              {/* Right: sub-service cards */}
              <div className="grid gap-4 sm:grid-cols-2">
                <SectionAnchor id="web">
                  <ServiceCard
                    title="Full-stack web development"
                    desc="Production-grade web applications on Next.js and NestJS. Server-side rendering, optimistic UI, real-time features â€” built once, maintained cheaply."
                    tags={['Next.js', 'NestJS', 'TypeScript', 'PostgreSQL']}
                  />
                </SectionAnchor>
                <SectionAnchor id="mobile">
                  <ServiceCard
                    title="Mobile app development"
                    desc="Cross-platform mobile applications that share business logic with your web product. React Native and Flutter, deployed to both stores."
                    tags={['React Native', 'Flutter', 'Expo', 'REST APIs']}
                  />
                </SectionAnchor>
                <SectionAnchor id="api">
                  <ServiceCard
                    title="API & backend architecture"
                    desc="Scalable APIs designed for the traffic you expect and the traffic you don't. REST, GraphQL, WebSocket â€” modelled to your domain, not a generic CRUD template."
                    tags={['REST', 'GraphQL', 'Microservices', 'Zod', 'OpenAPI']}
                  />
                </SectionAnchor>
                <SectionAnchor id="devops">
                  <ServiceCard
                    title="DevOps & CI/CD pipelines"
                    desc="Automated build, test, and deploy pipelines so your team ships faster and sleeps better. Docker containers, staging environments, one-click production."
                    tags={['Docker', 'GitHub Actions', 'AWS', 'Nginx', 'PM2']}
                  />
                </SectionAnchor>
                <SectionAnchor id="mvp">
                  <ServiceCard
                    title="MVP development"
                    desc="A working, deployable product in six to ten weeks â€” not a prototype, not a mockup. Architecture that survives the pivot, not just the demo day."
                    tags={['Fixed scope', 'Rapid delivery', 'Investor-ready', 'Scalable base']}
                  />
                </SectionAnchor>
              </div>
            </div>
          </div>
        </div>
      </SectionAnchor>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          02 Â· ERP & BUSINESS SYSTEMS
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <SectionAnchor id="erp">
        <div className="section-y section-light min-h-[85vh] flex flex-col justify-center">
          <div className="container-site">
            <div className="grid items-start gap-14 lg:grid-cols-[1.5fr_1fr]">
              {/* Left: sub-service cards */}
              <div className="grid gap-4 sm:grid-cols-2 lg:order-1">
                <SectionAnchor id="erp-realestate">
                  <ServiceCard
                    title="Real estate ERP"
                    desc="Multi-branch property inventory, agent commission tracking, project milestones, buyer portals, and legal document generation. Live in Turner10."
                    tags={['Next.js', 'NestJS', 'PostgreSQL', 'Redis']}
                  />
                </SectionAnchor>
                <SectionAnchor id="erp-health">
                  <ServiceCard
                    title="Healthcare management system"
                    desc="Inpatient and outpatient workflows, pharmacy, lab, billing, and Crystal Reports. Replaced a hospital's abandoned vendor system in six weeks with zero care disruption."
                    tags={['C# .NET', 'SQL Server', 'Dapper', 'Crystal Reports']}
                  />
                </SectionAnchor>
                <SectionAnchor id="erp-mfg">
                  <ServiceCard
                    title="Inventory & manufacturing ERP"
                    desc="Weight-aware stock management, purity tracking, consignment ledgers, and workshop job cards â€” built for jewellery trade. Live in Ophir."
                    tags={['Next.js', 'NestJS', 'PostgreSQL', 'Redis']}
                  />
                </SectionAnchor>
                <SectionAnchor id="erp-custom">
                  <ServiceCard
                    title="Custom ERP build"
                    desc="Business operations platforms shaped entirely around your workflow â€” not a generic SaaS you pay monthly to barely fit into. Your data model, your logic, your reports."
                    tags={['Bespoke data model', 'Role-based access', 'Audit trail', 'Reporting']}
                  />
                </SectionAnchor>
                <SectionAnchor id="erp-saas">
                  <ServiceCard
                    title="Multi-tenant SaaS platforms"
                    desc="Tenant-isolated data, subscription billing, usage analytics, and onboarding flows for platforms serving multiple companies from a single deployment."
                    tags={['Multi-tenancy', 'Stripe', 'JWT', 'Row-level security']}
                  />
                </SectionAnchor>
              </div>

              {/* Right */}
              <div className="lg:order-2 lg:sticky lg:top-32">
                <p className="text-micro font-bold uppercase tracking-label text-amber mb-3">02 Â· ERP & Business Systems</p>
                <h2 className="text-h2 font-bold text-ink leading-tight">
                  Operations software that runs your business
                </h2>
                <p className="mt-5 text-body text-body leading-relaxed">
                  Generic SaaS tools charge you monthly to work around your process. We build the system that maps to how
                  your business actually works â€” with the audit trails, reporting, and role-based access your team needs on day one.
                </p>
                <div className="mt-8 rounded-xl border border-line bg-white p-6 shadow-card">
                  <p className="text-caption font-bold uppercase tracking-label text-amber-deep mb-3">Live proof</p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-amber shrink-0" />
                      <p className="text-body-sm text-body"><strong className="text-ink">Turner10</strong> â€” real estate ERP managing property sales, agent payroll and project milestones</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-amber shrink-0" />
                      <p className="text-body-sm text-body"><strong className="text-ink">EHMS</strong> â€” hospital system replaced in 6 weeks, zero disruption to patient care</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-amber shrink-0" />
                      <p className="text-body-sm text-body"><strong className="text-ink">Ophir</strong> â€” jewellery ERP with weight, purity, and consignment tracking across multiple branches</p>
                    </div>
                  </div>
                </div>
                <Button href="/contact" variant="outline" size="md" className="mt-8" arrow>
                  Scope an ERP project
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SectionAnchor>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          03 Â· AI & AUTOMATION
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <SectionAnchor id="ai">
        <div className="section-y bg-white min-h-[85vh] flex flex-col justify-center">
          <div className="container-site">
            <SectionHeading
              eyebrow="03 Â· AI & Automation"
              title="Intelligent systems that work in production"
              intro="We integrate AI where it genuinely reduces cost or improves outcomes â€” not where it makes a good demo. Every AI feature is tested against real workloads before it reaches your users."
            />

            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  id: 'ai-llm',
                  icon: 'ai' as IconName,
                  title: 'LLM integration',
                  desc: 'OpenAI, Anthropic, and open-source models integrated into your product via LangChain. RAG pipelines for document-grounded responses. Prompt engineering that stays consistent at scale.',
                  tags: ['OpenAI', 'LangChain', 'RAG', 'Vector DB', 'Claude'],
                },
                {
                  id: 'ai-chat',
                  icon: 'layers' as IconName,
                  title: 'AI-powered chatbots',
                  desc: 'Document Q&A, support agents, and internal knowledge tools that draw on your actual data â€” not generic training. Handles multi-turn context, escalation, and citation.',
                  tags: ['GPT-4o', 'LangChain', 'Pinecone', 'Streaming', 'Next.js'],
                },
                {
                  id: 'ai-auto',
                  icon: 'lightning' as IconName,
                  title: 'Workflow automation',
                  desc: 'AI-driven process automation that reduces manual steps in repetitive workflows â€” screening, scoring, summarizing, routing. Tested on real throughput before go-live.',
                  tags: ['Background jobs', 'Queues', 'Webhooks', 'n8n', 'Custom pipelines'],
                },
                {
                  id: 'ai-data',
                  icon: 'chart' as IconName,
                  title: 'Data extraction & analytics',
                  desc: 'Transform unstructured documents, PDFs, and image data into structured, queryable records. Structured extraction pipelines with human-in-the-loop validation.',
                  tags: ['OpenAI', 'OCR', 'Structured outputs', 'PostgreSQL', 'Dashboards'],
                },
                {
                  id: 'ai-model',
                  icon: 'cpu' as IconName,
                  title: 'Custom AI model integration',
                  desc: 'Fine-tuned models for your specific domain vocabulary, tone, and output format. Hosted on your infrastructure so your data never leaves your control.',
                  tags: ['Fine-tuning', 'LoRA', 'Hugging Face', 'Model serving', 'Evals'],
                },
              ].map((svc) => (
                <SectionAnchor key={svc.id} id={svc.id}>
                  <div className="group flex flex-col gap-5 rounded-2xl border border-line bg-white p-7 shadow-card transition-all duration-base hover:-translate-y-1 hover:shadow-card-hover hover:border-amber/30 h-full">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-tint text-amber-deep transition-colors duration-base group-hover:bg-amber group-hover:text-white">
                      <Icon name={svc.icon} className="h-6 w-6" />
                    </span>
                    <div className="flex-1">
                      <h3 className="text-[1.1rem] font-semibold text-ink">{svc.title}</h3>
                      <p className="mt-2 text-body-sm text-body leading-relaxed">{svc.desc}</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {svc.tags.map((t) => (
                        <span key={t} className="rounded-md border border-amber/20 bg-amber-wash px-2.5 py-0.5 text-micro text-amber-deep font-medium">{t}</span>
                      ))}
                    </div>
                  </div>
                </SectionAnchor>
              ))}

              {/* Live proof card */}
              <div className="rounded-2xl border border-amber/30 bg-amber-wash p-7 flex flex-col justify-between">
                <div>
                  <p className="text-caption font-bold uppercase tracking-label text-amber-deep mb-3">Built with AI</p>
                  <h3 className="text-[1.2rem] font-semibold text-ink">OpenInterview.me</h3>
                  <p className="mt-3 text-body-sm text-body">
                    AI-generated, role-specific interview questions. Adaptive follow-ups based on candidate answers.
                    LangChain + OpenAI, handling real hiring workflows for multiple organizations.
                  </p>
                </div>
                <Button href="/work" variant="outline" size="sm" className="mt-6 self-start" arrow>
                  See the platform
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SectionAnchor>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          04 Â· RESCUE & MODERNIZATION
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <SectionAnchor id="rescue">
        <div className="section-y section-dark relative overflow-hidden">
          <div aria-hidden className="glow-amber-dark pointer-events-none absolute inset-0" />
          <div className="container-site relative">
            <SectionHeading
              eyebrow="04 Â· Rescue & Modernization"
              title="We take the projects others walk away from"
              intro="Abandoned vendors, prototypes that cannot go to production, legacy systems past their limit â€” rescue work is our specialism. We have replaced live hospital systems and inherited AI-generated codebases alike."
              dark
            />

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  id: 'rescue-code',
                  title: 'Codebase rescue',
                  desc: 'We audit your existing codebase, identify the structural debt, and produce a prioritised remediation plan. Prototype-hardening included.',
                  points: ['Security gaps identified', 'Architecture mapped', 'Tech debt costed', 'Remediation plan delivered'],
                },
                {
                  id: 'rescue-vendor',
                  title: 'Vendor replacement',
                  desc: 'Your previous vendor disappeared or delivered something unusable. We take ownership of the transition â€” parallel running, zero-downtime cutover.',
                  points: ['Dependency audit', 'Data migration', 'Parallel running period', 'Zero-downtime handover'],
                },
                {
                  id: 'rescue-legacy',
                  title: 'Legacy system rewrite',
                  desc: 'Moving a business-critical system off an old framework without disrupting daily operations. We have done this for a live hospital â€” we know the playbook.',
                  points: ['Strangler fig pattern', 'Feature parity verified', 'Staff training included', 'Old system decommissioned'],
                },
                {
                  id: 'rescue-perf',
                  title: 'Performance remediation',
                  desc: 'Slow queries, memory leaks, server bottlenecks â€” profiled, diagnosed, and fixed with measured before/after benchmarks, not guesses.',
                  points: ['Query profiling', 'Caching strategy', 'CDN optimisation', 'Load test verified'],
                },
              ].map((svc) => (
                <SectionAnchor key={svc.id} id={svc.id}>
                  <article className="radius-sig border border-dark-border bg-dark-card p-7 h-full flex flex-col transition-all duration-base hover:-translate-y-0.5 hover:border-amber/40">
                    <div aria-hidden className="mb-5 h-1 w-8 rounded-full bg-amber" />
                    <h3 className="text-[1.1rem] font-semibold text-white">{svc.title}</h3>
                    <p className="mt-3 text-body-sm text-on-dark-muted leading-relaxed flex-1">{svc.desc}</p>
                    <ul className="mt-6 flex flex-col gap-2 border-t border-dark-border pt-5">
                      {svc.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2.5 text-body-sm text-on-dark-muted">
                          <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-amber" strokeWidth={2.2} />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </article>
                </SectionAnchor>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <Button href="/contact" size="lg" className="bg-amber text-white hover:bg-amber-bright" arrow>
                Discuss your rescue project
              </Button>
            </div>
          </div>
        </div>
      </SectionAnchor>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          05 Â· MORE SERVICES
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <SectionAnchor id="more">
        <div className="section-y bg-white min-h-[85vh] flex flex-col justify-center">
          <div className="container-site">
            <SectionHeading
              eyebrow="05 Â· More services"
              title="Specialist capabilities across the stack"
              intro="Services that round out a complete engagement â€” from payment integrations to quality assurance to embedded engineering talent."
            />

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  id: 'payments',
                  icon: 'card' as IconName,
                  title: 'Payments & integrations',
                  desc: 'Stripe subscriptions, metered billing, webhooks, refunds. Third-party integrations â€” calendars, social login, CRMs, ERPs. Handled cleanly, tested edge-cases first.',
                  tags: ['Stripe', 'OAuth', 'Webhooks', 'REST APIs'],
                },
                {
                  id: 'design',
                  icon: 'pen' as IconName,
                  title: 'Product design & UX',
                  desc: 'Dashboard design, admin interfaces, and design systems built for clarity and ease of use. Components that your engineering team can extend without breaking.',
                  tags: ['Figma', 'Tailwind', 'Radix UI', 'Design tokens'],
                },
                {
                  id: 'qa',
                  icon: 'shield' as IconName,
                  title: 'Quality assurance',
                  desc: 'Manual QA against acceptance criteria, automated unit and integration testing, and load testing for performance-sensitive endpoints.',
                  tags: ['Vitest', 'Playwright', 'k6', 'CI test gates'],
                },
                {
                  id: 'staff',
                  icon: 'users' as IconName,
                  title: 'Staff augmentation',
                  desc: 'Embed senior Eaquirs engineers into your existing team. Same work ethic, same standards. No ramp-up delays â€” we read codebases fast.',
                  tags: ['Embedded sprint', 'Full-time equivalent', 'Flexible term'],
                },
              ].map((svc) => (
                <SectionAnchor key={svc.id} id={svc.id}>
                  <div className="group flex flex-col gap-5 rounded-2xl border border-line bg-white p-7 shadow-card transition-all duration-base hover:-translate-y-1 hover:shadow-card-hover hover:border-amber/30 h-full">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-tint text-amber-deep transition-colors duration-base group-hover:bg-amber group-hover:text-white">
                      <Icon name={svc.icon} className="h-6 w-6" />
                    </span>
                    <div className="flex-1">
                      <h3 className="text-[1.1rem] font-semibold text-ink">{svc.title}</h3>
                      <p className="mt-2 text-body-sm text-body leading-relaxed">{svc.desc}</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {svc.tags.map((t) => (
                        <span key={t} className="rounded-md border border-amber/20 bg-amber-wash px-2.5 py-0.5 text-micro text-amber-deep font-medium">{t}</span>
                      ))}
                    </div>
                  </div>
                </SectionAnchor>
              ))}
            </div>
          </div>
        </div>
      </SectionAnchor>

      {/* â”€â”€ Final CTA â”€â”€ */}
      <section className="section-y section-dark relative overflow-hidden">
        <div aria-hidden className="glow-amber-dark pointer-events-none absolute inset-0" />
        <div className="container-site relative">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-h2 font-bold text-white">Not sure which service you need?</h2>
            <p className="mt-5 text-body text-on-dark-muted">
              Tell us what you are trying to solve. We will recommend the right approach â€” honestly,
              not based on what bills the most.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button href="/contact" size="lg" className="bg-amber text-white hover:bg-amber-bright" arrow>
                Book a free scope call
              </Button>
              <Button href="/work" variant="ghost" size="lg" className="text-white/70 hover:text-white">
                See what we have built
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

