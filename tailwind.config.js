/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    fontFamily: {
      serif: ["Merriweather", "serif"],
      poppins: ["Popins", "sans-serif"],
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1124px",
      xl: "1124px",
      "2xl": "1124px",
    },
    colors: {
      accent: "#66da42",
      accent2: "99E002",
      txt: "#cbcbcb",
    },
    extend: {},
  },
  plugins: [],
};
