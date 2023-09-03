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
      spacing: {
        1: '1px',
        2: '2px',
        3.5: '3.5px',
        8: '8px',
        12: '12px',
        14: '14px',
        16: '16px',
        20: '20px',
        32: '32px'
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
