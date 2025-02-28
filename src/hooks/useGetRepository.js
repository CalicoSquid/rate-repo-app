import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../graphql/queries";

const useGetRepository = (id) => {
    const { data, loading, error } = useQuery(GET_REPOSITORY, {
        variables: { id },
        fetchPolicy: "cache-and-network",
    });
    return { data, loading, error };
};

export default useGetRepository