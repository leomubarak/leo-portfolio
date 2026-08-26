import type { NavItem } from '@/types';

/**
 * Order here is the order in the navbar and the order of sections on the page.
 * Anchors (#id) scroll within the home page; paths (/blog) are routes.
 * `enabled: false` hides an item until the page behind it is built.
 */
export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Education', href: '#education' },
  { label: 'Teaching', href: '#teaching' },
  { label: 'Content', href: '#content' },
  { label: 'Blog', href: '/blog' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export const visibleNavItems = navItems.filter((item) => item.enabled !== false);

/** Shorter list for the desktop bar; the mobile menu shows everything. */
export const primaryNavItems = visibleNavItems.filter((item) =>
  ['#about', '#skills', '#projects', '#journey', '#teaching', '#contact'].includes(item.href),
);

/** Section ids the scroll spy watches, derived from the anchors above. */
export const sectionIds = visibleNavItems
  .filter((item) => item.href.startsWith('#'))
  .map((item) => item.href.slice(1));
