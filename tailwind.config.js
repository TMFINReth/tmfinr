/** @type {import('tailwindcss').Config} */
export default {
content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.jsx",
  ],
  theme: {
    screens: {
      "2xl": { max: "1440px" },
      // => (max-width: 1440px) Desktop
      xl: { max: "1280px" },
      // => (max-width: 1280px) Small Desktop
      lg: { max: "1024px" },
      // => (max-width: 1024px) Large Tablet
      md: { max: "768px" },
      // => (max-width: 768px) Tablet
      sm: { max: "640px" },
      // => (max-width: 640px) Phablet
      xs: { max: "480px" },
      // => (max-width: 480px) Phone
      "2xs": { max: "320px" },
      // => (max-width: 320px) Mini Phone
    },
    fontFamily: {
      sans: ["IBM Plex Mono", "monospace", "system-ui"],
    },
    extend: {
      colors: {
        bg: "#0c0d13",
        primary: "#ebc32d",
        "primary-dark": "#cfaa20",
      },
    },
  },
  plugins: [],
}

