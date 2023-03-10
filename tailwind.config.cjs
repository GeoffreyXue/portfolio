/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts,css}'],
  theme: {
    extend: {
      fontFamily: {
        "body": "var(--font-body)",
        "mono": "var(--font-mono)"
      },
      colors: {
        "bg-0": "var(--color-bg-0)",
        "bg-1": "var(--color-bg-1)",
        "bg-2": "var(--color-bg-2)",
        "theme-1": "var(--color-theme-1)",
        "theme-1-alt": "var(--color-theme-1-alt)",
        "theme-2": "var(--color-theme-2)",
        "text": "var(--color-text)"
      },
    },
  },
  plugins: [],
}
