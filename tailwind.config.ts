import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        volt: {
          50: '#eefbff',
          100: '#d8f4ff',
          500: '#1ca3ff',
          600: '#0d86d8',
          700: '#0a5ea3',
          900: '#0c2d4f',
        },
        ember: {
          500: '#ff8a3d',
          600: '#f86b1d',
        },
      },
      boxShadow: {
        soft: '0 12px 30px rgba(12,45,79,0.12)',
      },
    },
  },
  plugins: [],
};

export default config;
