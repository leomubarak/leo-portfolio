import type { NavItem } from '@/types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#journey' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const visibleNavItems = navItems.filter((item) => item.enabled !== false);
export const primaryNavItems = visibleNavItems;

export const sectionIds = visibleNavItems
  .filter((item) => item.href.startsWith('#'))
  .map((item) => item.href.slice(1));
