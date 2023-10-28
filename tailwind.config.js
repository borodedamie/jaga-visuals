/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        height: "60vh",
        safelist: "animate-[fade-in-up_1s_ease-in-out]",
        transform: "translateY(-50%)",
      },

      screens: {
        sm: "340px",
        md1: "414px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
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
