import { cn } from '@/lib/cn';
import { activeSocialLinks } from '@/data/socialLinks';
import { SocialIcon } from '@/components/brand/SocialIcon';

interface SocialLinksProps {
  className?: string;
  size?: 'sm' | 'md';
  /** Shows the platform name next to the icon (used in the mobile menu). */
  withLabels?: boolean;
}

/**
 * Renders only the links that have a URL. Anything still empty in
 * `src/data/socialLinks.ts` is skipped, so the site never shows a dead button.
 */
export function SocialLinks({ className, size = 'md', withLabels = false }: SocialLinksProps) {
  if (activeSocialLinks.length === 0) {
    // Visible during development only, as a reminder to fill the data file in.
    return import.meta.env.DEV ? (
      <p
        className={cn(
          'rounded-full border border-dashed border-line-strong px-3 py-1.5',
          'font-mono text-[11px] text-content-subtle',
          className,
        )}
      >
        Add your profile URLs in src/data/socialLinks.ts
      </p>
    ) : null;
  }

  return (
    <ul className={cn('flex flex-wrap items-center gap-2', className)}>
      {activeSocialLinks.map((link) => (
        <li key={link.platform}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${link.label} (opens in a new tab)`}
            className={cn(
              'inline-flex items-center gap-2 rounded-full border border-line',
              'bg-surface-raised text-content-muted transition-colors duration-200',
              'hover:border-line-strong hover:text-content',
              withLabels ? 'px-3 py-2 text-sm' : 'justify-center',
              !withLabels && (size === 'sm' ? 'size-9' : 'size-10'),
            )}
          >
            <SocialIcon platform={link.platform} size={size === 'sm' ? 16 : 18} />
            {withLabels && <span>{link.label}</span>}
          </a>
        </li>
      ))}
    </ul>
  );
}
