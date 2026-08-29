/**
 * Pre-flight check: npm run check
 * Errors block a good deploy; warnings are things still waiting on you.
 */
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const errors = [];
const warnings = [];
const read = (relativePath) => readFileSync(resolve(root, relativePath), 'utf8');

function sourceFiles(dir = resolve(root, 'src'), collected = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) sourceFiles(full, collected);
    else if (/\.tsx?$/.test(entry)) collected.push(full);
  }
  return collected;
}

const files = sourceFiles();
const allSource = files.map((file) => readFileSync(file, 'utf8')).join('\n');

const assetPattern = /'(\/(?:images|projects|blog)\/[^']+\.[a-z0-9]{2,5})'/gi;
const referenced = new Set([...allSource.matchAll(assetPattern)].map((match) => match[1]));
for (const asset of referenced) {
  if (!existsSync(resolve(root, 'public', asset.slice(1)))) {
    errors.push(`Missing file: public${asset} is referenced in the source but does not exist.`);
  }
}

function checkSlugs(file, label) {
  const slugs = [...read(file).matchAll(/^\s*slug:\s*'([^']+)'/gm)].map((match) => match[1]);
  const seen = new Set();
  for (const slug of slugs) {
    if (seen.has(slug)) errors.push(`Duplicate ${label} slug: '${slug}'.`);
    seen.add(slug);
  }
  return slugs;
}
const projectSlugs = checkSlugs('src/data/projects.ts', 'project');
if (projectSlugs.length === 0) errors.push('No projects found in src/data/projects.ts.');

const navAnchors = [...read('src/data/navigation.ts').matchAll(/href:\s*'#([^']+)'/g)].map((match) => match[1]);
const sectionIds = new Set([
  ...[...allSource.matchAll(/<Section\s+id="([^"]+)"/g)].map((match) => match[1]),
  ...[...allSource.matchAll(/id="([a-z-]+)"/g)].map((match) => match[1]),
]);
for (const anchor of navAnchors) {
  if (!sectionIds.has(anchor)) errors.push(`Nav item '#${anchor}' has no matching section id on the page.`);
}

const site = read('src/data/site.ts');
const value = (key) => site.match(new RegExp(`${key}:\\s*'([^']*)'`))?.[1] ?? '';
const email = value('email');
if (!email) warnings.push('site.ts: `email` is empty — the email contact card is hidden.');
else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errors.push(`site.ts: '${email}' is not a valid email address.`);

const whatsapp = value('whatsappNumber');
if (!whatsapp) warnings.push('site.ts: `whatsappNumber` is empty — the WhatsApp card is hidden.');
else if (!/^\d{8,15}$/.test(whatsapp)) errors.push('site.ts: `whatsappNumber` must be digits only, international format, no "+".');

if (!process.env.VITE_SITE_URL && !existsSync(resolve(root, '.env'))) {
  warnings.push('VITE_SITE_URL is not set — canonical URLs and the sitemap will be skipped.');
}
if (!existsSync(resolve(root, 'public/og-image.png'))) {
  warnings.push('public/og-image.png is missing — social link previews will have no image.');
}

const socialHrefs = [...read('src/data/socialLinks.ts').matchAll(/href:\s*'([^']*)'/g)].map((match) => match[1]);
const configured = socialHrefs.filter((href) => href.length > 0);
for (const href of configured) {
  if (!/^https?:\/\//.test(href)) errors.push(`socialLinks.ts: '${href}' must start with https://`);
}
if (configured.length === 0) warnings.push('socialLinks.ts: no profile URLs set yet — the social rows are hidden.');

for (const href of [...read('src/data/projects.ts').matchAll(/(?:github|demo):\s*'([^']+)'/g)].map((match) => match[1])) {
  if (!/^https?:\/\//.test(href)) errors.push(`projects.ts: '${href}' must start with https://`);
}

for (const file of files) {
  const contents = readFileSync(file, 'utf8');
  const relative = file.replace(`${root}/`, '');
  if (/\bconsole\.log\(/.test(contents)) warnings.push(`${relative}: contains console.log().`);
  if (/\bTODO\b|\bFIXME\b|lorem ipsum/i.test(contents)) warnings.push(`${relative}: contains a TODO/FIXME/placeholder marker.`);
}

const line = '─'.repeat(60);
console.log(`\n${line}\nContent check\n${line}`);
if (errors.length === 0) console.log('✓ No errors.');
else {
  console.log(`✗ ${errors.length} error${errors.length === 1 ? '' : 's'}:`);
  errors.forEach((message) => console.log(`  · ${message}`));
}
if (warnings.length > 0) {
  console.log(`\n! ${warnings.length} warning${warnings.length === 1 ? '' : 's'} (safe to launch with):`);
  warnings.forEach((message) => console.log(`  · ${message}`));
}
console.log(`\nChecked ${files.length} source files, ${referenced.size} asset references, ${projectSlugs.length} projects.\n`);
process.exit(errors.length > 0 ? 1 : 0);
