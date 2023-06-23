/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        // desktop
        "navbar-background": "url('./images/desktop/image-hero.jpg')",
        "deep-earth": "url('./images/desktop/image-deep-earth.jpg')",
        "night-arcade": "url('./images/desktop/image-night-arcade.jpg')",
        "curiosity-a": "url('./images/desktop/image-curiosity.jpg')",
        "fisheye-a": "url('./images/desktop/image-fisheye.jpg')",
        "above-a": "url('./images/desktop/image-from-above.jpg')",
        "grid-a": "url('./images/desktop/image-grid.jpg')",
        "interactive-a": "url('./images/desktop/image-interactive.jpg')",
        "pocket-borealis": "url('./images/desktop/image-pocket-borealis.jpg')",
        "soccer-team": "url('./images/desktop/image-soccer-team.jpg')",

        // mobile
        "curiosity-mobile": "url('./images/mobile/image-curiosity.jpg')",
        "deep-earth-mobile": "url('./images/mobile/image-deep-earth.jpg')",
        "night-arcade-mobile": "url('./images/mobile/image-night-arcade.jpg')",
        "fisheye-mobile": "url('./images/mobile/image-fisheye.jpg')",
        "above-mobile": "url('./images/mobile/image-from-above.jpg')",
        "grid-mobile": "url('./images/mobile/image-grid.jpg')",
        "pocket-mobile": "url('./images/mobile/image-pocket-borealis.jpg')",
        "soccer-team-mobile": "url('./images/mobile/image-soccer-team.jpg')",
      },
      colors: {
        "dark-gray": "#8c8c8c",
        "very-dark-gray": "#696969",
        "bg-bl-op": "#0006",
      },
      fontFamily: {
        Alata: ["Alata, sans-serif"],
        Josefin: ["Josefin Sans, sans-serif"],
      },
    },
  },
  plugins: [],
};
