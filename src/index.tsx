import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import App from './App';
import { client } from './graphql/client';

/**
 * ApolloClient is fully featured caching graphQl client for javacript
 * @typedef { Object } ApolloClientOptions
 * @property {string} url- The graphql endpoint to connect
 * @type {InMemoryCache} - caching mechanism provided by GraphQl
 */

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
