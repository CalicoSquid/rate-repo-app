import React from "react";
import { View, StyleSheet, Image, Pressable } from "react-native";
import Text from "../Text";
import { useNavigate } from "react-router-native";
import defaultImg from "../../../assets/icon.png";
import {formatNumber} from "../../utils/formatNumber";

const RepositoryItem = ({ item }) => {
  const { stargazersCount, forksCount, reviewCount, ratingAverage } = item;
  const navigate = useNavigate();

  // Info bar data
  const info = [
    { text: "Stars", value: formatNumber(stargazersCount) },
    { text: "Forks", value: formatNumber(forksCount) },
    { text: "Reviews", value: formatNumber(reviewCount) },
    { text: "Rating", value: ratingAverage.toFixed(1) },
  ];

  // Info bar JSX
  const infoBar = info.map((infoItem) => (
    <View style={styles.infoBarItem} key={infoItem.text}>
      <Text fontWeight="bold">{infoItem.value}</Text>
      <Text color="textSecondary">{infoItem.text}</Text>
    </View>
  ));

  return (
    <Pressable onPress={() => navigate(`/repository/${item.id}`)} style={styles.container}>
      <View style={styles.item}>
        <View style={styles.top}>
          <Image
            source={item.ownerAvatarUrl ? { uri: item.ownerAvatarUrl } : defaultImg}
            style={styles.image}
          />
          <View style={styles.topDetails}>
            <Text style={styles.fullName}>{item.fullName}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.language}>{item.language}</Text>
          </View>
        </View>
        <View style={styles.bottom}>{infoBar}</View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    borderRadius: 5,
    overflow: "hidden",
  },
  item: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 20,
  },
  topDetails: {
    flex: 1,
  },
  fullName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#333",
    marginBottom: 5,
  },
  language: {
    color: "#0366d6",
    fontWeight: "bold",
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingTop: 10,
  },
  infoBarItem: {
    alignItems: "center",
  },
});

export default RepositoryItem;
