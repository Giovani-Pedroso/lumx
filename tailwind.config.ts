import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        headerBg: "#6E05FF",
        buttonsNavBg: "#6E05FF",
        sectionBg: "#4736e9",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0073ff",
          secondary: "#0066b9",
          accent: "#00c7cd",
          neutral: "#171d0e",
          "base-100": "#f7fcff",
          info: "#00e6ff",
          success: "#7fae00",
          warning: "#f7c000",
          error: "#ff9691",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
