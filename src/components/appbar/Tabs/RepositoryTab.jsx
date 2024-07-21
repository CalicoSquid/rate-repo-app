import Text from "../../Text";
import { useNavigate } from "react-router-native";
import { Pressable } from "react-native";

export default function RepositoryTab() {
  const navigate = useNavigate();
  return (
    <Pressable onPress={() => navigate("/")}>
      <Text title>Repositories</Text>
    </Pressable>
  );
}
