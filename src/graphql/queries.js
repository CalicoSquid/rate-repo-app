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

export const GET_REPOSITORY = gql`
  query GetRepository($id: ID!) {
    repository(id: $id) {
    url
      ...RepositoryFragment
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

export const GET_REVIEWS = gql`
  query GetReviews($repositoryId: ID!) {
    repository(id: $repositoryId) {
      id
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              username
            }
          }
        }
      }
    }
  }
`;  
