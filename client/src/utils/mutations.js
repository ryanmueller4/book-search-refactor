import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`

export const SAVE_BOOK = gql`
mutation saveBook($book: BookInput!) {
    saveBook(book: $book) {
      savedBooks {
        authors
        bookId
        description
        image
        link
        title
      }
    }
  }
`

export const DELETE_BOOK = gql`
mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      savedBooks {
        authors
        bookId
        description
        image
        link
        title
      }
    }
  }
`