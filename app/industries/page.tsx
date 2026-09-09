import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Icon, { type IconName } from '@/components/ui/Icon';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'Industries | Eaquirs Tech',
  description:
    'Eaquirs Tech builds production software for real estate, healthcare, manufacturing, HR tech, fintech, logistics, SaaS, and e-commerce â€” with proven live platforms.',
};

function AnchorSection({ id, children }: { id: string; children: React.ReactNode }) {
  return <section id={id} className="scroll-mt-28">{children}</section>;
}

function FeatureList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={`flex flex-col gap-2.5 ${className ?? ''}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-body-sm text-body">
          <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-amber" strokeWidth={2.2} />
          {item}
        </li>
      ))}
    </ul>
  );
}

function IndustryVisual({ src, side = 'right', dark = false, full = false }: { src: string; side?: 'left' | 'right'; dark?: boolean; full?: boolean }) {
  const placement = full ? 'inset-0' : side === 'left' ? 'inset-y-0 left-0 w-[52%]' : 'inset-y-0 right-0 w-[52%]';
  const overlay = dark
    ? side === 'left' ? 'bg-gradient-to-r from-black/20 via-black/65 to-black' : 'bg-gradient-to-r from-black via-black/65 to-black/20'
    : side === 'left' ? 'bg-gradient-to-r from-white/15 via-white/75 to-white' : 'bg-gradient-to-r from-white via-white/75 to-white/15';
  return (
    <div aria-hidden className={`pointer-events-none absolute ${placement} z-0 hidden overflow-hidden lg:block`}>
      <img src={src} alt="" className={`h-full w-full object-cover ${dark ? 'opacity-25' : 'opacity-[0.16]'}`} />
      <div className={`absolute inset-0 ${overlay}`} />
    </div>
  );
}

const industryNav = [
  ['Real Estate', '#real-estate'],
  ['Healthcare', '#healthcare'],
  ['Manufacturing', '#manufacturing'],
  ['HR & Hiring', '#hr'],
  ['Fintech', '#fintech'],
  ['Logistics', '#logistics'],
  ['SaaS', '#saas'],
  ['E-commerce', '#ecommerce'],
];

export default function IndustriesPage() {
  return (
    <>
      {/* â”€â”€ Hero â”€â”€ */}
      <section className="section-dark relative overflow-hidden min-h-[90vh] flex items-center pt-36 pb-20">
        <div aria-hidden className="glow-amber-dark pointer-events-none absolute inset-0" />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" />
        <div className="container-site relative w-full">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-micro font-bold uppercase tracking-label text-amber mb-5">Industries</p>
            <h1 className="text-h1 font-bold leading-[1.05] text-white">
              Domain depth, not<br className="hidden md:block" /> generic templates
            </h1>
            <p className="mt-6 text-body-lg text-on-dark-muted max-w-2xl mx-auto">
              Each sector has different data models, compliance requirements, and failure modes.
              We carry operational context from live systems in healthcare, real estate, jewellery, and AI hiring â€”
              and apply that understanding to every new engagement.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="/contact" size="lg" className="bg-amber text-white hover:bg-amber-bright" arrow>
                Start a conversation
              </Button>
              <Button href="/work" variant="ghost" size="lg" className="text-white/70 hover:text-white">
                See live platforms
              </Button>
            </div>
            {/* Industry pills */}
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {['Real Estate', 'Healthcare', 'Manufacturing', 'HR & Hiring', 'Fintech', 'Logistics', 'SaaS', 'E-commerce'].map((s) => (
                <span key={s} className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-micro font-medium text-on-dark-muted backdrop-blur-sm">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* â”€â”€ Quick nav â”€â”€ */}
      <nav className="sticky top-[var(--header-h)] z-30 border-b border-line bg-white/95 backdrop-blur-sm">
        <div className="container-site">
          <ul className="flex gap-0 overflow-x-auto scrollbar-none">
            {industryNav.map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block whitespace-nowrap px-4 py-4 text-body-sm font-medium text-body transition-colors duration-fast hover:text-amber"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          01 Â· REAL ESTATE
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <AnchorSection id="real-estate">
        <div className="section-y relative isolate flex min-h-[85vh] flex-col justify-center overflow-hidden bg-white">
          <IndustryVisual src="/mockups/desktop-dashboard.png" side="right" />
          <div className="container-site relative z-10">
            <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.4fr]">
              <div className="lg:sticky lg:top-32">
                <p className="text-micro font-bold uppercase tracking-label text-amber mb-3">01 Â· Real Estate</p>
                <h2 className="text-h2 font-bold text-ink leading-tight">Property, project, and finance management</h2>
                <p className="mt-5 text-body leading-relaxed">
                  Property developers, agencies, and investment firms manage complex pipelines of projects, agents, buyers,
                  and legal documents. Generic SaaS tools do not cover this â€” we build systems that do.
                </p>
                <div className="mt-8">
                  <FeatureList items={[
                    'Multi-branch property inventory',
                    'Agent commission & payroll tracking',
                    'Project milestones and delivery schedule',
                    'Buyer portal with payment history',
                    'Legal document generation (NOC, agreements)',
                    'Financial reporting and reconciliation',
                  ]} />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { title: 'Property inventory system', desc: 'Unit-level tracking across multiple projects â€” plot sizes, pricing tiers, availability status, and booking pipeline in one view.' },
                  { title: 'Commission management', desc: 'Agent commission calculations, installment tracking, approval workflows, and monthly payroll exports that reconcile with your accounts.' },
                  { title: 'CRM & lead pipeline', desc: 'Inbound inquiry management, follow-up scheduling, site-visit tracking, and conversion analytics for your sales team.' },
                  { title: 'Financial reporting', desc: 'Revenue recognition, payment collection status, overdue installments, and project-level P&L â€” with Crystal Reports or custom dashboards.' },
                ].map((card) => (
                  <div key={card.title} className="rounded-xl border border-line bg-white p-6 shadow-card">
                    <h4 className="text-[1.05rem] font-semibold text-ink">{card.title}</h4>
                    <p className="mt-2 text-body-sm leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnchorSection>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          02 Â· HEALTHCARE
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <AnchorSection id="healthcare">
        <div className="section-y section-light relative isolate flex min-h-[85vh] flex-col justify-center overflow-hidden">
          <IndustryVisual src="/mockups/mobile-login.png" side="left" />
          <div className="container-site relative z-10">
            <div className="grid items-start gap-14 lg:grid-cols-[1.4fr_1fr]">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { title: 'Patient management', desc: 'Inpatient and outpatient registration, ward assignments, doctor scheduling, and discharge management â€” all in one auditable system.' },
                  { title: 'Pharmacy & dispensing', desc: 'Drug inventory with expiry tracking, prescription fulfilment, and controlled substance logging. Integrated with billing.' },
                  { title: 'Laboratory integration', desc: 'Test orders from clinic, result entry, report printing, and notification to the requesting physician. Full chain of custody.' },
                  { title: 'Billing & accounts', desc: 'Service-based billing, insurance claim generation, outstanding payment tracking, and reconciliation reports for hospital administration.' },
                  { title: 'Crystal Reports & analytics', desc: 'Pre-built clinical and financial reports â€” occupancy rates, revenue per department, doctor performance, and regulatory submissions.' },
                  { title: 'Role-based access', desc: 'Doctors, nurses, pharmacists, lab technicians, billing staff â€” each sees only what their role requires. Audit log for every sensitive action.' },
                ].map((card) => (
                  <div key={card.title} className="rounded-xl border border-line bg-white p-6 shadow-card">
                    <h4 className="text-[1.05rem] font-semibold text-ink">{card.title}</h4>
                    <p className="mt-2 text-body-sm leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>

              <div className="lg:sticky lg:top-32">
                <p className="text-micro font-bold uppercase tracking-label text-amber mb-3">02 Â· Healthcare</p>
                <h2 className="text-h2 font-bold text-ink leading-tight">
                  Systems where downtime costs more than money
                </h2>
                <p className="mt-5 text-body leading-relaxed">
                  Hospital systems fail at the worst possible moment â€” a shift handover, a pharmacy dispensing error,
                  a billing dispute at discharge. We build clinical systems with the reliability, audit trails,
                  and role-based controls that healthcare demands.
                </p>
                <FeatureList className="mt-8" items={[
                  'C# .NET and SQL Server â€” enterprise-grade',
                  'Crystal Reports for clinical documentation',
                  'Zero-downtime replacement methodology',
                  'Parallel running until staff are confident',
                  'Complete staff training included',
                ]} />
              </div>
            </div>
          </div>
        </div>
      </AnchorSection>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          03 Â· MANUFACTURING & JEWELLERY
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <AnchorSection id="manufacturing">
        <div className="section-y relative isolate flex min-h-[85vh] flex-col justify-center overflow-hidden bg-white">
          <IndustryVisual src="/mockups/systems-architecture.png" side="right" />
          <div className="container-site relative z-10">
            <SectionHeading
              eyebrow="03 Â· Manufacturing & Jewellery"
              title="Precision inventory for precision trades"
              intro="Manufacturing and jewellery ERPs require exact tracking of weights, purities, batch compositions, and consignment chains. Generic inventory tools are not built for this."
            />
            <div className="mt-10">
              <div className="grid gap-5 sm:grid-cols-2">
                {[
                  { title: 'Weight-aware stock management', desc: 'Inventory tracked by gram weight, not just unit count. Purity percentages, alloy compositions, and hallmarking data stored per item.' },
                  { title: 'Consignment & trade', desc: 'Outward consignment tracking, return reconciliation, and consignee ledgers â€” audited at both ends of the chain.' },
                  { title: 'Workshop job cards', desc: 'Production orders, craftsman assignments, material usage, wastage recording, and quality inspection before dispatch.' },
                  { title: 'Customer order management', desc: 'Custom orders with design specifications, material sourcing, production milestones, and client communication history.' },
                ].map((card) => (
                  <div key={card.title} className="rounded-xl border border-line bg-white p-6 shadow-card">
                    <h4 className="text-[1.05rem] font-semibold text-ink">{card.title}</h4>
                    <p className="mt-2 text-body-sm leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnchorSection>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          04 Â· HR & HIRING
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <AnchorSection id="hr">
        <div className="section-y section-dark relative isolate overflow-hidden">
          <div aria-hidden className="glow-amber-dark pointer-events-none absolute inset-0" />
          <IndustryVisual src="/mockups/ai-orchestration.png" side="left" dark />
          <div className="container-site relative z-10">
            <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.4fr]">
              <div className="lg:sticky lg:top-32">
                <p className="text-micro font-bold uppercase tracking-label text-amber mb-3">04 Â· HR & Hiring</p>
                <h2 className="text-h2 font-bold text-white leading-tight">AI-powered hiring that eliminates screening bias</h2>
                <p className="mt-5 text-body text-on-dark-muted leading-relaxed">
                  Generic ATS tools track applications. We build platforms that improve hiring quality â€”
                  role-specific questions generated by LLMs, adaptive follow-ups, and automated scoring
                  that gives every candidate a fair, consistent evaluation.
                </p>
                <ul className="mt-8 flex flex-col gap-3">
                  {[
                    'LLM-generated role-specific questions',
                    'Adaptive follow-ups based on answers',
                    'Automated scoring and ranking',
                    'Multi-tenant for agency or enterprise use',
                    'Stripe subscription billing built-in',
                    'Candidate privacy and data isolation',
                  ].map((pt) => (
                    <li key={pt} className="flex items-start gap-3 text-body-sm text-on-dark-muted">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-amber" strokeWidth={2.2} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { title: 'Applicant tracking', desc: 'Job listings, application collection, status pipeline, and team collaboration on candidates â€” without the bloat of enterprise HR software.' },
                  { title: 'AI interview engine', desc: 'Dynamic question sets generated per role, per seniority level. Adaptive follow-ups when candidates give vague or off-topic answers.' },
                  { title: 'Automated scoring', desc: 'Candidate responses evaluated against role-specific rubrics. Ranked shortlists delivered to the hiring manager without manual review.' },
                  { title: 'Scheduling integration', desc: 'Interview slot booking with calendar sync, automated reminders, and reschedule handling â€” fully automated from shortlist to interview confirmed.' },
                ].map((card) => (
                  <div key={card.title} className="rounded-xl border border-dark-border bg-dark-card p-6">
                    <h4 className="text-[1.05rem] font-semibold text-white">{card.title}</h4>
                    <p className="mt-2 text-body-sm text-on-dark-muted leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnchorSection>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          05 Â· FINTECH
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <AnchorSection id="fintech">
        <div className="section-y relative isolate flex min-h-[85vh] flex-col justify-center overflow-hidden bg-white">
          <IndustryVisual src="/mockups/watch-platform.png" side="left" />
          <div className="container-site relative z-10">
            <SectionHeading
              eyebrow="05 Â· Fintech"
              title="Ledger-accurate. Audit-ready. Regulation-aware."
              intro="Financial software must be correct first, fast second. We build payment systems, accounting modules, and financial reporting tools that reconcile to the cent and produce the audit trail regulators expect."
            />
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: 'card' as IconName, title: 'Payment gateway integration', desc: 'Stripe, Razorpay, JazzCash, EasyPaisa â€” subscription billing, one-time payments, refunds, webhooks, and reconciliation. Tested edge cases first.' },
                { icon: 'layers' as IconName, title: 'Accounting modules', desc: 'Double-entry bookkeeping, chart of accounts, journal entries, and trial balance â€” custom-built to map to your specific business structure.' },
                { icon: 'shield' as IconName, title: 'Compliance & audit trail', desc: 'Immutable transaction logs, role-based financial access, regulatory report generation, and data retention policies for GDPR, PCI-DSS, and local requirements.' },
                { icon: 'chart' as IconName, title: 'Financial analytics', desc: 'Real-time dashboards for revenue, collection rate, churn, ARR/MRR, and custom financial KPIs â€” exportable to Excel, PDF, or BI tools.' },
                { icon: 'lightning' as IconName, title: 'Subscription & billing engine', desc: 'Usage-based billing, tiered pricing, trial periods, upgrade/downgrade flows, dunning management, and tax calculation across jurisdictions.' },
                { icon: 'link' as IconName, title: 'Third-party integrations', desc: 'ERP connectors, bank statement parsers, SECP filing helpers, and API integrations with financial data providers.' },
              ].map((svc) => (
                <div key={svc.title} className="group flex flex-col gap-4 rounded-2xl border border-line bg-white p-7 shadow-card transition-all duration-base hover:-translate-y-0.5 hover:shadow-card-hover hover:border-amber/30">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-tint text-amber-deep transition-colors duration-base group-hover:bg-amber group-hover:text-white">
                    <Icon name={svc.icon} className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-[1.05rem] font-semibold text-ink">{svc.title}</h3>
                    <p className="mt-2 text-body-sm leading-relaxed">{svc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnchorSection>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          06 Â· LOGISTICS
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <AnchorSection id="logistics">
        <div className="section-y section-light relative isolate flex min-h-[85vh] flex-col justify-center overflow-hidden">
          <IndustryVisual src="/mockups/delivery-system.png" side="right" />
          <div className="container-site relative z-10">
            <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.4fr]">
              <div className="lg:sticky lg:top-32">
                <p className="text-micro font-bold uppercase tracking-label text-amber mb-3">06 Â· Logistics</p>
                <h2 className="text-h2 font-bold text-ink leading-tight">Supply chain visibility, end to end</h2>
                <p className="mt-5 text-body leading-relaxed">
                  Logistics operations live and die on real-time visibility. We build dispatch platforms,
                  fleet management tools, and supply chain portals that give operators the information
                  they need, at the moment they need it.
                </p>
                <FeatureList className="mt-8" items={[
                  'Real-time driver and fleet tracking',
                  'Route optimization and dispatch assignment',
                  'Proof of delivery capture',
                  'Customer self-service delivery tracking',
                  'Supplier portal and purchase orders',
                  'Returns and reverse logistics management',
                ]} />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { title: 'Fleet management', desc: 'Vehicle status, driver assignment, maintenance schedules, and fuel tracking across a fleet of any size.' },
                  { title: 'Dispatch & routing', desc: 'Order-to-driver assignment, automated route sequencing, live map view for operations managers, and ETA communication to customers.' },
                  { title: 'Warehouse management', desc: 'Inbound receiving, bin location tracking, pick-and-pack workflows, and outbound dispatch scanning.' },
                  { title: 'Supplier & vendor portal', desc: 'Purchase orders, delivery confirmations, invoice matching, and supplier performance reporting â€” accessible via a web portal, no phone calls.' },
                ].map((card) => (
                  <div key={card.title} className="rounded-xl border border-line bg-white p-6 shadow-card">
                    <h4 className="text-[1.05rem] font-semibold text-ink">{card.title}</h4>
                    <p className="mt-2 text-body-sm leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnchorSection>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          07 Â· E-COMMERCE
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <AnchorSection id="ecommerce">
        <div className="section-y section-dark relative isolate overflow-hidden">
          <div aria-hidden className="glow-amber-dark pointer-events-none absolute inset-0" />
          <IndustryVisual src="/mockups/mobile-receipt.png" side="right" dark />
          <div className="container-site relative z-10">
            <SectionHeading
              eyebrow="07 Â· E-commerce & Retail"
              title="Commerce systems built for your inventory reality"
              intro="Whether you sell physical goods from a warehouse or digital products from a CDN, we build the commerce infrastructure that handles your specific inventory model, fulfillment workflow, and customer experience."
              dark
            />
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: 'Custom storefront', desc: 'Next.js storefronts with server-side rendering, instant search, filter UX, and optimized product pages â€” fast enough to rank, good enough to convert.' },
                { title: 'Inventory management', desc: 'Multi-warehouse stock, SKU variants (size/color/type), reorder alerts, and real-time sync with your storefront to prevent oversells.' },
                { title: 'Order management', desc: 'Order capture, payment confirmation, fulfillment workflow, shipping label generation, and customer notification â€” one system, no manual steps.' },
                { title: 'Returns & refunds', desc: 'Return authorisation, condition assessment, restocking workflow, and refund processing â€” with the reporting your accounts team needs.' },
              ].map((card) => (
                <div key={card.title} className="rounded-xl border border-dark-border bg-dark-card p-6">
                  <h4 className="text-[1.05rem] font-semibold text-white">{card.title}</h4>
                  <p className="mt-2 text-body-sm text-on-dark-muted leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnchorSection>

      <AnchorSection id="saas">
        <div className="section-y relative isolate flex min-h-[85vh] flex-col justify-center overflow-hidden bg-white">
          <IndustryVisual src="/service-visuals/saas-platform.png" full />
          <div className="container-site relative z-10">
            <SectionHeading
              eyebrow="08 Â· SaaS"
              title={<span className="lg:whitespace-nowrap">Multi-tenant SaaS, built to scale.</span>}
              intro="SaaS architecture is different from standard web development â€” tenant isolation, subscription metering, onboarding flows, and usage analytics need to be right from the beginning, not bolted on later."
              className="lg:[&>h2]:max-w-none"
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: 'Multi-tenant architecture', desc: 'Row-level security, schema-per-tenant, or database-per-tenant â€” we recommend the right isolation model for your compliance requirements and expected customer count.' },
                { title: 'Subscription billing', desc: 'Stripe integration for free trials, monthly/annual plans, usage-based billing, upgrade/downgrade flows, and dunning â€” including tax calculation and invoice generation.' },
                { title: 'Onboarding & activation', desc: 'Signup flow, workspace setup, sample data, in-app guidance, and email drip sequences â€” designed to get customers to their first value moment as fast as possible.' },
                { title: 'Usage analytics', desc: 'Feature adoption tracking, engagement scoring, churn prediction signals, and cohort analysis â€” so you know who is at risk before they cancel.' },
                { title: 'Admin & ops tooling', desc: 'Internal tooling for your support and operations team â€” customer impersonation, feature flags, usage override, and manual billing adjustments.' },
                { title: 'API & webhooks', desc: 'Customer-facing APIs with authentication, rate limiting, API key management, and webhook delivery so your platform integrates with your customers\' existing tools.' },
              ].map((card) => (
                <div key={card.title} className="rounded-xl border border-line bg-white p-6 shadow-card transition-all duration-base hover:-translate-y-0.5 hover:shadow-card-hover">
                  <h4 className="text-[1.05rem] font-semibold text-ink">{card.title}</h4>
                  <p className="mt-2 text-body-sm leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnchorSection>

    </>
  );
}

