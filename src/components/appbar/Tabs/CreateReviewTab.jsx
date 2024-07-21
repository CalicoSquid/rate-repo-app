
import Text from "../../Text";
import { Pressable } from "react-native";
import { useNavigate } from "react-router-native";

export default function CreateReviewTab() {
    const navigate = useNavigate();
  return (
    <Pressable onPress={() => navigate("/createreview")}>
      <Text title>Create Review</Text>
    </Pressable>
  )
}
