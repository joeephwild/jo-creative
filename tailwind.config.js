/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        "cabinentLight": ['cabinentLight', 'sans-serif'],
        "cabinentExtraLight": ['cabinentExtraLight', 'sans-serif'],
        "panchangBold": ['PanchangBold', 'sans-serif'],
        "panchangExtraBold": ['PanchangExtraBold', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
