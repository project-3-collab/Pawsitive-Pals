import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';

import Auth from '../utils/auth';
// import { searchGoogleBooks } from '../utils/API';
import { savePetIds, getSavedPetIds } from '../utils/localStorage';
import { ADD_PET } from '../utils/mutations'
import { useMutation } from '@apollo/client'

const SearchPets = () => {
  // create state for holding returned google api data
  const [searchedPets, setSearchedPets] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState('');

  // create state to hold saved petId values
  const [savedPetIds, setSavedPetIds] = useState(getSavedPetIds());

  const [addPet ] = useMutation(ADD_PET)

  // set up useEffect hook to save `savedPetIds` list to localStorage on component unmount
  // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
  useEffect(() => {
    return () => savePetIds(savedPetIds);
  });

  // create method to search for pets and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      // need to add petfinder API here
      // const response = await searchGoogleBooks(searchInput);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { items } = await response.json();
// Need to insert API data here
      // const petData = items.map((pet) => ({
      //   petId: pet.id,
      //   authors: pet.volumeInfo.authors || ['No author to display'],
      //   title: pet.volumeInfo.title,
      //   description: pet.volumeInfo.description,
      //   image: pet.volumeInfo.imageLinks?.thumbnail || '',
      // }));

      setSearchedPets(petData);
      setSearchInput('');
    } catch (err) {
      console.error(err);
    }
  };

  // create function to handle saving a pet to our database
  const handleSavePet = async (petId) => {
    // find the pet in `searchedPets` state by the matching id
    const petToSave = searchedPets.find((pet) => pet.petId === petId);

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const petData = await addPet({
        variables: { ...petToSave },
      });

      console.log(petData)

      // if pet successfully saves to user's account, save pet id to state
      setSavedPetIds([...savedPetIds, petToSave.petId]);


    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Search for Pets!</h1>
          <Form onSubmit={handleFormSubmit}>
            <Form.Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name='searchInput'
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type='text'
                  size='lg'
                  placeholder='Search for a pet'
                />
              </Col>
              <Col xs={12} md={4}>
                <Button type='submit' variant='success' size='lg'>
                  Submit Search
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Container>
      </Jumbotron>

      <Container>
        <h2>
          {searchedPets.length
            ? `Viewing ${searchedPets.length} results:`
            : 'Search for a pet to begin'}
        </h2>
        <CardColumns>
          {searchedPets.map((pet) => {
            return (
              <Card key={pet.petId} border='dark'>
                {pet.image ? (
                  <Card.Img src={pet.image} alt={`The cover for ${pet.title}`} variant='top' />
                ) : null}
                <Card.Body>
                  <Card.Title>{pet.title}</Card.Title>
                  <p className='small'>Authors: {pet.authors}</p>
                  <Card.Text>{pet.description}</Card.Text>
                  {Auth.loggedIn() && (
                    <Button
                      disabled={savedPetIds?.some((savedPetId) => savedPetId === pet.petId)}
                      className='btn-block btn-info'
                      onClick={() => handleSavePet(pet.petId)}>
                      {savedPetIds?.some((savedPetId) => savedPetId === pet.petId)
                        ? 'This pet has already been saved!'
                        : 'Save this Pet!'}
                    </Button>
                  )}
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SearchPets;