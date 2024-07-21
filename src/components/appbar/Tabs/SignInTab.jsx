import { useNavigate } from "react-router-native";
import { Pressable } from "react-native";
import Text from "../../Text";

export default function SignInTab() {
  const navigate = useNavigate();
  return (
    <Pressable onPress={() => navigate("/signin")}>
      <Text title>Sign In</Text>
    </Pressable>
  );
}
