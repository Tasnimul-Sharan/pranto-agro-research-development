/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5b8c51",
        Secound_primary: "#0e4e96",
        secondary: "#000000",
        secondary_two: "#757576",
        border_color: "#e5e7eb",
        soft_black: `#1A1A1A`,
      },
    },
    keyframes: {
      ripple: {
        "0%": {
          boxShadow: "inset 0 0 0 0 rgba(91, 140, 81, 0.6)",
        },
        "70%": {
          boxShadow: "inset 0 0 0 15px rgba(91, 140, 81, 0)",
        },
        "100%": {
          boxShadow: "inset 0 0 0 0 rgba(91, 140, 81, 0)",
        },
      },
    },
    animation: {
      ripple: "ripple 2s infinite",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
