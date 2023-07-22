/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'default': '#ffffff',
      },
      // Add this
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'gradient-to-l': 'linear-gradient(to left, var(--tw-gradient-stops))',
      },
      backgroundOpacity: {
        '95': '0.95',
        '25': '0.25',
      }
    },
  },
  plugins: [],
  variants: {
    extend: {
      backgroundImage: ['responsive', 'hover', 'focus'],
    },
  },
}
