/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        basic: 'rgba(239,246,255,1)',
        second: 'rgba(128,140,190,1)',
        delete: 'rgba(207,213,240,1)',
        scrollbar: ['rounded'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
};
