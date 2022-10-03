const axios = require('axios');
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

// save pet data for a logged in user
export const addPet = (petData, token) => {
  return fetch('/api/users', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(petData),
  });
};

// remove saved pet data for a logged in user
export const deletePet = (petId, token) => {
  return fetch(`/api/users/pets/${petId}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

// make a search to petfinder pets api
// https://api.petfinder.com/v2/animals?type=dog&page=2
export const searchPetfinder = async (query) => {
  try {
    const tokenData = await axios.post(
      'https://api.petfinder.com/v2/oauth2/token', 
      {
      'grant_type': 'client_credentials',
      'client_id': process.env.REACT_APP_API_KEY,
      'client_secret': process.env.REACT_APP_SECRET,
      });

    const response = await fetch(`https://api.petfinder.com/v2/animals?type=${query}&page=2`, {
      headers: {
        'Authorization': `Bearer ${tokenData.data.access_token}`
      }
    }).then((response) => response.json()).then((data) => {
      return (data);
    })
    return (response)
  } catch (err) {
    console.log(err);
  }
};



// export const fetchAllAnimals = async () => {

//   const tokenData = await axios.post(
//     'https://api.petfinder.com/v2/oauth2/token', 
//     {
//     'grant_type': 'client_credentials',
//     'client_id': process.env.REACT_APP_API_KEY,
//     'client_secret': process.env.REACT_APP_SECRET,
//     });

//   const getConfig = {
//     method: 'get',
//     url: 'https://api.petfinder.com/v2/animals/',
//     headers: {
//       'Authorization': `Bearer ${tokenData.data.access_token}`
//     }
//   };
//   const animalsData = await axios.get(getConfig.url, {
//     headers: {
//       'Authorization': `Bearer ${tokenData.data.access_token}`
//     }
//   });

//   // console.log(animalsData)
//   return animalsData.data;

// };

