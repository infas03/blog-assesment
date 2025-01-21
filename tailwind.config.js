/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],
  theme: {
    extend: {
      boxShadow: {
        'header-shadow': '0 1px 4px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}

