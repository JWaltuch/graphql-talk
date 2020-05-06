import typeDefs from './typeDefs';
import Query from './resolvers/Query';
import Mutation from './resolvers/Mutation';
import dotenv from 'dotenv';
import { ApolloServer } from 'apollo-server';

//bare minimum to get gql server up and running, you must have one query

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
  },
});

server.listen(7788).then(() => {
  console.log('server running');
});
