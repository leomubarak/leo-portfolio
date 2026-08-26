import type { IconKey } from '@/types';

export interface TeachingOffering {
  title: string;
  description: string;
  icon: IconKey;
}

/**
 * The teaching side of the portfolio.
 *
 * Scheduling is deliberately configurable: `sessions` is empty, so the page
 * shows the arrangement note instead of dates. Add entries when a session is
 * actually confirmed, and remove them once it has passed.
 */
export const teaching = {
  eyebrow: 'Teaching',
  title: 'Technology is better when it is shared',
  intro:
    'Explaining something is how I find out whether I really understand it. So I write notes, record explanations, and sit with people who are stuck — mostly other students working through the same courses I am.',
  offerings: [
    {
      title: 'Programming tutorials',
      description: 'Step-by-step walkthroughs of the topics students get stuck on most often.',
      icon: 'presentation',
    },
    {
      title: 'Catch-up classes',
      description:
        'Sessions for anyone who missed a lecture or needs the explanation a second way.',
      icon: 'listChecks',
    },
    {
      title: 'Learning resources',
      description: 'Notes and summaries that stay available after the session has ended.',
      icon: 'bookOpen',
    },
    {
      title: 'Practical coding examples',
      description: 'Small working programs, because a concept lands faster when you can run it.',
      icon: 'code',
    },
    {
      title: 'Student support',
      description: 'Help with coursework and projects — where the problem is, not just the fix.',
      icon: 'lifeBuoy',
    },
    {
      title: 'Programming explanations',
      description: 'Plain-language answers to the questions people are afraid to ask in class.',
      icon: 'messageSquare',
    },
  ] satisfies TeachingOffering[],

  catchUp: {
    title: 'Catch-up classes',
    description:
      'Sessions built around what people actually missed. Bring the topic you did not follow the first time and we work through it until it makes sense.',
    topics: ['Computational Mathematics', 'Python Programming', 'HTML & CSS', 'Java Programming'],
    /** Shown when no dated sessions are listed. */
    scheduleNote:
      'Sessions are arranged around the semester timetable. Get in touch to ask about the next one or to suggest a topic.',
    /** Add confirmed sessions here, e.g. { topic: 'Python Programming', when: 'Saturdays, 4pm' }. */
    sessions: [] as { topic: string; when: string; where?: string }[],
    cta: { label: 'Ask about a session', href: '#contact' },
  },
} as const;
