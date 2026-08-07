/**
 * Chip pequeño en font-mono, usado para el stack de tecnologías de cada
 * proyecto (sección 4.4). Mantiene contraste garantizado en ambos temas.
 */
export default function Chip({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-border dark:border-border bg-surface-light-2 dark:bg-surface-2 px-3 py-1 font-mono text-xs text-ink-light-dim dark:text-ink-dim ${className}`}
    >
      {children}
    </span>
  );
}
