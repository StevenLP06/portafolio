/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // toggle manual persistente vía localStorage (ver useTheme.js)
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0B0F19', // fondo oscuro
          light: '#F5F7FA', // fondo claro
        },
        surface: {
          DEFAULT: '#131A2B',
          2: '#1B2438',
          light: '#FFFFFF',
          'light-2': '#EDF1F7',
        },
        border: {
          DEFAULT: '#26314A',
          light: '#DCE3EE',
        },
        ink: {
          DEFAULT: '#E7ECF5', // texto claro (sobre fondo oscuro)
          dim: '#8A94AD',
          light: '#1B2333', // texto sobre fondo claro
          'light-dim': '#5B6478',
        },
        cyan: '#4FD6C4', // acento primario
        magenta: '#E85D9E', // acento secundario
        amber: '#F5B841', // acento cálido (CTA / uso mínimo)
        'glow-purple': '#7C5CFC',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        body: ['Inter', 'sans-serif'],
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        'drift-a': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(30px, 20px) scale(1.05)' },
        },
        'drift-b': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-25px, -15px) scale(1.05)' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        glow: 'glow 3s ease-in-out infinite',
        'drift-a': 'drift-a 18s ease-in-out infinite',
        'drift-b': 'drift-b 22s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
