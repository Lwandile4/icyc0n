/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        icy: {
          main: '#4092ef',
          secondary: '#0079d2',
          deep: '#003683',
          dark: '#001358',
          accent: '#0079d2'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      keyframes: {
        'star-btn': {
          '0%': { 'offset-distance': '0%' },
          '100%': { 'offset-distance': '100%' }
        }
      },
      animation: {
        'star-btn': 'star-btn var(--duration) linear infinite'
      }
    },
  },
  plugins: [],
}

