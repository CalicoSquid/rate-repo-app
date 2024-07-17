import { View, StyleSheet, Image } from "react-native";
import defaultImg from "../../../assets/icon.png";
import Text from "../Text";

export default function RepositoryItem({ item }) {
  const { stargazersCount, forksCount, reviewCount, ratingAverage } = item;

  const info = [
    {
      text: "Stars",
      value:
        stargazersCount > 999
          ? (stargazersCount / 1000).toFixed(1) + "k"
          : stargazersCount,
    },
    {
      text: "Forks",
      value:
        forksCount > 999 ? (forksCount / 1000).toFixed(1) + "k" : forksCount,
    },
    {
      text: "Reviews",
      value:
        reviewCount > 999 ? (reviewCount / 1000).toFixed(1) + "k" : reviewCount,
    },
    { text: "Rating", value: ratingAverage },
  ];

  const infoBar = info.map((info) => (
    <View style={styles.infoBar} key={info.text} >
      <Text fontWeight="bold">{info.value}</Text>
      <Text color="textSecondary">{info.text}</Text>
    </View>
  ));

  return (
    <View style={styles.item} testID="repositoryItem">
      <View style={styles.top}>
        <Image
          source={
            item.ownerAvatarUrl ? { uri: item.ownerAvatarUrl } : defaultImg
          }
          style={styles.image}
        />
        <View style={styles.topDetails}>
          <Text fontSize="subheading" fontWeight="bold">
            {item.fullName}
          </Text>
          <Text color="textSecondary" style={styles.description}>
            {item.description}
          </Text>
          <Text style={styles.language}>{item.language}</Text>
        </View>
      </View>

      <View style={styles.bottom}>{infoBar}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    backgroundColor: "white",
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
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 20,
  },
  topDetails: {
    flex: 1,
  },
  description: {
    marginTop: 4,
    marginBottom: 4,
  },
  language: {
    color: "#0366d6",
    fontWeight: "bold",
    marginTop: 4,
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  infoBar: {
    alignItems: "center",
  },
});
