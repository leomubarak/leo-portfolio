import { Reveal, Section, SectionHeading } from '@/components/ui';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/data/projects';

/**
 * All three projects are web projects, so the earlier category filter has
 * been removed — a one-option filter is not a filter, just noise.
 */
export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        id="projects"
        eyebrow="Projects"
        title="Things I have built"
        description="Three projects, each with the story behind it — what problem it solves, what it taught me, and what I would do differently next time."
      />
      <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <li key={project.slug} className="h-full">
            <Reveal delay={Math.min(index, 3) * 0.05} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
