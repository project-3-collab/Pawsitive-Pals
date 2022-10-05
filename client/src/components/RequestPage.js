import { Jumbotron, Container, CardColumns, Card, Button, ListGroup } from 'react-bootstrap';

import Auth from '../utils/auth';

import { QUERY_USER } from '../utils/queries'
import { useMutation, useQuery } from '@apollo/client'
import treeKill from 'tree-kill';

//declaring variables

const viewIndRequest = () => {
  // const chooseApprove = document.querySelector("#approveButton");
  // const chooseDeny = document.querySelector("#denyButton");

  // //this function is the event handler for the approve Button
  // //we are trying to say that this information translates to TRUE o we can query later
  // chooseApprove.addEventListener("click", function () {
  //   const approvedForm = createInput.value;

  //   //onclick listener that sets value to treeKill
  //   //useState to change state of value
  //   //change value in schema to true or valse




  //   //this function is the event handler for the deny Button
  //   const chooseDeny = document.createElement("button");
  //   chooseDeny.addEventListener("click", function () {
  //     const deniedForm = createInput.value;

  //   });
  // });
//const { data } = useQuery(QUERY_USER, {
//variables: { _id: Auth.getProfile().data._id }
//});
//const userData = data?.user ;

// create function that accepts the book's mongo _id value as param and deletes the book from the database
//   const handleDeleteBook = async (book) => {
//     const token = Auth.loggedIn() ? Auth.getToken() : null;

//     const id = book._id

//     if (!token) {
//       return false;
//     }
//     try {
//       const deletedBook = await deleteBook({
//         variables: { id, token },
//       });

//       console.log(deletedBook)


//     } catch (err) {
//       console.error(err);
//     }
//   };

  // if data isn't here yet, say so
 //if (!userData) {
 //   return <h2>LOADING...</h2>;
  //}

  return (
      <>
        <ListGroup>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>

        {/* //buttons */}
        <div className="mb-2">
          <Button class="approveButton" variant="primary" size="lg">
            Accept
          </Button>{' '}
          <Button class="denyButton" variant="secondary" size="lg">
            Deny
          </Button>
        </div>
      </>
    )
  };

    export default viewIndRequest;


