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

      <Row>
        <Col sm={7}>
          <ViewRequest />
        </Col>
        <Col sm={5}>
          <Row>
            <RequestQueue />
          </Row>
        </Col>
      </Row>

    </>
  )
}

export default AdministratorRequests 