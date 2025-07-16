/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        noto: ['Noto Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: '#3344dd',
              textDecorationLine: 'none',
              '&:visited': { color: '#884488' },
              '&:hover': { color: '#00a63e', textDecorationLine: 'underline' },
              '&:focus': { color: '#00a63e', textDecorationLine: 'underline' },
              '&:active': { color: '#00a63e', textDecorationLine: 'underline' },
            },
          },
        },
      },
    },
  },
}

