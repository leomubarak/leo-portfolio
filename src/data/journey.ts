export interface JourneyMilestone {
  id: string;
  title: string;
  description: string;
  /** Optional period label. Left undefined until you confirm real dates. */
  period?: string;
  tags?: string[];
  /** The stage you are in now. */
  current?: boolean;
}

/**
 * A learning story, in order. No employment, no clients, no dates that have
 * not been confirmed — only what has actually happened so far.
 */
export const journey: JourneyMilestone[] = [
  {
    id: 'academic',
    title: 'Started Information Technology Education',
    description:
      'Began the programme at USTED-Kumasi and found that the technology side pulled hardest. Programming turned from a course requirement into the thing I wanted to spend time on.',
    tags: ['USTED-Kumasi', 'IT Education'],
  },
  {
    id: 'programming',
    title: 'Learning to program',
    description:
      'Worked through programming languages one at a time and started writing small applications instead of only exercises — the point where reading code became writing it.',
    tags: ['Python', 'Java', 'JavaScript'],
  },
  {
    id: 'web',
    title: 'Building for the web',
    description:
      'Moved on to websites and management systems: pages that talk to a database, forms that validate, records that persist. The first time a project had users other than me.',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
  },
  {
    id: 'applications',
    title: 'Desktop and mobile applications',
    description:
      'Built desktop software with Java and Java Swing, then crossed over to mobile with React Native and Expo — two very different ways of thinking about the same problem.',
    tags: ['Java', 'Java Swing', 'React', 'React Native', 'Expo'],
  },
  {
    id: 'edtech',
    title: 'Teaching what I learn',
    description:
      'Started making programming tutorials, notes and catch-up materials for other students. Explaining a concept is the fastest way to find out whether I actually understand it.',
    tags: ['Tutorials', 'Notes', 'Catch-up classes'],
  },
  {
    id: 'current',
    title: 'Where I am now',
    description:
      'Working on larger projects and deepening the parts I know least: full-stack development, mobile, UI/UX, database design, and educational technology.',
    tags: ['Full-stack', 'Mobile', 'UI/UX', 'Databases', 'EdTech'],
    current: true,
  },
];
