import Button from '@/components/ui/Button';
import Icon, { type IconName } from '@/components/ui/Icon';
import { LogoMark } from '@/components/ui/Logo';
import { revealProps } from '@/lib/reveal';
import BrandedVisual from '@/components/ui/BrandedVisual';

type ServicePage = { title: string; category: string; summary: string; image: string; deliverables: string[]; index: number };

function deliverableIcon(label: string): IconName {
  const text = label.toLowerCase();
  if (text.includes('mobile') || text.includes('ios') || text.includes('android')) return 'mobile';
  if (text.includes('api') || text.includes('integration') || text.includes('webhook')) return 'link';
  if (text.includes('data') || text.includes('database') || text.includes('stock')) return 'database';
  if (text.includes('security') || text.includes('auth') || text.includes('access')) return 'shield';
  if (text.includes('design') || text.includes('journey')) return 'pen';
  if (text.includes('test') || text.includes('quality')) return 'check';
  if (text.includes('release') || text.includes('deployment') || text.includes('monitoring')) return 'rocket';
  if (text.includes('team') || text.includes('collaboration')) return 'users';
  if (text.includes('architecture') || text.includes('workflow')) return 'layers';
  if (text.includes('backend') || text.includes('service')) return 'server';
  if (text.includes('report') || text.includes('performance')) return 'chart';
  return 'code';
}

export default function ServiceExperience({ page }: { page: ServicePage }) {
  const outcomes = ['Clear direction', 'Visible delivery', 'A stronger foundation'];
  const reasons = ['Built around your real workflow', 'Senior practitioners, not handoffs', 'Clear decisions at every stage', 'Progress you can see and measure'];
  const visual = page.image.startsWith('/mockups/') ? '/service-visuals/team-collaboration.png' : page.image;
  return <main className="bg-white text-ink">
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-navy pt-[var(--header-h)] text-white">
      <BrandedVisual src={visual} alt={`${page.title} team and technology`} priority treatment="both" className="!absolute inset-0" imageClassName="opacity-35" />
      <div aria-hidden className="absolute inset-0 bg-navy/70" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(0deg,#020617,transparent)]" />
      {page.title === 'Full-stack web development' && (
        <div className="pointer-events-none absolute right-6 top-24 z-10 rounded-xl border border-amber/35 bg-navy/75 p-3 shadow-card sm:right-10">
          <LogoMark className="h-8 w-auto" />
        </div>
      )}
      <div className="container-site relative flex min-h-[calc(100svh-var(--header-h))] items-center py-16"><div className="max-w-2xl" {...revealProps()}>
        <p className="text-micro font-bold uppercase tracking-label text-amber">{page.category} · Eaquirs Tech</p><h1 className="mt-5 text-h1 font-bold leading-[1.02] text-white">{page.title}</h1><p className="mt-7 max-w-xl text-body-lg leading-relaxed text-white/70">{page.summary}</p><div className="mt-9 flex flex-wrap gap-4"><Button href="/contact" size="md" arrow className="bg-amber text-white hover:bg-amber-bright">Discuss your project</Button><span className="inline-flex min-h-11 items-center rounded-full border border-white/15 px-4 py-2 text-body-sm text-white/70">Built for real operations</span></div>
      </div></div>
    </section>

    <section className="flex min-h-[100svh] items-center bg-white py-16"><div className="container-site w-full"><div className="mx-auto max-w-3xl text-center" {...revealProps()}><p className="text-micro font-bold uppercase tracking-label text-amber">What you gain</p><h2 className="mt-4 text-h2 font-bold text-ink">Clear work. Useful results.</h2><p className="mt-5 text-body leading-relaxed text-body">We shape the work around the decisions, people, and results that matter to your team.</p></div><div className="mt-12 grid gap-4 md:grid-cols-3">{outcomes.map((outcome, index) => <article {...revealProps(index)} key={outcome} className={`border border-navy/15 bg-white p-7 shadow-card transition-all duration-base hover:-translate-y-1 hover:border-navy/35 hover:shadow-card-hover ${['rounded-tl-[3rem]','rounded-2xl','rounded-br-[3rem]'][index]}`}><span className="text-micro font-bold text-navy/60">0{index + 1}</span><h3 className="mt-10 text-xl font-semibold !text-navy">{outcome}</h3><p className="mt-4 text-body-sm leading-relaxed text-navy/75">Experienced delivery focused on the outcome you need, not a bundle of hours.</p></article>)}</div></div></section>

    <section className="flex min-h-[100svh] items-center bg-navy py-16 text-white"><div className="container-site grid w-full items-center gap-12 lg:grid-cols-[.8fr_1.2fr]"><div {...revealProps()}><p className="text-micro font-bold uppercase tracking-label text-amber">What we deliver</p><h2 className="mt-4 text-h2 font-bold text-white">The work your team needs, done properly.</h2><p className="mt-5 max-w-md text-body leading-relaxed text-white/65">A focused engagement with clear ownership and practical next steps.</p><Button href="/contact" size="md" arrow className="mt-8 bg-amber text-white hover:bg-amber-bright">Scope the work</Button></div><div className="grid gap-3 sm:grid-cols-2">{page.deliverables.map((item, index) => <article {...revealProps(index)} key={item} className={`border border-white/10 bg-white/[.03] p-6 transition-colors hover:border-amber/60 hover:bg-white/[.06] ${index === 0 ? 'sm:col-span-2' : ''}`}><div className="flex items-center justify-between"><span className="text-micro font-bold text-amber">0{index + 1}</span><Icon name={deliverableIcon(item)} className="h-5 w-5 text-amber" /></div><h3 className="mt-10 text-lg font-semibold text-white">{item}</h3><p className="mt-3 text-body-sm leading-relaxed text-white/60">Clear ownership, tested work, and a handover your team can use.</p></article>)}</div></div></section>

    <section className="flex min-h-[100svh] items-center bg-white py-16"><div className="container-site w-full"><div {...revealProps()}><p className="text-micro font-bold uppercase tracking-label text-amber">Why this approach</p><h2 className="mt-4 max-w-2xl text-h2 font-bold !text-amber-deep">Built with the discipline production work requires.</h2></div><div className="mt-10 grid gap-3 md:grid-cols-2">{reasons.map((reason, index) => <div {...revealProps(index)} key={reason} className="flex items-center gap-4 border border-navy/80 bg-navy px-5 py-5 shadow-card transition-all duration-base hover:-translate-y-0.5 hover:bg-navy-light"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber text-sm font-bold text-navy">0{index + 1}</span><p className="font-medium text-white">{reason}</p></div>)}</div><BrandedVisual {...revealProps(2)} src={visual} alt="Eaquirs Tech delivery team" treatment="signature" className="mt-10 max-h-[20rem] border border-line bg-white" imageClassName="mx-auto max-h-[20rem]" /></div></section>

    <section className="flex min-h-[100svh] items-center bg-white py-16"><div className="container-site w-full"><div className="mx-auto max-w-4xl text-center" {...revealProps()}><p className="text-micro font-bold uppercase tracking-label text-amber">Is this right for you?</p><h2 className="mt-4 text-h2 font-bold text-ink">A strong fit when the outcome matters.</h2></div><div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-2"><article {...revealProps()} className="border border-navy bg-navy p-8 shadow-card transition-all duration-base hover:-translate-y-2 hover:border-amber hover:shadow-card-hover"><h3 className="text-xl font-semibold !text-amber">A good fit</h3><ul className="mt-6 space-y-4">{['You need software that supports a real business process.','You value clear communication and experienced ownership.','You want a capable team that can deliver and evolve the work.'].map(x => <li key={x} className="flex gap-3 text-body-sm leading-relaxed text-white/85"><Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-amber" />{x}</li>)}</ul></article><article {...revealProps(1)} className="border border-line bg-[#f7f9fc] p-8 transition-all duration-base hover:-translate-y-2 hover:border-amber/50 hover:shadow-card-hover"><h3 className="text-xl font-semibold text-ink">Not the right fit</h3><ul className="mt-6 space-y-4">{['You need the cheapest possible option.','The work has no owner or agreed outcome.','You are looking only for a quick, unmaintained prototype.'].map(x => <li key={x} className="flex gap-3 text-body-sm leading-relaxed text-body"><span className="text-amber-deep">×</span>{x}</li>)}</ul></article></div><div className="mt-12 text-center" {...revealProps(2)}><Button href="/contact" size="md" arrow className="bg-amber px-7 text-white hover:bg-amber-bright">Start a conversation</Button></div></div></section>
  </main>;
}
