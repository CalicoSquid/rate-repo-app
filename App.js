import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import Main from "./src/components/main/Main";
import { NativeRouter } from "react-router-native";
import { ApolloProvider } from "@apollo/client";
import createApolloClient from "./src/utils/apolloClient";
import { AuthStorage } from "./src/utils/authStorage";
import AuthStorageContext from "./src/contexts/authStorageContext";

const authStorage = new AuthStorage();
const client = createApolloClient(authStorage);

export default function App() {
  return (
    <>
      <NativeRouter>
        <ApolloProvider client={client}>
          <AuthStorageContext.Provider value={authStorage}>
          <View style={styles.container}>
            <Main />
          </View>
          </AuthStorageContext.Provider>
        </ApolloProvider>
      </NativeRouter>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    //backgroundColor: "#e1e4e8",
  },
});
