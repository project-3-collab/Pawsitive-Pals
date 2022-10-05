import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// import { Routes, Route, useNavigate } from 'react-router-dom';

import Auth from '../utils/auth';
import { searchPetfinder } from '../utils/API';
import { savePetIds, getSavedPetIds } from '../utils/localStorage';
import { ADD_PET } from '../utils/mutations';
import { useMutation } from '@apollo/client';
// import AnimalPage from './animalProfile';
// import AnimalPage from './AnimalProfile';

// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';

import Select from 'react-select';
// import PhotoUnavailable from '../../public/photo-unavilible-Icon.png'

const styles = {
  dropdownMenuStyle: {
    color: 'black',
  }
};

const animalTypes = [
  { label: 'Dog', value: 'dog' },
  { label: 'Cat', value: 'cat' },
  { label: 'Bird', value: 'bird' },
  { label: 'Horse', value: 'horse' },
  { label: 'Rabbit', value: 'Rabbit' },
];

const SearchPets = () => {
  // create state for holding returned google api data
  const [searchedPets, setSearchedPets] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState('');
  // create state to hold saved petId values
  const [savedPetIds, setSavedPetIds] = useState(getSavedPetIds());
  const [addPet] = useMutation(ADD_PET)
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
      const response = await searchPetfinder(searchInput);
      // console.log(response, "line 37");
      // console.log(response.animals, "line 38");

      const petData = response.animals.map((pet) => ({
        petId: pet.id,
        name: pet.name || ['No name to display'],
        type: pet.type,
        description: pet.description,
        image: pet.primary_photo_cropped?.full || '',
        link: pet.url,
        gender: pet.gender,
        breeds: pet.breeds.primary,
        mixed: pet.breeds.mixed,
        size: pet.size,
        status: pet.status,
        org_id: pet.organization_id,
        city: pet.contact.address.city,
        state: pet.contact.address.state,
        email: pet.contact.email,
        phone: pet.contact.phone,
        distance: pet.distance
      }));
      petData.forEach((d) => console.log(d));

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
  const navigate = useNavigate();
  const navigateAnimal = (petId) => {
    navigate(`/animal/${petId}`);
  };
  return (
    <>
      <Jumbotron fluid className='text-light yellow-bg'>
        <Container>
          <h1>Search for Pets!</h1>
          <Form onSubmit={handleFormSubmit} style={styles.dropdownMenuStyle}>
            <Form.Row>
              <Col xs={12} md={8}>
                <Select
                  options={animalTypes}
                  onChange={opt => setSearchInput(opt.label, opt.value)}
                />
              </Col>
              <Col xs={12} md={4} lg={4}>
                <Button type='submit' className='med-orange-bg' size='lg'>
                  Submit Search
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Container>
      </Jumbotron>

      <Container>
        <h2 className='dk-orange-txt'>
          {searchedPets.length
            ? `Viewing ${searchedPets.length} results:`
            : 'Search for an animal to view options of PAWSible Pals'}
        </h2>
        <CardColumns>
          {searchedPets.map((pet) => {
            return (
              <div key={pet.petId} onClick={() => navigateAnimal(pet.petId)}>
                {/* <Routes>
                  <Route path="/animal" element={<AnimalPage />} />
                </Routes> */}
                <Card key={pet.petId} border='dark' className='dk-blue-text lt-cream-bg text-center'>
                  {pet.image ? (
                    <Card.Img className='rounded-circle card-pics mt-5' src={pet.image} alt={`The cover for ${pet.type}`} variant='top' />
                  ) : null}
                  <Card.Body className='dk-blue-text'>
                    <Card.Title className='dk-blue-text'>{pet.name}</Card.Title>
                    <p className='small'>Type: {pet.type}</p>
                    <Card.Text>{pet.description}</Card.Text>
                    {Auth.loggedIn() && (
                      <Button
                        disabled={savedPetIds?.some((savedPetId) => savedPetId === pet.petId)}
                        className='btn-block med-orange-bg'
                        onClick={() => handleSavePet(pet.petId)}>
                        {savedPetIds?.some((savedPetId) => savedPetId === pet.petId)
                          ? 'This pet has already been saved!'
                          : 'Save this Pet!'}
                      </Button>


                    )}
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SearchPets;