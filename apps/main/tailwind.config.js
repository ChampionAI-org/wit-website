/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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

        // Background colors for consistency
        "wit-bg-light": "#f8fafc",
        "wit-bg-dark": "#1a1a1a",
        "wit-card-light": "#ffffff",
        "wit-card-dark": "#2a2a2a",

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
          "linear-gradient(135deg, #1a1a1a 0%, #242424 30%, #2d2d2d 55%, #242424 80%, #1a1a1a 100%)",
      },
    },
  },
  plugins: [],
};
