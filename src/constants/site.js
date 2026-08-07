/**
 * Número de WhatsApp de Steven en formato internacional sin '+' ni espacios,
 * listo para construir el enlace wa.me (sección 5.6). Editar aquí, en un
 * único lugar, si el número cambia.
 */
export const WHATSAPP_NUMBER = '573218824567';

export const WHATSAPP_DEFAULT_MESSAGE =
  'Hola Steven, vi tu portafolio y me gustaría contactarte.';

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_DEFAULT_MESSAGE
)}`;

export const CONTACT_INFO = {
  email: 'stevenlopezparra06@gmail.com', // TODO(Steven): confirmar correo definitivo de contacto
  phone: '+57 321 882 4567',
  github: 'https://github.com/StevenLP06',
  // TODO(Steven): confirmar si se agrega enlace a LinkedIn (spec sección 10)
  linkedin: null,
};

export const NAV_LINKS = [
  { id: 'inicio', label: '<Steven/>' },
  { id: 'sobre-mi', label: 'Sobre mi' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'certificaciones', label: 'Certificaciones' },
  { id: 'contacto', label: 'Contacto' },
];

export const SITE_META = {
  name: 'Steven López Parra',
  role: 'Desarrollador web/software y Administrador de Sistemas informáticos en formación',
};
