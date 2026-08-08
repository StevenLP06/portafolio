const DATA_SHEET = [
  { label: 'Formación actual', value: 'Administración de Sistemas Informáticos — 8.º semestre' },
  { label: 'Institución', value: 'Universidad Nacional de Colombia' },
  { label: 'Ubicación', value: 'Manizales, Caldas — modalidad mixta' },
  { label: 'Idiomas', value: 'Español (nativo), Inglés' },
  { label: 'Disponibilidad', value: '40 h/semana' },
];

export default function AboutMe() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <p className="font-mono text-sm text-cyan">/sobre-mi</p>
      <h2 className="mt-3 font-display text-3xl font-semibold text-ink-light dark:text-ink sm:text-4xl">
        Sobre mí
      </h2>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <div className="space-y-5 text-base leading-relaxed text-ink-light-dim dark:text-ink-dim">
          <p>
            Soy Steven López Parra, estudiante de octavo semestre de Administración de
            Sistemas Informáticos en la Universidad Nacional de Colombia. He trabajado en proyectos académicos de redes y virtualización (topologías
            completas en GNS3 con VLANs, DHCP, NAT y DMZ), desarrollo backend con Python y
            consumo de APIs, y actualmente estoy fortaleciendo mis habilidades de frontend y
            gestión web (HTML, CSS, JavaScript y WordPress). Además, he utilizado Laravel
            como framework de desarrollo web, incluso articulando una arquitectura de
            microservicios con React, separando frontend (React + Vite) de backend
            (Laravel).
          </p>
          <p>
            Me caracterizo por ser una persona organizada, con actitud de aprendizaje
            constante y capacidad de adaptarme rápido a nuevas herramientas y entornos de
            trabajo.
          </p>
        </div>

        <dl className="hover-glow h-fit space-y-4 rounded-lg border border-border dark:border-border bg-surface-light dark:bg-surface p-6">
          {DATA_SHEET.map((item) => (
            <div key={item.label} className="border-b border-border/60 dark:border-border/60 pb-4 last:border-0 last:pb-0">
              <dt className="font-mono text-xs uppercase tracking-wide text-cyan">{item.label}</dt>
              <dd className="mt-1 text-sm text-ink-light dark:text-ink">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
