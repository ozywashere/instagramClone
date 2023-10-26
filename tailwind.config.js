/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'logo-pattern':
          'url(https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones-2x.png?__makehaste_cache_breaker=73SVAexZgBW)',
      },
      colors: {
        brand: '#0095f6',
        facebook: '#385185',
        link: '#00376b',
      },
    },
  },
  plugins: [],
};
