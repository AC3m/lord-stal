/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ffc20a', //yellow
        },
        secondary: {
          DEFAULT: '#69727d', //grey
        },
        bg: {
          DEFAULT: '#00102E', //dark blue
        }
      },
    },
  },
  plugins: [],
}