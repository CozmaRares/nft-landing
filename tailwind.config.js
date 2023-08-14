/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        midnightBlue: "#000330",
        violetBlue: "#474BB8",
        darkIndigo: "#29235D",
        paleAqua: "#AAD9D9",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
