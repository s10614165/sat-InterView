/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        'basic':'rgba(239,246,255,1)',
        'second':'rgba(128,148,172,1)',
        scrollbar: ['rounded']
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}

