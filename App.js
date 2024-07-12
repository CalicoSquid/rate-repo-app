import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import Main from "./src/components/main/Main";
import { NativeRouter } from "react-router-native";

export default function App() {
  return (
    <>
      <NativeRouter>
        <View style={styles.container}>
          <Main />
        </View>
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
