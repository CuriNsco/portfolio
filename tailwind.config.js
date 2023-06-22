/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary:'#0d2f3f'
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 2)',
      },
    },
  },
  plugins: [],
}