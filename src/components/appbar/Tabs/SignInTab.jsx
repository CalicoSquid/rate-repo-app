import { Link } from "react-router-native";
import Text from "../../Text";

export default function SignInTab() {
  return (
    <Link to="/signin">
      <Text title>Sign In</Text>
    </Link>
  )
}
