import React from "react";
import { FlatList } from "react-native";
import Text from "../Text";
import Loading from "../state/Loading";
import ReviewItem from "./ReviewItem";
import useReviews from "../../hooks/useReviews";

const ReviewList = ({ id }) => {

  const { data, loading, error, fetchMore } = useReviews(id, first = 3);

  if (error) return <Text>{error.message}</Text>;

  const onEndReach = () => {
    console.log("onEndReach");
    fetchMore()
  }

  return (
    <FlatList
    style={{ backgroundColor: "fff", padding: 10 }}
      data={data?.repository?.reviews?.edges}
      keyExtractor={(item) => item.node.id}
      renderItem={({ item }) => <ReviewItem review={item.node} />}
      ListEmptyComponent={loading ? <Loading /> : <Text>No reviews found</Text>}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

export default ReviewList;
