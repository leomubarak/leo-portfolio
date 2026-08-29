export type Theme = 'light' | 'dark';

export type SocialPlatform =
  | 'github'
  | 'linkedin'
  | 'youtube'
  | 'facebook'
  | 'whatsapp'
  | 'email'
  | 'tiktok'
  | 'instagram';

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  href: string;
  handle?: string;
  featured?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
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
  | 'wrench';
