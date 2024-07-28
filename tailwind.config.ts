import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        // Main
        favouriteColor: "#f0ebdf",
        lightPrimary: "#ffffff",
        lightSecondary: "#f0f2f5",
        darkPrimary: "#18191a",
        darkSecondary: "#242526",

        // Text
        favouriteTextColor: "#332f2f",
        favouriteTextColorSecondary: "#4e4544",
        textLightContent: "#292929",
        textDarkPrimary: "#ffffff",
        textDarkSecondary: "#e2e8f0",
        textDarkContent: "#ededf1",

        // Button
        lightButtonHoverColor: "#332f2f",
        darkButtonHoverColor: "#e2e8f0",
        toTopButtonColor: "#315399",
      },
      fontSize: {
        sm: "16px",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};

export default config;
