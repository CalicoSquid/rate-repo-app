import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import theme from "../../theme";
import { useQuery } from "@apollo/client";
import { GET_ME } from "../../graphql/queries";
import SignIn from "./Tabs/SignInTab";
import SignOut from "./Tabs/SignOutTab";
import RepositoryTab from "./Tabs/RepositoryTab";
import CreateReview from "./Tabs/CreateReviewTab";

const AppBar = () => {
  const { data } = useQuery(GET_ME, {
    fetchPolicy: "cache-and-network",
  });

  const authTabs = data?.me ? (
    <View style={styles.authTabs}>
      <CreateReview />
      <SignOut />
    </View>
  ) : (
    <SignIn />
  );

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <RepositoryTab />
        {authTabs}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.primary,
    flexDirection: "row", // Ensure contents are laid out horizontally
  },
  authTabs: {
    flexDirection: "row", // Align auth tabs horizontally
    alignItems: "center",
    marginLeft: 10, // Adjust spacing between RepositoryTab and authTabs
  },
});

export default AppBar;
