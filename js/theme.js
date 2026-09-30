(function (app) {
  'use strict';
  const KEY = 'theme';
  const systemTheme = () => (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

  function apply(theme, button) {
    document.documentElement.dataset.theme = theme;
    button.setAttribute('aria-label', theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
  }

  app.initTheme = function () {
    const button = app.$('.theme-toggle');
    apply(app.safeStorage.get(KEY) || systemTheme(), button);
    button.addEventListener('click', () => {
      const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      apply(next, button);
      app.safeStorage.set(KEY, next);
    });
  };
}(window.Portfolio));
