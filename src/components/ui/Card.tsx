import type { ElementType, ReactNode } from 'react';
import { cn } from '@/lib/cn';

export type CardTone = 'raised' | 'sunken' | 'outline' | 'dashed';
export type CardPadding = 'none' | 'sm' | 'md' | 'lg';

const tones: Record<CardTone, string> = {
  raised: 'border border-line bg-surface-raised shadow-raised',
  sunken: 'border border-line bg-surface-sunken',
  outline: 'border border-line bg-transparent',
  // Reserved for "nothing here yet" states, so an empty slot reads as intentional.
  dashed: 'border border-dashed border-line-strong bg-transparent',
};

const paddings: Record<CardPadding, string> = {
  none: '',
  sm: 'p-4 sm:p-5',
  md: 'p-6 sm:p-7',
  lg: 'p-7 sm:p-9',
};

interface CardProps {
  children: ReactNode;
  tone?: CardTone;
  padding?: CardPadding;
  /** Adds the hover lift used by project and article cards. */
  interactive?: boolean;
  className?: string;
  as?: ElementType;
}

export function Card({
  children,
  tone = 'raised',
  padding = 'md',
  interactive = false,
  className,
  as: Tag = 'div',
}: CardProps) {
  return (
    <Tag
      className={cn(
        'rounded-card',
        tones[tone],
        paddings[padding],
        interactive && [
          'group relative transition-[transform,box-shadow,border-color] duration-300',
          'hover:-translate-y-1 hover:border-line-strong hover:shadow-lifted',
          'motion-reduce:transform-none motion-reduce:transition-none',
        ],
        className,
      )}
    >
      {children}
    </Tag>
  );
}
