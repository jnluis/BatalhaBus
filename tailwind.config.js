/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("daisyui")],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        red_800: "#c8102e",
        green_800: "#009733",
        red_400: "#e4405f",
        black_900_3f: "#0000003f",
        green_700: "#259d49",
        green_500: "#3ed16a",
        gray_50: "#f7f8f9",
        light_blue_800: "#0083ad",
        teal_400: "#10b981",
        green_A700: "#02e519",
        black_900: "#000000",
        deep_purple_A200: "#9146ff",
        light_blue_800_f9: "#0569c6f9",
        red_A700: "#ff0000",
        deep_orange_A400: "#ff4500",
        yellow_200: "#ffe69e",
        gray_600: "#737373",
        blue_700_fc: "#1a85d4fc",
        gray_901: "#1e1e1e",
        gray_902: "#212121",
        blue_500: "#30a2e2",
        gray_800: "#584d4d",
        gray_900: "#191d23",
        blue_600: "#1d89d4",
        bluegray_100: "#d9d9d9",
        indigo_300: "#7289da",
        bluegray_100_bf: "#d9d9d9bf",
        black_900_33: "#00000033",
        green_700_33: "#259d4933",
        indigo_900: "#012169",
        indigo_901: "#00176c",
        white_A701: "#fefefe",
        white_A700: "#ffffff",
        indigo_600: "#3c5a99",
      },
      boxShadow: {
        bs2: "0px 4px  4px 0px #0000003f",
        bs: "0px 4px  12px 0px #259d4933",
        bs1: "0px 4px  10px 0px #00000033",
      },
      fontFamily: {
        opensans: "Open Sans",
        manrope: "Manrope",
        inter: "Inter",
        montserrat: "Montserrat",
        worksans: "Work Sans",
      },
      spacing: {
        128: "32rem",
      },
    },
  },
};
