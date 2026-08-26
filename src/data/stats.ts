import { projects } from './projects';
import { skillCategories } from './skills';
import { teaching } from './teaching';

/**
 * Every figure here is counted from the site's own data at build time.
 * Nothing is typed in by hand, so a number can never drift away from what the
 * portfolio actually shows — and there is no way to inflate one by accident.
 * If you cannot count it from real data, it does not belong in this file.
 */
const uniqueTechnologies = new Set(
  projects.flatMap((project) => project.technologies.map((tech) => tech.toLowerCase())),
);

export interface Stat {
  value: number;
  /** Rendered after the number, e.g. '+'. Leave empty for exact counts. */
  suffix?: string;
  label: string;
  description: string;
}

export const stats: Stat[] = [
  {
    value: projects.length,
    label: 'Projects built',
    description: 'Each one written up as a case study, including what went wrong.',
  },
  {
    value: uniqueTechnologies.size,
    label: 'Technologies used',
    description: 'Counted across the projects on this site, not a wish list.',
  },
  {
    value: skillCategories.length,
    label: 'Skill areas',
    description: 'From programming languages through to database design.',
  },
  {
    value: teaching.catchUp.topics.length,
    label: 'Catch-up topics',
    description: 'Subjects I can sit down and work through with someone.',
  },
];
