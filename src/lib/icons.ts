import {
  BookOpen,
  Boxes,
  Code2,
  Database,
  Globe,
  GraduationCap,
  LifeBuoy,
  ListChecks,
  MessageSquare,
  NotebookPen,
  PenTool,
  Presentation,
  Smartphone,
  Users,
  Wrench,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { IconKey } from '@/types';

/**
 * Data files reference icons by name so they stay free of JSX.
 * Add a key here and to `IconKey` when you need a new one.
 */
export const iconMap: Record<IconKey, LucideIcon> = {
  boxes: Boxes,
  code: Code2,
  database: Database,
  globe: Globe,
  graduationCap: GraduationCap,
  penTool: PenTool,
  smartphone: Smartphone,
  users: Users,
  wrench: Wrench,
  bookOpen: BookOpen,
  notebook: NotebookPen,
  presentation: Presentation,
  lifeBuoy: LifeBuoy,
  messageSquare: MessageSquare,
  listChecks: ListChecks,
};
