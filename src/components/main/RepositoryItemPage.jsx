
import { View, StyleSheet, Pressable, Linking } from "react-native";
import Text from "../Text";
import { useParams } from "react-router-native";
import Loading from "../state/Loading";
import RepositoryItem from "./RepositoryItem";
import ReviewList from "./ReviewList";
import useGetRepository from "../../hooks/useGetRepository";

const RepositoryItemPage = () => {
  const { id } = useParams();
  const { data, loading, error } = useGetRepository(id);

  if (loading) return <Loading />; 
  if (error) return <Text>{error.message}</Text>;

  const { repository } = data;

  const openInGithub = () => {
    if (repository.url) {
      Linking.openURL(repository.url);
    }
  };

  return (
    <View style={styles.container}>
      <RepositoryItem item={repository} />
      <Pressable onPress={openInGithub} style={styles.button} disabled={!repository.url}>
        <Text style={styles.buttonText}>Open in Github</Text>
      </Pressable>
      <ReviewList id={id} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e1e4e8",
    padding: 10,
  },
  button: {
    backgroundColor: "#0366d6",
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

});

export default RepositoryItemPage;
