/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Primary: '#101010',
        StarGold: '#FFB730',
      },
      fontFamily: {
        Poppins : ['"Poppins", sans-serif'],
        Manrope : ['"Manrope" , sans-serif'],
        DMSans : ['"DM Sans" , sans-serif'],
        WorkSans: ['"Work Sans", sans-serif']
      },
    },
  },
  plugins: [],
}

