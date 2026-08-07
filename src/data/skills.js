/**
 * NOTA: la spec original (sección 4.3) dice "agrupadas en 4 tarjetas" pero
 * enumera contenido real para 6 categorías (Frontend, Backend & Datos,
 * Redes & Infraestructura, IA & Automatización, Cloud, DevOps). Se prioriza
 * el contenido real declarado sobre el número mencionado en el texto: SkillsSection
 * renderiza un grupo por cada entrada de este arreglo (Open/Closed — agregar
 * o quitar categorías no requiere tocar SkillsSection.jsx).
 */

/**
 * Niveles válidos y su color semántico asociado (ver tailwind.config.js).
 * Se usa 'level' como llave para mapear a la clase de color en SkillBadge.jsx,
 * así se evita repetir lógica de color en cada objeto.
 */
export const SKILL_LEVELS = {
  avanzado: { label: 'Avanzado', colorClass: 'bg-cyan text-bg' },
  intermedio: { label: 'Intermedio', colorClass: 'bg-magenta text-bg' },
  basico: { label: 'Básico', colorClass: 'bg-amber text-bg' },
  formacion: { label: 'En formación', colorClass: 'bg-ink-dim text-bg' },
};

/**
 * Cada grupo alimenta una SkillGroup card. 'devicon' es el nombre de clase
 * base de Devicon (sin sufijo -plain/-original) cuando aplica; null cuando
 * la tecnología no tiene ícono en Devicon (se usa un ícono/etiqueta genérica).
 */
export const skillGroups = [
  {
    id: 'frontend',
    title: 'Frontend',
    skills: [
      { name: 'HTML', devicon: 'html5', level: 'intermedio' },
      { name: 'CSS', devicon: 'css3', level: 'intermedio' },
      { name: 'JavaScript', devicon: 'javascript', level: 'intermedio' },
      { name: 'WordPress', devicon: 'wordpress', level: 'basico' },
    ],
  },
  {
    id: 'backend-datos',
    title: 'Backend & Datos',
    skills: [
      { name: 'Python', devicon: 'python', level: 'intermedio' },
      { name: 'REST APIs (consumo)', devicon: null, level: 'intermedio' },
      { name: 'MySQL', devicon: 'mysql', level: 'intermedio' },
    ],
  },
  {
    id: 'redes-infra',
    title: 'Redes & Infraestructura',
    skills: [
      { name: 'Configuración Linux', devicon: 'linux', level: 'basico' },
      { name: 'Redes (VLAN, DHCP, NAT, DMZ)', devicon: null, level: 'intermedio' },
      { name: 'Docker', devicon: 'docker', level: 'basico' },
    ],
  },
  {
    id: 'ia-automatizacion',
    title: 'IA & Automatización',
    skills: [
      { name: 'Prototipado UI (Google Stitch)', devicon: null, level: 'basico' },
      { name: 'Google AI Studio', devicon: null, level: 'basico' },
      { name: 'Analítica Web', devicon: null, level: 'formacion' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud (Computación en la nube)',
    skills: [
      { name: 'Fundamentos de AWS', devicon: 'amazonwebservices', level: 'basico' },
      { name: 'Manejo de instancias EC2', devicon: null, level: 'intermedio' },
      { name: 'Almacenamiento Cloud (S3 / Blob Storage)', devicon: null, level: 'basico' },
      { name: 'Gestión de Identidades y Accesos (IAM)', devicon: null, level: 'basico' },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps',
    skills: [
      { name: 'Pipelines de CI/CD (GitHub Actions)', devicon: 'githubactions', level: 'basico' },
      { name: 'Orquestación (Docker Compose)', devicon: 'docker', level: 'basico' },
      { name: 'Observabilidad y monitoreo (Grafana / Prometheus)', devicon: 'grafana', level: 'basico' },
    ],
  },
];
