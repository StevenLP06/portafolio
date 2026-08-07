import ContactForm from './ContactForm.jsx';
import ContactInfo from './ContactInfo.jsx';

export default function ContactSection() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <p className="font-mono text-sm text-cyan">/contacto</p>
      <h2 className="mt-3 font-display text-3xl font-semibold text-ink-light dark:text-ink sm:text-4xl">
        Contacto
      </h2>
      <p className="mt-3 max-w-lg text-sm text-ink-light-dim dark:text-ink-dim">
        ¿Tienes un proyecto en mente o una vacante disponible? Escríbeme por el formulario o
        por cualquiera de estos canales.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
}
