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
  try {
    const response = await fetch(`https://api.petfinder.com/v2/animals?type=${query}&page=2`, {
      headers: {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJPTG9haUhjUEQ4YXB3Q0JJbTQ2Y0g0MXpkWUdNTWY0c3ZjZDQ0MHRjblNycjFpZE5EUCIsImp0aSI6IjJlYzQ0NDEwZWRlM2RlOTg2ODA5ODYyY2YwZjJkMTNlM2JjNTQ3YzZhZTU2Y2YyMGZlMzgwYzczZGMyYzNjNmM4NTdkZmVjYzg2MTEwNGIzIiwiaWF0IjoxNjY0NjQ0MjI4LCJuYmYiOjE2NjQ2NDQyMjgsImV4cCI6MTY2NDY0NzgyOCwic3ViIjoiIiwic2NvcGVzIjpbXX0.WWeZJ69EpQKqg7RLpHzkr57htLpuBo0bZk16IE_5jRYkW5xoo88b8wgu5l3pimT1X44vl12YaHZAnVg8OF5sjPU0P2gO9TgV8p3Kf_lK23MoSzPpODGXFj1WaIiTHD7n1-aRKNCPfIb8RO8x_EwrxzAFMdG1bfIgyXj2q8ZSUFR38igyQmngQ-0dOK4NwqJxFc8dSbhwL6hdKymgkS7Vt6u9p4U5Q5cv8tzGUkSz8wUKAsSKOXAyXyImo_B6sRPBIONZGbWptyfyqh6AonYkC1J4NfDV0wPu-0NeAAu219C1NQLE_2MkaQ0kZmOnI5InHoaw-hZdqnoZ5OaNLqxVVg'
      }
    }).then((response) => response.json()).then((data) => {
      return (data);
    })
    return (response)
  } catch (err) {
    console.log(err);
  }
};