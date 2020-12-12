import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {
    ApolloClient,
    ApolloProvider,
    HttpLink,
    InMemoryCache
} from '@apollo/client';

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index'
    })
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
