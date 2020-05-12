import { create } from "@storybook/theming/create";
import logo from "./public/logo.svg";

export default create({
  base: "light",

  // Colors
  colorPrimary: "#ff5001",
  colorSecondary: "#215da5",

  // UI
  appBg: "white",
  appContentBg: "white",
  appBorderColor: "white",
  appBorderRadius: 0,

  // Typography
  fontBase: "'Inter', sans-serif",
  fontCode: "monospace",

  // Text colors
  textColor: "black",
  textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors
  barTextColor: "black",
  barSelectedColor: "black",
  barBg: "lightgrey",

  // Form colors
  inputBg: "white",
  inputBorder: "grey",
  inputTextColor: "black",
  inputBorderRadius: 0,

  // Brand
  brandTitle: "Whitespace",
  brandUrl: "https://www.whitespace.se",
  brandImage: `/${logo}`,
});
