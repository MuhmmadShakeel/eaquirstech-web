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
          <div><p className="text-body-sm text-body">Not demos. Real inventory, patients, payments, and hiring systems operating every day.</p><Button href="/work" variant="outline" size="md" arrow className="mt-4">View all work</Button></div>
        </div>
        <div className="mt-7 grid gap-4 border-t border-line pt-7 sm:grid-cols-2 lg:grid-cols-4">{featuredProjects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div>
      </div>
    </section>
  );
}

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const images = ['/mockups/desktop-dashboard.png', '/mockups/laptop-dashboard.png', '/mockups/mobile-login.png', '/mockups/mobile-receipt.png'];
  return (
    <article {...revealProps(index)} aria-label={`Project: ${project.name}`} className="group w-full [perspective:1000px]">
      <div className="relative aspect-[4/5] transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 overflow-hidden rounded-xl border border-line bg-[#f6f6f6] [backface-visibility:hidden]">
          <img src={images[index % images.length]} alt={`${project.name} platform preview`} className="h-full w-full object-contain p-2 transition-transform duration-700 group-hover:scale-105" />
          <span className="absolute left-3 top-3 rounded-full border border-white bg-white px-2.5 py-1 text-micro font-bold uppercase tracking-label text-amber-deep">{project.category}</span>
          <span className="absolute bottom-0 left-0 right-0 bg-white p-3"><span className="block text-body-sm font-bold text-ink">{project.name}</span><span className="mt-0.5 block text-micro text-muted">Hover to see project details</span></span>
        </div>
        <div className="absolute inset-0 flex flex-col rounded-xl bg-[#000000] p-5 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <span className="text-micro font-bold uppercase tracking-label text-amber">{project.category}</span>
          <h3 className="mt-3 text-body font-bold leading-snug text-white">{project.name}</h3>
          <p className="mt-3 text-body-sm leading-relaxed text-white/75">{project.summary}</p>
          <div className="mt-4 border-t border-white/15 pt-3">
            <span className="text-micro font-bold uppercase tracking-label text-white/45">Technology stack</span>
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {project.stack.slice(0, 5).map((tech) => <li key={tech} className="rounded-md border border-white/15 px-2 py-1 text-micro text-white/70">{tech}</li>)}
            </ul>
          </div>
          <span className="mt-auto grid grid-cols-2 gap-3 border-t border-white/15 pt-4">{project.metrics.slice(0, 2).map((metric) => <span key={metric.label}><span className="block text-lead font-bold text-amber">{metric.value}</span><span className="text-micro text-white/55">{metric.label}</span></span>)}</span>
        </div>
      </div>
    </article>
  );
}
