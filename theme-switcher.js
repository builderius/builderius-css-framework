(function() {
  'use strict';

  const THEME_KEY = 'builderius-theme-preference';
  const DEFAULT_THEME = 'auto';

  function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY) || DEFAULT_THEME;
    setTheme(savedTheme, false);
    setupEventListeners();
  }

  function setTheme(preference, save = true) {
    const htmlElement = document.documentElement;

    // Apply theme logic based on preference
    if (preference === 'light') {
      htmlElement.setAttribute('data-theme-default', 'light');
    } else if (preference === 'dark') {
      htmlElement.setAttribute('data-theme-default', 'dark');
    } else if (preference === 'auto') {
      // Remove attribute to allow CSS @media queries to handle theme
      htmlElement.removeAttribute('data-theme-default');
    }

    // Save preference to localStorage
    if (save) {
      localStorage.setItem(THEME_KEY, preference);
    }

    // Update button states
    updateButtonStates(preference);
  }

  function updateButtonStates(activeTheme) {
    const buttons = document.querySelectorAll('.theme-btn');
    buttons.forEach(button => {
      const theme = button.getAttribute('data-theme');
      if (theme === activeTheme) {
        button.classList.add('active');
        button.setAttribute('aria-selected', 'true');
      } else {
        button.classList.remove('active');
        button.setAttribute('aria-selected', 'false');
      }
    });
  }

  function setupEventListeners() {
    const buttons = document.querySelectorAll('.theme-btn');
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        const theme = this.getAttribute('data-theme');
        setTheme(theme, true);
      });
    });
  }

  // Initialize theme when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    initTheme();
  }
})();
