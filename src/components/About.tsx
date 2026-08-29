import { ArrowRight } from 'lucide-react';
import { Button, Card, Reveal, Section, SectionHeading } from '@/components/ui';
import { about } from '@/data/about';
import { siteConfig } from '@/data/site';
import { iconMap } from '@/lib/icons';

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <div className="relative">
            <img
              src={siteConfig.images.portraitAlt}
              alt={`${siteConfig.fullName} seated for a portrait photo`}
              width={1280}
              height={1920}
              loading="lazy"
              decoding="async"
              className="aspect-4/5 w-full rounded-panel border border-line object-cover object-top"
            />
            <Card padding="sm" className="absolute right-4 -bottom-8 left-4 border-line-strong sm:right-6 sm:left-6">
              <p className="font-display text-sm font-semibold text-content">{about.highlight.title}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-content-muted">{about.highlight.body}</p>
            </Card>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <SectionHeading id="about" eyebrow={about.eyebrow} title={about.title} />
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-8 space-y-5">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="leading-relaxed text-content-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10">
              <p className="eyebrow">What I focus on</p>
              <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {about.interests.map((interest) => {
                  const Icon = iconMap[interest.icon];
                  return (
                    <li key={interest.label} className="flex items-center gap-3 rounded-xl border border-line bg-surface-raised px-4 py-3">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                        <Icon size={16} aria-hidden="true" />
                      </span>
                      <span className="text-sm text-content">{interest.label}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <Button href={about.cta.href} className="mt-9" variant="secondary">
              {about.cta.label}
              <ArrowRight aria-hidden="true" />
            </Button>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
