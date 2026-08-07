/**
 * Badge de nivel: recibe la clase de color ya resuelta desde SKILL_LEVELS
 * (src/data/skills.js) para no duplicar el mapeo nivel→color aquí.
 */
export default function Badge({ children, colorClass = 'bg-ink-dim text-bg', className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wide ${colorClass} ${className}`}
    >
      {children}
    </span>
  );
}
