/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        axon: {
          background: "#fff0d5",
          text: "#04253e",
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // you can load Inter via Google Fonts if you like
      },
    },
  },
  plugins: [],
};
