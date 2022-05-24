const defaultTheme = require("tailwindcss/lib/public/default-theme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "vg-green": "#2FCCA1",
        "vg-dark-green": "#009F7F",
        TextBlue: "#171E6B",
        TextGrey: "#808080",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('/src/assets/background.png')",
      },
    },
  },
  plugins: [],
};
