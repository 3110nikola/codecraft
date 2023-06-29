/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#111",
        secondary: "#c3c3aa",
        tertiary: "#333",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
        // custombp: {'raw': '(min-height: 680px), (min-width:768px)'
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      animation: {
        'appear': 'appear 2s'
      },
      keyframes: {
        appear: {
          'from': {opacity: '0'},
          'to': {opacity: '1'}
        }
      }
    },
  },
  plugins: [],
}
