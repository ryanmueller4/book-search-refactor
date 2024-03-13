const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]!
  }

  type Book {
    bookId: ID!
    description: String!
    authors: [String!]
    image: String
    link: String
    title: String!
  }

  input BookInput {
    bookId: ID!
    description: String!
    authors: [String!]
    image: String
    link: String
    title: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    loginUser(email: String!, password: String!): Auth
    saveBook(book: BookInput!): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
