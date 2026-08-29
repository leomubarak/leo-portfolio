import { createContext } from 'react';
import type { Theme } from '@/types';

export interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  isSystemTheme: boolean;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);
