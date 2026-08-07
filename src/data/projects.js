/**
 * Cada proyecto declara 'filterCategories' (usado por data-category y por
 * useProjectFilter) y 'displayCategory' (la etiqueta corta que se ve en la
 * franja lateral numerada, ej. "redes", "backend"). Mantener ambos separados
 * permite que un proyecto pertenezca a varios filtros sin ensuciar la
 * etiqueta visual.
 */
export const projects = [
  {
    id: 'cloudly',
    number: '01',
    displayCategory: 'redes',
    filterCategories: ['redes'],
    title: 'Cloudly — Topología de red simulada',
    description:
      'Diseño y configuración de una red de dos regiones (Latinoamérica y Europa) en GNS3, con VLANs, DHCPv4/v6, NAT/PAT, IPv6, DMZ con ACLs y un servidor en contenedor Docker.',
    stack: ['GNS3', 'VLAN', 'DHCP', 'NAT/PAT', 'Docker'],
    githubUrl: 'https://github.com/StevenLP06/cloudly-network-topology',
  },
  {
    id: 'email-automation',
    number: '02',
    displayCategory: 'backend',
    filterCategories: ['backend', 'python'],
    title: 'Automatización de envío de correos',
    description:
      'Servicio en Python/Flask que envía correos vía Gmail (smtplib), consumido y probado directamente por endpoint con Thunder Client.',
    stack: ['Python', 'Flask', 'SMTP', 'REST API'],
    githubUrl: 'https://github.com/StevenLP06/email-automation-flask',
  },
  {
    id: 'portafolio',
    number: '03',
    displayCategory: 'frontend',
    filterCategories: ['frontend'],
    // TODO(Steven): nombre y descripción definitivos una vez creado el repo (spec sección 10)
    title: 'Portafolio personal — [nombre de proyecto, editar]',
    description:
      'Este mismo portafolio: landing construida con HTML, CSS, JavaScript y Tailwind, con tema claro/oscuro y navegación estilo editor de código.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
    // TODO(Steven): reemplazar por el enlace real una vez subido el repositorio definitivo
    githubUrl: 'https://github.com/StevenLP06/REPO-POR-DEFINIR',
  },
];

/**
 * Filtros disponibles en la barra sobre la grilla de proyectos (sección 5.4).
 * 'value: "todos"' es un caso especial manejado en useProjectFilter (no
 * filtra por categoría, muestra todo).
 */
export const projectFilters = [
  { value: 'todos', label: 'Todos' },
  { value: 'frontend', label: 'Frontend' },
  { value: 'backend', label: 'Backend' },
  { value: 'python', label: 'Python' },
  { value: 'redes', label: 'Redes' },
];
