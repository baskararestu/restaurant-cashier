import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2aafa7",

          secondary: "#f7f302",

          accent: "#c38cea",

          neutral: "#2e263b",

          "base-100": "#f9f9fb",

          info: "#a0d9e4",

          success: "#5ae2c5",

          warning: "#e6be1e",

          error: "#e14756",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
