import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Music2,
  Youtube,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { SocialPlatform } from '@/types';

const icons: Record<SocialPlatform, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  youtube: Youtube,
  facebook: Facebook,
  whatsapp: MessageCircle,
  email: Mail,
  tiktok: Music2,
  instagram: Instagram,
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
