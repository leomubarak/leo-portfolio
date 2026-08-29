export type ProjectCategoryId = 'web' | 'mobile' | 'desktop' | 'educational';

export interface ProjectScreenshot {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectCaseStudy {
  overview: string;
  problem: string;
  solution: string;
  role: string;
  challenges: string[];
  learned: string[];
  futureImprovements: string[];
}

export interface Project {
  slug: string;
  name: string;
  category: string;
  categoryIds: ProjectCategoryId[];
  summary: string;
  technologies: string[];
  features: string[];
  cover: string;
  coverAlt: string;
  screenshots: ProjectScreenshot[];
  links: { github: string; demo: string };
  status?: string;
  featured?: boolean;
  caseStudy: ProjectCaseStudy;
}

export const projectCategories: { id: ProjectCategoryId | 'all'; label: string }[] = [
  { id: 'all', label: 'All projects' },
  { id: 'web', label: 'Web' },
];

export const projects: Project[] = [
  {
    slug: 'campus-stay',
    name: 'CampusStay',
    category: 'Student accommodation · web platform',
    categoryIds: ['web'],
    summary:
      'A platform that helps students discover and explore suitable accommodation options around their campus.',
    technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'Database'],
    features: [
      'Accommodation listings',
      'Room information and images',
      'Search',
      'Filtering',
      'Student-focused interface',
    ],
    cover: '/projects/campus-stay/screenshot-1.jpg',
    coverAlt: 'CampusStay homepage, hero section with search filters for hostel listings',
    screenshots: [
      {
        src: '/projects/campus-stay/screenshot-1.jpg',
        alt: 'CampusStay homepage showing the hero section, search filters, and listing counts',
      },
    ],
    links: { github: '', demo: 'https://campusstay-red.vercel.app/' },
    featured: true,
    caseStudy: {
      overview:
        'CampusStay brings student accommodation into one place: what is available near campus, what each room looks like, and what it costs — without depending on notice boards and word of mouth.',
      problem:
        'Finding a room near campus usually means asking around and relying on posters. Information is scattered, often out of date, and difficult to compare before visiting in person.',
      solution:
        'A listings platform built for students, presenting accommodation with room information and images. Search and filtering narrow the list down so a student can compare options before making the trip.',
      role: 'I designed and built the project myself, from the interface through to the data behind the listings.',
      challenges: [
        'Structuring accommodation data so search and filtering stay fast as listings grow.',
        'Handling room images without making pages slow on a weak connection.',
        'Designing an interface simple enough for a first-time visitor to use without instructions.',
      ],
      learned: [
        'How to plan a data model before writing interface code, instead of patching it afterwards.',
        'What it takes to make a layout genuinely responsive rather than just resized.',
        'That a feature is not finished until someone who is not me can use it without help.',
      ],
      futureImprovements: [
        'Verified listings, so students can trust what they see.',
        'Map view with distance from campus.',
        'Saved searches for returning visitors.',
      ],
    },
  },
  {
    slug: 'chichis-kitchen',
    name: "Chichi's Kitchen",
    category: 'Food · web project',
    categoryIds: ['web'],
    summary:
      'A food-focused web project built around menu presentation and a simple, clean digital experience for customers.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: ['Menu presentation', 'Responsive layout', 'Clean, simple customer experience'],
    cover: '/projects/chichis-kitchen/screenshot-1.jpg',
    coverAlt: "Chichi's Kitchen homepage — hero section with featured dishes",
    screenshots: [
      {
        src: '/projects/chichis-kitchen/screenshot-1.jpg',
        alt: "Chichi's Kitchen homepage showing the hero section and featured dishes",
      },
    ],
    links: { github: '', demo: 'https://chichis-kitchen-8ncw.vercel.app/' },
    caseStudy: {
      overview:
        "Chichi's Kitchen is a web project built around presenting a menu clearly and giving visitors a simple, pleasant way to browse it online.",
      problem:
        'A menu handed out on paper or shared as a photo is hard to browse and does not scale, it is the same experience whether someone is on a laptop or a phone, and updates mean reprinting.',
      solution:
        'A responsive web page that presents the menu clearly with a straightforward, uncluttered layout, so browsing food options feels easy on any device.',
      role: 'I designed and built the site.',
      challenges: [
        'Keeping the menu layout clean and readable at every screen size.',
        'Presenting food items in a way that feels inviting rather than like a plain list.',
      ],
      learned: [
        'How much a small amount of thoughtful spacing and typography changes how trustworthy a site feels.',
        'Building layouts that hold up from a small phone screen to a wide desktop window.',
      ],
      futureImprovements: [
        'Online ordering.',
        'A way for the owner to update the menu without editing code.',
      ],
    },
  },
  {
    slug: 'portfolio',
    name: 'My Portfolio',
    category: 'Personal website',
    categoryIds: ['web'],
    summary:
      'This site showcasing my skills, projects, background, and development journey as a web developer.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    features: [
      'Responsive design across mobile, tablet and desktop',
      'Light and dark themes',
      'Project case studies',
      'Contact form with validation',
    ],
    cover: '/projects/portfolio/screenshot-1.jpg',
    coverAlt: 'Portfolio homepage, hero section with name, role and photo',
    screenshots: [
      {
        src: '/projects/portfolio/screenshot-1.jpg',
        alt: 'Portfolio homepage showing the hero section with name, role, and introduction',
      },
    ],
    links: {
      github: 'https://github.com/leomubarak/leo-portfolio',
      demo: 'https://leo-portfolio-ruddy.vercel.app/',
    },
    status: 'Live',
    caseStudy: {
      overview:
        'My personal portfolio, built to bring my projects, skills and background together in one place for anyone who wants to see what I can build.',
      problem:
        'Without a central site, my projects only existed as scattered links, and there was no single place to point someone who asked what I actually build.',
      solution:
        'A React and TypeScript site with a component-based structure, content kept in dedicated data files so it can be updated without touching layout code, and a design system used consistently across every section.',
      role: 'I planned the structure and built the site.',
      challenges: [
        'Deciding what to include honestly, without inflating experience I do not have yet.',
        'Structuring content so it can be updated without editing components each time.',
        'Getting light and dark themes, animations and accessibility right across every section.',
      ],
      learned: [
        'How much cleaner a project stays when content and layout are properly separated.',
        'The value of a consistent design system instead of styling each section individually.',
        'How to plan a real deployment: environment variables, SEO metadata, and a working contact form.',
      ],
      futureImprovements: [
        'Real screenshots for each project as they become available.',
        'A connected contact form endpoint.',
        'More projects as they are built.',
      ],
    },
  },
];

export function getProjectBySlug(slug: string | undefined): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
