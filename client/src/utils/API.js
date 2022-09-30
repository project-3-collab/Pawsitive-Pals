const axios = require('axios');

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
export const savePet = (petData, token) => {
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
  const response = await axios.get(`https://api.petfinder.com/v2/animals?type=${query}&page=2`, {
    headers: {
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJPTG9haUhjUEQ4YXB3Q0JJbTQ2Y0g0MXpkWUdNTWY0c3ZjZDQ0MHRjblNycjFpZE5EUCIsImp0aSI6IjYwNTI1NmU0OGU4NWQxYmNiZTUyYzFiYzBkMzFkMTEwMWM4MjU4M2ExYjg3OWJhZmQxYmM5ZjliNDlhMTI2OWM2YmNmNTdhYjUwOWE5MjI5IiwiaWF0IjoxNjY0NTEyNDA4LCJuYmYiOjE2NjQ1MTI0MDgsImV4cCI6MTY2NDUxNjAwOCwic3ViIjoiIiwic2NvcGVzIjpbXX0.RYwZyj1_matneZswapY_9FPuFsM51AVFufZWcJ6Rrse47lK6aO8RnipW0xNhJjz-iXk7MwLktj-BrXvXGrgC45i3Cq9_tyjK_ymR2AkU-0N2NLD9uS32lkHrIrn_gCU9pabyogGAh5TU1W3_YixNvHL_aNU21SHMXLzzSStHBQRoq30qKbqp7M2ex-pxP3AKbsCtoRS0P2-OSNAmt9ninIUXHhicacO7ou3MSYghVAeViWWllQSBpl5NPjNj5gJd31o_hYwK8Oj7OeaN9fvSdpFD-lfmYijBI6xU2XB5pnBZP860SJ7e8M9QnBHVwnkU_SHUN4IU11KGEt3f9PfDOg'
  }
});
  return response;
};
