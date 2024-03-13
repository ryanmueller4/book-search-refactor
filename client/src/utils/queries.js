import { gql } from '@apollo/client';

export const GET_ME = gql`
query Me {
    me {
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