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
    },
  },
  plugins: [],
};
