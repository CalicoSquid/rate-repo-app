import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = (filter, searchQuery) => {
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

  const { data, loading, error } = useQuery(GET_REPOSITORIES, {
    variables: {
      orderBy: getFilter(),
      orderDirection: filter === "lowest" ? "ASC" : "DESC",
      searchKeyword: searchQuery,
    },
    fetchPolicy: "cache-and-network",
  });

  return { data, loading, error };
};
export default useRepositories;
