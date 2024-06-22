/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1400px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "850px" },
      "mobile-lg": { max: "550px" },
      mobile: { max: "475px" },
      "mobile-sm": { max: "440px" },
      sm: { max: "400px" },
      vsm: { max: "350px" },

      "height-lg": { raw: "(max-height: 775px)" },
      "height-md": { raw: "(max-height: 645px)" },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        pulsing: {
          "0%": { opacity: "1" },
          "40%": { opacity: "0" },
          "70%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        pulsing: "pulse 0.9s infinite ease-in-out",
      },
      colors: {
        primary: "#fff",
        secondary: "#ff4545",
        neutral: {
          dark: "#101010",
          medium: "rgb(0 0 0 / 0.6)",
        },
        background: {
          light: "#fff",
          medium: "#f4f5fa",
        },
      },
      spacing: {
        container: "1440px",
      },
      extend: {
        boxShadow: {
          contactShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        },
      },
    },
  },
  plugins: [],
};
