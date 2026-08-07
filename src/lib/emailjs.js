import emailjs from '@emailjs/browser';

/**
 * Credenciales de EmailJS leídas de variables de entorno (ver .env.example).
 * Los valores por defecto son placeholders claramente identificables: Steven
 * debe crear su cuenta en https://www.emailjs.com/, generar sus propios
 * SERVICE_ID / TEMPLATE_ID / PUBLIC_KEY y colocarlos en un archivo ".env"
 * (nunca commiteado con claves reales — spec sección 8).
 */
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'REEMPLAZAR_SERVICE_ID';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'REEMPLAZAR_TEMPLATE_ID';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'REEMPLAZAR_PUBLIC_KEY';

/**
 * Envía el formulario de contacto vía EmailJS. Lanza si la llamada falla,
 * para que ContactForm.jsx pueda mostrar el estado de error correspondiente.
 *
 * @param {{ name: string, email: string, message: string }} formData
 */
export async function sendContactEmail(formData) {
  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    },
    { publicKey: PUBLIC_KEY }
  );
}
