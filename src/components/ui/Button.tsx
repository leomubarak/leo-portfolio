import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/cn';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'link';
export type ButtonSize = 'sm' | 'md' | 'lg';

const base = [
  'inline-flex items-center justify-center gap-2 rounded-full',
  'font-medium whitespace-nowrap',
  'transition-[background-color,border-color,color,transform] duration-200',
  'active:translate-y-px',
  'disabled:pointer-events-none disabled:opacity-50',
  '[&_svg]:shrink-0',
].join(' ');

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-accent text-accent-contrast hover:bg-accent-hover',
  secondary:
    'border border-line-strong bg-surface-raised text-content hover:border-content-subtle hover:bg-surface-sunken',
  ghost: 'text-content-muted hover:bg-surface-sunken hover:text-content',
  link: 'text-accent underline decoration-1 underline-offset-4 hover:decoration-2 rounded-none px-0',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-sm [&_svg]:size-4',
  md: 'h-11 px-5 text-sm [&_svg]:size-4',
  lg: 'h-13 px-7 text-base [&_svg]:size-5',
};

interface StyleProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
}

type NativeButtonProps = StyleProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof StyleProps> & { href?: never; to?: never };

type AnchorProps = StyleProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof StyleProps | 'href'> & {
    href: string;
    to?: never;
  };

type RouterLinkProps = StyleProps & { to: string; href?: never };

export type ButtonProps = NativeButtonProps | AnchorProps | RouterLinkProps;

function buttonClasses({ variant = 'primary', size = 'md', fullWidth, className }: StyleProps) {
  return cn(
    base,
    variants[variant],
    variant === 'link' ? 'h-auto' : sizes[size],
    fullWidth && 'w-full',
    className,
  );
}

export function Button(props: ButtonProps) {
  const classes = buttonClasses(props);

  if (props.to !== undefined) {
    const { to, children, variant, size, fullWidth, className, ...rest } = props;
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if (props.href !== undefined) {
    const { href, children, variant, size, fullWidth, className, ...rest } = props;
    const isExternal = /^https?:/i.test(href);
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
        {...rest}
      >
        {children}
      </a>
    );
  }

  const { children, variant, size, fullWidth, className, type = 'button', ...rest } = props;
  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
