import { Pressable } from "react-native";
import Text from "../../Text";

export default function RepositoryTab() {
  return (
    <Pressable onPress={() => console.log("Pressed")}>
        <Text title>Repositories</Text>
      </Pressable>
  )
}
