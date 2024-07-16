import { View, Pressable } from "react-native";
import Text from "../../Text";
import useSignOut from "../../../hooks/useSignOut";

export default function SignOut() {

  const signout = useSignOut()

  const handleSignOut = () => {
    signout()
    console.log("SignOut");
  };

  return (
    <View>
      <Pressable onPress={handleSignOut}>
        <Text title>Sign Out</Text>
      </Pressable>
    </View>
  );
}
