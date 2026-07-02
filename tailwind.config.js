/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta principal: verde-floresta, preto e dourado
        forest: {
          950: '#0A1A0D',
          900: '#1B4332',
          800: '#2D6A4F',
          700: '#40916C',
          600: '#52B788',
          300: '#95D5B2',
          100: '#D8F3DC',
          50:  '#F0FAF4',
        },
        gold: {
          DEFAULT: '#C9A227',
          light:   '#E8C547',
          dark:    '#A07D1A',
          50:      '#FDF8E8',
        },
      },
      fontFamily: {
        // Fonte display elegante do projeto original
        display: ['"Cinzel Decorative"', 'serif'],
        body:    ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(180deg, rgba(10,26,13,0.80) 0%, rgba(27,67,50,0.60) 100%)',
      },
      animation: {
        'fade-in':    'fadeIn 0.4s ease-in-out',
        'slide-up':   'slideUp 0.4s ease-out',
        'scale-in':   'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn:  { '0%': { opacity: '0' },             '100%': { opacity: '1' } },
        slideUp: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        scaleIn: { '0%': { opacity: '0', transform: 'scale(0.95)' },      '100%': { opacity: '1', transform: 'scale(1)' } },
      },
    },
  },
  plugins: [],
}
