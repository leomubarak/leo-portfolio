/**
 * PROJECT DATA
 *
 * Read the case-study text before you publish. It was drafted from the notes
 * you provided — the technologies, features and purpose are yours, but the
 * wording around problem, challenges and lessons is a starting point you
 * should correct so it matches what actually happened.
 *
 * Rules kept here on purpose:
 * - No invented URLs. `github` and `demo` are empty strings until you add real
 *   ones, and the buttons stay hidden while they are empty.
 * - No user counts, download numbers, revenue or client names.
 * - Status is only claimed where you confirmed it.
 */

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
  /** Human-readable category shown on the card. */
  category: string;
  /** Ids used by the filter. A project can belong to more than one. */
  categoryIds: ProjectCategoryId[];
  /** One line for the card. */
  summary: string;
  technologies: string[];
  features: string[];
  cover: string;
  coverAlt: string;
  screenshots: ProjectScreenshot[];
  links: {
    /** Leave empty until the repository is public. */
    github: string;
    /** Leave empty if there is nothing deployed. */
    demo: string;
  };
  /** Optional, and only where you have confirmed it. */
  status?: string;
  featured?: boolean;
  caseStudy: ProjectCaseStudy;
}

export const projectCategories: {
  id: ProjectCategoryId | 'all';
  label: string;
}[] = [
  { id: 'all', label: 'All projects' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'desktop', label: 'Desktop' },
  { id: 'educational', label: 'Educational' },
];

export const projects: Project[] = [
  /* ------------------------------------------------------------------ 1 */
  {
    slug: 'campus-stay',
    name: 'Campus Stay',
    category: 'Student accommodation · mobile & web',
    categoryIds: ['mobile', 'web'],
    summary:
      'A platform that helps students find accommodation around their campus, with listings, room details and search.',
    technologies: ['React', 'React Native', 'Expo', 'JavaScript', 'HTML', 'CSS', 'Database'],
    features: [
      'Accommodation listings',
      'Room information and images',
      'Search',
      'Filtering',
      'Property management',
      'Student-focused interface',
    ],
    cover: '/projects/campus-stay/cover.svg',
    coverAlt: 'Campus Stay project cover',
    screenshots: [],
    links: {
      github: '',
      demo: 'https://campusstay-red.vercel.app/',
    },
    featured: true,
    caseStudy: {
      overview:
        'Campus Stay brings student accommodation into one place: what is available near campus, what each room looks like, and what it costs — without depending on notice boards and word of mouth.',
      problem:
        'Finding a room near campus usually means asking around, walking between hostels and relying on posters. Information is scattered, often out of date, and difficult to compare before you arrive in person.',
      solution:
        'A listings platform built for students. Accommodation is presented with room information and images, and search and filtering narrow the list down, so a student can compare options before making the trip. Property owners have a management side for keeping their listings current.',
      role: 'I designed and built the project myself, from the interface through to the data structure behind the listings.',
      challenges: [
        'Keeping the same experience coherent across a web app and a mobile app built with React Native and Expo.',
        'Structuring accommodation data so that search and filtering stay fast as listings grow.',
        'Handling room images without making pages slow on a weak mobile connection.',
      ],
      learned: [
        'How to plan a data model before writing interface code, instead of patching it afterwards.',
        'The difference between building for a browser and building for a phone, even when sharing React concepts.',
        'That a feature is not finished until someone who is not me can use it without instructions.',
      ],
      futureImprovements: [
        'Verified listings, so students can trust what they see.',
        'Map view with distance from campus.',
        'Saved searches and notifications when a matching room appears.',
      ],
    },
  },

  /* ------------------------------------------------------------------ 2 */
  {
    slug: 'debby-phones',
    name: 'Debby Phones Management System',
    category: 'Desktop management system',
    categoryIds: ['desktop'],
    summary:
      'A phone shop system covering inventory, customers, employees, sales, repairs, suppliers and payments.',
    technologies: ['Java', 'Java Swing', 'MySQL'],
    features: [
      'Login authentication',
      'Role-based access',
      'Product management',
      'Customer management',
      'Employee management',
      'Inventory',
      'Sales',
      'Payments',
      'Suppliers',
      'Repairs',
      'Reports',
    ],
    cover: '/projects/debby-phones/cover.svg',
    coverAlt: 'Debby Phones Management System project cover',
    screenshots: [],
    links: { github: '', demo: '' },
    featured: true,
    caseStudy: {
      overview:
        'A desktop application for running a phone shop: stock, sales, repairs, customers, suppliers and the people who work there, held in one system instead of separate books.',
      problem:
        'A phone shop tracks a lot at once — what is in stock, what sold, who bought it, what is in for repair, and what is owed to suppliers. Kept on paper or in separate spreadsheets, those records drift apart and reporting becomes guesswork.',
      solution:
        'A Java Swing application backed by MySQL, with login authentication and role-based access so staff and management see different things. Each area — products, customers, employees, sales, payments, suppliers, repairs — reads from the same database, and reports are generated from that single source.',
      role: 'I built the system end to end: database schema, the Swing interface, and the logic connecting them.',
      challenges: [
        'Designing a schema where sales, repairs, suppliers and payments relate correctly without duplicating records.',
        'Making role-based access genuinely restrict what each role can reach, rather than only hiding buttons.',
        'Keeping a desktop interface with this many screens navigable rather than overwhelming.',
      ],
      learned: [
        'Relational database design, and how much of an application depends on getting the tables right first.',
        'Why authentication and authorisation are two separate problems.',
        'How to break a large system into modules that can be built and tested one at a time.',
      ],
      futureImprovements: [
        'Receipt printing and barcode support for faster checkout.',
        'Automatic low-stock alerts.',
        'Backup and restore built into the application.',
      ],
    },
  },

  /* ------------------------------------------------------------------ 3 */
  {
    slug: 'department-management',
    name: 'Department Management System',
    category: 'Academic management system',
    categoryIds: ['web', 'desktop'],
    summary:
      'A system for managing student information and departmental records digitally, holding only the fields the department actually needs.',
    technologies: ['Database design', 'System analysis'],
    features: [
      'Student records',
      'Programme and level tracking',
      'Index number lookup',
      'DEUS status',
      'Departmental record keeping',
      'Minimal data collection by design',
    ],
    cover: '/projects/department-management/cover.svg',
    coverAlt: 'Department Management System project cover',
    screenshots: [],
    links: { github: '', demo: '' },
    caseStudy: {
      overview:
        'A record system for an academic department, holding student name, programme, level, gender, phone number, index number and DEUS status — and deliberately nothing more.',
      problem:
        'Departmental records are often kept in scattered spreadsheets and printouts, which makes them hard to search and easy to duplicate. Those files also tend to accumulate personal details nobody in the department needs.',
      solution:
        'A single digital record per student, limited to the fields the department uses day to day. Date of birth, nationality, residential address and guardian details are left out unless a specific requirement calls for them, so the system holds less sensitive information from the start.',
      role: 'I analysed what the department actually needed to store, then designed the data structure and the system around that list.',
      challenges: [
        'Deciding what not to collect, and holding that line when more fields would have been easy to add.',
        'Designing lookups that work naturally by index number, programme and level.',
        'Keeping records consistent as students change level between years.',
      ],
      learned: [
        'That collecting less data is a design decision, not an oversight — every extra field is something to protect.',
        'How to turn a requirements conversation into a schema.',
        'The value of writing down system boundaries before building.',
      ],
      futureImprovements: [
        'Role-based access for different staff members.',
        'Export to spreadsheet for departmental reporting.',
        'An audit trail showing who changed a record and when.',
      ],
    },
  },

  /* ------------------------------------------------------------------ 4 */
  {
    slug: 'hostel-finder',
    name: 'Hostel Finder',
    category: 'Web application',
    categoryIds: ['web'],
    summary:
      'A hostel platform with listings, room types, pricing and distance from campus, plus registration for managers.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    features: [
      'Hostel listings',
      'Room information and types',
      'Gender accommodation',
      'Pricing',
      'Distance from campus',
      'Images',
      'Manager registration',
      'Property management',
    ],
    cover: '/projects/hostel-finder/cover.svg',
    coverAlt: 'Hostel Finder project cover',
    screenshots: [],
    links: { github: '', demo: '' },
    caseStudy: {
      overview:
        'A web application where students browse hostels by room type, price, gender accommodation and distance from campus, and where hostel managers register and maintain their own listings.',
      problem:
        'Students comparing hostels need the same handful of facts each time — price, room type, who the hostel accommodates and how far it is from campus — and those facts are rarely presented in a comparable way.',
      solution:
        'Listings that always carry the same fields, so comparison is direct. Managers register and manage their own properties, which keeps the information closer to the people who know it.',
      role: 'I built the application with PHP and MySQL on the server side and plain HTML, CSS and JavaScript on the front end.',
      challenges: [
        'Writing the manager registration and property management flow securely with plain PHP.',
        'Handling image uploads without letting page sizes get out of hand.',
        'Keeping the listing form simple enough that managers actually complete it.',
      ],
      learned: [
        'How server-side rendering with PHP differs from the component thinking React encourages.',
        'Input validation on both sides of the request, not just in the browser.',
        'That the shape of the data collection form decides the quality of everything shown later.',
      ],
      futureImprovements: [
        'Search filters that combine price, distance and room type in one query.',
        'Verification for registered managers.',
        'Rewriting the front end as a single-page application.',
      ],
    },
  },

  /* ------------------------------------------------------------------ 5 */
  {
    slug: 'cgpa-calculator',
    name: 'CGPA Calculator',
    category: 'Educational application',
    categoryIds: ['educational', 'web'],
    summary:
      'A tool for calculating semester GPA and CGPA, and for working out the grades needed to reach a target class.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    features: [
      'Semester GPA',
      'Cumulative GPA',
      'Multiple semester calculations',
      'Grade calculations',
      'CGPA prediction',
      'Target class calculations',
      'Required grades',
    ],
    cover: '/projects/cgpa-calculator/cover.svg',
    coverAlt: 'CGPA Calculator project cover',
    screenshots: [],
    links: { github: '', demo: '' },
    featured: true,
    caseStudy: {
      overview:
        'A calculator that turns grades into the numbers students actually care about: this semester’s GPA, the cumulative figure, and what the next semester has to look like to reach a target class.',
      problem:
        'Most students can compute a GPA once someone shows them, but the useful question is the reverse one — what do I need next semester to get where I want? That calculation gets done wrong on paper often enough to matter.',
      solution:
        'Enter courses, credits and grades to get semester and cumulative results, then set a target class and see the grades required to reach it. The point is not only the answer but seeing how credit weighting produces it.',
      role: 'I built the calculator and worked out the grading logic behind it.',
      challenges: [
        'Getting credit-weighted averages right across several semesters.',
        'Presenting the target-class calculation so it teaches rather than just outputs a number.',
        'Handling incomplete input without confusing error messages.',
      ],
      learned: [
        'That a small tool is a good place to practise getting logic exactly right — there is nowhere to hide an error.',
        'How much clearer a calculation becomes when the interface shows the steps.',
        'Writing validation that helps the user instead of blocking them.',
      ],
      futureImprovements: [
        'Support for different grading systems.',
        'Saving previous semesters locally between visits.',
        'A short explanation panel showing how each result was reached.',
      ],
    },
  },

  /* ------------------------------------------------------------------ 6 */
  {
    slug: 'educational-content',
    name: 'Educational Content Platform',
    category: 'Learning resources',
    categoryIds: ['educational'],
    summary:
      'A home for the tutorials, notes and catch-up materials I make for students learning programming and ICT.',
    technologies: ['React', 'Markdown', 'Educational technology'],
    features: [
      'Python programming',
      'Java programming',
      'HTML & CSS',
      'React Native',
      'ICT tutorials',
      'Programming notes',
      'Catch-up class materials',
    ],
    cover: '/projects/educational-content/cover.svg',
    coverAlt: 'Educational Content Platform project cover',
    screenshots: [],
    links: { github: '', demo: '' },
    status: 'In progress',
    caseStudy: {
      overview:
        'An ongoing project to collect the teaching material I produce — programming tutorials, notes and catch-up class resources — somewhere students can actually find it.',
      problem:
        'Notes and explanations get shared once in a group chat and then disappear. A student who missed the lecture, or who needs the explanation three weeks later, has no way back to it.',
      solution:
        'A single place organised by topic rather than by the date it was posted, covering Python, Java, HTML and CSS, React Native and general ICT, alongside the material used in catch-up sessions.',
      role: 'I write the material and I am building the platform that holds it.',
      challenges: [
        'Writing explanations that help a beginner without becoming inaccurate.',
        'Structuring content so topics can grow without the navigation falling apart.',
        'Keeping it maintainable — content in Markdown rather than hard-coded pages.',
      ],
      learned: [
        'Teaching a concept exposes the parts I only half understood.',
        'Good documentation is a design problem as much as a writing one.',
        'Short, focused pieces get read; long ones get saved for later and forgotten.',
      ],
      futureImprovements: [
        'Search across all notes and tutorials.',
        'Downloadable versions for offline study.',
        'Worked examples students can run themselves.',
      ],
    },
  },
];

export function getProjectBySlug(slug: string | undefined): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
