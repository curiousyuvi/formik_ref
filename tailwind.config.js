/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./reusableComponents/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: "360px",
      // => @media (min-width: 640px) { ... }

      mobileMd: "440px",
      // => @media (min-width: 1024px) { ... }

      mobileLg: "550px",
      // => @media (min-width: 1280px) { ... }
      tabletSm: "678px",
      tabletMd: "810px",
      tabletLg: "1024px",
      laptopSm: "1260px",
      laptopMd: "1530px",
    },
    extend: {
      colors: {
        "light-white": "#F4F4F7",
        "light-blue": "#A5D7E8",
        "dark-blue": "#0B2447",
      },
    },
  },
  plugins: [require("daisyui")],
};
