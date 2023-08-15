/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "'./node_modules/flowbite-react/**/*.js', './pages/**/*.{ts,tsx}', './src/**/*.{js,jsx,ts,tsx}', './public/**/*.html'",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
      },
    },
  },
  plugins: [require("daisyui")],
};
