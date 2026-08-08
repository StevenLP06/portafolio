import Terminal from './Terminal.jsx';
import Button from '../ui/Button.jsx';
import { CONTACT_INFO } from '../../constants/site.js';

export default function Hero() {
  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1.1fr_1fr] lg:items-center">
      <div>
        <p className="font-mono text-sm text-cyan">/inicio</p>
        <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink-light dark:text-ink sm:text-5xl">
          Hola, soy Steven — desarrollador web y de software
        </h1>
        <p className="mt-5 max-w-lg text-base text-ink-light-dim dark:text-ink-dim sm:text-lg">
          Construyo productos web, redes y flujos automatizados, y estoy aprendiendo a
          moverlos a la nube con buenas prácticas de principio a fin.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button as="a" href="#proyectos" variant="primary">
            Ver proyectos
          </Button>
          <Button as="a" href="#contacto" variant="secondary">
            Contactar
          </Button>
          <Button as="a" href={CONTACT_INFO.github} target="_blank" rel="noopener" variant="ghost">
            GitHub ↗
          </Button>
        </div>
      </div>

      <Terminal />
    </div>
  );
}
