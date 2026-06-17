import { useCallback, useEffect, useState } from 'react';

// Theme manager. Light is the default; the user's choice persists in
// localStorage and toggles the `dark` class on <html>. SSG-safe: renders as
// 'light' on the server / first client render, then syncs in an effect to match
// whatever the no-flash inline script (in index.html) already applied.
const STORAGE_KEY = 'pami-theme';

function getStoredTheme() {
  if (typeof window === 'undefined') return 'light';
  try {
    return window.localStorage.getItem(STORAGE_KEY) === 'dark' ? 'dark' : 'light';
  } catch {
    return 'light';
  }
}

function applyTheme(theme) {
  if (typeof document === 'undefined') return;
  document.documentElement.classList.toggle('dark', theme === 'dark');
}

export function useTheme() {
  const [theme, setTheme] = useState('light');

  // Sync state to the already-applied DOM theme after mount (no hydration flash).
  useEffect(() => {
    setTheme(getStoredTheme());
  }, []);

  const setAndPersist = useCallback((next) => {
    setTheme(next);
    applyTheme(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable — theme still applies for this session */
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setAndPersist(theme === 'dark' ? 'light' : 'dark');
  }, [theme, setAndPersist]);

  return { theme, toggleTheme, setTheme: setAndPersist };
}
