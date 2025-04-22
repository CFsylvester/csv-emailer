/** @type {import('tailwindcss').Config} */

const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './public/**/*.{html,svg}'],
  theme: {
    extend: {
      screens: {
        xs: '320px',
        sm: '360px',
        md: '656px',
        lg: '1024px',
      },
      colors: {
        navy: '#1e293b',
        lightNavy: '#334155',
        accent: '#0ea5e9',
      },
      boxShadow: {
        neumorphic: '8px 8px 16px #121c2c, -8px -8px 16px #243b5e',
        'neumorphic-inset': 'inset 8px 8px 16px #121c2c, inset -8px -8px 16px #243b5e',
      },
      gridTemplateColumns: {
        4: 'repeat(4, minmax(0, 1fr))',
        12: 'repeat(12, minmax(0, 1fr))',
      },
      spacing: {
        '8px': '8px',
        '16px': '16px',
        '40px': '40px',
      },
    },
  },
  plugins: [],
};

module.exports = config;
