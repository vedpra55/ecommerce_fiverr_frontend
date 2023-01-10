/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pageComponents/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
      },
      colors: {
        main: "#1C8BCA",
      },
      backgroundImage: {
        "hero-pattern":
          "url('https://res.cloudinary.com/dtme6qv4c/image/upload/v1673353165/fiverr%20zara/hero.webp')",
      },
      fontFamily: {
        gilroy: "Gilroy",
      },
    },
  },
  plugins: [],
};
