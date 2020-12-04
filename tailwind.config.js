module.exports = {
  purge: [],
  theme: {
    extend: {
      gridTemplateColumns: {
       '13': 'repeat(13, minmax(0, 1fr))',
      },
      gridTemplateRows: {
        '8': 'repeat(8, minmax(0, 1fr))',
      },
      gridColumnEnd: {
        '14': '14'
      },
      gridRowEnd: {
        '8': '8',
        '9': '9',
      },
      colors: {
        'toska-dark': '#aa4137',
        'toska-light': '#ea9939',
      },
    },
    screens: {
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  variants: {},
  plugins: [],
}