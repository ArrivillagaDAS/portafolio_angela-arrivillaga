(function (app) {
  'use strict';

  /* ===== DATOS EDITABLES: todo el contenido dinámico vive aquí ===== */
  const ICONS = {
    frontend: '<path d="M8 6l-6 6 6 6M16 6l6 6-6 6"/>',
    projects: '<path d="M3 7h18v13H3zM8 7V4h8v3"/>',
    technical: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/>',
    learning: '<path d="M2 9l10-5 10 5-10 5zM6 11v5c3 2 9 2 12 0v-5"/>'
  };

  const whatIDo = [
    { icon: 'frontend', title: 'Frontend', text: 'Construyo interfaces con HTML, CSS y JavaScript, cuidando diseño y accesibilidad.' },
    { icon: 'projects', title: 'Proyectos y soluciones', text: 'Convierto ideas en proyectos académicos y personales que se pueden probar.' },
    { icon: 'technical', title: 'Trabajo técnico', text: 'Practico bases de datos, APIs REST, JSON y flujos de trabajo con Git.' },
    { icon: 'learning', title: 'Aprendizaje continuo', text: 'Sumo herramientas y conceptos nuevos en cada proyecto.' }
  ];

  const stack = [
    { group: 'Frontend', items: [['HTML', 'practice'], ['CSS', 'practice'], ['JavaScript', 'practice'], ['TypeScript', 'familiar']] },
    { group: 'Programación', items: [['Python', 'practice']] },
    { group: 'Bases de datos', items: [['MySQL', 'learning'], ['PostgreSQL', 'learning']] },
    { group: 'Herramientas', items: [['Git', 'practice'], ['GitHub', 'practice'], ['VS Code', 'practice'], ['Canva', 'practice'], ['Postman', 'learning'], ['n8n', 'learning'], ['Docker', 'familiar']] }
  ];

  const featured = {
    title: 'ALBA',
    type: 'Aplicación móvil de salud y adherencia a medicamentos',
    context: 'Proyecto académico grupal para mejorar la adherencia a medicamentos de adultos mayores en Guatemala.',
    solution: 'Una app con tres perfiles (Adulto Mayor, Cuidador y Doctor) para dar seguimiento a medicamentos y recetas, vincular usuarios mediante QR, y consultar información de nutrición y ejercicio. Incluye recordatorios y sincronización; la comunicación entre usuarios está contemplada a futuro.',
    role: 'Senior UI Accessibility & Theme (rol dentro de un proyecto académico grupal)',
    focus: 'Accesibilidad, alto contraste e interfaz sencilla.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Cloud Firestore', 'Git', 'GitHub'],
    result: null, github: null, demo: null
  };

  const otherProjects = [
    { title: 'Sistema CRUD con colecciones JSON', category: 'Por completar' },
    { title: 'Sistema de tickets', category: 'Por completar' },
    { title: 'Proyecto CLI', category: 'Por completar' }
  ];

  const process = [
    ['Análisis', 'Entiendo el problema y a quién le sirve antes de escribir código.'],
    ['Estructura', 'Organizo datos, carpetas y responsabilidades.'],
    ['Desarrollo', 'Construyo por partes pequeñas y probables.'],
    ['Validación', 'Pruebo, reviso errores y verifico resultados (por ejemplo, con Postman).'],
    ['Documentación', 'Dejo explicado qué hace el proyecto y cómo usarlo.'],
    ['Mejora', 'Reviso lo aprendido e itero.']
  ];

  const learning = ['MySQL', 'n8n', 'Postman', 'PostgreSQL', 'Node.js / desarrollo backend'];

  /* ===== RENDER ===== */
  const svg = (paths) => '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + paths + '</svg>';

  function renderWhat() {
    const list = app.$('#what-list');
    whatIDo.forEach((w) => {
      const li = app.el('li', 'card');
      li.setAttribute('data-reveal', '');
      li.innerHTML = svg(ICONS[w.icon]);
      li.append(app.el('h3', '', w.title), app.el('p', '', w.text));
      list.append(li);
    });
  }

  function renderStack() {
    const root = app.$('#stack-list');
    stack.forEach((g) => {
      const box = app.el('div', 'card');
      box.setAttribute('data-reveal', '');
      box.append(app.el('h3', '', g.group));
      const chips = app.el('ul', 'chips');
      g.items.forEach(([name, level]) => chips.append(app.el('li', 'chip ' + level, name)));
      box.append(chips);
      root.append(box);
    });
  }

  function definition(term, value) {
    const wrap = app.el('div');
    wrap.append(app.el('dt', '', term), app.el('dd', '', value));
    return wrap;
  }

  function linkOrPending(label, url) {
    if (url) {
      const a = app.el('a', 'btn btn-ghost', label);
      a.href = url; a.target = '_blank'; a.rel = 'noopener';
      return a;
    }
    return app.el('span', 'btn btn-ghost is-pending', label + ' (pendiente)');
  }

  function renderFeatured() {
    const p = featured;
    const art = app.el('article', 'featured glass');
    art.setAttribute('data-reveal', '');
    const info = app.el('div');
    info.append(app.el('span', 'badge', 'Proyecto académico principal'), app.el('h3', '', p.title), app.el('p', 'muted', p.type));
    const dl = app.el('dl');
    dl.append(definition('Contexto', p.context), definition('Solución', p.solution), definition('Mi rol', p.role), definition('Enfoque', p.focus));
    info.append(dl);
    const chips = app.el('ul', 'chips');
    p.technologies.forEach((t) => chips.append(app.el('li', 'chip practice', t)));
    info.append(chips);
    const links = app.el('div', 'links');
    links.append(linkOrPending('GitHub', p.github), linkOrPending('Demo', p.demo));
    info.append(links);

    const phones = app.el('div', 'phones');
    ['Adulto Mayor', 'Cuidador', 'Doctor'].forEach((r) => phones.append(app.el('div', 'phone', 'Captura de ' + r + ' (placeholder)')));
    phones.append(app.el('p', 'placeholder-note', 'Reemplaza estos placeholders con capturas reales en assets/images/.'));
    art.append(info, phones);
    app.$('#featured').append(art);
  }

  function renderOthers() {
    const list = app.$('#project-list');
    otherProjects.forEach((p) => {
      const li = app.el('li', 'card');
      li.setAttribute('data-reveal', '');
      li.append(app.el('span', 'tag', p.category), app.el('h3', '', p.title),
        app.el('p', '', 'Descripción, problema, solución, tecnologías, mi rol, resultado, GitHub, demo y capturas por agregar.'));
      list.append(li);
    });
  }

  function renderProcess() {
    const list = app.$('#process-list');
    process.forEach(([title, text]) => {
      const li = app.el('li');
      li.setAttribute('data-reveal', '');
      li.append(app.el('h3', '', title), app.el('p', '', text));
      list.append(li);
    });
  }

  function renderLearning() {
    const list = app.$('#learning-list');
    learning.forEach((t) => list.append(app.el('li', 'chip learning', t)));
  }

  app.renderContent = function () {
    renderWhat(); renderStack(); renderFeatured(); renderOthers(); renderProcess(); renderLearning();
  };
}(window.Portfolio));
