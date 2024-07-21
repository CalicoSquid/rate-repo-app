import { View, StyleSheet } from "react-native";
import RepositoryList from "./RepositoryList";
import RepositoryItemPage from "./RepositoryItemPage";
import AppBar from "../appbar/AppBar";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import CreateReviewContainer from "./CreateReviewContainer";
import { Route, Routes, Navigate } from "react-router-native";
import MyReviews from "./MyReviews";

export default function Main() {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/repository/:id" element={<RepositoryItemPage />} />
        <Route path="/createreview" element={<CreateReviewContainer />} />
        <Route path="myreviews" element={<MyReviews />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});
