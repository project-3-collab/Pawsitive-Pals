return (
    <>
      <Jumbotron fluid className='text-light yellow-bg'>
        <Container>
          <h1>Checkout all your PAWSitive Pals!</h1>
        </Container>
      </Jumbotron>
      
      <Container>
        <Col>
        <h2>
          {userData.savedPets.length
            ? `Viewing ${userData.savedPets.length} saved ${userData.savedPets.length === 1 ? 'pal' : 'pals'}:`
            : 'You have no saved pals!'}
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
                    Delete this Pal!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
        </Col>

        {/* Fake data, RECENT Playdates */}
        <Col>
        <h2>
          {/* {userData.submittedRequests.length
            ? `Viewing ${userData.submittedRequests.length} previous ${userData.submittedRequests.length === 1 ? 'playdate' : 'playdatess'}:`
            : 'You have no saved pals!'} */}
        </h2>
        <CardColumns>
          {userData.savedPets.map((pet) => {
            return (
              <Card className='dk-blue-text' key={pet.petId} border='dark'>
                {pet.image ? <Card.Img src={pet.image} alt={`The cover for ${pet.type}`} variant='top' /> : null}
                <Card.Body className='dk-blue-text'>
                  <Card.Title className='dk-blue-text'>Playdate with {pet.name}</Card.Title>
                  <p className='small dk-blue-text'>On: **INSERT DATE**</p>
                  <Card.Text className='dk-blue-text'>**Any user posts on this Pal here***</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
        </Col>
      </Container>
    </>
  );
};