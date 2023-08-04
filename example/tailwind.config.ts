import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: ["./components/**/*.{ts,tsx}", "./pages/**/*.{ts,tsx}"],
  plugins: [typography],
} satisfies Config;
