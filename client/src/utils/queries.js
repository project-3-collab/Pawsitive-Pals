import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query User {
  user {
    _id
    username
    savedPets {
      _id
      petId
      name
      description
      image
      link
      type
    }
  }
}
`;