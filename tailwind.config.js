const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        prussian: {
          DEFAULT: "#4C59E6",
          dark: "#515796",
          darker: "#3D405C",
          light: "#ABB1ED",
          lighter: "#EFF0FB",
        },
      },
      fontFamily: {
        sans: ["Maison", ...fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
