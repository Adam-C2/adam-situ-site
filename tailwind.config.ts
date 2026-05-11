import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#eb5e28",
        muted: "#003049",
      },
    },
  },
  plugins: [],
};

export default config;
