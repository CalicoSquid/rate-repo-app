import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = (filter, searchQuery, first) => {
  const getFilter = () => {
    switch (filter) {
      case "latest":
        return "CREATED_AT";
      case "highest":
        return "RATING_AVERAGE";
      case "lowest":
        return "RATING_AVERAGE";
      default:
        return "CREATED_AT";
    }
  };

  const variables = { filter, searchQuery, first };

  const { data, loading, error, fetchMore } = useQuery(GET_REPOSITORIES, {
    variables: {
      orderBy: getFilter(),
      orderDirection: filter === "lowest" ? "ASC" : "DESC",
      searchKeyword: searchQuery,
      first
    },
    fetchPolicy: "cache-and-network",
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return { data, loading, error, fetchMore: handleFetchMore };
};
export default useRepositories;
