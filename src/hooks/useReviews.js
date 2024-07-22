import { useQuery } from "@apollo/client";
import { GET_REVIEWS } from "../graphql/queries";

const useReviews = (id, first) => {
  const { data, loading, error, fetchMore } = useQuery(GET_REVIEWS, {
    variables: { repositoryId: id, first },
    fetchPolicy: "cache-and-network",
  });

  const handleFetch = () => {
    const canFetchMore =
      !loading && data?.repository?.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      console.log("no more reviews");
      return;
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        repositoryId: id,
        first,
      },
    });
  };

  return { data, loading, error, fetchMore: handleFetch };
};

export default useReviews;
