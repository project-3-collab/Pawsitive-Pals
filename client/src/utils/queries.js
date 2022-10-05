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

export const QUERY_PLAYDATES = gql`
query Playdates {
  playdateRequests {
    petId
    fromDate
    toDate
    housingType
    housingStatus
    housingComment
    otherComment
    approvalStatus
  }
}
`;

export const QUERY_SINGLE_PLAYDATE = gql`
query SinglePlaydate ($playdateId:ID!) {
  playdateRequest (playdateId: $playdateId) {
    petId
    fromDate
    toDate
    housingType
    housingStatus
    housingComment
    otherComment
    approvalStatus
  }
}
`;



