/** @type {import('tailwindcss').Config} */

export const content = [
  "./components/**/*.{js,vue,ts}",
  "./layouts/**/*.vue",
  "./pages/**/*.vue",
  "./plugins/**/*.{js,ts}",
  "./app.vue",
  "./error.vue",
];

export const theme = {
  screens: {
    xl: { max: "1920px" },
    // => @media (max-width: 1920px) { ... }

    lg: { max: "1366px" },
    // => @media (max-width: 1366px) { ... }

    md: { max: "736px" },
    // => @media (max-width: 736px) { ... }

    sm: { max: "480px" },
    // => @media (max-width: 480px) { ... }
  },
  container: {
    center: true,
  },
  extend: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    colors: {
      "pure-black": "hsl(var(--pure-black))",
      "pure-white": "hsl(var(--pure-white))",
      "min-white": "hsl(var(--min-white))",

      blue: {
        lightest: "hsl(var(--blue-lightest))",
        lighter: "hsl(var(--blue-lighter))",
        DEFAULT: "hsl(var(--blue))",
        darker: "hsl(var(--blue-darker))",
        darkest: "hsl(var(--blue-darkest))",
      },
      green: {
        lightest: "hsl(var(--green-lightest))",
        lighter: "hsl(var(--green-lighter))",
        DEFAULT: "hsl(var(--green))",
        darker: "hsl(var(--green-darker))",
        darkest: "hsl(var(--green-darkest))",
      },
      "mid-blue": {
        lightest: "hsl(var(--mid-blue-lightest))",
        lighter: "hsl(var(--mid-blue-lighter))",
        DEFAULT: "hsl(var(--mid-blue))",
        darker: "hsl(var(--mid-blue-darker))",
        dark: "hsl(var(--mid-blue-dark))",
        darkest: "hsl(var(--mid-blue-darkest))",
      },
      "grey-blue": {
        lightest: "hsl(var(--grey-blue-lightest))",
        lighter: "hsl(var(--grey-blue-lighter))",
        DEFAULT: "hsl(var(--grey-blue))",
        darker: "hsl(var(--grey-blue-darker))",
        darkerest: "hsl(var(--grey-blue-darkerest))",
      },

      destructive: {
        DEFAULT: "hsl(var(--destructive))",
      },
    },
    keyframes: {
      "infinite-scroll": {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(-100%)" },
      },
    },
    animation: {
      "infinite-scroll": "infinite-scroll 10s linear infinite",
    },
  },
};
