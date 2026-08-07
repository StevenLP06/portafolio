import { projectFilters } from '../../data/projects.js';

export default function ProjectFilter({ activeFilter, onChange }) {
  return (
    <div
      role="group"
      aria-label="Filtrar proyectos por tecnología"
      className="flex flex-wrap gap-2"
    >
      {projectFilters.map((filter) => {
        const isActive = activeFilter === filter.value;
        return (
          <button
            key={filter.value}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(filter.value)}
            className={`rounded-full px-4 py-1.5 font-mono text-sm transition-colors duration-300 ${
              isActive
                ? 'bg-cyan text-bg'
                : 'border border-border dark:border-border text-ink-light-dim dark:text-ink-dim hover:text-cyan hover:border-cyan'
            }`}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
