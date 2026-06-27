import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = {
  dark: {
    id: 'dark',
    name: 'Dark Magic',
    bg: '#0a0a0f',
    surface: '#111118',
    card: '#16161f',
    gold: '#c9a84c',
    goldLight: '#f0d060',
    goldDark: '#8b6914',
    text: '#e8e0d0',
    textMuted: '#8a8090',
    purple: '#3b1f6e',
    accent: '#5c3b9e',
  },
  light: {
    id: 'light',
    name: 'Light Magic',
    bg: '#f5f0e8',
    surface: '#ede5d5',
    card: '#e5dcc8',
    gold: '#8b6914',
    goldLight: '#c9a84c',
    goldDark: '#5a4000',
    text: '#1a1020',
    textMuted: '#5a5060',
    purple: '#5c3b9e',
    accent: '#7c50c0',
  },
  gold: {
    id: 'gold',
    name: 'Hogwarts Gold',
    bg: '#0d0a00',
    surface: '#1a1400',
    card: '#211900',
    gold: '#f0d060',
    goldLight: '#ffe080',
    goldDark: '#c9a84c',
    text: '#fff8e0',
    textMuted: '#a08040',
    purple: '#6b4f00',
    accent: '#9b7200',
  },
  minimal: {
    id: 'minimal',
    name: 'Minimal Black',
    bg: '#000000',
    surface: '#0d0d0d',
    card: '#111111',
    gold: '#888888',
    goldLight: '#aaaaaa',
    goldDark: '#555555',
    text: '#e0e0e0',
    textMuted: '#666666',
    purple: '#222222',
    accent: '#444444',
  },
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const saved = localStorage.getItem('hp-theme');
    if (saved && themes[saved]) setTheme(saved);
  }, []);

  const switchTheme = (id) => {
    if (!themes[id]) return;
    setTheme(id);
    localStorage.setItem('hp-theme', id);
  };

  const t = themes[theme];

  // Push theme tokens to :root so body + pure-CSS classes respond to theme changes.
  // (The wrapper div already sets them for its descendants via inline style; :root
  //  covers body and any other ancestor-level consumers.)
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--bg', t.bg);
    root.style.setProperty('--surface', t.surface);
    root.style.setProperty('--card', t.card);
    root.style.setProperty('--gold', t.gold);
    root.style.setProperty('--gold-light', t.goldLight);
    root.style.setProperty('--gold-dark', t.goldDark);
    root.style.setProperty('--text', t.text);
    root.style.setProperty('--text-muted', t.textMuted);
  }, [t]);

  return (
    <ThemeContext.Provider value={{ theme, switchTheme, themes, t }}>
      <div
        style={{
          '--bg': t.bg,
          '--surface': t.surface,
          '--card': t.card,
          '--gold': t.gold,
          '--gold-light': t.goldLight,
          '--gold-dark': t.goldDark,
          '--text': t.text,
          '--text-muted': t.textMuted,
          '--purple': t.purple,
          '--accent': t.accent,
          backgroundColor: t.bg,
          color: t.text,
          minHeight: '100vh',
          width: '100%',
          overflowX: 'hidden',
          transition: 'background-color 0.4s ease, color 0.4s ease',
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
