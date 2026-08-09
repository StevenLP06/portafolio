/**
 * AmbientBackground
 * Fondo fijo a pantalla completa, única fuente de verdad para el
 * background de toda la app:
 *  - Modo oscuro: base futurista + glows radiales en cian/púrpura.
 *  - Modo claro: color sólido plano (bg-light), sin glows.
 * Puramente decorativo: no intercepta eventos ni se anuncia a lectores
 * de pantalla, y respeta prefers-reduced-motion.
 */
export default function AmbientBackground() {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        >
            {/* Base: sólido en claro, degradado oscuro en dark */}
            <div className="absolute inset-0 bg-bg-light transition-colors duration-300 dark:bg-gradient-to-b dark:from-[#0A0A12] dark:via-[#0B0B18] dark:to-[#08080D]" />

            {/* Los glows solo existen en modo oscuro */}
            <div className="hidden dark:block">
                {/* Glow cian — superior izquierda */}
                <div
                    className="absolute -top-40 -left-40 h-[560px] w-[560px] rounded-full opacity-30 blur-[100px] motion-safe:animate-drift-a sm:blur-[140px]"
                    style={{ background: 'radial-gradient(circle, #4FD6C4 0%, transparent 70%)' }}
                />

                {/* Glow púrpura — inferior derecha */}
                <div
                    className="absolute -bottom-52 -right-32 h-[620px] w-[620px] rounded-full opacity-25 blur-[110px] motion-safe:animate-drift-b sm:blur-[160px]"
                    style={{ background: 'radial-gradient(circle, #7C5CFC 0%, transparent 70%)' }}
                />

                {/* Acento secundario cian — centro derecha, aporta profundidad */}
                <div
                    className="absolute top-1/3 right-10 hidden h-[320px] w-[320px] rounded-full opacity-20 blur-[120px] md:block"
                    style={{ background: 'radial-gradient(circle, #4FD6C4 0%, transparent 70%)' }}
                />
            </div>
        </div>
    );
}