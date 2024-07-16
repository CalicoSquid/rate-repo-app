// graphql/mutations.js
import { gql } from "@apollo/client";

export const SIGNIN_MUTATION = gql`
  mutation Signin($username: String!, $password: String!) {
    authenticate(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`;
