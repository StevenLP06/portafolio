import { useIntersectionObserver } from '../../hooks/useIntersectionObserver.js';

/**
 * Envuelve cada sección para animar su aparición (fade-in + translate-y
 * sutil) al entrar en el viewport. 'id' se usa para las anclas de
 * navegación (#inicio, #proyectos, etc.).
 */
export default function SectionWrapper({ id, className = '', children }) {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section
      id={id}
      ref={ref}
      className={`scroll-mt-20 transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
    >
      {children}
    </section>
  );
}
