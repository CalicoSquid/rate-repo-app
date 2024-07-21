import { Searchbar } from 'react-native-paper';

export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <Searchbar
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
    />
  )
}
