import type { Config } from 'tailwindcss'
import { colors } from './tailwind.colors'

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      ...colors,
      primary: '#0f172a',
      orange: '#F66F4D',
      'orange-light': '#FFD482',
      'main-bg': '#FAF8ED',
      'first-text-color': ' #2D3134',
      'second-text-color': '#5B5F62',
      'third-text-color': '#9498A4',
      'first-element-bg': '#EAEAEB',
      'semi-gray-text': '#939597',
      'bg-for-image': ' #EE8162',
      'light-gray': '#676A6C'
    },
    fontFamily: {
      main: ['Inter', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      sen: ['Sen', 'sans-serif']
    },
    boxShadow: {
      custom: '0px 24px 90px 0px rgba(192, 188, 161, 0.22)'
    },
    extend: {}
  },
  plugins: []
} satisfies Config
