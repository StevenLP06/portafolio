/**
 * Cada bloque representa un "comando" tipeado y su "salida" (out). El
 * typewriter (useTypewriter) anima únicamente 'command'; las líneas de
 * 'out' aparecen tras una pausa breve, sin efecto de tipeo (sección 5.2),
 * para no alargar innecesariamente la animación.
 */
export const terminalCommands = [
  {
    command: 'whoami',
    out: [
      'Steven López Parra — Desarrollador y Estudiante de Administración de Sistemas Informáticos',
    ],
  },
  {
    command: 'cat intereses.txt',
    out: ['Desarrollo web · Redes · Automatización con IA · Cloud · DevOps'],
  },
  {
    command: './disponible --proyecto_nuevo',
    out: ['true — modalidad mixta'],
  },
];
