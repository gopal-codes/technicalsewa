/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xsm: "320px",
        sm: "480px",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
