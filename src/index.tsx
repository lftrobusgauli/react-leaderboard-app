import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App';

/**
 * ApolloClient is fully featured caching graphQl client for javacript
 * @typedef { Object } ApolloClientOptions
 * @property {string} url- The graphql endpoint to connect
 * @type {InMemoryCache} - caching mechanism provided by GraphQl
 */

const client = new ApolloClient({
  uri: process.env.REACT_APP_BASE_URI,
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);
