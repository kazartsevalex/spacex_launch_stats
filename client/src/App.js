import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import './App.css';
import Launches from './components/Launches';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <img
          src="https://www.spacex.com/sites/spacex/files/spacex_logo_white.png"
          style={{ width: 300, display: 'block', margin: 'auto' }}
          alt="Home"
        />
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;
