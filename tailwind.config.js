/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'background': '#000000', 
        'nav-bg': '#121618', 
        'main-clr': '#0796EF',
        'white-txt': '#F5F5F5',
        'shade-txt': '#857878',
        'para': '#BBBBBB',
        'icon-clr': '#C5A059',
        'icon-media': '#808080',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [
    function({ addComponents }){
      addComponents({
        '.btn-secondary':{
          'background-color': 'black',
          'font-weight': '600', 
          color: 'white', 
          padding: '12px 32px', 
          border: '1px solid #0796EF', 
          margin: '0', 
          display: 'block',
          'text-shadow': '1.3px 0.97px 0 #800020', 
        },
        '.btn-main':{
          'background-color': '#0796EF', 
          'font-weight': '600', 
          color: 'white', 
          padding: '12px 32px', 
          border: '1px solid #0796EF', 
          margin: '0', 
          display: 'block',
          'text-shadow':' 0 4px 4px rgba(0, 0, 0, 0.25)', 
        },
      })
    }
  ],
}

