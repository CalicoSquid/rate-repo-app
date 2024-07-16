import React from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import RepositoryItem from "./RepositoryItem";
import Loading from "../state/Loading";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../../graphql/queries";

const RepositoryList = () => {
  const { data, loading, error } = useQuery(GET_REPOSITORIES, { fetchPolicy: "cache-and-network" });

  if (loading) return <Loading />;
  if (error) return <Text>{error.message}</Text>;

  const repositoryNodes = data?.repositories?.edges.map(edge => edge.node) || [];

  return (
    <FlatList
      style={styles.item}
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem item={item} />}
    />
  );
};

export default RepositoryList;

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
