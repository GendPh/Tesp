/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    extend: {
      colors: {
        'text': '#0a0401',
        'background': '#fef9f5',
        'primary': '#f1791d',
        'secondary': '#c1f77b',
        'accent': '#72f44c',
      },
    },
  },
  plugins: [],
}

