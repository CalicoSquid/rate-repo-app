import React from "react";
import Text from "../Text";
import Loading from "../state/Loading";
import RepositoryListContainer from "./RepositoryListContainer";
import { View, StyleSheet } from "react-native";
import { useState } from "react";
import useRepositories from "../../hooks/useRepositories";
import { useDebounce } from "use-debounce";

const RepositoryList = () => {
  const [filter, setFilter] = useState("latest");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchQueryDebounced] = useDebounce(searchQuery, 500);
  const { data, loading, error } = useRepositories(
    filter,
    searchQueryDebounced
  );

  if (!data) {
    return <Text>No data</Text>;
  }

  const filterProps = { filter, setFilter, searchQuery, setSearchQuery };

  return (
    <View style={{ flex: 1 }}>
      {loading && (
        <View style={styles.loadingContainer}>
          <Loading />
        </View>
      )}
      {error && (
        <View style={styles.errorContainer}>
          <Text>{error.message}</Text>
        </View>
      )}

      <RepositoryListContainer data={data} filterProps={filterProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  errorContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
});

export default RepositoryList;
