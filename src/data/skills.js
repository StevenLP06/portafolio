/**  
* Fuente única de verdad para la sección de habilidades.
* Los componentes en src/components/skills/ solo consumen este array,
* nunca hardcodean contenido. 
*/

/**
 * Niveles válidos y su color semántico asociado (ver tailwind.config.js).
 * Se usa 'level' como llave para mapear a la clase de color en SkillBadge.jsx,
 * así se evita repetir lógica de color en cada objeto.
 */

export const ACCENTS = {
  cyan: "#4FD6C4",
  magenta: "#E85D9E",
  amber: "#F5B841",
};

export const SKILL_LEVELS = {
  // avanzado: { label: 'Avanzado', colorClass: 'bg-cyan text-bg' },
  INTERMEDIO: { color: "#E85D9E", bg: "rgba(232,93,158,0.14)" },
  BÁSICO: { color: "#F5B841", bg: "rgba(245,184,65,0.14)" },
  "EN FORMACIÓN": { color: "#4FD6C4", bg: "rgba(79,214,196,0.14)" },
};

/**
 * Cada grupo alimenta una SkillGroup card. 'devicon' es el nombre de clase
 * base de Devicon (sin sufijo -plain/-original) cuando aplica; null cuando
 * la tecnología no tiene ícono en Devicon (se usa un ícono/etiqueta genérica).
 */
// export const skillGroups = [
//   {
//     id: 'frontend',
//     title: 'Frontend',
//     skills: [
//       { name: 'HTML', devicon: 'html5', level: 'intermedio' },
//       { name: 'CSS', devicon: 'css3', level: 'intermedio' },
//       { name: 'JavaScript', devicon: 'javascript', level: 'intermedio' },
//       { name: 'WordPress', devicon: 'wordpress', level: 'basico' },
//     ],
//   },
//   {
//     id: 'backend-datos',
//     title: 'Backend & Datos',
//     skills: [
//       { name: 'Python', devicon: 'python', level: 'intermedio' },
//       { name: 'REST APIs (consumo)', devicon: null, level: 'intermedio' },
//       { name: 'MySQL', devicon: 'mysql', level: 'intermedio' },
//     ],
//   },
//   {
//     id: 'redes-infra',
//     title: 'Redes & Infraestructura',
//     skills: [
//       { name: 'Configuración Linux', devicon: 'linux', level: 'basico' },
//       { name: 'Redes (VLAN, DHCP, NAT, DMZ)', devicon: null, level: 'intermedio' },
//       { name: 'Docker', devicon: 'docker', level: 'basico' },
//     ],
//   },
//   {
//     id: 'ia-automatizacion',
//     title: 'IA & Automatización',
//     skills: [
//       { name: 'Prototipado UI (Google Stitch)', devicon: null, level: 'basico' },
//       { name: 'Google AI Studio', devicon: null, level: 'basico' },
//       { name: 'Analítica Web', devicon: null, level: 'formacion' },
//     ],
//   },
//   {
//     id: 'cloud',
//     title: 'Cloud (Computación en la nube)',
//     skills: [
//       { name: 'Fundamentos de AWS', devicon: 'amazonwebservices', level: 'basico' },
//       { name: 'Manejo de instancias EC2', devicon: null, level: 'intermedio' },
//       { name: 'Almacenamiento Cloud (S3 / Blob Storage)', devicon: null, level: 'basico' },
//       { name: 'Gestión de Identidades y Accesos (IAM)', devicon: null, level: 'basico' },
//     ],
//   },
//   {
//     id: 'devops',
//     title: 'DevOps',
//     skills: [
//       { name: 'Pipelines de CI/CD (GitHub Actions)', devicon: 'githubactions', level: 'basico' },
//       { name: 'Orquestación (Docker Compose)', devicon: 'docker', level: 'basico' },
//       { name: 'Observabilidad y monitoreo (Grafana / Prometheus)', devicon: 'grafana', level: 'basico' },
//     ],
//   },
// ];

export const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    icon: "Code2", // nombre del icono de lucide-react para el header
    accent: "cyan",
    skills: [
      { name: "HTML", level: "INTERMEDIO", mono: "html5" },
      { name: "CSS", level: "INTERMEDIO", mono: "css3" },
      { name: "JavaScript", level: "INTERMEDIO", mono: "javascript" },
      { name: "WordPress", level: "BÁSICO", mono: "wordpress" },
    ],
  },
  {
    title: "Backend & Datos",
    icon: "Database",
    accent: "magenta",
    skills: [
      { name: "Python", level: "INTERMEDIO", mono: "python" },
      { name: "REST APIs (consumo)", level: "INTERMEDIO", mono: "</>" },
      { name: "MySQL", level: "INTERMEDIO", mono: "mysql" },
    ],
  },
  {
    title: "Redes & Infraestructura",
    icon: "Network",
    accent: "amber",
    skills: [
      { name: "Configuración Linux", level: "BÁSICO", mono: "linux" },
      { name: "Redes (VLAN, DHCP, NAT, DMZ)", level: "INTERMEDIO", mono: "</>" },
      { name: "Docker", level: "BÁSICO", mono: "docker" },
    ],
  },
  {
    title: "IA & Automatización",
    icon: "Bot",
    accent: "cyan",
    skills: [
      { name: "Prototipado UI (Google Stitch)", level: "BÁSICO", mono: "</>" },
      { name: "Google AI Studio", level: "BÁSICO", mono: "</>" },
      { name: "Analítica Web", level: "EN FORMACIÓN", mono: "</>" },
    ],
  },
  {
    title: "Cloud (Computación en la nube)",
    icon: "Cloud",
    accent: "magenta",
    skills: [
      { name: "Fundamentos de AWS", level: "BÁSICO", mono: "amazonwebservices" },
      { name: "Manejo de instancias EC2", level: "INTERMEDIO", mono: "</>" },
      { name: "Almacenamiento Cloud (S3 / Blob)", level: "BÁSICO", mono: "</>" },
      { name: "Gestión de Identidades y Accesos", level: "BÁSICO", mono: "</>" },
    ],
  },
  {
    title: "DevOps",
    icon: "Workflow",
    accent: "amber",
    skills: [
      { name: "Pipelines de CI/CD (GitHub Actions)", level: "BÁSICO", mono: "githubactions" },
      { name: "Orquestación (Docker Compose)", level: "BÁSICO", mono: "docker" },
      { name: "Observabilidad y monitoreo (Grafana)", level: "BÁSICO", mono: "grafana" },
    ],
  },
];
