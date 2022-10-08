// this page is for the RequestPage and RequestQueue
import { Row, Col, Container } from 'react-bootstrap';
import RequestQueue from "../components/RequestQueue";
import ViewRequest from "../components/ViewRequest";
import Auth from '../utils/auth';

const AdministratorRequests = () => {
  const handleAcceptRequest = () => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

  }
  const handleDenyRequest = () => {

  }
  return (
    <>

      <Container style={{ color: "black" }}>
        <h1 className='text-center'>Viewing Playdate Requests</h1>
      </Container>

      <Row>
        <Col sm={7}>
          <ViewRequest />
        </Col>
        <Col sm={5}>
          <RequestQueue />
        </Col>
      </Row>

    </>
  )
}

export default AdministratorRequests 