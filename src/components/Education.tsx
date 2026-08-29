import { GraduationCap } from 'lucide-react';
import { Card, Reveal, Section, SectionHeading, Tag } from '@/components/ui';
import { education } from '@/data/education';

export function Education() {
  return (
    <Section id="education">
      <SectionHeading id="education" eyebrow="Education" title="What I am studying" />
      <ol className="mt-14 space-y-6">
        {education.map((entry) => (
          <li key={entry.id}>
            <Reveal>
              <Card padding="lg">
                <div className="flex flex-col gap-6 sm:flex-row sm:gap-8">
                  <span aria-hidden="true" className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                    <GraduationCap size={22} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display text-xl font-semibold text-content sm:text-2xl">{entry.qualification}</h3>
                      {entry.current && <Tag tone="accent" dot>In progress</Tag>}
                    </div>
                    <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-content-subtle">
                      <span>{entry.institution}</span>
                      <span aria-hidden="true">·</span>
                      <span>{entry.status}</span>
                    </p>
                    <p className="mt-5 leading-relaxed text-content-muted">{entry.summary}</p>
                    <div className="mt-6">
                      <p className="eyebrow">The programme covers</p>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {entry.focusAreas.map((area) => (
                          <li key={area}><Tag tone="outline">{area}</Tag></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
