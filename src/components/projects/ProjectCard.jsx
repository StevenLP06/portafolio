import Chip from '../ui/Chip.jsx';

export default function ProjectCard({ project }) {
  return (
    <article
      data-category={project.filterCategories.join(',')}
      className="hover-glow flex overflow-hidden rounded-lg border border-border dark:border-border bg-surface-light dark:bg-surface"
    >
      {/* franja lateral: número + categoría real (clasificación, no decoración) */}
      <div className="flex w-16 shrink-0 flex-col items-center justify-center gap-2 border-r border-border dark:border-border bg-surface-light-2 dark:bg-surface-2 py-6 font-mono text-xs">
        <span className="text-lg font-semibold text-cyan">{project.number}</span>
        <span className="rotate-180 text-ink-light-dim dark:text-ink-dim [writing-mode:vertical-rl]">
          {project.displayCategory}
        </span>
      </div>

      <div className="flex-1 p-6">
        <h3 className="font-display text-xl font-semibold text-ink-light dark:text-ink">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-light-dim dark:text-ink-dim">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Chip key={tech}>{tech}</Chip>
          ))}
        </div>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 font-mono text-sm text-cyan transition-colors hover:text-cyan/80"
        >
          Ver en GitHub ↗
        </a>
      </div>
    </article>
  );
}
