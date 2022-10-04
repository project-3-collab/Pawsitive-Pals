const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    password: String
    admin: Boolean
    firstname: String
    lastname: String
    address: String
    city: String
    state: String
    zipcode: String
    country: String
    phone: String
    license: String
    birthdate: String
    age: Int
    experience: String
    housing: String
    savedPets: [Pet]
  }

  type Pet {
    _id: ID!
    name: String
    petId: Float!
    description: String
    image: String
    link: String
    type: String!
    breed: String
    age: String
    environment: [String]
    tags: [String]
    contact: [String]
  }

  type Auth {
      token: ID!
      user: User
  	}

  type Query {
    user: User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!, admin: Boolean!, firstname: String, lastname: String, license: String, age: Int, birthdate: String, phone: String, experience: String, housing: String, address: String, city: String, state: String, zipcode: String, country: String ): Auth
    savePet(name: String, description: String, petId: Float!, image: String, link: String, type: String!): User
    deletePet(_id: ID!): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
