import { View, StyleSheet, Pressable } from "react-native";
import theme from "../../theme";
import Constants from "expo-constants";

import RepositoryTab from "./Tabs/RepositoryTab";

export default function AppBar() {
  return (
    <View style={styles.container}>
      <RepositoryTab />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: theme.colors.primary,
  },
});
