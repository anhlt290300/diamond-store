/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      backgroundColor: {
        'main': "#17a2b8",
        'second': "#fe7e73",
        'white_': '#767f88',
        'backgrounditem': '#f8f9fa',
        'backgrounditem2': '#e9ecef',
        'mark': 'rgba(0,0,0,0.5)',
        'none_' : 'rgba(0,0,0,0.1)',
      },

      colors: {
        'main': '#f8f9fa',
        'second': '#f8f9fa',
        'backgrounditem': '#f8f9fa'
      },

      keyframes: {
        fadeUp: {
          '0%': { transform: 'translate(0,1rem)' },
          '100%': { transform: 'translate(0,0)' },
        }
      },

      animation: {
        fadeUp: 'fadeUp 0.25s ease-in-out 1',
      }
      
    },
  },
  plugins: [],
}