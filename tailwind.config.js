/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-jeep': "url('/path/to/banner-jeep.jpg')",
        'banner-merc': "url('/path/to/banner-merc.jpg')"
      },
      colors: {
        primary: {
          light: '#58aefb',
          DEFAULT: '#047af6',
          dark: '#024d8c'
        },
        secondary: {
          light: '#fd6b6b',
          DEFAULT: '#fd0006',
          dark: '#9e0b0b'
        },
        accent: {
          light: '#fae48b',
          DEFAULT: '#f8dd1e',
          dark: '#b8991d'
        },
        gradientFrom: '#047af6',
        gradientTo: '#f8dd1e',
        customGray: 'rgb(250 250 250)',
      },
      backgroundColor: theme => ({
        'custom-gray': 'rgba(237, 246, 245)',
      }),
    },
  },
  plugins: [],
}

