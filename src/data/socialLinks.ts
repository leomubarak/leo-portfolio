import type { SocialLink } from '@/types';

/**
 * Paste your real URLs into `href`.
 * An empty `href` means "not set yet" — the UI skips those links rather than
 * rendering a dead button, so nothing on the site points nowhere.
 */
export const socialLinks: SocialLink[] = [
  {
    platform: 'github',
    label: 'GitHub',
    href: 'https://github.com/leomubarak',
    handle: 'leomubarak',
    featured: true,
  },
  {
    platform: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mohammed-mubarak-ali-4b1656344?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    handle: 'leo_mubarak',
    featured: true,
  },
  {
    platform: 'youtube',
    label: 'YouTube',
    href: 'https://youtube.com/@leo_mubarak?si=5qBJsFBqRl76Odw1',
    handle: 'leo_mubarak',
    featured: true,
  },
  {
    platform: 'facebook',
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1G9wQNjATs/?mibextid=wwXIfr',
    handle: 'leo_mubarak',
    featured: true,
  },
  {
    platform: 'whatsapp',
    label: 'WhatsApp',
    href: 'https://wa.me/qr/AG2TYMLZURKHG1',
    handle: 'leo_mubarak',
    featured: true,
  },
  {
    platform: 'tiktok' as SocialLink['platform'],
    label: 'TikTok',
    href: 'https://www.tiktok.com/@leo_mubarak?_r=1&_t=ZS-99DK8cIoOWN',
    handle: '@leo_mubarak',
    featured: true,
  },
  {
    platform: 'instagram' as SocialLink['platform'],
    label: 'Instagram',
    href: 'https://www.instagram.com/leo_mubarak',
    handle: '@leo_mubarak',
    featured: true,
  },
];

/** Only the links you have actually filled in. */
export const activeSocialLinks = socialLinks.filter((link) => link.href.trim().length > 0);
