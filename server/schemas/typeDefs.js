const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    password: String
    admin: Boolean
    name: [String]
    address: [String]
    phone: String
    dob: String
    license: String
    age: String
    experience: String
    housing: String
    savedPets: [Pet]
    submittedRequests: [PlayDateRequest]
  }

  type Pet {
    _id: ID!
    name: [String]
    petId: String
    description: String
    image: String
    link: String
    type: String
    breed: String
    age: String
    environment: [String]
    tags: [String]
    contact: [String]
  }

  type PlayDateRequest {
    _id: ID!
    pet: Pet
    fromDate: String
    toDate: String
    housingType: String
    hosuingStatus: HousingStatus
    housingComment: String
    otherComment: String
  }

  type Auth {
    token: ID!
    user: User
  }

  enum HousingStatus {
    RENT
    OWN
  }

  input PlayDateRequestInput {
    petId: String!
    fromDate: String
    toDate: String
    housingType: String
    housingStatus: HousingStatus
    housingComment: String
    otherComment: String
  }

  type Query {
    user: User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!, admin: Boolean!): Auth
    savePet(name: [String], description: String!, petId: String!, image: String, link: String, type: String!): User
    deletePet(_id: ID!): User
    login(email: String!, password: String!): Auth
    submitRequest(input: PlayDateRequestInput):  User
  }
`;

module.exports = typeDefs;
