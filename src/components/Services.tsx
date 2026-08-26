import { ArrowRight, Check, Minus } from 'lucide-react';
import { Button, Card, Reveal, Section, SectionHeading } from '@/components/ui';
import { services, serviceScope } from '@/data/services';
import { iconMap } from '@/lib/icons';

export function Services() {
  return (
    <Section id="services" tone="sunken">
      <SectionHeading
        id="services"
        eyebrow="Services"
        title="What I can help with"
        description="Work I can take on as a student developer. Small, well-defined projects where I can do a careful job."
      />

      <ul className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon];
          return (
            <li key={service.id} className="h-full">
              <Reveal delay={Math.min(index, 3) * 0.05} className="h-full">
                <Card className="flex h-full flex-col">
                  <span
                    aria-hidden="true"
                    className="flex size-11 items-center justify-center rounded-xl bg-accent-soft text-accent"
                  >
                    <Icon size={20} />
                  </span>

                  <h3 className="mt-5 font-display text-lg font-semibold text-content">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-content-muted">
                    {service.description}
                  </p>

                  <ul className="mt-5 space-y-2 border-t border-line pt-4">
                    {service.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-content-muted"
                      >
                        <Check
                          size={15}
                          className="mt-0.5 shrink-0 text-accent"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            </li>
          );
        })}
      </ul>

      {/* --- Scope ------------------------------------------------------- */}
      <Reveal>
        <div className="mt-6 grid gap-8 rounded-panel border border-line bg-surface-raised p-7 shadow-raised sm:p-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h3 className="font-display text-xl font-semibold text-content">
              Before you write to me
            </h3>
            <p className="mt-4 leading-relaxed text-content-muted">{serviceScope.note}</p>
            <Button href={serviceScope.cta.href} className="mt-7">
              {serviceScope.cta.label}
              <ArrowRight aria-hidden="true" />
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="eyebrow">A good fit</p>
              <ul className="mt-4 space-y-3">
                {serviceScope.goodFit.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-content-muted">
                    <Check size={15} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              {/* Named plainly rather than hidden — it saves everyone time. */}
              <p className="eyebrow">Not me, at least not yet</p>
              <ul className="mt-4 space-y-3">
                {serviceScope.notYet.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-content-subtle">
                    <Minus
                      size={15}
                      className="mt-0.5 shrink-0 text-content-subtle"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
