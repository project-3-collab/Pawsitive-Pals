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
  
export const QUERY_PLAYDATES = gql`
query Playdates {
  playdateRequests {
    _id
    requester
    pet {
      name
      petId
      type
    }
    fromDate
    toDate
    hasToddlers
    hasKids
    hasTeens
    hasOtherAdults
    animalsInfo
    homeInfo
    reason
    approvalStatus
  }
}
`;

export const QUERY_SINGLE_PLAYDATE = gql`
query SinglePlaydate ($playdateId:ID!) {
  playdateRequest (playdateId: $playdateId) {
    _id
    pet {
      name
      petId
      type
    }
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



