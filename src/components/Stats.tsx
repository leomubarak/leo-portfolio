import { Container, Reveal } from '@/components/ui';
import { useCountUp } from '@/hooks/useCountUp';
import { stats } from '@/data/stats';
import type { Stat } from '@/data/stats';

export function Stats() {
  return (
    <section aria-label="Portfolio at a glance" className="border-y border-line bg-surface-sunken">
      <Container className="py-12 md:py-16">
        <ul className="grid gap-8 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <li key={stat.label}>
              <Reveal delay={index * 0.05}>
                <StatItem stat={stat} />
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function StatItem({ stat }: { stat: Stat }) {
  const { ref, value } = useCountUp(stat.value);
  return (
    <div>
      <p className="font-display text-display-md font-semibold text-accent">
        <span ref={ref}>{value}</span>
        {stat.suffix}
      </p>
      <p className="mt-1 font-medium text-content">{stat.label}</p>
      <p className="mt-2 text-sm leading-relaxed text-content-muted">{stat.description}</p>
    </div>
  );
}
