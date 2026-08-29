import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, Tag } from '@/components/ui';
import type { Project } from '@/data/projects';

export function ProjectCard({ project, maxTechnologies = 4 }: { project: Project; maxTechnologies?: number }) {
  const shown = project.technologies.slice(0, maxTechnologies);
  const hidden = project.technologies.length - shown.length;

  return (
    <Card interactive padding="none" className="flex h-full flex-col overflow-hidden">
      <div className="relative aspect-16/10 overflow-hidden border-b border-line bg-surface-sunken">
        <img
          src={project.cover}
          alt={project.coverAlt}
          loading="lazy"
          decoding="async"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transform-none motion-reduce:transition-none"
        />
        {project.status && (
          <span className="absolute top-4 left-4">
            <Tag tone="accent" dot>{project.status}</Tag>
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-[11px] tracking-wide text-content-subtle">{project.category}</p>
        <h3 className="mt-3 font-display text-xl font-semibold text-content">
          <Link to={`/projects/${project.slug}`} className="after:absolute after:inset-0 after:content-['']">
            {project.name}
          </Link>
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-content-muted">{project.summary}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {shown.map((tech) => (<li key={tech}><Tag>{tech}</Tag></li>))}
          {hidden > 0 && <li><Tag tone="outline">+{hidden}</Tag></li>}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-line pt-5">
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent">
            Case study
            <ArrowUpRight size={16} aria-hidden="true" />
          </span>
          {project.links.demo && (
            <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="relative z-10 inline-flex items-center gap-1.5 text-sm text-content-muted transition-colors hover:text-content" aria-label={`${project.name} live demo (opens in a new tab)`}>
              <ExternalLink size={15} aria-hidden="true" />
              Live demo
            </a>
          )}
          {project.links.github && (
            <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="relative z-10 inline-flex items-center gap-1.5 text-sm text-content-muted transition-colors hover:text-content" aria-label={`${project.name} source code on GitHub (opens in a new tab)`}>
              <Github size={15} aria-hidden="true" />
              Code
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}
