/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-blue': 'hsl(209, 23%, 22%)',
        'dark-blue-bg': 'hsl(207, 26%, 17%)',
        'dark-blue-text': 'hsl(200, 15%, 8%)',
        'gray-100': 'hsl(0, 0%, 98%)',
        'gray-500': 'hsl(0, 0%, 52%)',
      },
    },
  },
  plugins: [],
};
