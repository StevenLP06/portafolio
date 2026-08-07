import { CONTACT_INFO } from '../../constants/site.js';

const LINKS = [
  { label: 'Correo', value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
  { label: 'Teléfono', value: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}` },
  { label: 'GitHub', value: 'StevenLP06', href: CONTACT_INFO.github, external: true },
];

export default function ContactInfo() {
  return (
    <div className="space-y-4">
      {LINKS.map((link) => (
        <a
          key={link.label}
          href={link.href}
          {...(link.external ? { target: '_blank', rel: 'noopener' } : {})}
          className="hover-glow flex items-center justify-between rounded-lg border border-border dark:border-border bg-surface-light dark:bg-surface px-5 py-4 transition-colors duration-300"
        >
          <span className="font-mono text-xs uppercase tracking-wide text-cyan">{link.label}</span>
          <span className="text-sm text-ink-light dark:text-ink">{link.value}</span>
        </a>
      ))}

      {/* Espacio reservado por si se agrega LinkedIn (spec sección 10) */}
      {CONTACT_INFO.linkedin && (
        <a
          href={CONTACT_INFO.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover-glow flex items-center justify-between rounded-lg border border-border dark:border-border bg-surface-light dark:bg-surface px-5 py-4"
        >
          <span className="font-mono text-xs uppercase tracking-wide text-cyan">LinkedIn</span>
          <span className="text-sm text-ink-light dark:text-ink">Ver perfil</span>
        </a>
      )}
    </div>
  );
}
