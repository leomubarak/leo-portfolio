import { motion } from 'framer-motion';
import { ArrowRight, Download, GraduationCap } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SocialLinks } from '@/components/layout/SocialLinks';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { siteConfig } from '@/data/site';
import { education } from '@/data/education';
import { easing, duration } from '@/lib/motion';

const { hero, images } = siteConfig;
const currentEducation = education[0];

export function Hero() {
  const reducedMotion = usePrefersReducedMotion();

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

            <motion.h1 {...rise(0.06)} className="mt-5 text-display-xl font-semibold text-balance text-content">
              {hero.headline} <span className="text-accent">{hero.headlineAccent}</span> {hero.headlineEnd}
            </motion.h1>

            <motion.p {...rise(0.12)} className="mt-6 max-w-xl text-base leading-relaxed text-content-muted sm:text-lg">
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

            <motion.p
              {...rise(0.3)}
              className="mt-10 border-t border-line pt-6 font-mono text-xs tracking-[0.18em] text-content-subtle uppercase"
            >
              {siteConfig.tagline}
            </motion.p>
          </div>

          {/* --- Profile picture ---------------------------------------------
              Reuses the existing studio photo as the hero profile picture,
              per request — no new or placeholder image introduced. */}
          <motion.div
            initial={reducedMotion ? undefined : { opacity: 0, scale: 0.97 }}
            animate={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: duration.slow, ease: easing.soft, delay: 0.1 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="relative overflow-hidden rounded-panel border border-line bg-surface-sunken">
              <img
                src={images.portrait}
                alt={`${siteConfig.fullName}, seated for a portrait photo`}
                width={1280}
                height={1600}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="aspect-4/5 w-full object-cover object-top"
              />
            </div>

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
                <span className="block text-content-subtle">{currentEducation.status} · USTED-Kumasi</span>
              </span>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
