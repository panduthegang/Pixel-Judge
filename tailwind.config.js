/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vintage: {
          cream: '#FDFBF7',
          charcoal: '#1A1A1A',
          red: '#C0392B',
          gold: '#D4AC0D',
          paper: '#F4F1EA',
          border: '#2C2C2C',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        mono: ['"Courier Prime"', 'monospace'],
        sans: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'retro': '4px 4px 0px 0px rgba(26, 26, 26, 1)',
        'retro-hover': '2px 2px 0px 0px rgba(26, 26, 26, 1)',
      }
    },
  },
  plugins: [],
}