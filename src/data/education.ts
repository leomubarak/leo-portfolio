export interface EducationEntry {
  id: string;
  qualification: string;
  institution: string;
  /** Where you are in it, e.g. 'Level 300 · in progress'. */
  status: string;
  /** Optional years. Left out rather than guessed. */
  period?: string;
  summary: string;
  focusAreas: string[];
  /** Marks the entry as ongoing — renders a live dot instead of a filled one. */
  current?: boolean;
}

export const education: EducationEntry[] = [
  {
    id: 'bsc-ite',
    qualification: 'BSc Information Technology Education',
    institution: 'USTED-Kumasi',
    status: 'Level 400 · in progress',
    summary:
      'A programme that pairs the technical side of information technology with the practice of teaching it — so the work is never only about making software run, but also about making it understood.',
    focusAreas: [
      'Information technology',
      'Programming',
      'Software development',
      'Education',
      'Teaching methodology',
      'Educational technology',
    ],
    current: true,
  },

  /* Add earlier schooling here when you want it on the site, e.g.:
  {
    id: 'shs',
    qualification: 'WASSCE — General Science',
    institution: 'Your school',
    status: 'Completed',
    period: '2018 — 2021',
    summary: 'One or two honest sentences.',
    focusAreas: ['Elective ICT', 'Mathematics'],
  },
  */
];
