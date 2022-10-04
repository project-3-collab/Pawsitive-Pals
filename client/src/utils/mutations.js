import { gql } from '@apollo/client';

export const CREATE_USER = gql`
    mutation CreateUser($username: String!, $email: String!, $password: String!, $admin: Boolean!) {
        createUser(username: $username, email: $email, password: $password, admin: $admin) {
            token
            user {
            username
            email
            password
            admin
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
    mutation SavePet($description: String!, $petId: String!, $type: String!, $image: String, $link: String, $name: [String]) {
    savePet(description: $description, petId: $petId, type: $type, image: $image, link: $link, name: $name) {
            _id
            username
            savedPets {
                _id
                petId
                description
                title
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

export const SUBMIT_REQUEST = gql`
    mutation SubmitRequest($id: PlayDateRequestInput!) {
        submitRequest(input: $input) {
            _id
            username
            submittedRequest {
                _id
                fromDate
                toDate
                housingType
                housingStatus
                housingComment
                otherComment
                pet {
                    petId
                    type
                }
            }
        }
    }
`;