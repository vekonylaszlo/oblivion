/** @type {import('tailwindcss').Config} */
export default {
  content: ["./lib/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "background": "var(--color-background)",
        "foreground": "var(--color-foreground)"
      }
    },
  },
  plugins: [],
}

