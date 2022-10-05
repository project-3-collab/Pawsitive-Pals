import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPets from './pages/SearchPets';
import SavedPets from './pages/SavedPets';
<<<<<<< HEAD
import AdministratorRequests from './pages/AdministratorRequests';
=======
import PlaydateRequest from './components/PlaydateRequest';
>>>>>>> ecf4fe9682961a2bbc6541ce617785876029f323
import Navbar from './components/Navbar';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Routes>
            <Route
              path='/'
              element={<SearchPets />}
            />
            <Route
              path='/saved'
              element={<SavedPets />}
            />
<<<<<<< HEAD
             <Route
              path='/adminRequest'
              element={<AdministratorRequests/>}
            />
=======
            {/* <Route
              path='/animalprofile'
              element={< />}
            /> */}
>>>>>>> ecf4fe9682961a2bbc6541ce617785876029f323
            <Route
              path='*'
              element={<h1 className='display-2'>Wrong page!</h1>}
            />
          </Routes>
          <PlaydateRequest />
        </>
      </Router>
    </ApolloProvider >
  );
}

export default App;