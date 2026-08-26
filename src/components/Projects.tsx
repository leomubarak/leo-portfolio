import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Reveal, Section, SectionHeading } from '@/components/ui';
import { ProjectCard } from '@/components/ProjectCard';
import { projectCategories, projects } from '@/data/projects';
import type { ProjectCategoryId } from '@/data/projects';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { duration, easing } from '@/lib/motion';
import { cn } from '@/lib/cn';

type FilterId = ProjectCategoryId | 'all';

export function Projects() {
  const [filter, setFilter] = useState<FilterId>('all');
  const reducedMotion = usePrefersReducedMotion();

  const visible = useMemo(
    () =>
      filter === 'all'
        ? projects
        : projects.filter((project) => project.categoryIds.includes(filter)),
    [filter],
  );

  return (
    <Section id="projects">
      <SectionHeading
        id="projects"
        eyebrow="Projects"
        title="Things I have built"
        description="Six projects, each with the story behind it — what problem it solves, what it taught me, and what I would do differently next time."
      />

      {/* Filter group. Buttons, not tabs: they narrow a list rather than swap panels. */}
      <div
        role="group"
        aria-label="Filter projects by category"
        className="mt-10 -mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0 sm:pb-0"
      >
        {projectCategories.map((category) => {
          const selected = filter === category.id;
          const categoryId = category.id;
          const count =
            categoryId === 'all'
              ? projects.length
              : projects.filter((project) => project.categoryIds.includes(categoryId)).length;

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => setFilter(category.id)}
              aria-pressed={selected}
              className={cn(
                'inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm',
                'transition-colors duration-200',
                selected
                  ? 'border-accent bg-accent text-accent-contrast'
                  : 'border-line bg-surface-raised text-content-muted hover:border-line-strong hover:text-content',
              )}
            >
              {category.label}
              <span
                className={cn(
                  'font-mono text-[11px]',
                  selected ? 'text-accent-contrast/70' : 'text-content-subtle',
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Announces the result count for screen reader users after filtering. */}
      <p aria-live="polite" className="sr-only">
        {visible.length} {visible.length === 1 ? 'project' : 'projects'} shown
      </p>

      <AnimatePresence mode="wait">
        <motion.ul
          key={filter}
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
          transition={{
            duration: reducedMotion ? 0 : duration.base,
            ease: easing.soft,
          }}
          className="mt-10 grid gap-6 md:grid-cols-2"
        >
          {visible.map((project, index) => (
            <li key={project.slug} className="h-full">
              <Reveal delay={Math.min(index, 3) * 0.05} className="h-full">
                <ProjectCard project={project} />
              </Reveal>
            </li>
          ))}
        </motion.ul>
      </AnimatePresence>
    </Section>
  );
}
