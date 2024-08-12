//  @type {import('tailwindcss').Config}
export default {

  darkMode:'class',
  content: [
    
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      colors :{
        light : {
          text: '#000000',
          border: '#000000'
        },
        dark:{
          text:'#ffffff',
          border: '#ffffff'
        }
      }
    },
  },
  varients:{},
  plugins: [],
}