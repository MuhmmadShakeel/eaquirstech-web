import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import { stack } from '@/lib/content/misc';
import type { SimpleIcon } from 'simple-icons';
import { siCloudinary, siDocker, siDotnet, siExpress, siJsonwebtokens, siLangchain, siNeon, siNestjs, siNextdotjs, siNodedotjs, siPostgresql, siPrisma, siReact, siRedis, siStripe, siTailwindcss, siTypescript, siZod } from 'simple-icons';

export default function StackMarquee() {
  return (
    <section className="section-light flex min-h-[calc(100svh-var(--header-h))] items-center py-10 lg:py-12">
      <div className="container-site">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="text-micro font-bold uppercase tracking-label text-amber-deep">Built for the real world</p>
            <div className="mt-4">
              <h2 className="font-black uppercase leading-[0.92] tracking-tight text-ink" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 5.25rem)' }}>
                WE BUILD<br /><span className="text-amber">PRODUCTION</span><br /><span className="text-muted">SOFTWARE</span>
              </h2>
              <div className="mt-5 max-w-xl">
                <p className="text-body-lg leading-relaxed text-body">Senior engineers combine product thinking and AI-assisted delivery to ship software people can rely on.</p>
                <Button href="/contact" size="lg" arrow className="mt-7 bg-amber text-white hover:bg-amber-bright">Start a project</Button>
              </div>
            </div>
          </div>

          <div className="relative">
            <div aria-hidden="true" className="absolute -inset-4 rounded-[2rem] border border-amber/20" />
            <div className="relative rounded-2xl border border-line bg-white p-5 shadow-card">
              <img src="/home-product-technology.png" alt="Product and technology working together" className="aspect-[4/3] w-full object-cover" />
            </div>
          </div>
        </div>

        <div className="mt-8 overflow-hidden border-t border-line pt-5">
          <div className="flex items-center justify-between gap-4">
            <p className="inline-flex items-center gap-2 text-micro font-bold uppercase tracking-label text-muted"><Icon name="code" className="h-4 w-4 text-amber" strokeWidth={2} />Technologies we ship with</p>
            <span className="inline-flex items-center gap-2 text-micro uppercase tracking-label text-amber"><Icon name="cpu" className="h-4 w-4" strokeWidth={2} />Production-ready stack</span>
          </div>
          <div className="marquee-mask mt-4 space-y-2">
            <TechMarquee />
            <TechMarquee reverse />
          </div>
        </div>
      </div>
    </section>
  );
}

function TechMarquee({ reverse = false }: { reverse?: boolean }) {
  const items = [...stack, ...stack];
  return (
    <div className="overflow-hidden">
      <ul className={`marquee-track flex w-max gap-2 ${reverse ? 'marquee-track-reverse' : ''}`}>
        {items.map((tech, index) => (
          <li key={`${tech}-${index}`} className="group relative flex h-14 w-20 items-center justify-center rounded-xl border border-line bg-white transition-colors duration-fast hover:border-amber hover:bg-amber-wash">
            <TechIcon tech={tech} />
            <span className="sr-only">{tech}</span>
            <span className="pointer-events-none absolute -top-9 left-1/2 z-10 hidden -translate-x-1/2 whitespace-nowrap rounded-md bg-ink px-2 py-1 text-micro font-medium text-white group-hover:block">
              {tech}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const techIcons: Record<string, SimpleIcon> = {
  'Next.js': siNextdotjs, NestJS: siNestjs, 'Node.js': siNodedotjs, 'Express.js': siExpress,
  TypeScript: siTypescript, React: siReact, PostgreSQL: siPostgresql, 'Neon DB': siNeon,
  Redis: siRedis, Prisma: siPrisma, 'C# .NET': siDotnet, 'Entity Framework': siDotnet,
  LangChain: siLangchain, Stripe: siStripe, JWT: siJsonwebtokens, Zod: siZod,
  Cloudinary: siCloudinary, Docker: siDocker, 'Tailwind CSS': siTailwindcss,
};

const techMarks: Record<string, { label: string; tone: string }> = {
  'Next.js': { label: 'N', tone: 'bg-black text-white' }, NestJS: { label: 'N', tone: 'bg-red-600 text-white' },
  'Node.js': { label: 'N', tone: 'bg-lime-600 text-white' }, 'Express.js': { label: 'ex', tone: 'bg-slate-800 text-white' },
  TypeScript: { label: 'TS', tone: 'bg-blue-600 text-white' }, React: { label: 'R', tone: 'bg-cyan-500 text-navy' },
  PostgreSQL: { label: 'PG', tone: 'bg-sky-800 text-white' }, 'Neon DB': { label: 'N', tone: 'bg-lime-300 text-navy' },
  Redis: { label: 'R', tone: 'bg-red-600 text-white' }, 'SQL Server': { label: 'SQL', tone: 'bg-red-700 text-white' },
  Prisma: { label: 'P', tone: 'bg-slate-900 text-white' }, Dapper: { label: 'D', tone: 'bg-violet-700 text-white' },
  'C# .NET': { label: '.NET', tone: 'bg-violet-700 text-white' }, 'Entity Framework': { label: 'EF', tone: 'bg-violet-700 text-white' },
  LangChain: { label: 'LC', tone: 'bg-emerald-600 text-white' }, 'OpenAI API': { label: 'AI', tone: 'bg-emerald-700 text-white' },
  Stripe: { label: 'S', tone: 'bg-indigo-600 text-white' }, JWT: { label: 'JWT', tone: 'bg-amber text-white' },
  Zod: { label: 'Z', tone: 'bg-blue-700 text-white' }, Cloudinary: { label: 'C', tone: 'bg-sky-500 text-white' },
  Docker: { label: 'D', tone: 'bg-blue-500 text-white' }, 'Tailwind CSS': { label: 'TW', tone: 'bg-cyan-500 text-white' },
};

function TechIcon({ tech }: { tech: string }) {
  const mark = techMarks[tech] ?? { label: tech.slice(0, 2).toUpperCase(), tone: 'bg-navy text-white' };
  const icon = techIcons[tech];
  if (icon) return <svg aria-hidden="true" viewBox="0 0 24 24" className="h-8 w-8 transition-transform duration-fast group-hover:scale-110" role="img"><path fill={`#${icon.hex}`} d={icon.path} /></svg>;
  return (
    <span aria-hidden="true" className={`flex h-9 min-w-9 items-center justify-center rounded-lg px-1.5 text-[0.64rem] font-black tracking-tight transition-transform duration-fast group-hover:scale-110 ${mark.tone}`}>{mark.label}</span>
  );
}
