'use client';
import Button from '@/components/ui/Button';
import { featuredProjects, type Project } from '@/lib/content/projects';
import { revealProps } from '@/lib/reveal';

export default function Work() {
  return (
    <section id="work" className="bg-white py-10 lg:py-12">
      <div className="container-site">
        <div className="grid items-end gap-6 lg:grid-cols-[1fr_22rem]">
          <div><h2 className="font-black uppercase leading-[0.92] tracking-tight text-ink" style={{ fontSize: 'clamp(2.3rem, 4.8vw, 4.75rem)' }}>PROJECTS</h2><p className="mt-2 text-body-sm font-medium uppercase tracking-widest text-muted">Built for real teams, serving real users</p></div>
          <div><p className="text-body-sm text-body">Not demos. Real inventory, patients, payments, and OpenInterview.me operating every day.</p><Button href="/work" variant="outline" size="md" arrow className="mt-4">View all work</Button></div>
        </div>
        <div className="mt-7 grid justify-items-center gap-4 border-t border-line pt-7 sm:grid-cols-2 lg:grid-cols-4">{featuredProjects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} flip />)}</div>
      </div>
    </section>
  );
}

export function ProjectCard({ project, index = 0, flip = false }: { project: Project; index?: number; flip?: boolean }) {
  const images = ['/mockups/desktop-dashboard.png', '/mockups/laptop-dashboard.png', '/mockups/mobile-login.png', '/mockups/mobile-receipt.png'];
  const projectImages: Record<string, string> = {
    openinterview: '/service-visuals/ai-hiring-platform.png',
    turner10: '/service-visuals/real-estate-erp.png',
    ehms: '/service-visuals/hospital-management.png',
    ophir: '/service-visuals/jewellery-erp.png',
  };
  const image = projectImages[project.slug] ?? images[index % images.length];
  if (flip) {
    return (
      <a {...revealProps(index)} href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} demo`} className="group mx-auto block h-[400px] w-[400px] max-w-full [perspective:1200px] focus:outline-none">
        <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0 overflow-hidden rounded-3xl bg-navy [backface-visibility:hidden]">
            <img src={image} alt={`${project.name} platform preview`} loading="lazy" decoding="async" className="h-full w-full object-cover" />
          </div>
          <div className="absolute inset-0 flex overflow-hidden rounded-3xl bg-navy p-6 [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <div className="flex min-w-0 flex-1 flex-col overflow-hidden"><span className="text-micro font-bold uppercase tracking-label text-amber">{project.category}</span><h3 className="mt-2 text-[1.3rem] font-bold leading-snug !text-white">{project.name}</h3><p className="mt-3 line-clamp-4 text-body-sm leading-relaxed text-white/70">{project.summary}</p>
            <ul className="mt-auto flex flex-wrap gap-1.5 border-t border-white/15 pt-3">{project.stack.map((tech) => <li key={tech} className="rounded-md bg-white/10 px-2 py-1 text-micro text-white/75">{tech}</li>)}</ul></div>
          </div>
        </div>
      </a>
    );
  }

  return (
    <article {...revealProps(index)} aria-label={`Project: ${project.name}`} className="group mx-auto h-full w-full max-w-[400px] overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-base hover:-translate-y-1 hover:shadow-card-hover">
      <div className="relative aspect-[16/10] overflow-hidden bg-navy">
        <img src={image} alt={`${project.name} platform preview`} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
        <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-navy/80 px-3 py-1.5 text-micro font-bold uppercase tracking-label text-white backdrop-blur-sm">{project.category}</span>
      </div>
      <div className="flex h-full flex-col p-6">
        <h3 className="text-[1.3rem] font-bold leading-snug text-ink">{project.name}</h3>
        <p className="mt-3 text-body-sm leading-relaxed text-body">{project.summary}</p>
        <ul className="mt-5 flex flex-wrap gap-1 border-t border-line pt-4">{project.stack.map((tech) => <li key={tech} className="rounded-md border border-line bg-white px-2 py-1 text-micro text-body">{tech}</li>)}</ul>
      </div>
    </article>
  );
}
