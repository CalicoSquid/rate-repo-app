import AsyncStorage from "@react-native-async-storage/async-storage";

export class AuthStorage {
  constructor(namespace = "auth") {
    this.namespace = namespace;
  }

  getAccessToken = async () => {
    const value = await AsyncStorage.getItem(`${this.namespace}:token`);
    return value ? JSON.parse(value) : null;
  };

  setAccessToken = async (token) => {
    await AsyncStorage.setItem(`${this.namespace}:token`, JSON.stringify(token));
  };

  removeAccessToken = async () => {
    await AsyncStorage.removeItem(`${this.namespace}:token`);
  };

}

