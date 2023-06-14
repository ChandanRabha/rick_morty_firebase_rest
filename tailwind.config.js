/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        mainBG: "linear-gradient(to right,black, #64ee44,black)"
      }
    },
  },
  plugins: [],
}