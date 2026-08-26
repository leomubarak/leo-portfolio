import { ArrowRight } from 'lucide-react';
import { Button, Card, Reveal, Section, SectionHeading, Tag } from '@/components/ui';
import { teaching } from '@/data/teaching';
import { iconMap } from '@/lib/icons';

const { catchUp } = teaching;

export function Teaching() {
  return (
    <Section id="teaching" tone="sunken">
      <SectionHeading
        id="teaching"
        eyebrow={teaching.eyebrow}
        title={teaching.title}
        description={teaching.intro}
      />

      <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {teaching.offerings.map((offering, index) => {
          const Icon = iconMap[offering.icon];
          return (
            <li key={offering.title} className="h-full">
              <Reveal delay={Math.min(index, 3) * 0.05} className="h-full">
                <Card className="h-full">
                  <span
                    aria-hidden="true"
                    className="flex size-10 items-center justify-center rounded-xl bg-accent-soft text-accent"
                  >
                    <Icon size={18} />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold text-content">
                    {offering.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-content-muted">
                    {offering.description}
                  </p>
                </Card>
              </Reveal>
            </li>
          );
        })}
      </ul>

      {/* --- Catch-up classes -------------------------------------------- */}
      <Reveal>
        <div className="mt-6 grid gap-8 rounded-panel border border-line bg-surface-raised p-7 shadow-raised sm:p-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h3 className="font-display text-2xl font-semibold text-content">{catchUp.title}</h3>
            <p className="mt-4 leading-relaxed text-content-muted">{catchUp.description}</p>

            <p className="eyebrow mt-8">Topics I cover</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {catchUp.topics.map((topic) => (
                <li key={topic}>
                  <Tag tone="outline">{topic}</Tag>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-card border border-line bg-surface-sunken p-6">
            <p className="eyebrow">Next sessions</p>

            {catchUp.sessions.length > 0 ? (
              <ul className="mt-4 space-y-4">
                {catchUp.sessions.map((session) => (
                  <li key={`${session.topic}-${session.when}`} className="text-sm">
                    <p className="font-medium text-content">{session.topic}</p>
                    <p className="mt-1 font-mono text-xs text-content-subtle">
                      {session.when}
                      {session.where ? ` · ${session.where}` : ''}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-sm leading-relaxed text-content-muted">
                {catchUp.scheduleNote}
              </p>
            )}

            <Button href={catchUp.cta.href} className="mt-6" fullWidth>
              {catchUp.cta.label}
              <ArrowRight aria-hidden="true" />
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
