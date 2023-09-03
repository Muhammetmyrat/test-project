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
      minWidth: {
        34: '34px'
      },
      width: {
        20: '20px',
        40: '40px',
        45: '45px',
        48: '48px',
        296: '296px',
        151: '151px',
        320: '320px'
      },
      height: {
        1: '1px',
        20: '20px',
        40: '40px',
        50: '50px'
      },
      borderRadius: {
        10: '10px',
        12: '12px'
      },
      boxShadow: {
        custom: '0px 1px 2px 0px rgba(16, 24, 40, 0.04)'
      },
      spacing: {
        0: '0px',
        1: '1px',
        2: '2px',
        4: '4px',
        5: '5px',
        6: '6px',
        8: '8px',
        10: '10px',
        12: '12px',
        13: '13px',
        14: '14px',
        15: '15px',
        16: '16px',
        20: '20px',
        32: '32px',
        310: '310px',
        320: '320px',
        768: '768px',
        1024: '1024px'
      },
      colors: {
        custom: {
          white: 'var(--pure-white)',
          black: 'var(--black)',
          primary: 'var(--primary)',
          after: 'var(--after)',
          primaryDate: 'var(--primaryDate)',
          base: {
            1000: 'var(--base-1000)',
            900: 'var(--base-900)',
            700: 'var(--base-700)',
            500: 'var(--base-500)',
            600: 'var(--base-600)',
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
