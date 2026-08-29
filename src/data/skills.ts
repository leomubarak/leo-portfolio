import type { IconKey, SkillLevel } from '@/types';

export interface Skill {
  name: string;
  level: SkillLevel;
  note?: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  description: string;
  icon: IconKey;
  skills: Skill[];
}

export const skillLevelMeta: Record<SkillLevel, { order: number; meaning: string }> = {
  Learning: { order: 1, meaning: 'Started recently, still following guides' },
  Familiar: { order: 2, meaning: 'Have used it, reach for the docs often' },
  Developing: { order: 3, meaning: 'Build with it regularly, still improving' },
  Intermediate: { order: 4, meaning: 'Comfortable working without help' },
};

export const MAX_SKILL_STEPS = 4;

/**
 * Trimmed to technologies actually used across the existing projects and
 * this site — no claim of expertise beyond what has actually been built.
 */
export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    label: 'Programming',
    description: 'The core languages behind everything I build for the web.',
    icon: 'code',
    skills: [
      { name: 'JavaScript', level: 'Developing' },
      { name: 'HTML', level: 'Intermediate' },
      { name: 'CSS', level: 'Intermediate' },
      { name: 'PHP', level: 'Familiar' },
    ],
  },
  {
    id: 'web',
    label: 'Web development',
    description: 'Building and styling interfaces, from a single page to a full application.',
    icon: 'globe',
    skills: [
      { name: 'React', level: 'Developing' },
      { name: 'HTML5', level: 'Intermediate' },
      { name: 'CSS3', level: 'Intermediate' },
      { name: 'Tailwind CSS', level: 'Familiar' },
      { name: 'Responsive web design', level: 'Developing' },
    ],
  },
  {
    id: 'databases',
    label: 'Databases',
    description: 'Storing and querying the data behind database-driven sites.',
    icon: 'database',
    skills: [{ name: 'MySQL', level: 'Developing' }],
  },
  {
    id: 'tools',
    label: 'Tools',
    description: 'What the day-to-day work actually happens in.',
    icon: 'wrench',
    skills: [
      { name: 'VS Code', level: 'Intermediate' },
      { name: 'Git', level: 'Familiar' },
      { name: 'GitHub', level: 'Familiar' },
      { name: 'Vercel', level: 'Familiar' },
    ],
  },
  {
    id: 'other',
    label: 'Other',
    description: 'Skills that sit around the code rather than inside it.',
    icon: 'penTool',
    skills: [
      { name: 'UI/UX design', level: 'Familiar' },
      { name: 'Web application development', level: 'Developing' },
    ],
  },
];
