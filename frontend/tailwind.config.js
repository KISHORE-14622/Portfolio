/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A855F7",   // Purple-500
        secondary: "#3B82F6", // Blue-500
        accent: "#06B6D4",    // Cyan-500
        "purple-glow": "#A855F7",
        "blue-glow": "#3B82F6",
        "cyan-glow": "#06B6D4",
        "dark-card": "#0a0a0a", // Very dark gray for cards on black background
        "dark": "#000000",      // Pure black
        "light": "#E2E8F0",     // Light gray for text
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 15s ease infinite',
        'typing': 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#A855F7' },
        },
      },
    },
  },
  plugins: [],
}
