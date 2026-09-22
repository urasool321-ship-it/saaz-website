import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#0B0B0B',
        cream: '#F5EBD7',
        emerald: '#0F3D2E',
        burgundy: '#681F2D',
        gold: '#C9A96A',
        ink: '#111111',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-manrope)', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        grain: 'radial-gradient(rgba(255,255,255,0.08) 0.5px, transparent 0.5px)',
      },
      boxShadow: {
        soft: '0 20px 60px rgba(0,0,0,0.25)',
      },
      letterSpacing: {
        title: '-0.04em',
      },
    },
  },
  plugins: [],
};

export default config;
