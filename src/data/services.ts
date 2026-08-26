import type { IconKey } from '@/types';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: IconKey;
  /** Concrete things included, so the offer is not left vague. */
  includes: string[];
}

/**
 * Services are scoped to what a student developer can honestly deliver.
 * No agency language, no team, no service-level promises, no prices —
 * add a `price` field yourself only if you are certain you can hold to it.
 */
export const services: Service[] = [
  {
    id: 'web',
    title: 'Web development',
    description:
      'Simple, responsive websites and web applications — built to work properly on a phone first, because that is where most people will open them.',
    icon: 'globe',
    includes: ['Landing and multi-page sites', 'Responsive layouts', 'Contact and enquiry forms'],
  },
  {
    id: 'mobile',
    title: 'Mobile applications',
    description:
      'Beginner-friendly mobile apps with React Native and Expo, suited to straightforward ideas rather than large production systems.',
    icon: 'smartphone',
    includes: ['React Native with Expo', 'Runs on Android and iOS', 'Simple, focused screens'],
  },
  {
    id: 'edtech',
    title: 'Educational technology',
    description:
      'Digital tools and learning resources for students and teachers — calculators, practice tools, and material that explains as well as works.',
    icon: 'graduationCap',
    includes: ['Learning tools and calculators', 'Course resources', 'Practical worked examples'],
  },
  {
    id: 'database',
    title: 'Database applications',
    description:
      'Small database-driven applications: records that need storing, searching and reporting without a spreadsheet holding everything together.',
    icon: 'database',
    includes: ['Schema design', 'CRUD and search', 'Basic reporting'],
  },
  {
    id: 'support',
    title: 'Programming support',
    description:
      'Help understanding programming concepts and working through practical coding tasks — walking through the reasoning, not handing over an answer.',
    icon: 'lifeBuoy',
    includes: ['Concept explanations', 'Debugging together', 'Coursework and project guidance'],
  },
];

/**
 * Sets expectations before someone writes. Being clear about what does not
 * suit me is more useful to both sides than claiming everything does.
 */
export const serviceScope = {
  note: 'I am a student, so I take on work that fits around coursework. That means small, well-defined projects where I can do a careful job — and being upfront when something is beyond what I can commit to.',
  goodFit: [
    'Small projects with a clear scope',
    'Student and campus tools',
    'Learning resources and educational tools',
    'A first version of an idea you want to test',
  ],
  notYet: [
    'Large production systems with uptime guarantees',
    'Work with tight commercial deadlines',
    'Anything needing a team rather than one person',
  ],
  cta: { label: 'Tell me what you need', href: '#contact' },
};
