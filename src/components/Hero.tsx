import { motion } from 'framer-motion';
import { ArrowRight, Download, GraduationCap } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SocialLinks } from '@/components/layout/SocialLinks';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { siteConfig } from '@/data/site';
import { easing, duration } from '@/lib/motion';

const { hero, images } = siteConfig;

/** The three verbs the whole portfolio is organised around. */
const pillars = ['Learn', 'Build', 'Teach'];

export function Hero() {
  const reducedMotion = usePrefersReducedMotion();

  // One orchestrated entrance rather than several competing ones.
  const rise = (delay: number) =>
    reducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: duration.slow, ease: easing.soft, delay },
        };

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Ambient wash behind the portrait side. Decorative only. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 -z-10 h-[36rem] w-[36rem] translate-x-1/4 -translate-y-1/4 rounded-full bg-accent-soft blur-3xl"
      />

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* --- Copy ------------------------------------------------------ */}
          <div>
            <motion.p {...rise(0)} className="eyebrow">
              {hero.eyebrow}
            </motion.p>

            <motion.h1
              {...rise(0.06)}
              className="mt-5 text-display-xl font-semibold text-balance text-content"
            >
              {hero.headline} <span className="text-accent">{hero.headlineAccent}</span>{' '}
              {hero.headlineEnd}
            </motion.h1>

            <motion.p
              {...rise(0.12)}
              className="mt-6 max-w-xl text-base leading-relaxed text-content-muted sm:text-lg"
            >
              {hero.subline}
            </motion.p>

            <motion.div {...rise(0.18)} className="mt-9 flex flex-wrap items-center gap-3">
              <Button href={hero.primaryCta.href} size="lg">
                {hero.primaryCta.label}
                <ArrowRight aria-hidden="true" />
              </Button>
              <Button href={hero.secondaryCta.href} size="lg" variant="secondary">
                {hero.secondaryCta.label}
              </Button>
              {/* Appears once you add a CV to public/ and set hero.resumeUrl. */}
              {hero.resumeUrl && (
                <Button href={hero.resumeUrl} size="lg" variant="ghost" download>
                  <Download aria-hidden="true" />
                  Download CV
                </Button>
              )}
            </motion.div>

            <motion.div {...rise(0.24)} className="mt-10">
              <SocialLinks size="sm" />
            </motion.div>

            {/* Signature line: the three verbs, set in mono and divided. */}
            <motion.ul
              {...rise(0.3)}
              className="mt-10 flex items-center gap-4 border-t border-line pt-6 font-mono text-xs tracking-[0.18em] text-content-subtle uppercase sm:gap-6"
            >
              {pillars.map((pillar, index) => (
                <li key={pillar} className="flex items-center gap-4 sm:gap-6">
                  {pillar}
                  {index < pillars.length - 1 && (
                    <span className="h-3 w-px bg-line-strong" aria-hidden="true" />
                  )}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* --- Portrait -------------------------------------------------- */}
          <motion.div
            initial={reducedMotion ? undefined : { opacity: 0, scale: 0.97 }}
            animate={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{
              duration: duration.slow,
              ease: easing.soft,
              delay: 0.1,
            }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="relative overflow-hidden rounded-panel border border-line bg-gradient-to-b from-accent-soft to-surface-sunken">
              {/* Faint grid — a nod to layout tooling, kept very quiet. */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,var(--line)_1px,transparent_1px),linear-gradient(to_bottom,var(--line)_1px,transparent_1px)] [background-size:32px_32px]"
              />
              <img
                src={images.portrait}
                alt="Leo, wearing a white shirt and red tie, standing with hands clasped"
                width={1024}
                height={1600}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="relative mx-auto block h-auto w-full max-w-sm object-contain lg:max-w-md"
              />
            </div>

            {/* Floating card: study status. Factual, from the data file. */}
            <motion.div
              animate={reducedMotion ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
              className="absolute -bottom-5 -left-2 flex items-center gap-3 rounded-card border border-line bg-surface-raised px-4 py-3 shadow-lifted sm:left-4"
            >
              <span className="flex size-9 items-center justify-center rounded-full bg-accent-soft text-accent">
                <GraduationCap size={18} aria-hidden="true" />
              </span>
              <span className="text-sm leading-tight">
                <span className="block font-medium text-content">BSc IT Education</span>
                <span className="block text-content-subtle">Level 300 · USTED-Kumasi</span>
              </span>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
