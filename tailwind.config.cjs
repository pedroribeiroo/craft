/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#FFF",

      gray: {
        900: "#121414",
        800: "#202020",
        400: "#343434",
        300: "#94948E",
        200: "#c4c4cc",
        100: "#e1e1e6",
      },

      blue: {
        600: "#002543",
        400: "#008EFF",
        200: "#74C1FF",
      },
      red: {
        1000: "#371818",
        400: "#FF4242",
        200: "#FF7070",
      },
      green: {
        800: "#003E11",
        200: "#5AFF88",
      },
    },
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        html: { fontSize: "62.5%" },
        body: { fontSize: "1.6rem" },
      });
    }),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
