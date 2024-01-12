import { gql } from "@apollo/client";

export const LANGUAGE_QUERY = gql`
{
  languages {
    name
    code
    native
  }
}`