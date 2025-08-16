/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,mjs}"],
  darkMode: "class", // allows toggling dark mode manually
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          50: 'oklch(97% 0.02 var(--hue))',
          100: 'oklch(95% 0.04 var(--hue))',
          200: 'oklch(90% 0.08 var(--hue))',
          300: 'oklch(85% 0.12 var(--hue))',
          400: 'oklch(75% 0.16 var(--hue))',
          500: 'oklch(65% 0.20 var(--hue))',
          600: 'oklch(55% 0.24 var(--hue))',
          700: 'oklch(45% 0.22 var(--hue))',
          800: 'oklch(35% 0.20 var(--hue))',
          900: 'oklch(25% 0.18 var(--hue))',
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
