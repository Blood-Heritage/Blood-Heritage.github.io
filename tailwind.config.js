/** @type {import('tailwindcss').Config} */
export default {
  plugins: [],
    theme: {
    extend: {},
  },
  content: ["./index.html",'./src/**/*.{svelte,js,ts,css}'], // for unused CSS
  variants: {
    extend: {},
  },
  darkMode: 'class', // or 'media' or 'class'
}
