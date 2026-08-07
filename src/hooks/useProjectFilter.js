import { useMemo, useState } from 'react';

const ALL_FILTER = 'todos';

/**
 * Filtra en memoria (sin recarga ni routing) usando 'filterCategories' de
 * cada proyecto (data-category en el DOM). 'todos' es un caso especial que
 * no filtra por categoría.
 */
export function useProjectFilter(projects) {
  const [activeFilter, setActiveFilter] = useState(ALL_FILTER);

  const filteredProjects = useMemo(() => {
    if (activeFilter === ALL_FILTER) return projects;
    return projects.filter((project) => project.filterCategories.includes(activeFilter));
  }, [projects, activeFilter]);

  return { activeFilter, setActiveFilter, filteredProjects };
}
