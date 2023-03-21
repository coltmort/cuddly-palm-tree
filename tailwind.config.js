/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./views/**/*.handlebars'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
    },},
  },
  plugins: [
    // require('@tailwindcss/line-clamp'),
  ],
}
