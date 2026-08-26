import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/brand/Logo';
import { ThemeToggle } from '@/components/ThemeToggle';
import { SocialLinks } from './SocialLinks';
import { useHasScrolled } from '@/hooks/useHasScrolled';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { primaryNavItems, sectionIds, visibleNavItems } from '@/data/navigation';
import { easing, duration } from '@/lib/motion';
import { cn } from '@/lib/cn';
import type { NavItem } from '@/types';

const MENU_ID = 'mobile-menu';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const hasScrolled = useHasScrolled(12);
  const activeSection = useScrollSpy(sectionIds);
  const reducedMotion = usePrefersReducedMotion();
  const { pathname } = useLocation();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useLockBodyScroll(menuOpen);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    // Send focus back to the control that opened the menu.
    toggleRef.current?.focus();
  }, []);

  // Escape closes the menu, as it does for any overlay.
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen, closeMenu]);

  // Anchors only resolve on the home page; from anywhere else, route home first.
  const resolveHref = (item: NavItem) =>
    item.href.startsWith('#') && pathname !== '/' ? `/${item.href}` : item.href;

  const isActive = (item: NavItem) => pathname === '/' && item.href === `#${activeSection}`;

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300',
        hasScrolled || menuOpen
          ? 'border-b border-line bg-surface/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4 md:h-20">
        <Link to="/" className="rounded-md" aria-label="Leo — home">
          <Logo />
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {primaryNavItems.map((item) => (
              <li key={item.href}>
                <NavLinkItem item={item} href={resolveHref(item)} active={isActive(item)} />
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            href={pathname === '/' ? '#contact' : '/#contact'}
            size="sm"
            className="hidden sm:inline-flex"
          >
            Get in touch
          </Button>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls={MENU_ID}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex size-10 items-center justify-center rounded-full border border-line bg-surface-raised text-content transition-colors hover:border-line-strong lg:hidden"
          >
            {menuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id={MENU_ID}
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={reducedMotion ? { opacity: 1 } : { opacity: 1, height: 'auto' }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{
              duration: reducedMotion ? 0 : duration.base,
              ease: easing.soft,
            }}
            className="overflow-hidden border-t border-line bg-surface lg:hidden"
          >
            <Container className="py-6">
              <nav aria-label="Mobile">
                <ul className="grid gap-1">
                  {visibleNavItems.map((item) => (
                    <li key={item.href}>
                      <NavLinkItem
                        item={item}
                        href={resolveHref(item)}
                        active={isActive(item)}
                        onNavigate={closeMenu}
                        block
                      />
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-6 border-t border-line pt-6">
                <Button
                  href={pathname === '/' ? '#contact' : '/#contact'}
                  fullWidth
                  onClick={closeMenu}
                >
                  Get in touch
                </Button>
                <SocialLinks className="mt-4" size="sm" />
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

interface NavLinkItemProps {
  item: NavItem;
  href: string;
  active: boolean;
  onNavigate?: () => void;
  block?: boolean;
}

function NavLinkItem({ item, href, active, onNavigate, block = false }: NavLinkItemProps) {
  const classes = cn(
    'relative rounded-full px-3.5 py-2 text-sm transition-colors duration-200',
    block ? 'block' : 'inline-block',
    active ? 'text-content' : 'text-content-muted hover:text-content',
  );

  const label = (
    <>
      {item.label}
      {/* Underline marks the current section — position, not colour alone. */}
      {active && (
        <span
          className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-accent"
          aria-hidden="true"
        />
      )}
    </>
  );

  // Route links go through the router; anchors stay native so CSS smooth scroll applies.
  if (href.startsWith('/') && !href.includes('#')) {
    return (
      <Link
        to={href}
        onClick={onNavigate}
        className={classes}
        aria-current={active ? 'page' : undefined}
      >
        {label}
      </Link>
    );
  }

  return (
    <a
      href={href}
      onClick={onNavigate}
      className={classes}
      aria-current={active ? 'location' : undefined}
    >
      {label}
    </a>
  );
}
