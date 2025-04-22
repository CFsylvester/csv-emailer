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
        deepNavy: '#1c2541', // the background color you showed
        lightNavy: '#27345c',
      },
      boxShadow: {
        neumorphic: `
         0px 4px 12px rgba(0, 0, 0, 0.5), 0px 1px 3px rgba(0, 0, 0, 0.3)
        `,
        'neumorphic-inset': `
         inset 0px 2px 4px rgba(0, 0, 0, 0.5), inset 0px 1px 2px rgba(0, 0, 0, 0.3)
        `,
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
