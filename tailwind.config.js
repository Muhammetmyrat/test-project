/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      minHeight: {
        'calc-65': 'calc(100vh - 65px)'
      },
      colors: {
        custom: {
          white: 'var(--pure-white)',
          black: 'var(--black)',
          base: {
            1000: 'var(--base-1000)',
            900: 'var(--base-900)',
            700: 'var(--base-700)',
            opacity: {
              16: 'var(--base-opacity-16)',
              24: 'var(--base-opacity-24)'
            }
          }
        }
      }
    }
  },
  plugins: []
}
