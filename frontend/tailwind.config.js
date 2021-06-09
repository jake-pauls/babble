const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./public/*.html",
    "./src/**/*.vue"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#8A24F0",
      secondary: "#002863",
      highlight: "#DB25A8",
      black: "#2A2A34",
      white: "#fff"
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
