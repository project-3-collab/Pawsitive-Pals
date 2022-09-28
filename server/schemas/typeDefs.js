const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    password: String
    savedBooks: [Book]
  }

  type Book {
    _id: ID!
    bookId: String
    authors: [String]
    description: String
    image: String
    link: String
    title: String
  }

  type Auth {
      token: ID!
      user: User
  	}

  type Query {
    user: User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    saveBook(authors: [String], description: String!, bookId: String!, image: String, link: String, title: String!): User
    deleteBook(_id: ID!): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
