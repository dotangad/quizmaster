module.exports = {
  content: ["./app/**/*.{ts,tsx}"], // Here we are going to tell Tailwind to use any .ts or .tsx file to purge the CSS
  darkMode: "media", // Use media queries for dark mode, customize it as you want
  theme: {
    extend: {
      colors: {
        exun: "#2977f5",
        "exun-dark": "#1e59b9",
        "exun-light": "#7fadf7",
        "off-white": "#eaeaef",
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          '"Open Sans"',
          '"Helvetica Neue"',
          "sans-serif",
        ],
      },
    },
  }, // customize the theme however you want here
  plugins: [], // add any plugin you need here
};
