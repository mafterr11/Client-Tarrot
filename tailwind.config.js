/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        xs: "390px",
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        xs: "390px",
        "2xl": "1400px",
      },
      colors: {
        accent: {
          // e4b373
          // F7EDBD
          DEFAULT: "#F3D66D",
          light: "#E4B373CC",
        },
        background: {
          DEFAULT: "#58182a",
        }
      },
      backgroundImage: {
        hero: "url('/4.jpg')",
        CTA: "url('/6.jpg')",
        contact: "url('/9.jpg')",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}