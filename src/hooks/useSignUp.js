import { useMutation } from "@apollo/client";
import { SIGN_UP_USER_MUTATION } from "../graphql/mutations";

const useSignUp = () => {
    const [mutate, result] = useMutation(SIGN_UP_USER_MUTATION);
    const signup = async (values) => {
        const { data } = await mutate({ variables: { user: values } });
        return data.createUser.username;
    };

    return [signup, result];
};
export default useSignUp