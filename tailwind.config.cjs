/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-dark": "var(--bg-dark)",
        "box-bg": "var(--box-bg)",
        "bg-light": "var(--bg-light)",

        text: "var(--text)",
        "text-muted": "var(--text-muted)",

        border: "var(--border)",
        "border-muted": "var(--border-muted)",

        primary: "var(--primary)",
        secondary: "var(--secondary)",
      },
    },
  },
  plugins: [],
};
