import { useCallback, useEffect, useState } from 'react';

const THEME_STORAGE_KEY = 'theme';

/**
 * Lee el tema actual desde el DOM en vez de recalcularlo, porque index.html
 * ya aplicó la clase 'dark' de forma síncrona antes del primer paint
 * (evita el "flash" del tema incorrecto). Este hook solo sincroniza el
 * estado de React con esa clase y expone un toggle.
 */
function getInitialTheme() {
  if (typeof document === 'undefined') return 'dark';
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // localStorage no disponible (modo privado, cuotas, etc.): no bloquea la UI
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  }, []);

  return { theme, toggleTheme };
}
