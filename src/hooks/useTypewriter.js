import { useEffect, useRef, useState } from 'react';

const CHAR_DELAY_MS = 45; // dentro del rango 40-50ms/carácter pedido en la spec
const OUT_PAUSE_MS = 300; // pequeña pausa antes de mostrar la línea de salida
const BLOCK_PAUSE_MS = 500; // pausa entre un bloque comando→salida y el siguiente

function prefersReducedMotion() {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Anima una secuencia de bloques { command, out } como si se escribieran en
 * una terminal real. El comando se tipea carácter por carácter; las líneas
 * de 'out' aparecen de una sola vez tras una pausa (sección 5.2, para no
 * alargar la animación). Se reproduce una sola vez al montar (sección 9,
 * criterios de aceptación) y respeta prefers-reduced-motion mostrando todo
 * el contenido de inmediato sin animar.
 *
 * @param {Array<{command: string, out: string[]}>} blocks
 * @returns {{ renderedBlocks: Array, isDone: boolean, showCursor: boolean }}
 */
export function useTypewriter(blocks) {
  const [renderedBlocks, setRenderedBlocks] = useState([]);
  const [isDone, setIsDone] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Modo estático: sin animación, todo el contenido visible de inmediato.
    if (prefersReducedMotion()) {
      setRenderedBlocks(
        blocks.map((b) => ({ command: b.command, out: b.out, commandDone: true, outVisible: true }))
      );
      setIsDone(true);
      return undefined;
    }

    let blockIndex = 0;
    let charIndex = 0;
    // Esta creando un espacio en blanco en la terminal con el comando y descripción
    setRenderedBlocks(blocks.map(() => ({ command: '', out: [], commandDone: false, outVisible: false })));

    // Escribir la siguiente letra o caracter
    function typeNextChar() {
      if (blockIndex >= blocks.length) {
        setIsDone(true);
        return;
      }

      const currentBlock = blocks[blockIndex];

      if (charIndex <= currentBlock.command.length) {
        const partial = currentBlock.command.slice(0, charIndex);
        setRenderedBlocks((prev) => {
          const next = [...prev];
          next[blockIndex] = { ...next[blockIndex], command: partial };
          return next;
        });
        charIndex += 1;
        timeoutRef.current = setTimeout(typeNextChar, CHAR_DELAY_MS);
        return;
      }

      // Comando terminado de tipear: marcar done y mostrar la salida tras una pausa
      setRenderedBlocks((prev) => {
        const next = [...prev];
        next[blockIndex] = { ...next[blockIndex], commandDone: true };
        return next;
      });

      timeoutRef.current = setTimeout(() => {
        setRenderedBlocks((prev) => {
          const next = [...prev];
          next[blockIndex] = { ...next[blockIndex], out: currentBlock.out, outVisible: true };
          return next;
        });
        blockIndex += 1;
        charIndex = 0;
        timeoutRef.current = setTimeout(typeNextChar, BLOCK_PAUSE_MS);
      }, OUT_PAUSE_MS);
    }

    timeoutRef.current = setTimeout(typeNextChar, CHAR_DELAY_MS);

    return () => clearTimeout(timeoutRef.current);
    // 'blocks' viene de un módulo de datos estático: se ejecuta una sola vez al montar.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { renderedBlocks, isDone };
}
