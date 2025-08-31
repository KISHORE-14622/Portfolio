/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EF233C',
        dark: '#0b0a0a',
        light: '#f3f0f0',
        accent: '#d70a0a',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite',
      }
    },
  },
  plugins: [],
}
