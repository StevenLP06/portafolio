import { NAV_LINKS } from '../../constants/site.js';
import ThemeToggle from './ThemeToggle.jsx';
import Button from '../ui/Button.jsx';

export default function Navbar() {
  const [brand, ...tabs] = NAV_LINKS;
  const contactTab = tabs.find((tab) => tab.id === 'contacto');
  const middleTabs = tabs.filter((tab) => tab.id !== 'contacto');

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 dark:border-border/60 bg-bg-light/80 dark:bg-bg/80 backdrop-blur-md transition-colors duration-300">
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6"
      >
        {/* Marca, despegada del extremo izquierdo (sección 3.3) */}
        <a
          href={`#${brand.id}`}
          className="shrink-0 font-mono text-lg font-semibold text-cyan transition-colors hover:text-cyan/80"
        >
          {brand.label}
        </a>

        {/* Pestañas: scroll horizontal en móvil sin romper el layout */}
        <div className="flex min-w-0 flex-1 items-center justify-end gap-1 overflow-x-auto scrollbar-hide sm:gap-2">
          <ul className="flex shrink-0 items-center gap-1 sm:gap-2">
            {middleTabs.map((tab) => (
              <li key={tab.id}>
                <a
                  href={`#${tab.id}`}
                  className="whitespace-nowrap rounded-md px-3 py-2 font-mono text-sm text-ink-light-dim dark:text-ink-dim transition-colors duration-300 hover:text-cyan"
                >
                  {tab.label}
                </a>
              </li>
            ))}
          </ul>

          {contactTab && (
            <Button as="a" href={`#${contactTab.id}`} variant="primary" className="ml-1 shrink-0">
              {contactTab.label}
            </Button>
          )}

          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
