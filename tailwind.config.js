/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // fontFamily:{
    //     sans:[
    //       'ui-sans-serif',
    //       'system-ui',
    //       'Roboto',
    //       'Arial',
    //       'sans-serif',
    //       'Helvetica Neue',
    //     ]
    // },
    extend: {
      fontFamily: {
            sans: ['Poppins', ...defaultTheme.fontFamily.sans]
          }
    },
  },
  plugins: [],
}