/** @type {import('tailwindcss').Config} */
export default {
  content: [
     './src/**/*.html',
     './src/**/*.jsx',
],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/assets/wedding.jpg')",
      }
    },
  },
  plugins: [],
}

