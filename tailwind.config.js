/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'first':{
          'basic':'#E6621F',
          'primary':'#EDEDEE',
          'complementary':'#898989',
          'dark':'#333333',
          'ligh':'#FFFFFF'
        },
        'second':{
          'basic':'#276E90',
          'primary':'#CECFC9',
          'dark':'#0A3143',
          'ligh':'#EFEFEF'
        },
        'third':{
          'basic':'#CCEAF4',
          'primary':'#A9A9A9',
          'complementary':'#FF3B3F',
          'dark':'#232323',
          'ligh':'#EFEFEF'
        },
        'fourth':{
          'basic':'#114358',
          'primary':'#F2AA1F',
          'complementary':'#F1ECE7',
          'dark':'#090909',
          'ligh':'#FFFFFF'
        },
        'fifth':{
          'basic':'#30391F',
          'primary':'#668A4C',
          'complementary':'#ACCC7B',
          'dark':'#464646',
          'ligh':'#FFFFFF'
        },
        'sixth':{
          'basic':'#DE744C',
          'primary':'#DEB13C',
          'complementary':'#BFD8D2',
          'dark':'#141414',
          'ligh':'#F9F9F9'
        },
      }
    },
  },
  plugins: [],
}