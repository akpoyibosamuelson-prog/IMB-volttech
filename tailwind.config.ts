import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        volt: {
          50: '#f5f7ff',
          100: '#ebf1ff',
          500: '#2f6bff',
          600: '#1d4ed8',
          700: '#1c3fb3',
          900: '#111827',
        },
        ember: {
          500: '#f59e0b',
          600: '#d97706',
        },
        success: '#10b981',
        danger: '#ef4444',
      },
      boxShadow: {
        soft: '0 16px 40px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [],
} satisfies Config;
