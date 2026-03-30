/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary:      '#1a1a2e',
        accent:       '#c9a96e',
        'accent-light': '#e8d5a3',
        'bg-warm':    '#f8f6f2',
        'text-muted': '#6b6b6b',
        border:       '#e5e0d8',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        heading: ['Playfair Display', 'serif'],
        body:    ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
