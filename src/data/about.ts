import type { IconKey } from '@/types';

export interface Interest {
  label: string;
  icon: IconKey;
}

export const about = {
  eyebrow: 'About',
  title: 'A Full-Stack Web Developer',
  paragraphs: [
    "I'm Mubarak Mohammed Ali, known as Leo. I\u2019m a passionate full-stack web developer focused on building modern, practical websites and web applications that solve real-world problems and deliver meaningful experiences for the people who use them.",
    'Most of what I know, I learned by building. CampusStay, Chichi\u2019s Kitchen, and this portfolio itself each taught me something a lecture could not, usually by breaking first and forcing me to understand why.',
    "I'm still improving, reading documentation, picking up new tools, and refining how I write and structure code. What I can offer is a developer who ships practical projects and keeps learning in public.",
  ],
  highlight: {
    title: 'Building in public',
    body: 'Everything here is a real, working project. CampusStay, Chichi\u2019s Kitchen, and this site are all things I designed and built myself.',
  },
  cta: {
    label: 'More about me',
    href: '#journey',
  },
  interests: [
    { label: 'Web development', icon: 'globe' },
    { label: 'Frontend development', icon: 'code' },
    { label: 'Responsive web design', icon: 'smartphone' },
    { label: 'Software development', icon: 'boxes' },
    { label: 'Database systems', icon: 'database' },
    { label: 'UI/UX design', icon: 'penTool' },
    { label: 'Modern web technologies', icon: 'wrench' },
    { label: 'Information Technology Education', icon: 'graduationCap' },
  ] satisfies Interest[],
} as const;
