import { useEffect, useRef, useState } from 'react';

/**
 * Devuelve un ref para adjuntar al elemento observado y un booleano que pasa
 * a true la primera vez que el elemento entra en el viewport (no vuelve a
 * false: es una revelación única, no un toggle repetido en cada scroll).
 * No se usan librerías externas de scroll-reveal para mantener el bundle
 * liviano (spec sección 5.3).
 */
export function useIntersectionObserver({ threshold = 0.15, rootMargin = '0px 0px -60px 0px' } = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    // Si el usuario prefiere menos movimiento, mostrar el contenido de inmediato.
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, isVisible };
}
