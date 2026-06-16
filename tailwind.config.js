/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-pink': '#FFA6C9',
        'theme-pink-light': '#FFB6C1',
        'theme-text': '#333333',
        'theme-bg': '#FFFFFF',
        'theme-gray': '#F5F5F5',
      },
      fontFamily: {
        'cursive': ['"Dancing Script"', 'cursive'],
        'typewriter': ['"Courier Prime"', 'monospace', 'serif'],
        'body': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
