import React from 'react';
import { View, StyleSheet, ActivityIndicator, Platform } from 'react-native';
import Text from "../Text";

export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#fff" />
      <Text style={styles.text}>Loading</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
    padding: 20,
  },
  text: {
    marginTop: 20,
    fontSize: 20,
    color: '#ffffff',
  },
});
