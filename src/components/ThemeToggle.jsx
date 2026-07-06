// src/components/ThemeToggle.jsx
import React, { useEffect, useState } from 'react';
import { initTheme, toggleTheme } from '../utils/theme';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('dark');

  // Sync theme status on initial render
  useEffect(() => {
    setTheme(initTheme());
  }, []);

  const handleToggle = () => {
    setTheme(toggleTheme(theme));
  };

  return (
    <button
      onClick={handleToggle}
      className="p-2.5 rounded-xl border border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white hover:border-slate-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
      aria-label="Toggle interface color profile"
    >
      {theme === 'dark' ? (
        // Sun Icon for Light Mode option
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m2.828 9.9a5 5 0 117.072 0 5 5 0 01-7.072 0z" />
        </svg>
      ) : (
        // Moon Icon for Dark Mode option
        <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );
}
