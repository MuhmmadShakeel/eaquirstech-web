'use client';

import Icon from '@/components/ui/Icon';
import Button from '@/components/ui/Button';
import ImageWithFallback from '@/components/ui/ImageWithFallback';
import { featuredProjects, type Project } from '@/lib/content/projects';
import { revealProps } from '@/lib/reveal';

export default function Work() {
  return (
    <section id="work" className="bg-white">
      {/* ── Massive "PROJECTS" heading ── */}
      <div className="container-site pt-20 pb-0">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_360px]">
          <div>
            <h2
              className="font-black uppercase leading-[0.88] tracking-tight text-ink"
              style={{ fontSize: 'clamp(2.8rem, 9vw, 9rem)' }}
            >
              PROJECTS
            </h2>
            <p
              className="mt-3 font-light uppercase tracking-widest text-muted"
              style={{ fontSize: 'clamp(0.9rem, 2.2vw, 1.8rem)' }}
            >
              WE&apos;VE BUILT — SERVING REAL USERS TODAY
            </p>
          </div>
          <div className="pb-2">
            <p className="text-body leading-relaxed text-gray-600">
              Not demos. Not prototypes. Real inventory. Real patients. Real payments.
              Real hiring. Systems handling daily operations across four industries.
            </p>
            <Button href="/work" variant="outline" size="md" arrow className="mt-6">
              View all work
            </Button>
          </div>
        </div>
      </div>

      {/* ── Project cards ── */}
      <div className="container-site border-t border-line mt-10 py-14">
        <div className="grid gap-8 lg:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  const visibleStack = project.stack.slice(0, 5);
  const remaining = project.stack.length - visibleStack.length;

  return (
    <article
      {...revealProps(index)}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-all duration-base hover:-translate-y-1 hover:shadow-card-hover"
    >
      {/* Image */}
      <div className="relative overflow-hidden border-b border-line bg-gradient-to-br from-gray-50 via-gray-50 to-gray-100">
        <div className="flex min-h-[220px] items-center justify-center p-8">
          <ImageWithFallback
            src={project.image}
            alt={`${project.name} — ${project.category}`}
            className="max-h-52 w-full object-contain transition-transform duration-700 group-hover:scale-[1.04]"
            loading="lazy"
            decoding="async"
            fallbackClassName="h-52 w-full flex flex-col items-center justify-center gap-3"
            fallbackContent={
              <>
                <span className="text-5xl font-light text-amber/50">{project.name.slice(0, 2).toUpperCase()}</span>
                <span className="text-caption text-muted">{project.category}</span>
              </>
            }
          />
        </div>
        {/* Category badge */}
        <span className="absolute left-4 top-4 rounded-full border border-white bg-white/90 px-3 py-1 text-micro font-bold uppercase tracking-label text-amber-deep shadow-sm backdrop-blur-sm">
          {project.category}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-7 md:p-8">
        <h3 className="text-[1.4rem] font-bold leading-snug text-ink">{project.name}</h3>
        <p className="mt-2.5 leading-relaxed text-body-sm text-gray-600">{project.summary}</p>

        {/* Metrics */}
        <dl className="mt-6 grid grid-cols-2 gap-4 rounded-xl border border-line bg-gray-50 p-5">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <dt className="text-lead font-bold leading-none text-amber-deep">{m.value}</dt>
              <dd className="mt-1.5 text-micro uppercase tracking-label text-muted">{m.label}</dd>
            </div>
          ))}
        </dl>

        {/* Stack tags */}
        <ul className="mt-5 flex flex-wrap gap-1.5">
          {visibleStack.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-line bg-gray-50 px-2.5 py-1 text-micro text-gray-600"
            >
              {tech}
            </li>
          ))}
          {remaining > 0 && (
            <li className="rounded-md border border-amber/30 bg-amber-wash px-2.5 py-1 text-micro font-semibold text-amber-deep">
              +{remaining} more
            </li>
          )}
        </ul>

        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center gap-2 pt-6 text-body-sm font-semibold text-amber-deep transition-colors duration-fast hover:text-amber"
          >
            Visit live platform
            <Icon name="external" className="h-4 w-4 transition-transform duration-fast group-hover:translate-x-0.5" />
          </a>
        )}
      </div>
    </article>
  );
}
