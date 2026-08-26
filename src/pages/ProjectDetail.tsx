import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink, Github } from 'lucide-react';
import { Button, Card, Container, Reveal, Tag } from '@/components/ui';
import { NotFound } from './NotFound';
import { getProjectBySlug, projects } from '@/data/projects';
import { Seo } from '@/components/Seo';
import { projectSchema } from '@/lib/structuredData';
import type { Project } from '@/data/projects';

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug);

  if (!project) return <NotFound />;

  const index = projects.findIndex((item) => item.slug === project.slug);
  const previous = index > 0 ? projects[index - 1] : undefined;
  const next = index < projects.length - 1 ? projects[index + 1] : undefined;
  const { caseStudy } = project;

  return (
    <main id="main" className="pt-28 pb-24 md:pt-36">
      <Seo
        title={project.name}
        description={project.summary}
        path={`/projects/${project.slug}`}
        image={project.cover}
        type="article"
        jsonLd={[projectSchema(project)]}
      />

      <Container>
        <Button to="/#projects" variant="ghost" size="sm" className="-ml-3">
          <ArrowLeft aria-hidden="true" />
          All projects
        </Button>

        {/* --- Header --------------------------------------------------- */}
        <header className="mt-8 max-w-3xl">
          <p className="eyebrow">{project.category}</p>
          <h1 className="mt-4 text-display-lg font-semibold text-balance text-content">
            {project.name}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-content-muted">{project.summary}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {project.links.demo && (
              <Button href={project.links.demo}>
                <ExternalLink aria-hidden="true" />
                Live demo
              </Button>
            )}
            {project.links.github && (
              <Button href={project.links.github} variant="secondary">
                <Github aria-hidden="true" />
                View code
              </Button>
            )}
            {!project.links.demo && !project.links.github && (
              <p className="font-mono text-xs text-content-subtle">
                Links will appear here once the repository or deployment is public.
              </p>
            )}
          </div>
        </header>

        <img
          src={project.cover}
          alt={project.coverAlt}
          loading="lazy"
          decoding="async"
          className="mt-12 aspect-16/10 w-full rounded-panel border border-line object-cover"
        />

        {/* --- Body ----------------------------------------------------- */}
        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_18rem] lg:gap-16">
          <div className="min-w-0 space-y-12">
            <Prose title="Overview" body={caseStudy.overview} />
            <Prose title="The problem" body={caseStudy.problem} />
            <Prose title="The solution" body={caseStudy.solution} />
            <Prose title="My role" body={caseStudy.role} />

            <Reveal>
              <section aria-labelledby="features-title">
                <h2 id="features-title" className="text-display-sm font-semibold text-content">
                  Features
                </h2>
                <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 rounded-xl border border-line bg-surface-raised px-4 py-3 text-sm text-content-muted"
                    >
                      <span
                        className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>

            <ListSection title="Challenges" items={caseStudy.challenges} />
            <ListSection title="What I learned" items={caseStudy.learned} />

            {project.screenshots.length > 0 && (
              <Reveal>
                <section aria-labelledby="screenshots-title">
                  <h2 id="screenshots-title" className="text-display-sm font-semibold text-content">
                    Screenshots
                  </h2>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {project.screenshots.map((shot) => (
                      <figure key={shot.src}>
                        <img
                          src={shot.src}
                          alt={shot.alt}
                          loading="lazy"
                          decoding="async"
                          className="w-full rounded-card border border-line"
                        />
                        {shot.caption && (
                          <figcaption className="mt-2 text-xs text-content-subtle">
                            {shot.caption}
                          </figcaption>
                        )}
                      </figure>
                    ))}
                  </div>
                </section>
              </Reveal>
            )}

            {/* Development-only reminder; never shown to visitors. */}
            {import.meta.env.DEV && project.screenshots.length === 0 && (
              <Card tone="dashed" padding="sm">
                <p className="font-mono text-xs text-content-subtle">
                  Add screenshots to public/projects/{project.slug}/ and list them in the
                  `screenshots` array in src/data/projects.ts.
                </p>
              </Card>
            )}

            <ListSection title="Future improvements" items={caseStudy.futureImprovements} />
          </div>

          {/* --- Meta sidebar ------------------------------------------- */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <Card padding="md">
              <p className="eyebrow">Built with</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <li key={tech}>
                    <Tag>{tech}</Tag>
                  </li>
                ))}
              </ul>

              <p className="eyebrow mt-8">Category</p>
              <p className="mt-3 text-sm text-content-muted">{project.category}</p>

              {project.status && (
                <>
                  <p className="eyebrow mt-8">Status</p>
                  <p className="mt-3">
                    <Tag tone="accent" dot>
                      {project.status}
                    </Tag>
                  </p>
                </>
              )}
            </Card>
          </aside>
        </div>

        {/* --- Prev / next ---------------------------------------------- */}
        <nav
          aria-label="Other projects"
          className="mt-20 grid gap-4 border-t border-line pt-10 sm:grid-cols-2"
        >
          {previous ? <AdjacentLink project={previous} direction="previous" /> : <span />}
          {next && <AdjacentLink project={next} direction="next" />}
        </nav>
      </Container>
    </main>
  );
}

function Prose({ title, body }: { title: string; body: string }) {
  return (
    <Reveal>
      <section aria-label={title}>
        <h2 className="text-display-sm font-semibold text-content">{title}</h2>
        <p className="mt-4 leading-relaxed text-content-muted">{body}</p>
      </section>
    </Reveal>
  );
}

function ListSection({ title, items }: { title: string; items: string[] }) {
  return (
    <Reveal>
      <section aria-label={title}>
        <h2 className="text-display-sm font-semibold text-content">{title}</h2>
        <ul className="mt-5 space-y-3">
          {items.map((item) => (
            <li key={item} className="flex gap-3 leading-relaxed text-content-muted">
              <span
                className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent"
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>
      </section>
    </Reveal>
  );
}

function AdjacentLink({
  project,
  direction,
}: {
  project: Project;
  direction: 'previous' | 'next';
}) {
  const isNext = direction === 'next';

  return (
    <Card
      interactive
      padding="md"
      className={isNext ? 'text-right sm:col-start-2' : undefined}
      as="div"
    >
      <p className="font-mono text-[11px] tracking-wide text-content-subtle uppercase">
        {isNext ? 'Next project' : 'Previous project'}
      </p>
      <p className="mt-2 font-display text-lg font-semibold text-content">
        <Link
          to={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 after:absolute after:inset-0 after:content-['']"
        >
          {!isNext && <ArrowLeft size={16} aria-hidden="true" />}
          {project.name}
          {isNext && <ArrowRight size={16} aria-hidden="true" />}
        </Link>
      </p>
    </Card>
  );
}
