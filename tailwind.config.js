/** @type {import('tailwindcss').Config} */
import { addDynamicIconSelectors } from '@iconify/tailwind'
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: { super: ['12rem', '0.9'] },
      colors: { bg: '#edeae4' },
    }
  },
  plugins: [addDynamicIconSelectors()]
}
