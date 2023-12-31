/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
      }
    },
    screens: {
      'sm': '480px',
      'md': '600px',
      'mds': '768px', 
      'lg': '1024px',
      'xl': '1280px'
    }
  },
  plugins: [],
}

