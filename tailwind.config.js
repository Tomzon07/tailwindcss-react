/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
colors : {
  'neutralSilver' : '#F5F7FA',
  'NeutralDGrey' : '#4D4D4D',
  'BrandPrimary' : '#4CAF4F',
  'NeutralWhite' : '#FFFFFF',
  'grey900' : '#18191F',
}

    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('flowbite/plugin'),
  ],
}
