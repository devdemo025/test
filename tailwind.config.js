/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        wide: "1440px",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        kanit: ["Kanit", "cursive"],
      },
      colors: {
        primary: "#ECEEFF",
        dark_blue: "#222030",
        darkblueslate: "#161424",
        yellow: "#f4ae1c",
      },
      backgroundImage: {
        hero: "url('/src/assets/images/hero-bg.png')",
        border_video: "url('/src/assets/images/video-player-border.png')",
        border_image: "url('/src/assets/images/image-border.png')",
        trailer_bg: "url('/src/assets/images/trailer-bg.png')",
        border_download: "url('/src/assets/images/download-border.png')",
        download_bg: "url('/src/assets/images/download-bg.png')",
        footer_bg: "url('/src/assets/images/footer-bg.png')",
      },
    },
  },
  plugins: [],
};
