import Text from "../../Text";
import { Link } from "react-router-native";

export default function RepositoryTab() {
  return (
    <Link to="/repositories">
      <Text title>Repositories</Text>
    </Link>
  );
}
