import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: {
          DEFAULT: "var(--text-default)",
          light: "var(--text-light)",
        },
        main: {
          DEFAULT: "var(--main)",
          light: "var(--main-light)",
          "200": "var(--main-light2)",
          hover: "var(--main-hover)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          light: "var(--main-light)",
          "200": "var(--main-light2)",
          hover: "var(--secondary-hover)",
        },
        footer: {
          DEFAULT: "var(--footer)",
        },
        input: "var(--input)",
        stroke: "var(--stroke)",
      },
    },
    fontWeight: {
      thin: "100",
      hairline: "100",
      extralight: "200", //
      light: "300",
      normal: "400",
      medium: "500", //
      semibold: "600", //
      bold: "700",
      extrabold: "800",
    },
    fontSize: {
      "2xs": ["10px", "12px"],
      xs: ["12px", "14px"],
      sm: ["14px", "18px"],
      base: ["16px", "20px"],
      lg: ["18px", "22px"],
      xl: ["24px", "28px"],
      "2xl": ["28px", "34px"],
      "3xl": ["36px", "48px"],
      "4xl": ["45px", "55px"],
    },
    screens: {
      xs: "385px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
export default config;
