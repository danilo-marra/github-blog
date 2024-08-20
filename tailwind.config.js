/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      darkBlue: '#071422',
      profile: ' #0B1B2B',
      input: '#040F1A',
      title: '#E7EDF4',
      text: '#AFC2D4',
      blue: '#3294F8',
      label: '#3A536B',
      span: '#7B96B2',
      post: '#112131',
    },
    fontFamily: {
      coda: ['Coda', 'sans-serif'],
      nunito: ['Nunito', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        cover: "url('/src/assets/Cover.png')",
      },
    },
  },
  plugins: [],
};
