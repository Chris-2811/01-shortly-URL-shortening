/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        cyan: 'hsl(180, 66%, 49%)',
        darkViolet: 'hsl(257, 27%, 26%)',
        red: '#FF6E5C',
        gray: '#BFBFBF',
        grayishViolet: '#6E7A8A',
        veryDarkBlue: '#1E202A',
        veryDarkViolet: '#0A0C12',
      },
    },
  },
  plugins: [],
};
