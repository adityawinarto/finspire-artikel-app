/** @type {import('tailwindcss').Config} */
module.exports = {
  // Update content paths to include all component files
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./App.tsx",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#10b981", // Emerald-500 for primary color
          dark: "#059669", // Emerald-600 for darker variant
        },
        secondary: {
          DEFAULT: "#f59e0b", // Amber-500 for secondary color
          dark: "#d97706", // Amber-600 for darker variant
        },
      },
    },
  },
  plugins: [],
};
