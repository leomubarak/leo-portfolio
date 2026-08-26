import { createContext } from 'react';
import type { Theme } from '@/types';

export interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  /** True while the user has not made an explicit choice yet. */
  isSystemTheme: boolean;
}

/**
 * Kept in its own module (no components) so Vite fast refresh
 * does not remount the tree on every provider edit.
 */
export const ThemeContext = createContext<ThemeContextValue | null>(null);
