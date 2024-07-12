import { View, StyleSheet, ScrollView } from "react-native";
import theme from "../../theme";
import Constants from "expo-constants";

import SignIn from "./Tabs/SignInTab";
import RepositoryTab from "./Tabs/RepositoryTab";

export default function AppBar() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.tabs}>
        <RepositoryTab />
        <SignIn />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.primary,
  },
  tabs: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,  // Add padding if needed
  },
});
