# Portafolio de Ignacio

Portfolio profesional frontend/full-stack con React + Vite + Tailwind + React Router. Sin backend: todo el contenido vive en datos locales.

## Scripts

```bash
npm install
npm run dev
npm run build
```

## Agregar un proyecto nuevo

1. Abrí `src/data/projects.js`.
2. Copiá el objeto del proyecto existente y completá:
   - `slug` único (se usa en la ruta `/projects/:slug`).
   - `title`, `tagline`, `description`.
   - `stack` (chips), `highlights`, `architecture`, `responsibilities`.
   - `repoUrl`, `demoUrl` (opcional).
   - `images` (4 rutas) y `gallery` (opcional).
3. Guardá el archivo y listo: el slider y el detalle se actualizan automáticamente.

## Agregar screenshots

- Guardá imágenes en `public/screenshots/<slug>/`.
- Referencialas con rutas absolutas desde `public`, por ejemplo:
  - `/screenshots/microservicios-hoteles-cursos/01.png`
  - `/screenshots/microservicios-hoteles-cursos/02.png`
- Actualizá `images` (4 principales) y `gallery` (extra) dentro de `src/data/projects.js`.
- Si una imagen no existe, el UI muestra un placeholder automático.

## Notas

- Slider fullscreen con navegación por flechas, teclado y swipe.
- Modal de galería con navegación ← → y cierre con ESC.
- Pensado para escalar agregando más proyectos.
