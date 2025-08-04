/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand Primary
        "wit-dark": "#1a1a1a",
        "wit-green": "#10b981",
        "wit-blue": "#3b82f6",

        // Brand Secondary
        "wit-coral": "#ff6b6b",
        "wit-sage": "#84cc16",
        "wit-light": "#f8fafc",
        "wit-gray": "#64748b",

        // Gradients
        "wit-gradient-1": "#10b981",
        "wit-gradient-2": "#3b82f6",
        "wit-gradient-3": "#ff6b6b",
      },
      backgroundImage: {
        "wit-gradient": "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)",
        "wit-gradient-warm":
          "linear-gradient(135deg, #ff6b6b 0%, #10b981 100%)",
        "wit-hero-gradient":
          "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)",
      },
    },
  },
  plugins: [],
};
