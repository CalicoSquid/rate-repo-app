import { View } from "react-native";

import { Picker } from "@react-native-picker/picker";

export default function FilterBar({ filter, setFilter }) {
  return (
    <View>
      <Picker
        selectedValue={filter}
        onValueChange={(itemValue) => setFilter(itemValue)}
      >
        <Picker.Item label="Latest repositories" value="latest" />
        <Picker.Item label="Highest rated repositories" value="highest" />
        <Picker.Item label="Lowest rated repositories" value="lowest" />
      </Picker>
    </View>
  );
}
