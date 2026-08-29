import { useCallback, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type { Theme } from '@/types';
import {
  applyTheme,
  getStoredTheme,
  resolveInitialTheme,
  storeTheme,
  subscribeToSystemTheme,
} from '@/lib/theme';
import { ThemeContext } from './theme-context';

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => resolveInitialTheme());
  const [isSystemTheme, setIsSystemTheme] = useState<boolean>(() => getStoredTheme() === null);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    if (!isSystemTheme) return;
    return subscribeToSystemTheme(setThemeState);
  }, [isSystemTheme]);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    setIsSystemTheme(false);
    storeTheme(next);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((current) => {
      const next: Theme = current === 'dark' ? 'light' : 'dark';
      storeTheme(next);
      return next;
    });
    setIsSystemTheme(false);
  }, []);

  const value = useMemo(
    () => ({ theme, setTheme, toggleTheme, isSystemTheme }),
    [theme, setTheme, toggleTheme, isSystemTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
