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
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in-down": "fadeInDown 0.6s ease-out forwards",
        "fade-in-left": "fadeInLeft 0.6s ease-out forwards",
        "fade-in-right": "fadeInRight 0.6s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out infinite 2s",
        "stagger-1": "fadeInUp 0.6s ease-out 0.1s forwards",
        "stagger-2": "fadeInUp 0.6s ease-out 0.2s forwards",
        "stagger-3": "fadeInUp 0.6s ease-out 0.3s forwards",
        "stagger-4": "fadeInUp 0.6s ease-out 0.4s forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
