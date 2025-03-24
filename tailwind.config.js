/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Primary: '#101010'
      },
      fontFamily: {
        Poppins : ['"Poppins", sans-serif'],
        Manrope : ['"Manrope" , sans-serif'],
        DMSans : ['"DM Sans" , sans-serif'],
      },
    },
  },
  plugins: [],
}

