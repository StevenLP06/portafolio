import { useEffect, useMemo, useRef, useState } from 'react';

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
 * IMPORTANTE: renderedBlocks se construye de forma progresiva (solo incluye
 * los bloques que ya empezaron a teclearse) para que la terminal "crezca"
 * línea por línea, en vez de reservar el espacio final desde el montaje.
 *
 * @param {Array<{command: string, out: string[]}>} blocks
 * @returns {{ renderedBlocks: Array, isDone: boolean, showCursor: boolean }}
 */
export function useTypewriter(blocks) {
  const reducedMotion = useRef(prefersReducedMotion());
  const [progress, setProgress] = useState({ blockIndex: 0, charCount: 0, outVisible: false });
  const [isDone, setIsDone] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Modo estático: sin animación, todo el contenido visible de inmediato.
    if (reducedMotion.current) {
      setIsDone(true);
      return undefined;
    }

    let commandIndex = 0; // Cuando la Terminal de Comandos está funcionando
    let phase = 'command'; // 'command' | 'pause' | 'output'
    let charIndex = 0; // Cuantos caracteres de la línea actual han sido revelados

    function tick() {
      const cmd = blocks[commandIndex];
      if (!cmd) {
        // Todos los comandos escritos
        setIsDone(true);
        return;
      }

      if (phase === 'command') {
        charIndex += 1;
        const done = charIndex >= cmd.command.length;

        setProgress({
          blockIndex: commandIndex,
          charCount: done ? cmd.command.length : charIndex,
          outVisible: false,
        });

        if (done) {
          phase = 'pause';
          timeoutRef.current = setTimeout(tick, OUT_PAUSE_MS);
        } else {
          timeoutRef.current = setTimeout(tick, CHAR_DELAY_MS);
        }
      } else if (phase === 'pause') {
        setProgress({
          blockIndex: commandIndex,
          charCount: cmd.command.length,
          outVisible: true,
        });

        commandIndex += 1;
        phase = 'command';
        charIndex = 0;

        if (commandIndex >= blocks.length) {
          setIsDone(true);
        } else {
          timeoutRef.current = setTimeout(() => {
            setProgress({
              blockIndex: commandIndex,
              charCount: 0,
              outVisible: false,
            });
            tick();
          }, CHAR_DELAY_MS);
        }
      }
    }

    // Terminar la animación
    timeoutRef.current = setTimeout(tick, CHAR_DELAY_MS);

    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);


const renderedBlocks = useMemo(() => {
  if (reducedMotion.current) {
    return blocks.map((b) => ({ command: b.command, out: b.out, commandDone: true, outVisible: true }));
  }

  const result = [];

  // Bloques ya completados: se muestran enteros, con su salida.
  for (let i = 0; i < progress.blockIndex; i += 1) {
    result.push({ command: blocks[i].command, out: blocks[i].out, commandDone: true, outVisible: true });
  }

  // Bloque actual (si queda alguno pendiente de animar).
  if (progress.blockIndex < blocks.length) {
    const current = blocks[progress.blockIndex];
    result.push({
      command: current.command.slice(0, progress.charCount),
      commandDone: progress.charCount >= current.command.length,
      out: progress.outVisible ? current.out : [],
      outVisible: progress.outVisible,
    });
  }

  return result;
}, [blocks, progress]);

return { renderedBlocks, isDone };
}
