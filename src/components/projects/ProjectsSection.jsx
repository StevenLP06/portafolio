import { projects } from '../../data/projects.js';
import { useProjectFilter } from '../../hooks/useProjectFilter.js';
import ProjectFilter from './ProjectFilter.jsx';
import ProjectTimeline from './ProjectTimeline.jsx';

export default function ProjectsSection() {
  const { activeFilter, setActiveFilter, filteredProjects } = useProjectFilter(projects);

  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <p className="font-mono text-sm text-cyan">/proyectos</p>
      <h2 className="mt-3 font-display text-3xl font-semibold text-ink-light dark:text-ink sm:text-4xl">
        Proyectos
      </h2>

      <div className="mt-8">
        <ProjectFilter activeFilter={activeFilter} onChange={setActiveFilter} />
      </div>

      {filteredProjects.length > 0 ? (
        <ProjectTimeline projects={filteredProjects} />
      ) : (
        <p className="mt-10 text-sm text-ink-light-dim dark:text-ink-dim">
          No hay proyectos para este filtro todavía.
        </p>
      )}
    </div>
  );
}
