import type { Theme } from '@/types';

/** Must match the key used by the inline script in index.html. */
export const THEME_STORAGE_KEY = 'leo-portfolio-theme';

const DARK_QUERY = '(prefers-color-scheme: dark)';

export function getStoredTheme(): Theme | null {
  try {
    const value = localStorage.getItem(THEME_STORAGE_KEY);
    return value === 'light' || value === 'dark' ? value : null;
  } catch {
    // Storage can be unavailable (private mode, blocked cookies).
    return null;
  }
}

export function storeTheme(theme: Theme): void {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Non-fatal: the theme still applies for this session.
  }
}

export function getSystemTheme(): Theme {
  if (typeof window === 'undefined' || !window.matchMedia) return 'light';
  return window.matchMedia(DARK_QUERY).matches ? 'dark' : 'light';
}

/** The theme to start with: saved choice first, OS preference otherwise. */
export function resolveInitialTheme(): Theme {
  return getStoredTheme() ?? getSystemTheme();
}

/** Writes the theme to the document. The inline script does the same on first paint. */
export function applyTheme(theme: Theme): void {
  const root = document.documentElement;
  root.classList.toggle('dark', theme === 'dark');
  // Keeps native form controls and scrollbars in step with the theme.
  root.style.colorScheme = theme;
}

/** Calls back when the OS theme changes. Returns an unsubscribe function. */
export function subscribeToSystemTheme(onChange: (theme: Theme) => void): () => void {
  if (typeof window === 'undefined' || !window.matchMedia) return () => {};
  const media = window.matchMedia(DARK_QUERY);
  const handler = (event: MediaQueryListEvent) => onChange(event.matches ? 'dark' : 'light');
  media.addEventListener('change', handler);
  return () => media.removeEventListener('change', handler);
}
