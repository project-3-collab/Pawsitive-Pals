const axios = require('axios');
const qs = require('qs');
require('dotenv').config();

// route to get logged in user's info (needs the token)
export const getMe = (token) => {
  return fetch('/api/users/me', {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });
};

export const createUser = (userData) => {
  return fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

export const loginUser = (userData) => {
  return fetch('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

// save book data for a logged in user
export const saveBook = (bookData, token) => {
  return fetch('/api/users', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(bookData),
  });
};

// remove saved book data for a logged in user
export const deleteBook = (bookId, token) => {
  return fetch(`/api/users/books/${bookId}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

// make a search to google books api
// https://www.googleapis.com/books/v1/volumes?q=harry+potter
export const searchGoogleBooks = (query) => {
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
};



export const fetchAllAnimals = async () => {

  const tokenData = await axios.post(
    'https://api.petfinder.com/v2/oauth2/token', 
    {
    'grant_type': 'client_credentials',
    'client_id': process.env.REACT_APP_API_KEY,
    'client_secret': process.env.REACT_APP_SECRET,
    });

  const getConfig = {
    method: 'get',
    url: 'https://api.petfinder.com/v2/animals/',
    headers: {
      'Authorization': `Bearer ${tokenData.data.access_token}`
    }
  };
  const animalsData = await axios.get(getConfig.url, {
    headers: {
      'Authorization': `Bearer ${tokenData.data.access_token}`
    }
  });

  console.log(animalsData.data)
  return animalsData.data;

};

