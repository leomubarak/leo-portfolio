export interface JourneyMilestone {
  id: string;
  title: string;
  description: string;
  period?: string;
  tags?: string[];
  current?: boolean;
}

export const journey: JourneyMilestone[] = [
  {
    id: 'academic',
    title: 'Started Information Technology Education',
    description:
      'Began the programme at USTED-Kumasi. The technology side pulled hardest, and programming turned from a course requirement into the thing I wanted to spend time on.',
    tags: ['USTED-Kumasi', 'IT Education'],
  },
  {
    id: 'programming',
    title: 'Learning to program',
    description:
      'Worked through programming fundamentals and started writing small applications instead of only exercises, the point where reading code became writing it.',
    tags: ['JavaScript', 'HTML', 'CSS', 'PHP'],
  },
  {
    id: 'web',
    title: 'Building for the web',
    description:
      'Moved on to real websites and database-driven pages: forms that validate, records that persist, layouts that work on a phone as well as a laptop.',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
  },
  {
    id: 'frameworks',
    title: 'Working with React',
    description:
      'Picked up React and modern frontend tooling, and started building interfaces as components instead of one long page in a different way of thinking about the same problem.',
    tags: ['React', 'Tailwind CSS', 'Vite'],
  },
  {
    id: 'projects',
    title: 'Building real projects',
    description:
      'Put it together into actual projects: CampusStay for student accommodation, Chichi\u2019s Kitchen as a food-focused web project, and this portfolio to bring the work together in one place.',
    tags: ['CampusStay', "Chichi's Kitchen", 'Portfolio'],
  },
  {
    id: 'current',
    title: 'Where I am now',
    description:
      'Level 400, focused on deepening my web development skills in React, responsive design, and building applications that are genuinely useful rather than just functional.',
    tags: ['Web Development', 'React', 'UI/UX'],
    current: true,
  },
];
