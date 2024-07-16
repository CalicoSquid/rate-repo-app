import { useMutation } from "@apollo/client";
import { SIGNIN_MUTATION } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";
import { useApolloClient } from "@apollo/client";


const useSignin = () => {
  const [mutate, result] = useMutation(SIGNIN_MUTATION);
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient();

  const signin = async (values) => {
    const { data } = await mutate({ variables: values });
    await authStorage.setAccessToken(data.authenticate.accessToken);
    apolloClient.resetStore();
    return data.authenticate.accessToken;
  };
  return [signin, result];
};
export default useSignin;
