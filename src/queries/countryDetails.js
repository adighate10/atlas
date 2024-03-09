import { gql } from "@apollo/client";

export const COUNTRY_DETAILS_QUERY = gql`
  query Query($code: ID!) {
    country(code: $code) {
      states {
        name
      }
      name
      currency
      emoji
    }
  }
`;
