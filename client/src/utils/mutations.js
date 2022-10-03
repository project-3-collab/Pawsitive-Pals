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

export const ADD_PET = gql`
    mutation addPet($description: String!, $petId: ID!, $type: String!, $image: String, $link: String, $name: [String]) {
    addPet(description: $description, petId: $petId, type: $type, image: $image, link: $link, name: $name) {
            _id
            username
            savedPets {
                _id
                petId
                description
                type
            }
        }
    }
`;

export const DELETE_PET = gql`
    mutation DeletePet($id: ID!) {
        deletePet(_id: $id) {
            _id
            username
            savedPets {
            _id
            petId
            description
            }
        }
    }
`;
