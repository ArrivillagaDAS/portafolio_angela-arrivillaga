# Portafolio de Sofi Arrivillaga

Sitio estático en HTML, CSS y JavaScript vanilla. Sin npm, sin build, sin framework.

## Ejecutar localmente
Abre `index.html` en un navegador moderno (doble clic).

## Publicar en GitHub Pages
1. Sube el contenido de esta carpeta a la raíz de tu repositorio (por ejemplo `Portafolio_HTML`).
2. En GitHub: Settings > Pages > Source: "Deploy from a branch" > rama `main`, carpeta `/ (root)`.
3. Espera un minuto y abre `https://arrivillagadas.github.io/Portafolio_HTML/`.

## Arquitectura
- `css/variables.css`: tokens de diseño y tema claro/oscuro. `base.css`: reset y tipografía. `components.css`: componentes, secciones y responsive (mobile-first). `animations.css`: reveal y `prefers-reduced-motion`.
- `js/`: scripts clásicos que cuelgan de `window.Portfolio` (no módulos ES, porque los módulos no cargan al abrir `index.html` con `file://`). Una responsabilidad por archivo: `theme`, `navigation`, `animations`, `projects` (datos y render), `utils`, `main` (arranque).

## Editar contenido
Todo el contenido dinámico está en `js/projects.js`: `featured` (ALBA), `otherProjects`, `stack`, `process`, `learning`.

- Nuevo proyecto: agrega un objeto a `otherProjects` con `title` y `category`.
- Enlaces pendientes: en `featured`, `github` y `demo` son `null`; pon la URL real y el botón se activa.
- Imágenes: guarda capturas en `assets/images/` y reemplaza los `.phone` en `renderFeatured()` por `<img src alt width height loading="lazy">`.

## Librerías externas
Solo Google Fonts (Bricolage Grotesque y DM Sans). Iconos en SVG propio.

## Supuestos a revisar
Los niveles de skills (En práctica / En aprendizaje / Familiar) son una propuesta: ajústalos en `stack`.
