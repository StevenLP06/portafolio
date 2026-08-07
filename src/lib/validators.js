/**
 * Cada validador devuelve un string de error (mensaje directo, nunca
 * genérico) o null si el valor es válido. Se evalúan en 'input'/'blur' en
 * tiempo real, no solo al enviar (sección 5.5).
 */

const NAME_REGEX = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const MESSAGE_MIN_LENGTH = 10;
export const MESSAGE_MAX_LENGTH = 500;

export function validateName(value) {
  const trimmed = value.trim();
  if (!trimmed) return 'El nombre es obligatorio.';
  if (trimmed.length < 2) return 'El nombre debe tener al menos 2 caracteres.';
  if (!NAME_REGEX.test(trimmed)) return 'El nombre solo puede contener letras y espacios.';
  return null;
}

export function validateEmail(value) {
  const trimmed = value.trim();
  if (!trimmed) return 'El correo es obligatorio.';
  if (!EMAIL_REGEX.test(trimmed)) return 'Ingresa un correo válido, como nombre@dominio.com.';
  return null;
}

export function validateMessage(value) {
  const trimmed = value.trim();
  if (!trimmed) return 'El mensaje es obligatorio.';
  if (trimmed.length < MESSAGE_MIN_LENGTH) {
    return `El mensaje debe tener al menos ${MESSAGE_MIN_LENGTH} caracteres.`;
  }
  if (trimmed.length > MESSAGE_MAX_LENGTH) {
    return `El mensaje no puede superar los ${MESSAGE_MAX_LENGTH} caracteres.`;
  }
  return null;
}

/**
 * Honeypot: si este campo oculto llega con contenido, es casi seguro un bot.
 * No se muestra ningún error al "usuario" (bot) — el envío se bloquea en
 * silencio, tal como pide la spec (sección 5.5).
 */
export function isHoneypotFilled(value) {
  return Boolean(value && value.trim().length > 0);
}

export function validateContactForm({ name, email, message }) {
  return {
    name: validateName(name),
    email: validateEmail(email),
    message: validateMessage(message),
  };
}

export function isFormValid(errors) {
  return Object.values(errors).every((error) => error === null);
}
