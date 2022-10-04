import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';

import Auth from '../utils/auth';

import { QUERY_USER } from '../utils/queries'
import { useMutation, useQuery } from '@apollo/client'

const viewIndRequest = () => {

  const { data } = useQuery(QUERY_USER, {
    variables: { _id: Auth.getProfile().data._id }
  });



  const userData = data?.user ;


    // create function that accepts the book's mongo _id value as param and deletes the book from the database
  const handleDeleteBook = async (book) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    const id = book._id

    if (!token) {
      return false;
    }
    try {
      const deletedBook = await deleteBook({
        variables: { id, token },
      });

      console.log(deletedBook)

      
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
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Viewing saved books!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
          {userData.savedBooks.length
            ? `Viewing ${userData.savedBooks.length} saved ${userData.savedBooks.length === 1 ? 'book' : 'books'}:`
            : 'You have no saved books!'}
        </h2>
        <CardColumns>
          {userData.savedBooks.map((book) => {
            return (
              <Card key={book.bookId} border='dark'>
                {book.image ? <Card.Img src={book.image} alt={`The cover for ${book.title}`} variant='top' /> : null}
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <p className='small'>Authors: {book.authors}</p>
                  <Card.Text>{book.description}</Card.Text>
                  <Button className='btn-block btn-danger' onClick={() => handleDeleteBook(book)}>
                    Delete this Book!
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

export default SavedBooks;


