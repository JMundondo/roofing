/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-montserrat)'],
      },
      colors: {
        ivory: "#FDFFF5", // Ivory
        matteblack: "#28282B", // Matte Black
        customBlue: "#2E95EC", // (46,149,236)
        customWhite: "#E9EBEE", // (233, 235, 238)
        customMustardYellow: "#D39850", // (211, 152, 80)
        customGray: "#8b8b8b",
        coconut: "#FFF1E6", // Coconut
      },
      backgroundColor: {
        'black-opacity-50': 'rgba(0, 0, 0, 0.5)',
      },
    },
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }

      xs: { max: '479px' },
      // => @media (max-width: 479px) { ... }

      'xxs': { max: '415px' },
      // => @media (max-width: 415px) { ... }

      'xxxs': { max: '350px' },
      // => @media (max-width: 350px) { ... }
    },
  },
  plugins: [],
}
