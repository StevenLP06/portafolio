import { certifications } from '../../data/certifications.js';
import CertificationCard from './CertificationCard.jsx';

export default function CertificationsSection() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <p className="font-mono text-sm text-cyan">/certificaciones</p>
      <h2 className="mt-3 font-display text-3xl font-semibold text-ink-light dark:text-ink sm:text-4xl">
        Certificados
      </h2>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((certification) => (
          <CertificationCard key={certification.id} certification={certification} />
        ))}
      </div>
    </div>
  );
}
