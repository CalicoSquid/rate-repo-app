import {View, Pressable } from "react-native";
import Text from "../../Text";
import { useNavigate } from "react-router-native";

export default function MyReviews() {
    const navigate = useNavigate();
  return (
    <Pressable onPress={() => navigate("/myreviews")}>
      <Text title>My Reviews</Text>
    </Pressable>
  )
}
