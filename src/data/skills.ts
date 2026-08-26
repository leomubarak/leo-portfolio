import type { IconKey, SkillLevel } from '@/types';

export interface Skill {
  name: string;
  level: SkillLevel;
  /** Optional one-liner shown under the name. Keep it short and true. */
  note?: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  description: string;
  icon: IconKey;
  skills: Skill[];
}

/**
 * What each label means. Stated on the page so the levels are not left to
 * interpretation — and so nothing here reads as a claim of expertise.
 */
export const skillLevelMeta: Record<SkillLevel, { order: number; meaning: string }> = {
  Learning: { order: 1, meaning: 'Started recently, still following guides' },
  Familiar: { order: 2, meaning: 'Have used it, reach for the docs often' },
  Developing: { order: 3, meaning: 'Build with it regularly, still improving' },
  Intermediate: { order: 4, meaning: 'Comfortable working without help' },
};

/** Highest level used anywhere on the site. Kept deliberately at Intermediate. */
export const MAX_SKILL_STEPS = 4;

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    label: 'Programming',
    description:
      'The languages I write in, in rough order of how much time I have spent with each.',
    icon: 'code',
    skills: [
      { name: 'Python', level: 'Developing' },
      {
        name: 'Java',
        level: 'Developing',
        note: 'Desktop applications with Swing',
      },
      { name: 'JavaScript', level: 'Developing' },
      { name: 'HTML', level: 'Intermediate' },
      { name: 'CSS', level: 'Intermediate' },
      { name: 'PHP', level: 'Familiar' },
    ],
  },
  {
    id: 'web',
    label: 'Web development',
    description:
      'Front-end work, plus the server-side side of the management systems I have built.',
    icon: 'globe',
    skills: [
      { name: 'React', level: 'Developing' },
      { name: 'JavaScript', level: 'Developing' },
      { name: 'HTML5', level: 'Intermediate' },
      { name: 'CSS3', level: 'Intermediate' },
      { name: 'Tailwind CSS', level: 'Familiar' },
      {
        name: 'PHP',
        level: 'Familiar',
        note: 'Server-side for database-driven sites',
      },
    ],
  },
  {
    id: 'mobile',
    label: 'Mobile development',
    description: 'The newest area for me, and the one I am putting the most time into right now.',
    icon: 'smartphone',
    skills: [
      { name: 'React Native', level: 'Developing' },
      { name: 'Expo Go', level: 'Familiar' },
    ],
  },
  {
    id: 'databases',
    label: 'Databases',
    description: 'Designing tables and relationships for the systems I build, then querying them.',
    icon: 'database',
    skills: [
      { name: 'MySQL', level: 'Developing' },
      { name: 'PostgreSQL', level: 'Learning' },
    ],
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
      { name: 'Figma', level: 'Familiar' },
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
      { name: 'Educational technology', level: 'Developing' },
      { name: 'Database design', level: 'Familiar' },
      { name: 'System analysis', level: 'Familiar' },
      { name: 'Technical documentation', level: 'Familiar' },
    ],
  },
];
