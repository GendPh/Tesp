/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    extend: {
      colors: {
        'text': '#0a0401',
        'background': '#fef9f5',
        'primary': '#f1791d',
        'secondary': '#d2b8ab',
        'accent': '#c69b85',
      },
    },
  },
  plugins: [],
}

