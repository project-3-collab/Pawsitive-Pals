import { gql } from '@apollo/client';

export const CREATE_USER = gql`
mutation CreateUser($username: String!, $email: String!, $password: String!, $admin: Boolean!, $firstname: String, $lastname: String, $license: String, $age: Int, $birthdate: String, $phone: String, $experience: String, $housing: String, $address: String, $city: String, $state: String, $zipcode: String, $country: String) {
    createUser(username: $username, email: $email, password: $password, admin: $admin, firstname: $firstname, lastname: $lastname, license: $license, age: $age, birthdate: $birthdate, phone: $phone, experience: $experience, housing: $housing, address: $address, city: $city, state: $state, zipcode: $zipcode, country: $country) {
      user {
        username
        email
        password
        admin
        firstname
        lastname
        license
        address
        city
        state
        zipcode
        country
        phone
        birthdate
        age
        experience
        housing
      }
      token
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
    mutation SavePet($description: String, $petId: Float!, $type: String!, $image: String, $link: String, $name: String) {
    savePet(description: $description, petId: $petId, type: $type, image: $image, link: $link, name: $name) {
            _id
            username
            savedPets {
                _id
                description
                petId
                type
                image
                link
                name
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
