// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bogle-black': ['Bogle Black', 'sans-serif'],
        'bogle-black-italic': ['Bogle Black Italic', 'sans-serif'],
        'bogle-bold': ['Bogle Bold', 'sans-serif'],
        'bogle-bold-italic': ['Bogle Bold Italic', 'sans-serif'],
        'bogle-regular': ['Bogle Regular', 'sans-serif'],
        'bogle-regular-italic': ['Bogle Regular Italic', 'sans-serif'],
      },
      colors: {
        'walmart-blue': '#0071ce',
        'walmart-dark-blue': '#041f41',
        'walmart-yellow': '#ffc220',
      },
    },
  },
  plugins: [],
}
