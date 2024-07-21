import React from "react";
import { Text as NativeText, StyleSheet } from "react-native";

import theme from "../theme";

const styles = StyleSheet.create({
  text: {
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
  },
  title: {
    fontFamily: theme.fonts.heading,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.heading,
    color: theme.colors.textPrimary,
    textTransform: "capitalize",
    marginBottom: 20,
    marginHorizontal: 15,
    alignSelf: "center",
    letterSpacing: 1, // Corrected letter spacing property
    textShadowColor: "rgba(0, 0, 0, 0.75)",
  },
  button: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.textPrimary,
    padding: 12,
    fontSize: theme.fontSizes.body,
    borderRadius: 5,
    marginTop: 10,
    textAlign: "center",
  },
  colorBgText: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.textPrimary,
    padding: 8,
    fontSize: theme.fontSizes.body,
    borderRadius: 5,
    marginTop: 10,
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
  smallText: {
    fontSize: theme.fontSizes.small,
  },
});

const Text = ({
  color,
  button,
  colorBg,
  small,
  fontSize,
  fontWeight,
  style,
  title,
  ...props
}) => {
  const textStyle = [
    styles.text,
    color === "textSecondary" && styles.colorTextSecondary,
    color === "primary" && styles.colorPrimary,
    fontSize === "subheading" && styles.fontSizeSubheading,
    fontWeight === "bold" && styles.fontWeightBold,
    title && styles.title,
    colorBg && styles.colorBgText,
    small && styles.smallText,
    button && styles.button,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;
