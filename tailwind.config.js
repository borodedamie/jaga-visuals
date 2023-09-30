/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'height': '60vh',
        "safelist": 'animate-[fade-in-up_1s_ease-in-out]',
        'transform': 'translateY(-50%)'
      }
    },
  },
  plugins: [],
}