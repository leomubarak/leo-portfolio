/**
 * Single source of truth for identity and copy.
 * Edit this file to change wording on the site — no component edits needed.
 * Anything not yet confirmed is left as an empty string and hidden by the UI.
 */

export const siteConfig = {
  /* --- Identity --------------------------------------------------------- */
  name: 'Leo',
  initials: 'L',
  role: 'Information Technology Education Student & Developer',
  shortBio:
    'I build practical digital solutions while exploring the intersection of technology, software development, and education.',
  tagline: 'Learn. Build. Teach. Create.',
  location: 'Kumasi, Ghana',
  /** Leave empty until the real address is confirmed. */
  email: 'leomubarak11@gmail.com',
  /** Digits only, international format, no "+" — e.g. '233200000000'. Used for wa.me links. */
  whatsappNumber: '233593660818',

  /* --- Hero ------------------------------------------------------------- */
  hero: {
    eyebrow: "Hello, I'm Mubarak Mohammed  Ali, but you can call me Leo.",
    /* The headline renders as: headline + accented headlineAccent + headlineEnd. */
    headline: 'I build websites, learn and',
    headlineAccent: 'teach',
    headlineEnd: 'with technology.',
    subline:
      "I'm an Information Technology Education student and developer passionate about software development, educational technology, and helping students turn complex programming concepts into practical skills.",
    primaryCta: { label: 'View my projects', href: '#projects' },
    secondaryCta: { label: 'About me', href: '#about' },
    /** Drop your CV at `public/leo-cv.pdf`, then set this to '/leo-cv.pdf'. */
    resumeUrl: '',
  },

  /* --- Images ----------------------------------------------------------- */
  images: {
    portrait: '/images/leo-portrait.png',
    portraitAlt: '/images/leo-portrait-alt.jpeg',
    /** Open Graph card, 1200x630. Add the file before launch. */
    ogImage: '/og-image.png',
  },

  /* --- SEO (wired up in Phase 11) --------------------------------------- */
  seo: {
    title: 'Mubarak Mohammed Ali | Information Technology Education Student & Web Developer',
    description:
      'Personal portfolio of Mubarak Mohammed Ali, an Information Technology Education student and Web Developer passionate about software development, educational technology, programming, and building practical digital solutions.',
    /** Set after the first Vercel deploy, or read from VITE_SITE_URL. */
    url: import.meta.env.VITE_SITE_URL ?? '',
    keywords: [
      'Mubarak Mohammed Ali',
      'Information Technology Education',
      'student developer',
      'web development',
      'React Native',
      'educational technology',
      'Kumasi',
      'Ghana',
    ],
  },

  /* --- Footer ----------------------------------------------------------- */
  footer: {
    note: 'Built with React and a real interest in how technology gets taught.',
    startYear: 2026,
    /**
     * Legal pages. Empty by default: a portfolio that collects nothing beyond
     * a contact form rarely needs them, and linking to pages that do not exist
     * is worse than leaving them out. Add { label, href } once you write one.
     */
    legalLinks: [] as { label: string; href: string }[],
  },
} as const;

export type SiteConfig = typeof siteConfig;
