/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        rounded: ['Rounded', "sans-serif"],
        "thebold": ['theboldfont', 'sans-serif'],
        "raleway-thin": ["Raleway Thin", "sans-serif"],
        "raleway-extrathin": ["Raleway ExtraLight", "sans-serif"],
        "raleway-light": ["Raleway Light", "sans-serif"],
        "raleway-regular": ["Raleway Regular", "sans-serif"],
        "raleway-medium": ["Raleway Medium", "sans-serif"],
        "raleway-semibold": ["Raleway SemiBold", "sans-serif"],
        "raleway-bold": ["Raleway Bold", "sans-serif"],
        "raleway-extrabold": ["Raleway ExtraBold", "sans-serif"],
        "raleway-heavy": ["Raleway Heavy", "sans-serif"],
      }
    },
  },
  plugins: [],
};
