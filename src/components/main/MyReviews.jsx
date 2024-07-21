import { StyleSheet, View, FlatList } from "react-native";
import Text from "../Text";
import useGetMyReviews from "../../hooks/useGetMyReviews";
import ReviewItem from "./ReviewItem";
import Loading from "../state/Loading";

export default function MyReviews() {
  const { data, loading, error } = useGetMyReviews();

  return (
    <View style={{ flex: 1, padding: 10, backgroundColor: "#e1e4e8"}}>
      <FlatList
        data={data?.me?.reviews?.edges}
        keyExtractor={(item) => item.node.id}
        renderItem={({ item }) => <ReviewItem review={item.node} />}
        ListEmptyComponent={
          loading ? <Loading /> : <Text>No reviews found</Text>
        }
      />
    </View>
  );
}

