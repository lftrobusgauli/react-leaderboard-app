import { ApolloClient, InMemoryCache } from '@apollo/client';

/**
 * client is an instance of ApolloClient used to make a GraphQL requests
 * @module client
 */

export const client = new ApolloClient({
  uri: process.env.REACT_APP_BASE_URI,
  cache: new InMemoryCache()
});
