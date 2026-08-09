import AmbientBackground from './components/layout/AmbientBackground.jsx';
import Navbar from './components/layout/Navbar.jsx';
import Hero from './components/hero/Hero.jsx';
import AboutMe from './components/about/AboutMe.jsx';
import SkillsSection from './components/skills/SkillsSection.jsx';
import ProjectsSection from './components/projects/ProjectsSection.jsx';
import CertificationsSection from './components/certifications/CertificationsSection.jsx';
import ContactSection from './components/contact/ContactSection.jsx';
import SectionWrapper from './components/shared/SectionWrapper.jsx';
import WhatsAppButton from './components/shared/WhatsAppButton.jsx';
import { CONTACT_INFO, SITE_META } from './constants/site.js';

export default function App() {
  return (
    <div className="min-h-screen text-ink-light dark:text-ink transition-colors duration-300">
      <AmbientBackground />
      <Navbar />

      <main>
        {/* El Hero no usa SectionWrapper (fade-in) para no retrasar la
            primera impresión: debe estar visible de inmediato al cargar. */}
        <section id="inicio">
          <Hero />
        </section>

        <SectionWrapper id="sobre-mi">
          <AboutMe />
        </SectionWrapper>

        <SectionWrapper id="habilidades">
          <SkillsSection />
        </SectionWrapper>

        <SectionWrapper id="proyectos">
          <ProjectsSection />
        </SectionWrapper>

        <SectionWrapper id="certificaciones">
          <CertificationsSection />
        </SectionWrapper>

        <SectionWrapper id="contacto">
          <ContactSection />
        </SectionWrapper>
      </main>

      <footer className="border-t border-border dark:border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-center text-xs text-ink-light-dim dark:text-ink-dim sm:flex-row sm:text-left sm:px-6">
          <p>
            © {new Date().getFullYear()} {SITE_META.name}. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan">
              GitHub
            </a>
            {/* Espacio reservado para LinkedIn si se confirma más adelante (spec sección 10) */}
            {CONTACT_INFO.linkedin && (
              <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan">
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
}
