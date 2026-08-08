import { terminalCommands } from '../../data/terminalCommands.js';
import { useTypewriter } from '../../hooks/useTypewriter.js';

export default function Terminal() {
  const { renderedBlocks, isDone } = useTypewriter(terminalCommands);

  return (
    <div
      className="hover-glow overflow-hidden rounded-lg border border-border dark:border-border bg-surface-light dark:bg-surface font-mono text-sm shadow-xl shadow-black/10"
      role="group"
      aria-label="Terminal simulada con información de presentación"
    >
      {/* barra de título estilo terminal, puramente decorativa */}
      <div className="flex items-center gap-1.5 border-b border-border dark:border-border bg-surface-light-2 dark:bg-surface-2 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-magenta/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-cyan/70" />
        <span className="ml-2 text-xs text-ink-light-dim dark:text-ink-dim">steven@portafolio: ~</span>
      </div>

      <div className="space-y-3 px-4 py-4">
        {renderedBlocks.map((block, index) => (
          <div key={index}>
            <p className="text-ink-light dark:text-ink">
              <span className="text-cyan">➜</span> {block.command}
              {!block.commandDone && !isDone && (
                <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-cyan align-middle" />
              )}
            </p>
            {block.outVisible &&
              block.out.map((line, lineIndex) => (
                <p key={lineIndex} className="pl-4 text-ink-light-dim dark:text-ink-dim">
                  {line}
                </p>
              ))}
          </div>
        ))}
        {isDone && (
          <p className="text-ink-light dark:text-ink" aria-hidden="true">
            <span className="text-cyan">➜</span>{' '}
            <span className="inline-block h-4 w-2 translate-y-0.5 animate-blink bg-cyan align-middle" />
          </p>
        )}
      </div>
    </div>
  );
}
