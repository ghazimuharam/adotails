module.exports = {
  purge: {
    content: [
      './resources/views/*.edge',
    ],
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'hygeia-white': '#F6F7F9',
        'hygeia-btn-black': '#3D3E40',
        'hygeia-pink': '#C68383',
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
      },
      fontFamily: {
        'display': ['Montserrat', 'sans-serif'],
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
