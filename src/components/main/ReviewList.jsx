import React from "react";
import { FlatList } from "react-native";
import Text from "../Text";
import { useQuery } from "@apollo/client";
import { GET_REVIEWS } from "../../graphql/queries";
import Loading from "../state/Loading";
import ReviewItem from "./ReviewItem";

const ReviewList = ({ id }) => {

  const { data, loading, error } = useQuery(GET_REVIEWS, {
    variables: { repositoryId: id },
    fetchPolicy: "cache-and-network",
  });

  if (error) return <Text>{error.message}</Text>;

  return (
    <FlatList
    style={{ backgroundColor: "fff", padding: 10 }}
      data={data?.repository?.reviews?.edges}
      keyExtractor={(item) => item.node.id}
      renderItem={({ item }) => <ReviewItem review={item.node} />}
      ListEmptyComponent={loading ? <Loading /> : <Text>No reviews found</Text>}
    />
  );
};

export default ReviewList;
