/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      padding: '2rem'
      // screens: {
      //   sm: '600px',
      //   md: '720px',
      //   lg: '900px',
      //   xl: '1024px',
      //   '2xl': '1200px'
      // }
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0080FF',
          50: '#B8DBFF',
          100: '#A3D1FF',
          200: '#7ABDFF',
          300: '#52A9FF',
          400: '#2994FF',
          500: '#0080FF',
          600: '#0064C7',
          700: '#00488F',
          800: '#002C57',
          900: '#000F1F',
          950: '#000103'
        },
        secondary: {
          DEFAULT: '#35495E',
          50: '#8CA5BE',
          100: '#7F9AB7',
          200: '#6586A8',
          300: '#527292',
          400: '#445D78',
          500: '#35495E',
          600: '#212D3A',
          700: '#0D1116',
          800: '#000000',
          900: '#000000'
        },
        wrapper: {
          DEFAULT: '#13161A',
          50: '#BBC3CD',
          100: '#AFB8C4',
          200: '#97A3B3',
          300: '#808EA2',
          400: '#697A90',
          500: '#586678',
          600: '#475261',
          700: '#353E49',
          800: '#242A32',
          900: '#13161A',
          950: '#07080A'
        }
      }
    }
  },
  plugins: []
}
