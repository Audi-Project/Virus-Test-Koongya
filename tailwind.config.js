/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bgPurple: '#F0E9FF',
        mainPurple: '#8152F1',
        loadingFont: '#5B3037',
      },
      keyframes: {
        typing: {
          from: {
            width: '0px',
          },
          to: {
            width: '18px',
          },
        },
        motion: {
          '0%': {
            transform: 'translateY(15px)',
          },
          '50%': {
            transform: 'translateY(0px)',
          },
          '100%': {
            transform: 'translateY(-15px)',
          },
        },
      },
      animation: {
        typing: 'typing 1.5s steps(20) infinite',
        motion: 'motion 0.8s linear infinite alternate',
      },
      boxShadow: {
        '3xl': '2px 2px 0px rgba(128, 89, 230, 0.2)',
      },
    },
  },
  plugins: [],
};
