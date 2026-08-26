import type { IconKey } from '@/types';

export interface Interest {
  label: string;
  icon: IconKey;
}

/**
 * About section copy. Written in the first person and kept honest:
 * a student developer who builds and teaches, not a senior engineer.
 */
export const about = {
  eyebrow: 'About',
  title: 'A developer who loves to teach',
  paragraphs: [
    "I'm studying Information Technology Education at USTED-Kumasi, currently in Level 400. The programme sits between the two things I care about most: building software, and helping other people understand it.",
    'Most of what I know, I learned by building. Management systems, mobile apps, small tools for problems I ran into on campus — each project taught me something the lecture notes could not, usually by breaking first.',
    "I'm still learning, and I'd rather say that plainly. What I can offer is a student developer who ships practical projects, reads the documentation, and then explains what he found to whoever needs it next.",
  ],
  /** A short, factual line for the panel beside the photo. */
  highlight: {
    title: 'Learning in public',
    body: 'Everything here is work in progress, written down as I go — the projects, the notes, and the explanations I give other students.',
  },
  cta: {
    label: 'More about me',
    /** Points at the journey timeline for now. Change to '/about' when that page exists. */
    href: '#journey',
  },
  interests: [
    { label: 'Programming', icon: 'code' },
    { label: 'Software development', icon: 'boxes' },
    { label: 'Educational technology', icon: 'graduationCap' },
    { label: 'Web applications', icon: 'globe' },
    { label: 'Mobile applications', icon: 'smartphone' },
    { label: 'Database systems', icon: 'database' },
    { label: 'UI/UX design', icon: 'penTool' },
    { label: 'Teaching and mentoring', icon: 'users' },
  ] satisfies Interest[],
} as const;
