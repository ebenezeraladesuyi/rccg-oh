/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        mont : ['Montserrat', 'sans-serif'],
        pop : ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'hero-bg' : "url('/src/assets/images/10.png')",
        'service-bg' : "url('/src/assets/images/8.png')",
        'prayer-bg1' : "url('/src/assets/images/3Q6A5433.jpg')",
        'prayer-bg2' : "url('/src/assets/images/3Q6A5576.jpg')",
        'prayer-bg3' : "url('/src/assets/images/3Q6A5656.jpg')",
        'footer-bg3' : "url('/src/assets/images/city.jpg')",
        'missionbg' : "url('/src/assets/gif/missonBg.gif')",
        // 'bg2' : "url('/src/assets/images/bg2.jpg')",
      }
    },
  },
  plugins: [],
}