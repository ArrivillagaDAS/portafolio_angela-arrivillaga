(function (app) {
  'use strict';
  app.$ = (selector, root = document) => root.querySelector(selector);
  app.$$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  app.prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  app.el = function (tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };
  app.safeStorage = {
    get(key) { try { return localStorage.getItem(key); } catch (e) { return null; } },
    set(key, value) { try { localStorage.setItem(key, value); } catch (e) { /* storage no disponible */ } }
  };
}(window.Portfolio = window.Portfolio || {}));
