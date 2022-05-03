const { gql } = require('apollo-server-express');

const typeDefs = gql`
    
  type Pet {
  _id: String
  owner: String
  description: String
  image: String
  title: String
}

  type User {
        _id: ID
        username: String
        email: String
        savedPets: [Pet]
        petCount: Int
    }
    
    
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        me: User
        user(username: String!): User
        pets(username: String): [Pet]
        getPet: [Pet]
    }
    input PetInput {
        _id: String
        
    }


    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        savePet(savedPet: PetInput!): User
        removePet(petId: ID!): User
    }
`

module.exports = typeDefs;