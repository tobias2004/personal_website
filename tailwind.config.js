/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{astro,html,js,ts,jsx,tsx,md}",
      "./content/**/*.{md}"
    ],
    theme: {
      extend: {
        colors: {
          primary: "#2563eb",
          neutral: "#94a3b8",
          white: "#e2e8f0",
          black: "#0e141b",
        },
        fontFamily: {
          sans: ['"Be Vietnam Pro"', "system-ui", "sans-serif"],
          serif: ['"Gabarito Variable"', "ui-serif", "serif"],
        },
      },
    },
    plugins: [],
  };
  