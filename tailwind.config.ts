import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#edf4ff',
          100: '#dbeafe',
          500: '#1d4ed8',
          700: '#1e3a8a',
          900: '#0b1c4d'
        }
      },
      boxShadow: {
        soft: '0 20px 60px rgba(11, 28, 77, 0.12)'
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(110deg, rgba(11,28,77,0.85) 0%, rgba(29,78,216,0.35) 60%, rgba(255,255,255,0.05) 100%)'
      }
    }
  },
  plugins: []
};

export default config;
