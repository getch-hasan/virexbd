/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['poppins', 'sans-sarif'],
   
    },
    extend: {
      colors: {
        'blue1': '#0C1740',
        'blue2':"#27D5FC",
        'blue3':'#92E8FB',
        'gray1':"#181828",
        'gray2':"#1E1E1E",
        'gray3':"#D9D9D9",
        'tomato1':"#FF7171",
        'tomato2':'#FFC3C3',
        'orange':"#FDA930",
        'yellow':"#F9FB92",
        'purple1':"#FF88F9",
        'purple2':"#E547FF",
        "purple3":"#AC00FD"
      },
    },
  },
  plugins: [],
}

