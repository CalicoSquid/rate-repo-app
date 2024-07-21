import { Pressable } from "react-native";
import Text from "../../Text";
import useSignOut from "../../../hooks/useSignOut";
import { useNavigate } from "react-router-native";

export default function SignOut() {
  const signout = useSignOut();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signout();
    navigate("/");
    console.log("SignOut");
  };

  return (
    <Pressable onPress={handleSignOut}>
      <Text title>Sign Out</Text>
    </Pressable>
  );
}
