import { gql } from "@apollo/client";
import { REPOSITORY_FRAGMENT } from "./fragments";

export const GET_REPOSITORIES = gql`
  query GetRepositories {
    repositories {
      edges {
        node {
          ...RepositoryFragment
        }
      }
    }
  }
  ${REPOSITORY_FRAGMENT}
`;

export const GET_ME = gql`
  query GetMe {
    me {
      username
    }
  }
`;
