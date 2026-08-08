/**
 * 'file' apunta a /public/certificados/, por lo que en producción queda
 * disponible en la raíz del build (ver estructura de carpetas, sección 6.1).
 */
export const certifications = [
  {
    id: 'sena-tecnico-programacion',
    title: 'Técnico en programación de software',
    issuer: 'Sena',
    file: '/certificados/sena-tecnico-programacion.pdf',
  },
  {
    id: 'aws-cloud-foundations',
    title: 'AWS Cloud Foundations',
    issuer: 'AWS',
    file: '/certificados/aws-cloud-foundations.pdf',
  },
  {
    id: 'diplomado-ingles',
    title: 'Diplomado en inglés comunicativo',
    issuer: 'Universidad Católica de Manizales',
    file: '/certificados/diplomado-ingles.pdf',
  },
  {
    id: 'cisco-linux',
    title: 'Fundamentos en Linux',
    issuer: 'Cisco',
    file: '/certificados/cisco-linux.pdf',
  },
  {
    id: 'google-ia-generativa',
    title: 'Introducción en IA Generativa',
    issuer: 'Google Cloud',
    file: '/certificados/google-ia-generativa.pdf',
  },
];
