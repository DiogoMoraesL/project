// rodar sem node: .\tailwindcss.exe -i input.css -o output.css --watch

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
        fontFamily: {
            'roboto': ['Roboto Condensed', 'sans-serif'],
        
        },
        
        fontFamily: {
            'audiowide': ['Audiowide', 'sans-serif'],
        }
        
    }
},
 plugins: [],
}
