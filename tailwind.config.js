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
      boxShadow: {
        '3xl': '2px 2px 0px rgba(128, 89, 230, 0.2)',
      },
    },
  },
  plugins: [],
};
