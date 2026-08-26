import { useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Card, Reveal, Section, SectionHeading } from '@/components/ui';
import { SkillLevelMeter } from '@/components/ui/SkillLevelMeter';
import { skillCategories, skillLevelMeta } from '@/data/skills';
import { iconMap } from '@/lib/icons';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { duration, easing } from '@/lib/motion';
import { cn } from '@/lib/cn';
import type { SkillLevel } from '@/types';

const levels = Object.entries(skillLevelMeta)
  .sort(([, a], [, b]) => a.order - b.order)
  .map(([level, meta]) => ({
    level: level as SkillLevel,
    meaning: meta.meaning,
  }));

export function Skills() {
  const [activeId, setActiveId] = useState(skillCategories[0].id);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const reducedMotion = usePrefersReducedMotion();

  const active = skillCategories.find((category) => category.id === activeId) ?? skillCategories[0];

  /** Arrow keys move between tabs, Home/End jump to the ends. */
  const onTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const keys = ['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp', 'Home', 'End'];
    if (!keys.includes(event.key)) return;
    event.preventDefault();

    const last = skillCategories.length - 1;
    let next = index;

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown')
      next = index === last ? 0 : index + 1;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = index === 0 ? last : index - 1;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = last;

    const nextId = skillCategories[next].id;
    setActiveId(nextId);
    tabRefs.current[nextId]?.focus();
  };

  return (
    <Section id="skills" tone="sunken">
      <SectionHeading
        id="skills"
        eyebrow="Skills"
        title="What I work with"
        description="Grouped by what I use them for, and labelled by how well I actually know them. Nothing here is listed above Intermediate."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[16rem_1fr] lg:gap-10">
        {/* --- Category tabs --------------------------------------------- */}
        <div
          role="tablist"
          aria-label="Skill categories"
          className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0"
        >
          {skillCategories.map((category, index) => {
            const Icon = iconMap[category.icon];
            const selected = category.id === activeId;

            return (
              <button
                key={category.id}
                ref={(node) => {
                  tabRefs.current[category.id] = node;
                }}
                role="tab"
                id={`skills-tab-${category.id}`}
                aria-selected={selected}
                aria-controls={`skills-panel-${category.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiveId(category.id)}
                onKeyDown={(event) => onTabKeyDown(event, index)}
                className={cn(
                  'flex shrink-0 items-center gap-3 rounded-full border px-4 py-2.5 text-sm whitespace-nowrap',
                  'transition-colors duration-200 lg:w-full lg:rounded-xl lg:px-4 lg:py-3',
                  selected
                    ? 'border-accent bg-accent text-accent-contrast'
                    : 'border-line bg-surface-raised text-content-muted hover:border-line-strong hover:text-content',
                )}
              >
                <Icon size={16} aria-hidden="true" />
                <span className="font-medium">{category.label}</span>
                <span
                  className={cn(
                    'ml-auto hidden font-mono text-[11px] lg:inline',
                    selected ? 'text-accent-contrast/70' : 'text-content-subtle',
                  )}
                >
                  {category.skills.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* --- Active panel ----------------------------------------------- */}
        <div
          role="tabpanel"
          id={`skills-panel-${active.id}`}
          aria-labelledby={`skills-tab-${active.id}`}
          tabIndex={0}
          className="rounded-card focus-ring"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={reducedMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{
                duration: reducedMotion ? 0 : duration.base,
                ease: easing.soft,
              }}
            >
              <p className="max-w-2xl text-sm leading-relaxed text-content-muted">
                {active.description}
              </p>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {active.skills.map((skill) => (
                  <li key={skill.name}>
                    <Card padding="sm" className="h-full">
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <p className="font-medium text-content">{skill.name}</p>
                          {skill.note && (
                            <p className="mt-1 text-xs leading-relaxed text-content-subtle">
                              {skill.note}
                            </p>
                          )}
                        </div>
                      </div>
                      <SkillLevelMeter level={skill.level} className="mt-4" />
                    </Card>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* --- Legend ------------------------------------------------------- */}
      <Reveal>
        <div className="mt-10 rounded-card border border-line bg-surface-raised p-6 sm:p-7">
          <p className="eyebrow">What the labels mean</p>
          <dl className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {levels.map(({ level, meaning }) => (
              <div key={level}>
                <dt>
                  <SkillLevelMeter level={level} />
                </dt>
                <dd className="mt-2 text-xs leading-relaxed text-content-muted">{meaning}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </Section>
  );
}
