/**
 * ARTICLES — the knowledge hub on the home page and the /blog index.
 *
 * Everything below is `status: 'draft'`: these are planned pieces, not
 * published ones. Drafts render with a Draft label and are not clickable, so
 * the site never implies you have written something you have not.
 *
 * To publish one:
 *   1. set `status: 'published'`
 *   2. add a `date` (ISO, e.g. '2026-03-14') and a `readingMinutes`
 *   3. point `href` at wherever it lives — an external post today, or a
 *      Markdown/MDX route once you add one.
 */

export type ArticleStatus = 'draft' | 'published';

export type ArticleCategory =
  | 'Programming'
  | 'Web Development'
  | 'Mobile Development'
  | 'Educational Technology'
  | 'Student Projects'
  | 'Tutorials';

export interface Article {
  slug: string;
  title: string;
  category: ArticleCategory;
  description: string;
  cover: string;
  status: ArticleStatus;
  /** ISO date. Only set once the piece is actually published. */
  date?: string;
  readingMinutes?: number;
  /** Where the article lives. Empty for drafts. */
  href?: string;
}

export const articleCategories: ArticleCategory[] = [
  'Programming',
  'Web Development',
  'Mobile Development',
  'Educational Technology',
  'Student Projects',
  'Tutorials',
];

export const articles: Article[] = [
  {
    slug: 'getting-started-react-native-expo',
    title: 'Getting started with React Native and Expo',
    category: 'Mobile Development',
    description:
      'Setting up a first mobile project with Expo, running it on a real phone, and understanding what Expo handles for you.',
    cover: '/blog/covers/mobile-development.svg',
    status: 'draft',
  },
  {
    slug: 'first-management-system',
    title: 'How I built my first management system',
    category: 'Student Projects',
    description:
      'What went into the Debby Phones system — the tables, the screens, and the parts I had to rebuild once I understood the problem better.',
    cover: '/blog/covers/student-projects.svg',
    status: 'draft',
  },
  {
    slug: 'understanding-database-relationships',
    title: 'Understanding database relationships',
    category: 'Programming',
    description:
      'One-to-one, one-to-many and many-to-many, explained with the kind of examples that actually come up in student projects.',
    cover: '/blog/covers/programming.svg',
    status: 'draft',
  },
  {
    slug: 'introduction-to-python',
    title: 'Introduction to Python programming',
    category: 'Programming',
    description:
      'A starting point for anyone in first year: what to install, what to type first, and what the error messages are telling you.',
    cover: '/blog/covers/programming.svg',
    status: 'draft',
  },
  {
    slug: 'building-a-cgpa-calculator',
    title: 'Building a simple CGPA calculator',
    category: 'Tutorials',
    description:
      'Turning credit-weighted averages into working code, one step at a time — and checking the maths as we go.',
    cover: '/blog/covers/tutorials.svg',
    status: 'draft',
  },
  {
    slug: 'lessons-from-campus-stay',
    title: 'What I learned from building Campus Stay',
    category: 'Student Projects',
    description:
      'Notes from building for web and mobile at the same time, and what I would plan differently before writing any code.',
    cover: '/blog/covers/student-projects.svg',
    status: 'draft',
  },
];

export const publishedArticles = articles.filter((article) => article.status === 'published');

/** Newest first for published pieces; drafts keep their listed order behind them. */
export const sortedArticles = [...articles].sort((a, b) => {
  if (a.status !== b.status) return a.status === 'published' ? -1 : 1;
  if (a.date && b.date) return b.date.localeCompare(a.date);
  return 0;
});
