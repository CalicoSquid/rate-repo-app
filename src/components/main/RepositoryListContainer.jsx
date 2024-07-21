import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";
import FilterHeader from "../filters/FilterHeader";

class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const { filter, searchQuery, setFilter, setSearchQuery } = this.props.filterProps;

    return (
      <FilterHeader
        filter={filter}
        setFilter={setFilter}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    );
  };

  render() {
    const { data } = this.props;
    const repositoryNodes = data?.repositories?.edges.map((edge) => edge.node) || [];

    return (
      <FlatList
        style={styles.item}
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <RepositoryItem item={item} />}
        ListHeaderComponent={this.renderHeader}
        keyExtractor={(item) => item.id}
      />
    );
  }
}

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
