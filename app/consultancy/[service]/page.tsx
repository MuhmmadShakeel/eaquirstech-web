import { notFound } from 'next/navigation';
import Button from '@/components/ui/Button';

const pages = {
  'tech-strategy': ['Tech strategy', 'Technical direction', 'Get a practical technology plan that helps your team make sound decisions and gives stakeholders a clear view of what comes next.', '/service-visuals/consultancy-strategy.png', ['Stack and platform selection', '12-month technical roadmap', 'Build, buy, and vendor decisions']],
  'ai-consulting': ['AI consulting', 'Applied AI', 'Identify where AI can genuinely help, then put the right controls in place before it reaches customers or operations teams.', '/service-visuals/consultancy-ai.png', ['AI opportunity mapping', 'Model and provider evaluation', 'Governance and reliability plan']],
  'product-consulting': ['Product consulting', 'From idea to scope', 'Turn a promising idea into a focused product plan, with clear priorities, useful measures, and a realistic route to launch.', '/uploads/services/fe95ca16-cdf5-42f2-8507-6d0f362d1476.png', ['MVP scope and sequencing', 'User-story mapping', 'Success metrics and roadmap']],
  'digital-transformation': ['Digital transformation', 'Operations that scale', 'Improve the systems behind your business in stages, with a plan built around the people who depend on them every day.', '/uploads/services/cc47d428-5705-4cef-87a4-e549dae35401.png', ['Workflow discovery', 'Systems and data priorities', 'Phased implementation plan']],
  'architecture-review': ['Architecture review', 'Independent technical assessment', 'See where your architecture is helping, where it is fragile, and what to address first before those issues become costly.', '/uploads/services/129b97b8-149c-45a5-abb7-a29ce3a262ab.png', ['Codebase and infrastructure review', 'Risk and dependency assessment', 'Prioritised remediation plan']],
  'outsourcing-advisory': ['IT outsourcing advisory', 'Confident partner decisions', 'Choose, manage, or replace a delivery partner with an independent technical view of scope, capability, and risk.', '/service-visuals/vendor-team.png', ['Proposal and vendor evaluation', 'Technical due diligence', 'Handover and continuity plan']],
  'security-compliance': ['Security & compliance review', 'Security by design', 'Understand your exposure, strengthen your controls, and prepare a practical route toward customer and compliance readiness.', '/uploads/services/129b97b8-149c-45a5-abb7-a29ce3a262ab.png', ['Application and access review', 'Data protection assessment', 'Actionable control roadmap']],
  'fractional-cto': ['Fractional CTO', 'Senior technical leadership', 'Bring experienced technical leadership into the decisions that matter, without adding a full-time executive role.', '/service-visuals/team-collaboration.png', ['Engineering leadership', 'Technical hiring and standards', 'Board-ready technical communication']],
} as const;

export function generateStaticParams() { return Object.keys(pages).map((service) => ({ service })); }

export default async function ConsultancyServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params;
  const page = pages[service as keyof typeof pages];
  if (!page) notFound();
  const [title, eyebrow, intro, image, focus] = page;
  return <>
    <section className="section-dark relative flex min-h-[100svh] items-center overflow-hidden pt-[var(--header-h)]"><div aria-hidden className="glow-amber-dark absolute inset-0" /><div aria-hidden className="absolute inset-0 bg-grid-dark opacity-40" /><div className="container-site relative py-16 text-center"><p className="text-micro font-bold uppercase tracking-label text-amber">{eyebrow}</p><h1 className="mx-auto mt-5 max-w-4xl text-h1 font-bold leading-[1.02] text-white">{title}</h1><p className="mx-auto mt-6 max-w-2xl text-body-lg leading-relaxed text-on-dark-muted">{intro}</p><Button href="/contact" size="lg" arrow className="mt-9 bg-amber text-white hover:bg-amber-bright">Discuss your challenge</Button></div></section>
    <section className="section-y bg-white"><div className="container-site grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]"><div><p className="text-micro font-bold uppercase tracking-label text-amber">What we cover</p><h2 className="mt-4 text-h2 font-bold text-ink">A focused engagement and a clear next step.</h2><div className="mt-8 space-y-4">{focus.map((item, i) => <div key={item} className="flex items-center gap-4 border-l-2 border-amber bg-amber-wash px-5 py-4"><span className="font-bold text-amber-deep">0{i + 1}</span><span className="font-medium text-navy">{item}</span></div>)}</div></div><div className="overflow-hidden rounded-2xl border border-line shadow-card"><img src={image} alt={title} className="aspect-[4/3] w-full object-cover" /></div></div></section>
    <section className="section-y section-light"><div className="container-site grid gap-6 md:grid-cols-3">{['Discover', 'Assess', 'Deliver'].map((step, i) => <div key={step} className="rounded-2xl border border-line bg-white p-7 shadow-card"><p className="text-micro font-bold text-amber">0{i + 1}</p><h2 className="mt-3 text-h4 font-semibold text-ink">{step}</h2><p className="mt-3 text-body-sm leading-relaxed text-body">Clear scope, direct collaboration, and written recommendations your team can use immediately.</p></div>)}</div></section>
  </>;
}
