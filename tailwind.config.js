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
        satoshi: ['"Satoshi"', 'sans-serif'], // ✅ Add this line
        sans: ['"Satoshi"', 'sans-serif'],    // ✅ Optionally override default
      },
    },
  },
  plugins: [],
};
