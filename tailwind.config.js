/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFCDDB2',
          100: '#FFB4A2',
          200: '#E5989B',
          300: '#B5838D',
          400: '#6D6875',
        },
        // Alternative naming for better semantic use
        cream: '#FFCDDB2',
        peach: '#FFB4A2',
        rose: '#E5989B',
        mauve: '#B5838D',
        charcoal: '#6D6875',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
