import { useEffect, useRef, useState } from 'react';
import ProjectCard from './ProjectCard.jsx';

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Línea vertical central que se va "alumbrando" (gradiente cyan) a medida
 * que el usuario hace scroll sobre la línea de tiempo de proyectos. Con
 * prefers-reduced-motion se muestra completamente iluminada de forma
 * estática, sin animación ligada al scroll.
 */
export default function ProjectTimeline({ projects }) {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(prefersReducedMotion() ? 100 : 0);

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;

    const container = containerRef.current;
    if (!container) return undefined;

    function updateProgress() {
      const rect = container.getBoundingClientRect();
      const viewportH = window.innerHeight;
      // progreso: 0 cuando el inicio del contenedor entra por abajo del viewport,
      // 100 cuando el final del contenedor pasa por el centro del viewport.
      const total = rect.height + viewportH * 0.5;
      const covered = viewportH * 0.5 - rect.top;
      const pct = Math.min(100, Math.max(0, (covered / total) * 100));
      setProgress(pct);
    }

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative mt-10">
      {/* línea base */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border dark:bg-border md:block"
      />
      {/* línea iluminada, crece con el scroll */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 hidden w-px -translate-x-1/2 bg-cyan shadow-[0_0_12px_2px_rgba(79,214,196,0.6)] transition-[height] duration-150 ease-out md:block"
        style={{ height: `${progress}%` }}
      />

      <ol className="space-y-10 md:space-y-16">
        {projects.map((project, index) => (
          <li
            key={project.id}
            className={`md:flex md:items-center md:gap-10 ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="md:w-1/2">
              <ProjectCard project={project} />
            </div>
            {/* nodo central sobre la línea, solo visible en desktop (zigzag) */}
            <div
              aria-hidden="true"
              className="mx-auto hidden h-3 w-3 shrink-0 rounded-full border-2 border-cyan bg-bg-light dark:bg-bg md:block"
            />
            <div className="hidden md:block md:w-1/2" />
          </li>
        ))}
      </ol>
    </div>
  );
}
