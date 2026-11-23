# Plantilla Web Multipestaña · Guía de Misión Económica (SETY / Gobierno de Yucatán)

Proyecto web estático organizado en **8 pestañas `.html` independientes** conectadas a un **único archivo central de datos (`js/data.js`)**. Funciona tanto abriendo `index.html` directamente en el navegador (`file://`) como subiéndolo a cualquier servidor web (Netlify, Vercel, GitHub Pages, cPanel, Nginx, Apache).

## Estructura de carpetas

- `index.html` — Pestaña **Inicio**
- `agenda.html` — Pestaña **Agenda diaria**
- `promocion.html` — Pestaña **Material de promoción**
- `economia.html` — Pestaña **Información económica**
- `reuniones.html` — Pestaña **Reuniones y empresas**
- `documentos.html` — Pestaña **Documentos**
- `vuelos.html` — Pestaña **Vuelos · dos rutas**
- `hospedajes.html` — Pestaña **Hospedajes**
- `js/data.js` — **Único archivo que debes editar** para crear nuevas agendas a futuro
- `js/app.js` — Motor compartido de navegación, renderizado y buscador global (`/`)
- `css/styles.css` — Hoja de estilos institucional (colores guinda y dorado en `:root`)
- `assets/` — Logotipos e imágenes institucionales (`gobierno-sety.svg` o `.png`)
- `documentos/` — Carpeta para los PDFs descargables de la misión

## Cómo duplicar para una agenda futura

1. Duplica la carpeta completa del proyecto.
2. Abre `js/data.js` y actualiza los bloques (`config`, `inicio`, `agenda`, `promocion`, `economia`, `reuniones`, `documentos`, `vuelos`, `hospedajes`).
3. Coloca los PDFs nuevos dentro de `documentos/` y el logotipo institucional en `assets/`.
