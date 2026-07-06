// src/utils/theme.js

// Initialize theme state based on previous user choice or system defaults
export function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light' || (!savedTheme && window.matchMedia('(prefers-color-scheme: light)').matches)) {
    document.documentElement.classList.add('light');
    return 'light';
  } else {
    document.documentElement.classList.remove('light');
    return 'dark';
  }
}

// Global switcher function to change classes cleanly
export function toggleTheme(currentTheme) {
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
  if (nextTheme === 'light') {
    document.documentElement.classList.add('light');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.classList.remove('light');
    localStorage.setItem('theme', 'dark');
  }
  return nextTheme;
}