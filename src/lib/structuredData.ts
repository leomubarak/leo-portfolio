import { siteConfig } from '@/data/site';
import { education } from '@/data/education';
import { skillCategories } from '@/data/skills';
import { activeSocialLinks } from '@/data/socialLinks';
import type { Project } from '@/data/projects';
import { absoluteUrl, hasSiteUrl } from './seo';

export function personSchema() {
  const current = education[0];
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.fullName,
    alternateName: siteConfig.shortName,
    description: siteConfig.shortBio,
    jobTitle: siteConfig.role,
    ...(hasSiteUrl && { url: absoluteUrl('/') }),
    address: { '@type': 'PostalAddress', addressLocality: 'Kumasi', addressCountry: 'GH' },
    ...(current
      ? { alumniOf: { '@type': 'EducationalOrganization', name: current.institution } }
      : {}),
    knowsAbout: skillCategories.flatMap((category) => category.skills.map((skill) => skill.name)),
    ...(activeSocialLinks.length > 0 && { sameAs: activeSocialLinks.map((link) => link.href) }),
    ...(siteConfig.email ? { email: `mailto:${siteConfig.email}` } : {}),
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${siteConfig.fullName} — Portfolio`,
    description: siteConfig.seo.description,
    inLanguage: 'en',
    ...(hasSiteUrl && { url: absoluteUrl('/') }),
    author: { '@type': 'Person', name: siteConfig.fullName },
  };
}

export function projectSchema(project: Project) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.name,
    description: project.summary,
    ...(hasSiteUrl && { url: absoluteUrl(`/projects/${project.slug}`) }),
    creator: { '@type': 'Person', name: siteConfig.fullName },
    keywords: project.technologies.join(', '),
    genre: project.category,
    ...(project.links.demo ? { sameAs: [project.links.demo] } : {}),
  };
}
