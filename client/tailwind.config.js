/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    container: false
  },
  theme: {
    extend: {
      colors: {
        primary: '#0891b2',
        secondary: '#2c3e50',
        third: '#4b5fc2',
        fourth: '#13c6b2',
        gray: '#e0e7f0',
        grayDark: '#395e71',
        grayField: '#f5f5f4',
        grayBox: '#ccd0d7',
        'overlay-30': 'rgba(0,0,0,0.3)',
        'overlay-60': 'rgba(0,0,0,0.6)',
        'overlay-80': 'rgba(0,0,0,0.8)',
        'overlay-fourth-70': 'rgba(19, 198, 178, 0.7)'
      },
      flexBasis: {
        '3/14': '21.4285715%',
        '11/14': '78.5714285%',
        '21/50': '42%',
        '29/50': '58%'
      }
    }
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.container': {
          width: '100%',
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '0 1rem'
        }
      })
    })
  ]
}
