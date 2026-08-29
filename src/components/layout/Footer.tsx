import { Link } from 'react-router-dom';
import { Container } from '@/components/ui';
import { Logo } from '@/components/brand/Logo';
import { SocialLinks } from './SocialLinks';
import { visibleNavItems } from '@/data/navigation';
import { siteConfig } from '@/data/site';

const currentYear = new Date().getFullYear();
const { footer, displayName, shortBio, tagline } = siteConfig;
const half = Math.ceil(visibleNavItems.length / 2);
const columns = [visibleNavItems.slice(0, half), visibleNavItems.slice(half)];

export function Footer() {
  const yearLabel = currentYear > footer.startYear ? `${footer.startYear}–${currentYear}` : `${footer.startYear}`;

  return (
    <footer className="border-t border-line bg-surface">
      <Container className="py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr] md:gap-12">
          <div>
            <Link to="/" className="inline-block rounded-md" aria-label="Home">
              <Logo />
            </Link>
            <p className="mt-3 text-sm font-medium text-content">{displayName}</p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-content-muted">{shortBio}</p>
            <p className="mt-5 font-mono text-[11px] tracking-[0.18em] text-content-subtle uppercase">{tagline}</p>
            <SocialLinks className="mt-6" size="sm" />
          </div>

          {columns.map((column, index) => (
            <nav key={index} aria-label={index === 0 ? 'Footer sections' : 'Footer sections, continued'}>
              {index === 0 && <p className="eyebrow">Explore</p>}
              {index === 1 && <p className="eyebrow md:invisible">More</p>}
              <ul className="mt-4 space-y-2.5">
                {column.map((item) => (
                  <li key={item.href}>
                    {item.href.startsWith('/') ? (
                      <Link to={item.href} className="text-sm text-content-muted transition-colors hover:text-content">
                        {item.label}
                      </Link>
                    ) : (
                      <a href={`/${item.href}`} className="text-sm text-content-muted transition-colors hover:text-content">
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-content-subtle">
            © {yearLabel} {displayName}. {footer.note}
          </p>
          {footer.legalLinks.length > 0 && (
            <ul className="flex flex-wrap gap-4">
              {footer.legalLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-xs text-content-subtle transition-colors hover:text-content">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Container>
    </footer>
  );
}
