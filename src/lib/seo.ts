import { siteConfig } from '@/data/site';

/**
 * Set VITE_SITE_URL once you know the deployed address. Until then, canonical
 * and Open Graph URLs are omitted rather than guessed — a wrong canonical is
 * worse for search than none at all.
 */
export const SITE_URL = (siteConfig.seo.url ?? '').replace(/\/$/, '');

export const hasSiteUrl = SITE_URL.length > 0;

/** Turns '/blog' into 'https://example.com/blog'. Empty when no site URL is set. */
export function absoluteUrl(path = '/'): string {
  if (!hasSiteUrl) return '';
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

/** 'Blog' becomes 'Blog | Leo'. The home page keeps the full configured title. */
export function pageTitle(title?: string): string {
  if (!title) return siteConfig.seo.title;
  return `${title} | ${siteConfig.name}`;
}
