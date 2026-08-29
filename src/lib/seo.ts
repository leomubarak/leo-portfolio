import { siteConfig } from '@/data/site';

export const SITE_URL = (siteConfig.seo.url ?? '').replace(/\/$/, '');
export const hasSiteUrl = SITE_URL.length > 0;

export function absoluteUrl(path = '/'): string {
  if (!hasSiteUrl) return '';
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export function pageTitle(title?: string): string {
  if (!title) return siteConfig.seo.title;
  return `${title} | ${siteConfig.shortName}`;
}
