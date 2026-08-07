export default function CertificationCard({ certification }) {
  return (
    <article className="hover-glow flex flex-col rounded-lg border border-border dark:border-border bg-surface-light dark:bg-surface p-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-surface-light-2 dark:bg-surface-2 text-cyan" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
          <path d="M12 15c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6z" />
          <path d="M8.5 13.5 7 21l5-2.5L17 21l-1.5-7.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <h3 className="mt-4 font-display text-base font-semibold text-ink-light dark:text-ink">
        {certification.title}
      </h3>
      <p className="mt-1 font-mono text-xs text-ink-light-dim dark:text-ink-dim">
        {certification.issuer}
      </p>

      <a
        href={certification.file}
        download
        className="mt-4 inline-flex items-center gap-1.5 font-mono text-sm text-cyan transition-colors hover:text-cyan/80"
      >
        Descargar certificado ↓
      </a>
    </article>
  );
}
