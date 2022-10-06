import React, { useState } from 'react';
import { Jumbotron, Container, Button, Modal } from 'react-bootstrap';
import Auth from '../utils/auth';
import { useNavigate } from 'react-router-dom';
import PlaydateRequestForm from '../components/PlaydateRequest';

import { removePetId } from '../utils/localStorage';
import { DELETE_PET } from '../utils/mutations'
import { QUERY_USER } from '../utils/queries'
import {
  useMutation,
  useQuery
} from '@apollo/client'
import '../pages/UserProfile.css'

const UserProfile = () => {
  const { data } = useQuery(QUERY_USER, {
    variables: { _id: Auth.getProfile().data._id }
  });
  const [deletePet] = useMutation(DELETE_PET);
  const userData = data?.user;
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const navigateAnimal = (petId) => {
    navigate(`/animal/${petId}`);
  };

  const [showModal, setShowModal] = useState(false);
  const [selectedPet, setSelectedPet] = useState("");

  // create function that accepts the pet's mongo _id value as param and deletes the pet from the database
  const handleDeletePet = async (pet) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    const id = pet._id
    if (!token) {
      return false;
    }
    try {
      const deletedPet = await deletePet({
        variables: { id, token },
      });

      console.log(deletedPet)

      removePetId(pet.petId);
    } catch (err) {
      console.error(err);
    }
  };

  const handlePlaydateRequest = (petId, show) => {
    setShowModal(show);
    setSelectedPet(petId);
  }

  // if data isn't here yet, say so
  if (!userData) {
    return <h2>LOADING...</h2>;
  }
  return (
    <>
      <Jumbotron fluid className='text-light yellow-bg'>
        <Container style={{ color: "black" }}>
          <h1 className='text-light '>Checkout all your PAWSitive Pals!</h1>
        </Container>
      </Jumbotron>
      <h2 className='dk-orange-txt'>
        {userData.savedPets.length
          ? `Viewing ${userData.savedPets.length} saved ${userData.savedPets.length === 1 ? 'pal' : 'pals'}:`
          : 'You have no saved pals!'}
      </h2>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <table className="table table-image">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Click Image to View</th>
                  <th scope="col">Type of Animal</th>
                  <th scope="col">Description</th>
                  <th scope="col">Favorite</th>
                  <th scope="col">Request a playdate</th>
                </tr>
              </thead>
              <tbody>
                {userData.savedPets.map((pet) => {
                  return (
                    <tr key={pet.petId}>
                      <th scope="row" >{pet.name}</th>
                      <td className="w-25" key={pet.petId} onClick={() => navigateAnimal(pet.petId)}  >
                        {pet.image ? <img src={pet.image} className="img-fluid img-thumbnail card-pics rounded-circle " alt={`The cover for ${pet.type}`} /> : null}
                      </td>
                      <td>Type: {pet.type}</td>
                      <td>{pet.description}</td>
                      <td>
                        <Button className='btn-block med-orange-bg' onClick={() => handleDeletePet(pet)}>
                          Unfavorite this Pal!
                        </Button>
                      </td>
                      <td>
                        <Button className='btn-block med-orange-bg' onClick={() => handlePlaydateRequest(pet.petId, true)}>
                          Request Playdate
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='playdate-modal'>
        {/* tab container to apply for playdate */}
          <Modal.Header closeButton>
            <Modal.Title id='playdate-modal'>
              Playdate Request Form
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <PlaydateRequestForm data={selectedPet} handleModalClose={() => setShowModal(false)} />
          </Modal.Body>
      </Modal>
    </>
  );
};

export default UserProfile;