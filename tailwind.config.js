/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#faf8f5',
          100: '#f5f0e8',
          200: '#e8ddd0',
          300: '#d9c5b0',
          400: '#c7a88a',
          500: '#b8926f',
          600: '#a67d5a',
          700: '#8a6549',
          800: '#71543d',
          900: '#5d4533',
        },
        brown: {
          50: '#faf7f4',
          100: '#f3ede5',
          200: '#e5d8c8',
          300: '#d4bea8',
          400: '#c19f7f',
          500: '#b0855f',
          600: '#9d6f4d',
          700: '#825840',
          800: '#6b4835',
          900: '#573c2d',
        },
      },
    },
  },
  plugins: [],
}

