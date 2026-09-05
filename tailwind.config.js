/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        void: "#040907",
        panel: "rgba(8,20,15,0.55)",
        "panel-border": "rgba(61,255,176,0.16)",
        emerald: {
          core: "#10B981",
          bright: "#3DFFB0",
          deep: "#062018",
        },
        ink: {
          hi: "#EAF7F0",
          mid: "#8FB6A4",
          dim: "#5E7C70",
        },
      },
      fontFamily: {
        display: ["'Chakra Petch'", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
