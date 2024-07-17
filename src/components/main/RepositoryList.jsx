import React from "react";
import { Text } from "react-native";
import Loading from "../state/Loading";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../../graphql/queries";
import RepositoryListContainer from "./RepositoryListContainer";

const RepositoryList = () => {
  const { data, loading, error } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });

  if (loading) return <Loading />;
  if (error) return <Text>{error.message}</Text>;

  return <RepositoryListContainer data={data} />;
};

export default RepositoryList;

