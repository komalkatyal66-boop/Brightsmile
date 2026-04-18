/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#07111f",
        ink: "#102038",
        skyglow: "#8fe7ff",
        azure: "#3b82f6",
        mist: "#f5fbff"
      },
      boxShadow: {
        luxe: "0 30px 80px rgba(8, 15, 33, 0.12)",
        glass: "0 24px 60px rgba(36, 81, 155, 0.14)"
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Manrope'", "sans-serif"]
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at top, rgba(122, 214, 255, 0.35), transparent 34%), linear-gradient(180deg, rgba(255,255,255,0.92), rgba(240,248,255,0.96))"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.7", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.06)" }
        },
        riseIn: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "pulse-glow": "pulseGlow 6s ease-in-out infinite",
        "rise-in": "riseIn 0.8s ease forwards"
      }
    }
  },
  plugins: []
};
