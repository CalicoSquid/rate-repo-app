import AuthStorageContext from "../contexts/authStorageContext";
import { useContext } from "react";

const useAuthStorage = () => {
  const authStorage = useContext(AuthStorageContext);
  return authStorage;
};
export default useAuthStorage;
