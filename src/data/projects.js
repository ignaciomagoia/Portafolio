export const projects = [
  {
    slug: "microservicios-hoteles-cursos",
    title: "Plataforma de Cursos y Hoteles (Microservicios)",
    tagline:
      "Microservicios en Go con búsqueda en Solr, eventos con RabbitMQ y despliegue con Docker.",
    description:
      "Sistema distribuido desarrollado en Go con microservicios contenedorizados en Docker Compose. Incluye autenticación con JWT, persistencia en MongoDB/MySQL, cache con Memcached, búsqueda eficiente con Solr y sincronización en tiempo real mediante RabbitMQ. Incluye balanceo con Nginx, vistas de administración y pruebas con mocks.",
    stack: [
      "Go",
      "Microservices",
      "Docker",
      "Docker Compose",
      "MongoDB",
      "MySQL",
      "JWT",
      "Memcached",
      "RabbitMQ",
      "Solr",
      "Nginx",
      "MVC",
      "Goroutines",
      "Testing",
    ],
    highlights: [
      "Frontend conectado a microservicios vía HTTP",
      "Login/registro con JWT + passwords encriptadas",
      "CRUD en MongoDB y usuarios en MySQL",
      "Cache con Memcached para optimizar lecturas",
      "Indexación/actualización en Solr con RabbitMQ en tiempo real",
      "Cálculo concurrente de disponibilidad con goroutines",
      "Nginx como reverse proxy / load balancing (al menos 1 servicio)",
      "Vistas Admin + validación de permisos",
    ],
    architecture: [
      "Frontend -> Nginx -> APIs (hotels-api / search-api / users-api)",
      "hotels-api: CRUD + inscripción + eventos a RabbitMQ",
      "search-api: consultas y filtros en Solr",
      "users-api: usuarios + auth JWT + cache Memcached + MySQL",
      "RabbitMQ sincroniza eventos para mantener Solr actualizado",
    ],
    responsibilities: [
      "Diseño de arquitectura y separación por microservicios",
      "Implementación de endpoints y lógica de negocio en Go",
      "Integración de caché, mensajería y búsqueda",
      "Contenerización con Docker Compose + configuración Nginx",
      "Implementación de autenticación y permisos",
      "Tests y mocks (al menos en un microservicio)",
    ],
    repoUrl: "https://github.com/Congo2020/Final-arq-soft-2-Hoteles",
    demoUrl: "",
    images: [
      "/screenshots/microservicios-hoteles-cursos/contenedores.jpeg",
      "/screenshots/microservicios-hoteles-cursos/crearhoteladmin.jpeg",
      "/screenshots/microservicios-hoteles-cursos/detallehotel.jpeg",
      "/screenshots/microservicios-hoteles-cursos/disponibilidad.jpeg",
    ],
    gallery: [
      "/screenshots/microservicios-hoteles-cursos/contenedores.jpeg",
      "/screenshots/microservicios-hoteles-cursos/crearhoteladmin.jpeg",
      "/screenshots/microservicios-hoteles-cursos/detallehotel.jpeg",
      "/screenshots/microservicios-hoteles-cursos/disponibilidad.jpeg",
      "/screenshots/microservicios-hoteles-cursos/estructura.jpeg",
      "/screenshots/microservicios-hoteles-cursos/imagenes.jpeg",
      "/screenshots/microservicios-hoteles-cursos/paneladmin.jpeg",
      "/screenshots/microservicios-hoteles-cursos/paneliniciosesion.jpeg",
      "/screenshots/microservicios-hoteles-cursos/panelprincipal.jpeg",
      "/screenshots/microservicios-hoteles-cursos/reservasusuario.jpeg",
    ],
  },
  {
    slug: "cicd-pipeline-github-actions",
    title: "CI/CD con GitHub Actions + Tests + Deploy",
    tagline:
      "Pipeline automático: unit tests, E2E con Cypress, quality checks y deploy a Render.",
    description:
      "Proyecto full-stack con un pipeline de CI/CD en GitHub Actions. Incluye ejecución de unit tests en backend y frontend, análisis de calidad, pruebas E2E con Cypress, build de imágenes Docker y despliegue automático a un entorno de QA y producción en Render. Incluye reportes de coverage.",
    stack: ["GitHub Actions", "CI/CD", "Unit Tests", "Cypress (E2E)", "Docker", "Render"],
    highlights: [
      "Pipeline CI/CD al hacer push",
      "Tests unitarios en backend",
      "Tests unitarios en frontend",
      "Coverage report generado",
      "Pruebas E2E con Cypress",
      "Deploy automático a Render (QA/Prod)",
    ],
    architecture: [
      "Push a main dispara GitHub Actions",
      "Jobs: tests backend + tests frontend",
      "Quality gate (SonarCloud) (si aplica)",
      "Build de Docker image (si aplica)",
      "Deploy a QA en Render",
      "E2E con Cypress contra QA",
      "Manual approval gate (si aplica)",
      "Deploy a Prod en Render",
    ],
    responsibilities: [
      "Diseñé e implementé el workflow de GitHub Actions",
      "Configuré ejecución de tests y generación de coverage",
      "Integré Cypress para E2E",
      "Automaticé el despliegue a Render",
      "Documenté el pipeline y cómo correrlo localmente",
    ],
    repoUrl: "https://github.com/ignaciomagoia/tp8ingsoft3",
    demoUrl: "",
    images: [
      {
        src: "/screenshots/cicd-pipeline-github-actions/pipeline.jpeg",
        label: "Pipeline",
      },
      {
        src: "/screenshots/cicd-pipeline-github-actions/unittests.jpeg",
        label: "Unit Tests",
      },
      {
        src: "/screenshots/cicd-pipeline-github-actions/coverage.jpeg",
        label: "Coverage",
      },
      {
        src: "/screenshots/cicd-pipeline-github-actions/cypress.png",
        label: "Cypress",
      },
    ],
    gallery: [
      {
        src: "/screenshots/cicd-pipeline-github-actions/pipeline.jpeg",
        label: "Pipeline completo",
      },
      {
        src: "/screenshots/cicd-pipeline-github-actions/unittests.jpeg",
        label: "Tests OK",
      },
      {
        src: "/screenshots/cicd-pipeline-github-actions/coverage.jpeg",
        label: "Coverage report",
      },
      {
        src: "/screenshots/cicd-pipeline-github-actions/coverage2.jpeg",
        label: "Coverage report 2",
      },
      {
        src: "/screenshots/cicd-pipeline-github-actions/coverage3.jpeg",
        label: "Coverage report 3",
      },
      {
        src: "/screenshots/cicd-pipeline-github-actions/cypress.png",
        label: "Cypress E2E",
      },
      {
        src: "/screenshots/cicd-pipeline-github-actions/videocypress.png",
        label: "E2E video",
      },
      {
        src: "/screenshots/cicd-pipeline-github-actions/render.jpeg",
        label: "Render dashboard",
      },
      {
        src: "/screenshots/cicd-pipeline-github-actions/iniciosesion.jpeg",
        label: "Login UI",
      },
      {
        src: "/screenshots/cicd-pipeline-github-actions/panelprincipal.jpeg",
        label: "Panel principal",
      },
      {
        src: "/screenshots/cicd-pipeline-github-actions/mongodb.jpeg",
        label: "MongoDB",
      },
    ],
  },
  {
    slug: "ft-calcos-tienda-online",
    title: "FT Calcos — Tienda online de calcos personalizados",
    tagline:
      "E-commerce mobile-first con panel admin y checkout por WhatsApp para aumentar conversiones.",
    description:
      "Tienda online desarrollada con Next.js y Supabase para gestionar catálogo, imágenes y ventas. Incluye panel admin para categorías y productos, carrito global y un checkout optimizado por WhatsApp. Diseño responsive con identidad visual del cliente y deploy productivo en Vercel.",
    stack: [
      "Next.js (App Router)",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Vercel",
    ],
    highlights: [
      "E-commerce de calcos y packs",
      "Catálogo por categorías dinámicas",
      "Panel admin para categorías y productos",
      "Uploads de imágenes en Supabase Storage",
      "Carrito con estado global",
      "Checkout vía WhatsApp con mensaje prearmado",
      "Landing optimizada para conversión",
      "Deploy productivo en Vercel",
    ],
    architecture: [
      "Next.js App Router para UI y rutas",
      "Supabase como base de datos y storage",
      "Integración de WhatsApp links para checkout",
      "Panel admin custom para gestión de contenido",
    ],
    responsibilities: [
      "Diseño de la arquitectura y experiencia de usuario",
      "Implementación del e-commerce y panel admin",
      "Integración con Supabase (DB + Storage)",
      "Implementación de carrito global y checkout por WhatsApp",
      "Deploy y configuración en Vercel",
    ],
    repoUrl: "https://github.com/ignaciomagoia/ft_calcos2",
    demoUrl: "https://ft-calcos2.vercel.app",
    demoLabel: "Sitio oficial",
    images: [
      {
        src: "/screenshots/ft-calcos-tienda-online/panelprincipal.jpeg",
        label: "Landing",
      },
      {
        src: "/screenshots/ft-calcos-tienda-online/carrito.jpeg",
        label: "Carrito",
      },
      {
        src: "/screenshots/ft-calcos-tienda-online/imagendecompra.png",
        label: "Checkout",
      },
      {
        src: "/screenshots/ft-calcos-tienda-online/paneladmin.jpeg",
        label: "Admin",
      },
    ],
    gallery: [
      {
        src: "/screenshots/ft-calcos-tienda-online/panelprincipal.jpeg",
        label: "Landing principal",
      },
      {
        src: "/screenshots/ft-calcos-tienda-online/carrito.jpeg",
        label: "Carrito",
      },
      {
        src: "/screenshots/ft-calcos-tienda-online/imagendecompra.png",
        label: "Checkout",
      },
      {
        src: "/screenshots/ft-calcos-tienda-online/paneladmin.jpeg",
        label: "Panel admin",
      },
      {
        src: "/screenshots/ft-calcos-tienda-online/paneladmin2.jpeg",
        label: "Panel admin 2",
      },
      {
        src: "/screenshots/ft-calcos-tienda-online/supabase.jpeg",
        label: "Supabase",
      },
    ],
  },
];
