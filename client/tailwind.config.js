/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        greenback: "url('/src/assets/greenback.jpg')",
        aboutback: "url('/src/assets/aboutback.jpg')",
        careback: "url('/src/assets/careback.jpg')",
        ambulance: "url('/src/assets/ambulance.jpg')",
      },
    },
  },
  plugins: [],
};
