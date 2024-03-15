/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        'flying-astronaut-responsive': {
          '0%': { top: '-1rem' },
          '25%': { top: '-2rem'},
          '50%': { top: '-3rem' },
          '100%': { top: '-4rem' }
        },
        'flying-astronaut': {
          '0%': { 'margin-bottom': 0 },
          '25%': { 'margin-bottom': '1.5rem' },
          '50%': { 'margin-bottom': '3rem' },
          '100%': { 'margin-bottom': '6rem' }
        }
      },
      animation: {
        'flying-astronaut-responsive': 'flying-astronaut-responsive 5s ease-in-out infinite alternate',
        'flying-astronaut': 'flying-astronaut 5s ease-in-out infinite alternate'
      },
    },
  },
  plugins: [],
};
