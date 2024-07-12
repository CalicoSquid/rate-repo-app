import data from '../../data';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem.jsx'

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

const RepositoryList = () => {
  return (
    <FlatList
      style={styles.item}
      data={data}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem item={item} />}
    />
  );
};

export default RepositoryList;