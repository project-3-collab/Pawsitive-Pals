import { gql } from '@apollo/client';

export const CREATE_USER = gql`
    mutation CreateUser($username: String!, $email: String!, $password: String!) {
        createUser(username: $username, email: $email, password: $password) {
            token
            user {
            username
            email
            password
            _id
            }
        }
    }
`;

export const LOGIN = gql`
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
            _id
            username
            email
            }
        }
    }
`;

export const ADD_BOOK = gql`
    mutation SaveBook($description: String!, $bookId: String!, $title: String!, $image: String, $link: String, $authors: [String]) {
    saveBook(description: $description, bookId: $bookId, title: $title, image: $image, link: $link, authors: $authors) {
            _id
            username
            savedBooks {
                _id
                bookId
                description
                title
                }
        }
    }
`;

export const DELETE_BOOK = gql`
    mutation DeleteBook($id: ID!) {
        deleteBook(_id: $id) {
            _id
            username
            savedBooks {
            _id
            bookId
            description
            }
        }
    }
`;
