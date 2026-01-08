/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1a0f1a',
        'dark-surface': '#2c1b2c',
        'dark-border': '#583658',
        'dark-text-primary': '#fce7f3',
        'dark-text-secondary': '#f9a8d4',
        'dark-accent': '#f472b6',
      }
    }
  },
  plugins: [],
}
