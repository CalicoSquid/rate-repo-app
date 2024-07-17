import { View, StyleSheet, ScrollView } from "react-native";
import theme from "../../theme";
import Constants from "expo-constants";
import { useQuery } from "@apollo/client";
import { GET_ME } from "../../graphql/queries";
import SignIn from "./Tabs/SignInTab";
import SignOut from "./Tabs/SignOutTab";
import RepositoryTab from "./Tabs/RepositoryTab";

export default function AppBar() {

  const { data} = useQuery(GET_ME, {
    fetchPolicy: "cache-and-network",
  });
  const authTab = data?.me ? <SignOut /> : <SignIn />
  
  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.tabs}>
        <RepositoryTab />
        {authTab}
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
