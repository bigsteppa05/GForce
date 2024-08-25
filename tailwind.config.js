/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Adjust based on where your files are located
    '.src/Pages/**/*.{js,jsx,ts,tsx}'

  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

