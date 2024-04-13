/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#0064fa",
        "primary-hover": "#0052cc",
      },
      backgroundImage: {
        gradient: "linear-gradient(to bottom,var(--white),var(--primary-50))",
      },
      colors: {
        gray1: "#f7f6fe",
        primary: "#0064fa",
        "primary-hover": "#0052cc",
        secondary: "#eef0f3",
        dark: "#1d2023",
        gray2: "#1b2429",
      },
    },
  },
  plugins: [],
};
