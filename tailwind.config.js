/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "var(--color-background)",
        "foreground": "var(--color-foreground)",
        "muted": "var(--color-muted)",
        "muted-foreground": "var(--color-muted-foreground)",
        "accent": "var(--color-accent)",
        "accent-foreground": "var(--color-accent-foreground)",
        "popover": "var(--color-popover)",
        "popover-foreground": "var(--color-popover-foreground)",
        "input": "var(--color-input)",
        "card": "var(--color-card)",
        "card-foreground": "var(--color-card-foreground)",
        "primary": "var(--color-primary)",
        "primary-foreground": "var(--color-primary-foreground)",
        "secondary": "var(--color-secondary)",
        "secondary-foreground": "var(--color-secondary-foreground)",
        "destructive": "var(--color-destructive)",
        "destructive-foreground": "var(--color-destructive-foreground)",
        "info": "var(--color-info)",
        "info-foreground": "var(--color-info-foreground)",
        "ring": "var(--color-ring)",
        "overlay": "var(--color-overlay)",
      },
      borderColor: {
        "border": "var(--color-border)",
      },
      borderRadius: {
        "theme": "var(--radius-theme)",
        "switch": "var(--radius-switch)",
      },
      blur: {
        "blur-theme": "var(--blur-theme)"
      }
    },
  },
  plugins: [],
}

