# Portafolio — Steven López Parra

Landing page de una sola página (SPA estática) construida con React + Vite +
Tailwind CSS. Presenta perfil, habilidades, proyectos reales, certificaciones
y un formulario de contacto funcional vía EmailJS.

## Stack

- **React 18** + **Vite** — componentes y bundler
- **Tailwind CSS** (vía PostCSS, sin CDN) — estilos con design tokens propios
- **Devicon** — íconos de tecnologías
- **EmailJS** — envío del formulario de contacto (sitio 100% estático, sin backend)

## Requisitos previos

- Node.js 18 o superior
- npm 9 o superior

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Levanta el servidor de desarrollo de Vite (por defecto en `http://localhost:5173`)
con recarga en caliente.

## Build de producción

```bash
npm run build
```

Genera la carpeta `dist/` lista para desplegar en cualquier hosting estático.
Para previsualizar ese build localmente:

```bash
npm run preview
```

## Variables de entorno (EmailJS)

El formulario de contacto necesita credenciales de [EmailJS](https://www.emailjs.com/):

1. Copia `.env.example` a `.env`.
2. Crea una cuenta en EmailJS y genera un Service ID, un Template ID y una
   Public Key.
3. Reemplaza los valores placeholder en `.env` por los tuyos.

El archivo `.env` está en `.gitignore`: nunca commitees claves reales.

## Certificados descargables

Los PDFs de la sección "Certificaciones" deben colocarse en
`public/certificados/` con los nombres indicados en
`public/certificados/README.md` (deben coincidir con
`src/data/certifications.js`).

## Estructura del proyecto

```
src/
├── components/   # UI organizada por sección (hero, about, skills, projects, ...)
├── data/         # Contenido real: skills.js, projects.js, certifications.js, terminalCommands.js
├── hooks/        # useTheme, useTypewriter, useIntersectionObserver, useProjectFilter
├── lib/          # emailjs.js, validators.js
└── constants/    # site.js (WhatsApp, redes, textos fijos)
```

Todo el contenido repetitivo (habilidades, proyectos, certificaciones) vive en
`src/data/` como arreglos de objetos: agregar un ítem nuevo no requiere tocar
la lógica de renderizado de los componentes.

## Despliegue

Proyecto pensado para desplegarse en **Vercel** (o cualquier hosting estático
compatible, como Netlify):

1. Sube el repositorio a GitHub.
2. Conéctalo en Vercel.
3. Comando de build: `npm run build` — carpeta de salida: `dist/`.
4. Configura las variables de entorno de EmailJS en el panel de Vercel.

## Pendientes (ver spec, sección 10)

- Nombre y descripción definitivos del proyecto #3 (este portafolio) una vez
  creado el repositorio real.
- Reemplazar las claves placeholder de EmailJS por las reales de Steven.
- Confirmar si se agrega enlace a LinkedIn (el espacio ya está reservado en
  el footer y en la sección de contacto).
- Subir los PDFs reales de certificaciones a `public/certificados/`.
