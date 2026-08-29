import { Reveal, Section, SectionHeading, Tag } from '@/components/ui';
import { journey } from '@/data/journey';
import { cn } from '@/lib/cn';

export function Journey() {
  return (
    <Section id="journey" tone="sunken">
      <SectionHeading
        id="journey"
        eyebrow="Journey"
        title="How I got here"
        description="A developer's progression, in the order it happened and it\u2019s still going."
      />
      <ol className="relative mt-14 space-y-8 sm:space-y-10">
        <span
          aria-hidden="true"
          className="absolute top-2 bottom-2 left-5 w-px bg-line-strong sm:left-6"
        />
        {journey.map((milestone, index) => (
          <li key={milestone.id} className="relative pl-16 sm:pl-20">
            <span
              aria-hidden="true"
              className={cn(
                'absolute top-0 left-0 flex size-10 items-center justify-center rounded-full',
                'border font-mono text-xs sm:size-12 sm:text-sm',
                milestone.current
                  ? 'border-accent bg-accent text-accent-contrast'
                  : 'border-line-strong bg-surface-raised text-content-subtle',
              )}
            >
              {String(index + 1).padStart(2, '0')}
            </span>
            <Reveal delay={index * 0.04}>
              <div className="rounded-card border border-line bg-surface-raised p-6 shadow-raised sm:p-7">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-lg font-semibold text-content sm:text-xl">
                    {milestone.title}
                  </h3>
                  {milestone.current && (
                    <Tag tone="accent" dot>
                      Now
                    </Tag>
                  )}
                  {milestone.period && (
                    <span className="font-mono text-xs text-content-subtle">
                      {milestone.period}
                    </span>
                  )}
                </div>
                <p className="mt-3 leading-relaxed text-content-muted">{milestone.description}</p>
                {milestone.tags && milestone.tags.length > 0 && (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {milestone.tags.map((tag) => (
                      <li key={tag}>
                        <Tag>{tag}</Tag>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
