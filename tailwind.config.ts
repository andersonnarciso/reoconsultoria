import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "#fff",
        foreground: "#111",
        card: {
          DEFAULT: "#fff",
          foreground: "#111",
        },
        popover: {
          DEFAULT: "#fff",
          foreground: "#111",
        },
        primary: {
          DEFAULT: "#111",           // preto principal
          foreground: "#fff",        // branco sobre preto
        },
        secondary: {
          DEFAULT: "#212121",        // quase preto, para áreas secundárias
          foreground: "#fff",
        },
        muted: {
          DEFAULT: "#f3f4f6",        // bem claro para áreas muted
          foreground: "#6b7280",     // cinza escuro
        },
        accent: {
          DEFAULT: "#222",           // preto/cinza escuro (usado nos botões, bordas)
          foreground: "#fff",
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#fff",
        },
        border: "#222",
        input: "#222",
        ring: "#111",
        // Usando verde-limão só para destaque se precisar
        lime: {
          DEFAULT: "#a3e635",
        },
        // Pode manter chart e sidebar se seu tema usar
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
