/**
 * Writes public/sitemap.xml and public/robots.txt before each build.
 * Project slugs are read straight out of src/data/projects.ts.
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

function readEnvSiteUrl() {
  if (process.env.VITE_SITE_URL) return process.env.VITE_SITE_URL;
  const envPath = resolve(root, '.env');
  if (!existsSync(envPath)) return '';
  const match = readFileSync(envPath, 'utf8').match(/^VITE_SITE_URL\s*=\s*(.+)$/m);
  return match ? match[1].trim().replace(/^["']|["']$/g, '') : '';
}

const siteUrl = readEnvSiteUrl().replace(/\/$/, '');

function readProjectSlugs() {
  const source = readFileSync(resolve(root, 'src/data/projects.ts'), 'utf8');
  return [...source.matchAll(/^\s*slug:\s*'([^']+)'/gm)].map((match) => match[1]);
}

const staticRoutes = [{ path: '/', priority: '1.0', changefreq: 'monthly' }];
const today = new Date().toISOString().split('T')[0];

if (!siteUrl) {
  writeFileSync(
    resolve(root, 'public/robots.txt'),
    ['User-agent: *', 'Allow: /', '', '# Sitemap will be listed here once VITE_SITE_URL is set.', ''].join('\n'),
  );
  console.log('[sitemap] VITE_SITE_URL is not set — wrote robots.txt only, skipped sitemap.xml');
  process.exit(0);
}

const routes = [
  ...staticRoutes,
  ...readProjectSlugs().map((slug) => ({ path: `/projects/${slug}`, priority: '0.8', changefreq: 'monthly' })),
];

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...routes.map((route) =>
    ['  <url>', `    <loc>${siteUrl}${route.path}</loc>`, `    <lastmod>${today}</lastmod>`, `    <changefreq>${route.changefreq}</changefreq>`, `    <priority>${route.priority}</priority>`, '  </url>'].join('\n'),
  ),
  '</urlset>',
  '',
].join('\n');

writeFileSync(resolve(root, 'public/sitemap.xml'), sitemap);
writeFileSync(
  resolve(root, 'public/robots.txt'),
  ['User-agent: *', 'Allow: /', '', `Sitemap: ${siteUrl}/sitemap.xml`, ''].join('\n'),
);
console.log(`[sitemap] wrote ${routes.length} URLs for ${siteUrl}`);
