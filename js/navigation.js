(function (app) {
  'use strict';

  function initMenu() {
    const toggle = app.$('.nav-toggle');
    const menu = app.$('#nav-menu');
    const setOpen = (open) => {
      menu.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    };
    toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
    menu.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
  }

  function initActiveLinks() {
    const links = app.$$('.nav-menu a');
    const observer = new IntersectionObserver((entries) => {
      entries.filter((e) => e.isIntersecting).forEach((entry) => {
        links.forEach((a) => a.classList.toggle('is-active', a.getAttribute('href') === '#' + entry.target.id));
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    app.$$('main section[id]').forEach((s) => observer.observe(s));
  }

  app.initNavigation = function () { initMenu(); initActiveLinks(); };
}(window.Portfolio));
