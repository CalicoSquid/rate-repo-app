import { useQuery } from "@apollo/client";
import { GET_ME } from "../graphql/queries";

const useGetMyReviews = () => {
  const { data, loading, error } = useQuery(GET_ME, {
    variables: { includeReviews: true },
    fetchPolicy: "cache-and-network",
  });

  return { data, loading, error };
};

export default useGetMyReviews