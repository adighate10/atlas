import { gql } from "@apollo/client";

export const COUNTRIES_QUERY = gql`
  {
    countries {
      code
      name
      languages {
        name
      }
    }
  }
`;