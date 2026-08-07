import html5 from 'devicon/icons/html5/html5-original.svg';
import css3 from 'devicon/icons/css3/css3-original.svg';
import javascript from 'devicon/icons/javascript/javascript-original.svg';
import wordpress from 'devicon/icons/wordpress/wordpress-original.svg';
import python from 'devicon/icons/python/python-original.svg';
import mysql from 'devicon/icons/mysql/mysql-original.svg';
import linux from 'devicon/icons/linux/linux-original.svg';
import docker from 'devicon/icons/docker/docker-original.svg';
import amazonwebservices from 'devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg';
import githubactions from 'devicon/icons/githubactions/githubactions-original.svg';
import grafana from 'devicon/icons/grafana/grafana-original.svg';

/**
 * Mapa cerrado de íconos disponibles. Se importan como assets estáticos
 * (no vía devicon.min.css) para que Vite solo incluya en el bundle los SVGs
 * de las tecnologías realmente usadas en src/data/skills.js, en vez de las
 * ~6MB de icon-fonts que trae el paquete completo de Devicon.
 */
const ICONS = {
  html5,
  css3,
  javascript,
  wordpress,
  python,
  mysql,
  linux,
  docker,
  amazonwebservices,
  githubactions,
  grafana,
};

/**
 * Devicon no soporta modo oscuro nativamente para todos sus íconos (algunos
 * son monocromos y se pierden sobre fondo oscuro). Para garantizar
 * contraste en ambos temas, se envuelve el ícono en un contenedor con fondo
 * neutro claro fijo, independiente del tema activo.
 *
 * @param {string} name - llave dentro de ICONS (ej. 'html5', 'python')
 */
export default function DeviconIcon({ name, className = '' }) {
  const src = ICONS[name];
  if (!src) return null;

  return (
    <span
      className={`inline-flex h-9 w-9 items-center justify-center rounded-md bg-surface-light-2 p-1.5 ${className}`}
    >
      <img src={src} alt="" className="h-full w-full object-contain" />
    </span>
  );
}

