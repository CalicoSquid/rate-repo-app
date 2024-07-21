import { View } from "react-native";

import FilterBar from "./FilterBar";
import SearchBar from "./SearchBar";

export default function FilterHeader({
  filter,
  setFilter,
  searchQuery,
  setSearchQuery,
}) {

  return (
    <View>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <FilterBar filter={filter} setFilter={setFilter} />
    </View>
  );
}
