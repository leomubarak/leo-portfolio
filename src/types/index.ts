/**
 * Shared types used across the portfolio.
 * Data files in `src/data` are typed against these so a typo in content
 * becomes a build error instead of a broken section.
 */

export type Theme = 'light' | 'dark';

export type SocialPlatform = 'github' | 'linkedin' | 'youtube' | 'facebook' | 'whatsapp' | 'email';

export interface SocialLink {
  /** Stable id, also used to pick the icon. */
  platform: SocialPlatform;
  /** Visible label and accessible name, e.g. "GitHub". */
  label: string;
  /** Leave empty until you have the real URL — empty links are hidden, never faked. */
  href: string;
  /** Shown in the contact section under the label, e.g. "@leo" or a phone number. */
  handle?: string;
  /** Show this one in the compact hero row. */
  featured?: boolean;
}

export interface NavItem {
  label: string;
  /** In-page anchor id (e.g. "#projects") or a route path (e.g. "/blog"). */
  href: string;
  /** Set false to hide an item until the page behind it exists. */
  enabled?: boolean;
}

export type SkillLevel = 'Learning' | 'Familiar' | 'Developing' | 'Intermediate';

/** Icon names used in data files, mapped to components in `src/lib/icons.ts`. */
export type IconKey =
  | 'boxes'
  | 'code'
  | 'database'
  | 'globe'
  | 'graduationCap'
  | 'penTool'
  | 'smartphone'
  | 'users'
  | 'wrench'
  | 'bookOpen'
  | 'notebook'
  | 'presentation'
  | 'lifeBuoy'
  | 'messageSquare'
  | 'listChecks';
