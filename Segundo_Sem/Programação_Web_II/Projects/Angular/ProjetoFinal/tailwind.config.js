/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    extend: {
      colors: {
        'text': '#fcf0e1',
        'background': '#160e02',
        'primary': '#f5c286',
        'secondary': '#0d991a',
        'accent': '#1dec9a',
      },
    },
  },
  plugins: [],
}

