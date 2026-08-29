export interface EducationEntry {
  id: string;
  qualification: string;
  institution: string;
  status: string;
  period?: string;
  summary: string;
  focusAreas: string[];
  current?: boolean;
}

export const education: EducationEntry[] = [
  {
    id: 'bsc-ite',
    qualification: 'BSc Information Technology Education',
    institution: 'USTED-Kumasi',
    status: 'Level 400 · in progress',
    summary:
      'A programme that pairs information technology with the practice of teaching it. My own focus within it has shifted toward web development — building real websites and applications alongside the coursework.',
    focusAreas: [
      'Information technology',
      'Programming',
      'Software development',
      'Web development',
      'Education',
      'Educational technology',
    ],
    current: true,
  },
];
