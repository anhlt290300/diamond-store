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
        'white_' : '#767f88',
        'backgrounditem': '#f8f9fa',
        'backgrounditem2': '#e9ecef',       
        'mark': 'rgba(0,0,0,0.5)'
      },
      colors: {
        'main': '#f8f9fa',
        'second': '#f8f9fa',
        'backgrounditem': '#f8f9fa'
      }
    },
  },
  plugins: [],
}