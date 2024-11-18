export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Incluye todos los archivos dentro de src que usen Tailwind
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          100: '#cce7ff',
          200: '#99ccff',
          300: '#66b2ff',
          400: '#3399ff',
          500: '#0077cc',
          600: '#005a99',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
