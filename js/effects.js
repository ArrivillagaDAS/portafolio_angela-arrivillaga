(function (app) {
  'use strict';

  function staggerChildren() {
    app.$$('.grid, .process, .chips').forEach((group) => {
      Array.from(group.children).forEach((child, i) => child.style.setProperty('--i', i));
    });
  }

  function scrollProgress() {
    const bar = app.$('.progress');
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.setProperty('--p', max > 0 ? window.scrollY / max : 0);
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  function pointerSpotlight() {
    if (app.prefersReducedMotion() || !window.matchMedia('(hover: hover)').matches) return;
    document.addEventListener('pointermove', (e) => {
      const target = e.target.closest('.glass, .card');
      if (!target) return;
      const rect = target.getBoundingClientRect();
      target.style.setProperty('--mx', (e.clientX - rect.left) + 'px');
      target.style.setProperty('--my', (e.clientY - rect.top) + 'px');
    });
  }

  app.initEffects = function () { staggerChildren(); scrollProgress(); pointerSpotlight(); };
}(window.Portfolio));
