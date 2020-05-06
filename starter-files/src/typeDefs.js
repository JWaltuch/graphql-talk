import { gql } from 'apollo-server';

const typeDefs = gql`
  type Dog {
    name: String!
    breed: String!
  }
  type Query {
    allDogs: [Dog]!
  }
  type Mutation {
    createDog(name: String!, breed: String!): Dog!
  }
`;

export default typeDefs;
