import React from "react";
import { View, Pressable, StyleSheet, Alert } from "react-native";
import Text from "../Text";
import { useNavigate } from "react-router-native";
import { useDelete } from "../../hooks/useDelete";

export default function ReviewButtons({ review }) {
  const navigate = useNavigate();
  const [deleteReview, result] = useDelete(review.id);

  const handleDelete = () => {
    Alert.alert(
      "Delete review",
      "Are you sure you want to delete this review?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => deleteReview() },
      ]
    )
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, styles.deleteButton]}
        onPress={handleDelete}
      >
        <Text style={styles.buttonText}>Delete</Text>
      </Pressable>
      <Pressable
        style={[styles.button, styles.viewRepositoryButton]}
        onPress={() => navigate(`/repository/${review.repositoryId}`)}
      >
        <Text style={styles.buttonText}>View</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 8, // Adds space between buttons
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  deleteButton: {
    backgroundColor: "#dc3545", // Updated red color for Delete
  },
  viewRepositoryButton: {
    backgroundColor: "#007bff", // Blue color for View Repository
  },
});
