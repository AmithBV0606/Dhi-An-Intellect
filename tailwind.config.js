/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'gradient': 'gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
      },

      keyframes:{
        effect: {
          "0%" : {opacity : '0'},
          "100%": {opacity : '1'}
        }
      },

      animation: {
        'fadeIn': 'effect 2s',
      }
    },
  },
  plugins: [],
}