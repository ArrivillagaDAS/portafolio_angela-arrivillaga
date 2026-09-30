(function (app) {
  'use strict';
  document.addEventListener('DOMContentLoaded', () => {
    app.initTheme();
    app.renderContent();
    app.initNavigation();
    app.initEffects();
    app.initReveal();
    app.$('#year').textContent = new Date().getFullYear();
  });
}(window.Portfolio));
