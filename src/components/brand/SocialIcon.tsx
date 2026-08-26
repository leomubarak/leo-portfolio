import { Facebook, Github, Linkedin, Mail, MessageCircle, Youtube } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { SocialPlatform } from '@/types';

/** WhatsApp has no brand icon in Lucide; a message bubble reads clearly enough. */
const icons: Record<SocialPlatform, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  youtube: Youtube,
  facebook: Facebook,
  whatsapp: MessageCircle,
  email: Mail,
};

interface SocialIconProps {
  platform: SocialPlatform;
  size?: number;
  className?: string;
}

export function SocialIcon({ platform, size = 18, className }: SocialIconProps) {
  const Icon = icons[platform];
  return <Icon size={size} className={className} aria-hidden="true" />;
}
