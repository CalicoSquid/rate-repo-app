import { View, TextInput, StyleSheet, Pressable } from "react-native";
import Text from "../Text";
import validationSchema from "../../yupSchema";
import { useFormik } from "formik";
import theme from "../../theme";

export default function SignInForm({ onSubmit }) {
  const initialValues = {
    username: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const passwordError = formik.touched.password && formik.errors.password;
  const usernameError = formik.touched.username && formik.errors.username;

  return (
    <View style={styles.item}>
      <TextInput
        style={[styles.input, usernameError && styles.error]}
        placeholder="Username"
        autoCapitalize="none"
        autoCompleteType="username"
        textContentType="username"
        autoFocus
        onChangeText={formik.handleChange("username")}
      />
      {usernameError && (
        <Text style={{ color: "red" }}>{formik.errors.username}</Text>
      )}
      <TextInput
        style={[styles.input, passwordError && styles.error]}
        placeholder="Password"
        autoCapitalize="none"
        autoCompleteType="password"
        textContentType="password"
        secureTextEntry
        onChangeText={formik.handleChange("password")}
      />
      {passwordError && (
        <Text style={{ color: "red" }}>{formik.errors.password}</Text>
      )}
      <Pressable onPress={formik.handleSubmit}>
        <Text button>Sign In</Text>
      </Pressable>
    </View>
  );
}

styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  item: {
    width: "100%",
    display: "flex",
    marginTop: 10,
    marginBottom: 10,
    alignItems: "stretch",
    flexDirection: "column",
    justifyContent: "center",
    padding: 30,
  },
  input: {
    height: 50,
    marginTop: 12,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#e1e4e8",
    padding: 10,
  },
  error: {
    borderColor: theme.colors.error,
  },
});
