import { gql } from "@apollo/client";

export const REPOSITORY_FRAGMENT = gql`
  fragment RepositoryFragment on Repository {
    id
    fullName
    description
    stargazersCount
    forksCount
    reviewCount
    ratingAverage
    ownerAvatarUrl
    language
  }
`;
