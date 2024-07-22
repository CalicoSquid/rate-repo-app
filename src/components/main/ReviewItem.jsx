import React from "react";
import { View, StyleSheet } from "react-native";
import Text from "../Text";
import ReviewButtons from "./ReviewButtons";

const ReviewItem = ({ review }) => {
  const formattedDatestamp = new Date(review.createdAt).toLocaleDateString();

  return (
    <View style={styles.containerWithButtons}>
      <View style={styles.container}>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{review.rating}</Text>
        </View>
        <View style={styles.reviewDetails}>
          <Text style={styles.username}>
            {review?.user?.username
              ? review.user.username
              : review.repository.fullName}
          </Text>
          <Text style={styles.date}>{formattedDatestamp}</Text>
          <Text style={styles.reviewText}>{review.text}</Text>
        </View>
      </View>
      {!review.user && <ReviewButtons review={review} />}
    </View>
  );
};

const styles = StyleSheet.create({
  containerWithButtons: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 10,
  },
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  ratingContainer: {
    marginRight: 15,
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#0366d6",
  },
  rating: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
  reviewDetails: {
    flex: 1,
  },
  reviewText: {
    fontSize: 16,
    marginBottom: 5,
    color: "#24292e",
  },
  username: {
    fontSize: 24,
    color: "#586069",
    marginBottom: 2,
  },
  date: {
    fontSize: 14,
    color: "#586069",
  },
});

export default ReviewItem;
