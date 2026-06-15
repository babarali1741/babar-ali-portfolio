/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        background: "#05060d",
        foreground: "#e7ecff",
        muted: "#9aa3b8",
        neon: { blue: "#4aa8ff", purple: "#b169ff" },
      },
      boxShadow: {
        "glow-blue": "0 0 40px rgba(74,168,255,0.45)",
        "glow-purple": "0 0 40px rgba(177,105,255,0.45)",
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        gradient: "gradient 8s ease infinite",
      },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } },
        pulseGlow: {
          "0%,100%": { boxShadow: "0 0 30px rgba(74,168,255,0.4)" },
          "50%": { boxShadow: "0 0 70px rgba(177,105,255,0.6)" },
        },
        gradient: {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
