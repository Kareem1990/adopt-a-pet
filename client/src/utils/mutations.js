import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

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
`;

export const SAVE_PET = gql`
    mutation savePet($savedPet: PetInput!) {
        savePet(savedPet: $savedPet) {
            _id
            username
            email
            savedPets {
                _id
                owner
                description
                title
                image
            }
        }
    }
`;

export const REMOVE_PET = gql`
    mutation removePet($petId: ID!) {
        removePet(petId: $petId) {
            _id
            username
            email
            savedPets{
                _id
                owner
                description
                title
                image
            }
        }
    }
`;