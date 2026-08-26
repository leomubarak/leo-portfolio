import { siteConfig } from '@/data/site';
import { education } from '@/data/education';
import { skillCategories } from '@/data/skills';
import { activeSocialLinks } from '@/data/socialLinks';
import type { Project } from '@/data/projects';
import { absoluteUrl, hasSiteUrl } from './seo';

/**
 * Structured data describes only facts that appear on the page: who Leo is,
 * where he studies, what he works with, and what each project is. No ratings,
 * no awards, no employment — search engines penalise invented markup, and it
 * would contradict the rest of the site.
 */
export function personSchema() {
  const current = education[0];

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    description: siteConfig.shortBio,
    jobTitle: siteConfig.role,
    ...(hasSiteUrl && { url: absoluteUrl('/') }),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kumasi',
      addressCountry: 'GH',
    },
    ...(current
      ? {
          alumniOf: {
            '@type': 'EducationalOrganization',
            name: current.institution,
          },
        }
      : {}),
    knowsAbout: skillCategories.flatMap((category) => category.skills.map((skill) => skill.name)),
    ...(activeSocialLinks.length > 0 && {
      sameAs: activeSocialLinks.map((link) => link.href),
    }),
    ...(siteConfig.email ? { email: `mailto:${siteConfig.email}` } : {}),
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${siteConfig.name} — Portfolio`,
    description: siteConfig.seo.description,
    inLanguage: 'en',
    ...(hasSiteUrl && { url: absoluteUrl('/') }),
    author: { '@type': 'Person', name: siteConfig.name },
  };
}

export function projectSchema(project: Project) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.name,
    description: project.summary,
    ...(hasSiteUrl && { url: absoluteUrl(`/projects/${project.slug}`) }),
    creator: { '@type': 'Person', name: siteConfig.name },
    keywords: project.technologies.join(', '),
    genre: project.category,
    ...(project.links.demo ? { sameAs: [project.links.demo] } : {}),
  };
}
