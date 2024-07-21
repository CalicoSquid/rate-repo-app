import React from "react";
import { View, TextInput, Pressable, StyleSheet } from "react-native";
import Text from "../Text";
import theme from "../../theme";

export default function CreateReviewForm({ formik, errorMessage }) {
  const ownerError = formik.touched.ownerName && formik.errors.ownerName;
  const repositoryError =
    formik.touched.repositoryName && formik.errors.repositoryName;
  const ratingError = formik.touched.rating && formik.errors.rating;
  const textError = formik.touched.text && formik.errors.text;

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, ownerError && styles.error]}
        placeholder="Repository Owner Name"
        autoCapitalize="none"
        onChangeText={formik.handleChange("ownerName")}
        onBlur={formik.handleBlur("ownerName")}
        value={formik.values.ownerName}
      />
      {ownerError && (
        <Text style={styles.errorText}>{formik.errors.ownerName}</Text>
      )}

      <TextInput
        style={[styles.input, repositoryError && styles.error]}
        placeholder="Repository Name"
        autoCapitalize="none"
        onChangeText={formik.handleChange("repositoryName")}
        onBlur={formik.handleBlur("repositoryName")}
        value={formik.values.repositoryName}
      />
      {repositoryError && (
        <Text style={styles.errorText}>{formik.errors.repositoryName}</Text>
      )}

      <TextInput
        style={[styles.input, ratingError && styles.error]}
        placeholder="Rating (0 - 100)"
        autoCapitalize="none"
        keyboardType="numeric"
        onChangeText={formik.handleChange("rating")}
        onBlur={formik.handleBlur("rating")}
        value={formik.values.rating}
      />
      {ratingError && (
        <Text style={styles.errorText}>{formik.errors.rating}</Text>
      )}

      <TextInput
        style={[styles.input, styles.textArea, textError && styles.error]}
        placeholder="Review"
        autoCapitalize="none"
        onChangeText={formik.handleChange("text")}
        onBlur={formik.handleBlur("text")}
        value={formik.values.text}
        multiline
        numberOfLines={4}
      />
      {textError && <Text style={styles.errorText}>{formik.errors.text}</Text>}

      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}

      <Pressable onPress={formik.handleSubmit} style={styles.button}>
        <Text button testID="submit-button" title>
          Submit
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: theme.colors.background,
  },
  input: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
  },
  textArea: {
    height: 100,
  },
  errorText: {
    color: theme.colors.error,
    marginBottom: 10,
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: theme.fontSizes.subheading,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.bold,
  },
  error: {
    borderColor: theme.colors.error,
  },
});
