/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        'accent': '#64748b', // Slate 500
        'primary': '#0f172a', // Slate 900
        'secondary': '#475569', // Slate 600
      }
    },
  },
  plugins: [],
}
