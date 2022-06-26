/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: "#7b6c63",
        "primary-dark": "#050301",
        dark: "#24211e",
        "secondary-dark": "#26221f",
        neutral: "#949494",
      },
    },
    fontFamily: {
      os: ["Oleo Script", "cursive"],
      raleway: ["Raleway", "sans-serif"],
    },
  },
  plugins: [],
};
