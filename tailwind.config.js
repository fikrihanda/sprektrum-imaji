const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.scrollbar-width-auto': {
          'scrollbar-width': 'auto',
        },

        '.scrollbar-none': {
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },

        '.scrollbar-thin': {
          'scrollbar-width': 'thin',
        },
      })
    }),
  ],
}
