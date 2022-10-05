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

export const QUERY_PET = gql`
  query singlePet($petId: ID!) {
    pet(petId: $petId) {
      _id
      petId
      name
      description
      image
      link
      type
      attributes
      breed
    }
  }
  `;