import { useState } from 'react';
import Button from '../ui/Button.jsx';
import {
  MESSAGE_MAX_LENGTH,
  isFormValid,
  isHoneypotFilled,
  validateContactForm,
} from '../../lib/validators.js';
import { sendContactEmail } from '../../lib/emailjs.js';

const EMPTY_FORM = { name: '', email: '', message: '', website: '' };
const RESEND_COOLDOWN_MS = 15000; // deshabilita el botón tras un envío exitoso (spec 5.5)

/**
 * Estados posibles del envío: 'idle' | 'sending' | 'success' | 'error'.
 * El mensaje de confirmación/error se muestra inline, nunca con alert().
 */
export default function ContactForm() {
  const [values, setValues] = useState(EMPTY_FORM);
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle');
  const [cooldown, setCooldown] = useState(false);

  const errors = validateContactForm(values);
  const formValid = isFormValid(errors);

  function handleChange(field) {
    return (event) => {
      setValues((prev) => ({ ...prev, [field]: event.target.value }));
    };
  }

  function handleBlur(field) {
    return () => setTouched((prev) => ({ ...prev, [field]: true }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setTouched({ name: true, email: true, message: true });

    if (!formValid || cooldown) return;

    // Honeypot: si el campo oculto tiene contenido, se bloquea el envío en
    // silencio (sin feedback, para no delatar el mecanismo a un bot).
    if (isHoneypotFilled(values.website)) {
      setStatus('success');
      setValues(EMPTY_FORM);
      return;
    }

    setStatus('sending');
    try {
      await sendContactEmail(values);
      setStatus('success');
      setValues(EMPTY_FORM);
      setTouched({});
      setCooldown(true);
      setTimeout(() => setCooldown(false), RESEND_COOLDOWN_MS);
    } catch {
      setStatus('error');
    }
  }

  const submitDisabled = !formValid || status === 'sending' || cooldown;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="font-mono text-xs uppercase tracking-wide text-cyan">
          Nombre
        </label>
        <input
          id="name"
          type="text"
          value={values.name}
          onChange={handleChange('name')}
          onBlur={handleBlur('name')}
          className="mt-2 w-full rounded-md border border-border dark:border-border bg-surface-light dark:bg-surface px-4 py-2.5 text-sm text-ink-light dark:text-ink transition-colors duration-300 focus:border-cyan"
          aria-invalid={Boolean(touched.name && errors.name)}
          aria-describedby="name-error"
        />
        {touched.name && errors.name && (
          <p id="name-error" className="mt-1.5 text-xs text-magenta">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="font-mono text-xs uppercase tracking-wide text-cyan">
          Correo
        </label>
        <input
          id="email"
          type="email"
          value={values.email}
          onChange={handleChange('email')}
          onBlur={handleBlur('email')}
          className="mt-2 w-full rounded-md border border-border dark:border-border bg-surface-light dark:bg-surface px-4 py-2.5 text-sm text-ink-light dark:text-ink transition-colors duration-300 focus:border-cyan"
          aria-invalid={Boolean(touched.email && errors.email)}
          aria-describedby="email-error"
        />
        {touched.email && errors.email && (
          <p id="email-error" className="mt-1.5 text-xs text-magenta">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <div className="flex items-baseline justify-between">
          <label htmlFor="message" className="font-mono text-xs uppercase tracking-wide text-cyan">
            Mensaje
          </label>
          <span className="font-mono text-xs text-ink-light-dim dark:text-ink-dim">
            {values.message.length}/{MESSAGE_MAX_LENGTH}
          </span>
        </div>
        <textarea
          id="message"
          rows={5}
          maxLength={MESSAGE_MAX_LENGTH}
          value={values.message}
          onChange={handleChange('message')}
          onBlur={handleBlur('message')}
          className="mt-2 w-full resize-none rounded-md border border-border dark:border-border bg-surface-light dark:bg-surface px-4 py-2.5 text-sm text-ink-light dark:text-ink transition-colors duration-300 focus:border-cyan"
          aria-invalid={Boolean(touched.message && errors.message)}
          aria-describedby="message-error"
        />
        {touched.message && errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-magenta">
            {errors.message}
          </p>
        )}
      </div>

      {/* Honeypot anti-spam: oculto vía posicionamiento (no display:none) e
          inaccesible para lectores de pantalla; algunos bots sí completan
          display:none, por eso se usa position absolute fuera de vista. */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }}>
        <label htmlFor="website">Sitio web</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={handleChange('website')}
        />
      </div>

      <Button type="submit" variant="primary" disabled={submitDisabled} className="w-full">
        {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
      </Button>

      {status === 'success' && (
        <p role="status" className="text-sm text-cyan">
          Mensaje enviado. Gracias por escribir, te responderé pronto.
        </p>
      )}
      {status === 'error' && (
        <p role="alert" className="text-sm text-magenta">
          Algo falló al enviar el mensaje. Intenta de nuevo en unos minutos.
        </p>
      )}
    </form>
  );
}
