/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        height: "60vh",
        transform: "-translateY(10%)",
        
      },

      screens: {
        sm: "340px",
        md1: "414px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      '.transition-all': {
        transition: 'all 0.5s ease 0.4s',
      },
      variants: {
        extend: {
          visibility: ["group-hover"],
        },
      },
    },
  },
  plugins: [],
};
