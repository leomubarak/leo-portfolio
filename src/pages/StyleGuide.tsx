import { ArrowRight, Download, Github, Sparkles } from 'lucide-react';
import { Button, Card, Reveal, Section, SectionHeading, Tag } from '@/components/ui';
import type { ButtonSize, ButtonVariant } from '@/components/ui';
import type { SkillLevel } from '@/types';
import { Seo } from '@/components/Seo';

const semanticColors = [
  { token: 'surface', className: 'bg-surface', note: 'page background' },
  {
    token: 'surface-raised',
    className: 'bg-surface-raised',
    note: 'cards, navbar',
  },
  {
    token: 'surface-sunken',
    className: 'bg-surface-sunken',
    note: 'tinted bands, chips',
  },
  { token: 'content', className: 'bg-content', note: 'headings, body' },
  {
    token: 'content-muted',
    className: 'bg-content-muted',
    note: 'supporting text',
  },
  {
    token: 'content-subtle',
    className: 'bg-content-subtle',
    note: 'labels, meta',
  },
  { token: 'line', className: 'bg-line', note: 'default borders' },
  {
    token: 'line-strong',
    className: 'bg-line-strong',
    note: 'hover, dividers',
  },
  { token: 'accent', className: 'bg-accent', note: 'primary actions' },
  { token: 'accent-soft', className: 'bg-accent-soft', note: 'accent chips' },
];

const typeScale = [
  { name: 'text-display-xl', className: 'text-display-xl', sample: 'Learn.' },
  { name: 'text-display-lg', className: 'text-display-lg', sample: 'Build.' },
  { name: 'text-display-md', className: 'text-display-md', sample: 'Teach.' },
  { name: 'text-display-sm', className: 'text-display-sm', sample: 'Create.' },
];

const buttonVariants: ButtonVariant[] = ['primary', 'secondary', 'ghost', 'link'];
const buttonSizes: ButtonSize[] = ['sm', 'md', 'lg'];

const skillLevels: SkillLevel[] = ['Learning', 'Familiar', 'Developing', 'Intermediate'];

export function StyleGuide() {
  return (
    <>
      <main id="main" className="pt-20">
        <Seo title="Design system" noIndex description="Internal reference page." />
        <h1 className="sr-only">Design system reference</h1>
        <Section id="type">
          <SectionHeading
            id="type"
            eyebrow="Phase 2"
            title="Design system"
            description="Every section built from here uses these pieces. Toggle the theme and resize the window — nothing below is hard-coded to one mode or one breakpoint."
            action={
              <Button to="/" variant="secondary">
                Back to home
                <ArrowRight aria-hidden="true" />
              </Button>
            }
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-[2fr_1fr]">
            <Card padding="lg">
              <p className="eyebrow">Display scale · Bricolage Grotesque</p>
              <ul className="mt-6 space-y-6">
                {typeScale.map((step) => (
                  <li key={step.name} className="border-b border-line pb-5 last:border-0 last:pb-0">
                    <span className={`block font-display font-semibold ${step.className}`}>
                      {step.sample}
                    </span>
                    <span className="mt-2 block font-mono text-xs text-content-subtle">
                      {step.name} · fluid, no responsive variants needed
                    </span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card padding="lg">
              <p className="eyebrow">Body &amp; mono</p>
              <p className="mt-5 text-lg leading-relaxed text-content">
                Body text sits in Geist at a comfortable measure, around 65 characters per line.
              </p>
              <p className="mt-4 text-base leading-relaxed text-content-muted">
                Supporting copy drops to <code className="font-mono text-sm">content-muted</code> so
                hierarchy comes from weight and colour rather than size alone.
              </p>
              <p className="mt-4 font-mono text-sm text-content-subtle">
                JetBrains Mono — labels, code, dates.
              </p>
            </Card>
          </div>
        </Section>

        <Section id="color" tone="sunken">
          <SectionHeading
            id="color"
            eyebrow="Colour"
            title="Semantic tokens only"
            description="Components never reference moss-600 or ink-900 directly. They ask for a role, and the theme decides the value."
          />
          <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {semanticColors.map((color) => (
              <li key={color.token}>
                <span
                  className={`block h-16 rounded-xl border border-line-strong ${color.className}`}
                  aria-hidden="true"
                />
                <span className="mt-2 block font-mono text-[11px] text-content">{color.token}</span>
                <span className="block text-xs text-content-subtle">{color.note}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="buttons">
          <SectionHeading
            id="buttons"
            eyebrow="Controls"
            title="One button, four jobs"
            description="Primary carries the accent and appears once per view. Everything else stays quiet. Labels say what happens; icons only sit alongside them."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Card padding="lg">
              <p className="eyebrow">Variants</p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                {buttonVariants.map((variant) => (
                  <Button key={variant} variant={variant}>
                    {variant === 'link' ? 'Read the case study' : `${variant} action`}
                  </Button>
                ))}
              </div>
            </Card>

            <Card padding="lg">
              <p className="eyebrow">Sizes</p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                {buttonSizes.map((size) => (
                  <Button key={size} size={size} variant="secondary">
                    Size {size}
                  </Button>
                ))}
              </div>
            </Card>

            <Card padding="lg">
              <p className="eyebrow">With icons</p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Button href="#buttons">
                  View my projects
                  <ArrowRight aria-hidden="true" />
                </Button>
                <Button variant="secondary" href="#buttons">
                  <Github aria-hidden="true" />
                  Source code
                </Button>
                <Button variant="ghost" href="#buttons">
                  <Download aria-hidden="true" />
                  Download CV
                </Button>
              </div>
            </Card>

            <Card padding="lg">
              <p className="eyebrow">States</p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Button disabled>Sending…</Button>
                <Button variant="secondary" disabled>
                  Unavailable
                </Button>
                <Button fullWidth variant="secondary" className="mt-2">
                  Full width — used in the mobile menu and contact form
                </Button>
              </div>
            </Card>
          </div>
        </Section>

        <Section id="surfaces" tone="sunken">
          <SectionHeading
            id="surfaces"
            eyebrow="Surfaces"
            title="Cards and chips"
            description="Four card tones cover every slot on the site, including the ones waiting for your real content."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <p className="font-display text-base font-semibold">Raised</p>
              <p className="mt-2 text-sm text-content-muted">
                Default card. Soft border, quiet shadow.
              </p>
            </Card>
            <Card tone="outline">
              <p className="font-display text-base font-semibold">Outline</p>
              <p className="mt-2 text-sm text-content-muted">
                For lists inside an already-raised panel.
              </p>
            </Card>
            <Card interactive>
              <p className="font-display text-base font-semibold">Interactive</p>
              <p className="mt-2 text-sm text-content-muted">
                Hover me. Project and article cards use this lift.
              </p>
            </Card>
            <Card tone="dashed">
              <p className="font-display text-base font-semibold text-content-muted">Empty</p>
              <p className="mt-2 text-sm text-content-subtle">
                Placeholder tone. Testimonials sit here until real ones exist.
              </p>
            </Card>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Card padding="lg">
              <p className="eyebrow">Technology chips</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Tailwind CSS', 'Java', 'MySQL', 'Expo'].map((tech) => (
                  <li key={tech}>
                    <Tag>{tech}</Tag>
                  </li>
                ))}
              </ul>
            </Card>

            <Card padding="lg">
              <p className="eyebrow">Skill levels</p>
              <p className="mt-3 text-sm text-content-muted">
                Levels carry a dot as well as a colour, so the meaning survives for anyone who
                cannot separate the two.
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {skillLevels.map((level, index) => (
                  <li key={level}>
                    <Tag dot tone={index === skillLevels.length - 1 ? 'accent' : 'outline'}>
                      {level}
                    </Tag>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Section>

        <Section id="motion">
          <SectionHeading
            id="motion"
            eyebrow="Motion"
            title="Reveal on scroll, once"
            description="Sections fade up 20px as they enter and then stay put. With reduced motion switched on in your OS, the wrapper renders plain content instead."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[0, 0.08, 0.16].map((delay) => (
              <Reveal key={delay} delay={delay}>
                <Card padding="lg">
                  <Sparkles className="size-5 text-accent" aria-hidden="true" />
                  <p className="mt-4 font-display text-base font-semibold">Delay {delay}s</p>
                  <p className="mt-2 text-sm text-content-muted">
                    Staggering a row by 80ms reads as one movement rather than three.
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>
      </main>
    </>
  );
}
