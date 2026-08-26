import type { ElementType, ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  /** Render as <section>, <header>, <footer>… Defaults to <div>. */
  as?: ElementType;
}

/** The one place the page's max width and horizontal padding are decided. */
export function Container({ children, className, as: Tag = 'div' }: ContainerProps) {
  return <Tag className={cn('container-page', className)}>{children}</Tag>;
}
