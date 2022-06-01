module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          500: '#18181B',
          300: '#242428',
          100: '#343438',
          background: '#212125'
        },
        main: {
          primary: {
            500: '#3C556C',
            300: '#5F81A0',
            100: '#8FC9FF',
          },
          delete: '#674646',
        },
        text: {
          500: '#FFFFFF',
          300: '#555555',
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          'sans-serif'
        ]
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
  variants: {
    scrollbar: ['rounded']
  }
}
