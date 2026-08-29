import { projects } from './projects';
import { skillCategories } from './skills';

/**
 * Every figure here is counted from the site's own data at build time —
 * nothing is typed in by hand. Trimmed to three stats since the fourth
 * (catch-up topics) no longer exists after removing the teaching section.
 */
const uniqueTechnologies = new Set(
  projects.flatMap((project) => project.technologies.map((tech) => tech.toLowerCase())),
);

export interface Stat {
  value: number;
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
    description: 'From core programming through to tools and UI/UX.',
  },
];
