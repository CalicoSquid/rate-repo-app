import { View, StyleSheet, Pressable } from "react-native";
import Text from "../Text";
import SignInForm from "./SignInForm";
import useSignin from "../../hooks/useSignin";
import {useNavigate} from "react-router-native";

export default function SignIn() {
  const [signIn, result] = useSignin();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      const token = await signIn(values);
      console.log(token, "token stored in Async Storage");
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <View style={styles.item}>
      <SignInForm onSubmit={onSubmit} />
      <Pressable onPress={() => navigate("/signup")}>
        <Text style={styles.signup} button>Dont have an account? Sign Up</Text>
      </Pressable>
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
  signup: {
    marginTop: 10,
    textAlign: "center",
    backgroundColor: "transparent",
  },
});
