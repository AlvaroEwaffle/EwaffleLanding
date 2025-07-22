/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#28244a',
        secondary: '#2692d6',
        accent: '#fd5a93',
        yellow: '#ffb148',
        'gray-light': '#F5F5F5',
        'text-dark': '#333333',
      },
    },
  },
  plugins: [],
} 