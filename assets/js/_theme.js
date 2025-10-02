(function () {
  'use strict';

  const getCachedTheme = () => {
    const cachedTheme = localStorage.getItem('color-scheme');
    // Default to light mode instead of system preference
    return cachedTheme || 'light';
  };

  document.documentElement.setAttribute('color-scheme', getCachedTheme());

  window.addEventListener('DOMContentLoaded', () => {
    requestAnimationFrame(() => document.body.classList.remove('notransition'));
    document.getElementById('theme-switcher').addEventListener('click', e => {
      e.preventDefault();
      const state = getCachedTheme() === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('color-scheme', state);
      localStorage.setItem('color-scheme', state);
    });
  });
})();
