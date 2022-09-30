const express = require('express');
const { ApolloServer } = require('apollo-server-express');
require('dotenv').config();
const path = require('path');
const axios = require('axios');
const qs = require('qs');

const fetchAnimals = async () => {

  const data = qs.stringify({
    'grant_type': 'client_credentials',
    'client_id': process.env.API_KEY,
    'client_secret': process.env.SECRET,
  });
  const postConfig = {
    method: 'post',
    url: 'https://api.petfinder.com/v2/oauth2/token',
    headers: { 
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data : data
  };
  const tokenData = await axios.post(postConfig.url,postConfig.data,postConfig.headers);
  console.log(tokenData.data.access_token)
  const getConfig = {
    method: 'get',
    url: 'https://api.petfinder.com/v2/animals/57674252',
    headers: { 
      'Authorization': `Bearer ${tokenData.data.access_token}`
    }
  };
  const animalsData = await axios.get(getConfig.url, {headers: { 
    'Authorization': `Bearer ${tokenData.data.access_token}`
  }});
  console.log(animalsData.data)
};

const { typeDefs, resolvers } = require('./schemas');
// const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  // context: authMiddleware
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };

// Call the async function to start the server
  startApolloServer(typeDefs, resolvers);
  