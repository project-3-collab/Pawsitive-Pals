import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';

import Auth from '../utils/auth';

import { removePetId } from '../utils/localStorage';
import { DELETE_PET } from '../utils/mutations'
import { QUERY_USER } from '../utils/queries'
import { useMutation, useQuery } from '@apollo/client'

const SavedPets = () => {

  const { data } = useQuery(QUERY_USER, {
    variables: { _id: Auth.getProfile().data._id }
  });

  const [ deletePet ] = useMutation(DELETE_PET);

  const userData = data?.user ;


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

  // if data isn't here yet, say so
  if (!userData) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <Jumbotron fluid className='text-light yellow-bg'>
        <Container>
          <h1>Viewing saved Pets!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
          {userData.savedPets.length
            ? `Viewing ${userData.savedPets.length} saved ${userData.savedPets.length === 1 ? 'pet' : 'pets'}:`
            : 'You have no saved pets!'}
        </h2>
        <CardColumns>
          {userData.savedPets.map((pet) => {
            return (
              <Card className='dk-blue-text' key={pet.petId} border='dark'>
                {pet.image ? <Card.Img src={pet.image} alt={`The cover for ${pet.type}`} variant='top' /> : null}
                <Card.Body className='dk-blue-text'>
                  <Card.Title className='dk-blue-text'>{pet.name}</Card.Title>
                  <p className='small dk-blue-text'>Type: {pet.type}</p>
                  <Card.Text className='dk-blue-text'>{pet.description}</Card.Text>
                  <Button className='btn-block med-orange-bg' onClick={() => handleDeletePet(pet)}>
                    Delete this Pet!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SavedPets;