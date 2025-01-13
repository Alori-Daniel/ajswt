/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        Ithin: ["Instrument Sans", "serif"],
        Iitalic: ["Instrument Sans", "serif"],
        Ibold: ["Instrument Sans", "serif"],
        pregular: ["Playball-Regular", "serif"],
        Ritalic: ["Roboto-Italic", "serif"],
        Rsemibold: ["Roboto-Extrabold", "serif"],
      },
    },
  },
  plugins: [],
}

