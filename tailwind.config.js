// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./Articles/*.{html,js}"],

  theme: {

    extend: {
      screens: {
        'custom': '990px',
      },
      container: {
        center: true,
      },
      colors: {
        beige : 'hsla(36, 31%, 90%, 1)',
        white30: 'hsla(0, 0%, 100%, 0.3)',
        green300: 'hsla(159, 42%, 88%, 1)',
        green400: 'hsla(160, 52%, 71%, 1)',
        green500: 'hsla(172, 95%, 18%, 1)',
        green600: 'hsla(171, 15%, 35%, 1)',
        green700: 'hsla(171, 11%, 24%, 1)',
        green800: 'hsla(158, 23%, 18%, 1)',
        DarkBorder : 'rgba(255, 255, 255, .1)',
        HSHighlights: {
          Color1: 'hsla(284, 61%, 74%, 1)',
          Color2: 'hsla(172, 45%, 75%, 1)',
          Color3: 'hsla(22, 62%, 76%, 1)',
          Color4: 'hsla(206, 84%, 86%, 1)',
          Color5: 'hsla(0, 0%, 100%, 1)',
          Color6: '#1c1c1c',
        },
      },
      fontFamily: {
        acorn: ['acorn', 'apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif'],
        gt: ['"gt"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', '"Open Sans"', '"Helvetica Neue"', 'sans-serif'],
      },
      fontSize: {
        'h1': 'clamp(3.2rem, .5692rem + 8.238vw, 13.75rem)',
        'h2': 'clamp(1.5rem, 1.0982rem + 1.7143vw, 2.8125rem)',
        'h3': 'clamp(1.375rem, 1.1837rem + .8163vw, 2rem)',
        'h4': 'clamp(1.375rem, 1.1837rem + .8163vw, 1.6rem)',
        'h5': 'clamp(1rem, .9235rem + .3265vw, 1.25rem)',
        'h6': 'clamp(1rem, .9617rem + .1633vw, 1.125rem)',
        'body': 'clamp(1rem, .8852rem + .4898vw, 1.375rem)',
        'link': 'clamp(.875rem, .7985rem + .3265vw, 1.125rem)',
      },
    },
  },
  plugins: [],
}
