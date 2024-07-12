import { View, StyleSheet } from "react-native";
import SignInForm from "./SignInForm";

export default function SignIn() {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <View style={styles.item}>
      <SignInForm onSubmit={onSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  item: {
    height: "100%",
    width: "100%",
  },
});
