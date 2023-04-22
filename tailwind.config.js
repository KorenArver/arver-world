/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        '10xl': ['10rem', { lineHeight: 1 }],
      },
      fontFamily: {
        signikaNegative: ['var(--font-signika-negative)'],
      },
      backgroundImage: {
        homeGradient:
          'linear-gradient(25deg, #f9465c, #ff8868, #ffbc74, #FFD399)',
      },
    },
  },
  plugins: [],
}
