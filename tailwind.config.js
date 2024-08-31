/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,js,jsx}', './app/(screens)/**/*.{ts,tsx,js,jsx}', './components/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        'primary-orange': '#ea580c',
        'primary-amber': '#d97706'
      }
    },
  },
  plugins: [],
}

