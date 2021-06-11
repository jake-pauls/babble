const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./public/*.html', './src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#8A24F0',
      secondary: '#002863',
      highlight: {
        light: '#ff52cf',
        DEFAULT: '#DB25A8',
        dark: '#8a1168'
      },
      black: {
        light: '#2A2A34',
        DEFAULT: '#212121',
        dark: '#0e0e0e'
      },
      white: '#fff',
      gray: colors.trueGray,
      red: colors.red
    },
    rotate: {
      135: '135deg'
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
