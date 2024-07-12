import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    primary: "#f9c2ff",
    error: "#d73a4a",
  },
  fontSizes: {
    heading: 20,
    body: 14,
    subheading: 16,
    small: 12,
  },
  fonts: Platform.select({
    ios: {
      main: "System",
      heading: "System",
      monospace: "monospace",
    },
    android: {
      main: "Roboto",
      heading: "Roboto",
      monospace: "monospace",
    },
    default: {
      main: "System",
      heading: "System",
      monospace: "monospace",
    },
  }),
  fontWeights: {
    normal: "400",
    bold: "700",
  },
};

export default theme;
