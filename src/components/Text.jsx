import { Text as NativeText, StyleSheet } from "react-native";

import theme from "../theme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  title: {
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.bold,
    fontFamily: theme.fonts.monospace,
    color: theme.colors.textPrimary,
    textTransform: "capitalize",
    marginBottom: 20,
    marginHorizontal: 15,
    alignSelf: "center",
    letterSpacng: 2,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
  },
  colorBgText: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.textPrimary,
    padding: 5,
    borderRadius: 5,
    marginTop: 10,
    display: "flex",
    alignSelf: "flex-start",
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  fontSizeHeading: {
    fontSize: theme.fontSizes.heading,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
});

const Text = ({ color, colorBg, fontSize, fontWeight, style, title, ...props }) => {
  const textStyle = [
    styles.text,
    color === "textSecondary" && styles.colorTextSecondary,
    color === "primary" && styles.colorPrimary,
    fontSize === "subheading" && styles.fontSizeSubheading,
    fontWeight === "bold" && styles.fontWeightBold,
    title && styles.title,
    colorBg && styles.colorBgText,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;
