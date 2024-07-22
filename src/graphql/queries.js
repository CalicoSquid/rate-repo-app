import { gql } from "@apollo/client";
import { REPOSITORY_FRAGMENT } from "./fragments";

const filter = gql`
  enum AllRepositoriesOrderBy {
    CREATED_AT
    RATING_AVERAGE
  }
`;

export const GET_REPOSITORIES = gql`
  query GetRepositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
    $first: Int
    $after: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
      first: $first
      after: $after
    ) {
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        startCursor
      }
      edges {
        node {
          ...RepositoryFragment
        }
        cursor
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
  query GetMe($includeReviews: Boolean = false) {
    me {
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            id
            repositoryId
            repository {
              fullName
            }
            text
            rating
            createdAt
          }
        }
      }
    }
  }
`;

export const GET_REVIEWS = gql`
  query GetReviews($repositoryId: ID!, $first: Int, $after: String) {
    repository(id: $repositoryId) {
      id
      reviews(first: $first, after: $after) {
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
          cursor
        }
        totalCount
        pageInfo {
          endCursor
          hasNextPage
          startCursor
        }
      }
    }
  }
`;
