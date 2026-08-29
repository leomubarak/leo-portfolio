/**
 * Single source of truth for identity and copy.
 * Edit this file to change wording on the site — no component edits needed.
 */

export const siteConfig = {
  /* --- Identity --------------------------------------------------------- */
  fullName: 'Mubarak Mohammed Ali',
  /** Short/casual name, used in the navbar wordmark and informal copy. */
  shortName: 'Leo',
  /** How the two are combined for headings that should show both. */
  displayName: 'Mubarak Mohammed Ali | Leo',
  initials: 'MMA',
  role: 'Full-StackWeb Developer & Information Technology Education Student',
  shortBio:
    'A Level 400 Information Technology Education student who builds practical websites and web applications.',
  tagline: 'Learn. Build. Create.',
  location: 'Kumasi, Ghana',
  email: 'leomubarak11@gmail.com',
  /** Digits only, international format, no "+" — e.g. '233200000000'. Used for wa.me links. */
  whatsappNumber: '',

  /* --- Hero ------------------------------------------------------------- */
  hero: {
    eyebrow: 'Mubarak Mohammed Ali · Leo',
    headline: 'I\u2019m a',
    headlineAccent: 'Full-Stack Web Developer',
    headlineEnd: '& Final-Year IT Student',
    subline:
      "I'm a Level 400 Information Technology Education student, I build practical, user-focused websites and web applications that turn ideas into real-world digital solutions.",
    primaryCta: { label: 'View my projects', href: '#projects' },
    secondaryCta: { label: 'Get in touch', href: '#contact' },
    /** Drop your CV at `public/leo-cv.pdf`, then set this to '/leo-cv.pdf'. */
    resumeUrl: '',
  },

  /* --- Images ------------------------------------------------------------
     Both the hero profile picture and the About photo reuse the same asset,
     per the request to use the existing "background" photo as the profile
     picture rather than introducing a new image. */
  images: {
    portrait: '/images/leo-portrait-alt.jpeg',
    portraitAlt: '/images/leo-portrait-alt.jpeg',
    ogImage: '/og-image.png',
  },

  /* --- SEO ---------------------------------------------------------------- */
  seo: {
    title: 'Mubarak Mohammed Ali Portfolio | Full-Stack Web Developer',
    description:
      'Mubarak Mohammed Ali | Full-Stack Web Developer and Level 400 Information Technology Education Student.',
    url: import.meta.env.VITE_SITE_URL ?? '',
    keywords: [
      'Mubarak Mohammed Ali',
      'Leo',
      'Full-Stack Web Developer',
      'Information Technology Education',
      'React',
      'web development',
      'Kumasi',
      'Ghana',
    ],
  },

  /* --- Footer -------------------------------------------------------------- */
  footer: {
    note: 'Built with React, focused on the web.',
    startYear: 2026,
    legalLinks: [] as { label: string; href: string }[],
  },
} as const;

export type SiteConfig = typeof siteConfig;
