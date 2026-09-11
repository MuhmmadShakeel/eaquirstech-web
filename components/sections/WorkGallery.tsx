'use client';

import { useMemo, useState } from 'react';
import { featuredProjects } from '@/lib/content/projects';
import { ProjectCard } from './Work';

const filters = ['All', 'OpenInterview.me', 'Real Estate', 'Healthcare', 'Jewellery'];

export default function WorkGallery() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('All');
  const shownProjects = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return featuredProjects.filter((project) => {
      const matchesFilter = filter === 'All' || project.category.includes(filter);
      const searchable = `${project.name} ${project.category} ${project.summary} ${project.stack.join(' ')}`.toLowerCase();
      return matchesFilter && (!normalized || searchable.includes(normalized));
    });
  }, [filter, query]);

  return (
    <section className="py-12 lg:py-16">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-5 border-b border-line pb-7 lg:flex-row lg:items-end">
          <div><p className="text-micro font-bold uppercase tracking-label text-amber">Platform library</p><h2 className="mt-3 text-h2 font-bold text-ink">Work built for real operations.</h2></div>
          <label className="relative block w-full max-w-sm"><span className="sr-only">Search projects</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search projects or technology" className="h-12 w-full rounded-full border border-line bg-white px-5 text-body-sm text-ink outline-none transition-colors placeholder:text-muted focus:border-amber" /></label>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">{filters.map((item) => <button key={item} type="button" onClick={() => setFilter(item)} className={`rounded-full px-4 py-2 text-body-sm font-medium transition-colors ${filter === item ? 'bg-amber text-white' : 'bg-white text-body hover:text-amber'}`}>{item}</button>)}</div>
        {shownProjects.length ? <div className="mt-8 grid justify-items-center gap-6 sm:grid-cols-2">{shownProjects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div> : <p className="py-12 text-center text-body">No projects match that search.</p>}
      </div>
    </section>
  );
}
