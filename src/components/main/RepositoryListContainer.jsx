import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";

const RepositoryListContainer = ({ data }) => {
  const repositoryNodes =
    data?.repositories?.edges.map((edge) => edge.node) || [];
  return (
    <FlatList
      style={styles.item}
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem item={item} />}
    />
  );
};


const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
    item: {
      width: "100%",
      backgroundColor: "#e1e4e8",
    },
  });
  
  const ItemSeparator = () => <View style={styles.separator} />;

export default RepositoryListContainer;