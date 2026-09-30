(function (app) {
  'use strict';
  app.initReveal = function () {
    const items = app.$$('[data-reveal]');
    if (app.prefersReducedMotion() || !('IntersectionObserver' in window)) {
      items.forEach((i) => i.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.12 });
    items.forEach((i) => observer.observe(i));
  };
}(window.Portfolio));
