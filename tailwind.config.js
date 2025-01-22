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
      colors: {
        black1: '#222222',
        gray1: '#6C757D',
        gray2: '#495057',
        gray3: '#6C757D',
        lightGray: '#F9F9F9'
      },
    },
  },
  plugins: [],
}

