// this page is for the RequestPage and RequestQueue
import { Row, Col, Container } from 'react-bootstrap';
import RequestQueue from "../components/RequestQueue";
import ViewRequest from "../components/ViewRequest";
import React, { useState } from 'react';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { FETCH_REQUESTER } from '../utils/mutations';

const AdministratorRequests = () => {
  const [selectRequest, setSelectRequest] = useState({});
  const handleAcceptRequest = () => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
  }

  const [fetchRequester] = useMutation(FETCH_REQUESTER);

  const handleDenyRequest = () => {

  }

  const onSelectRequest = async (request) => {
    const user = await fetchRequester({variables: {username: request.requester}});
    const updatedRequest = {...request, user: user.data.requester};
    setSelectRequest(updatedRequest);
  }

  return (
    <>

      <Container style={{ color: "black" }}>
        <h1 className='text-center'>Viewing Playdate Requests</h1>
      </Container>

      <Row>
        <Col sm={7}>
          <ViewRequest data={selectRequest} />
        </Col>
        <Col sm={5}>
          <RequestQueue onSelectRequest={onSelectRequest}/>
        </Col>
      </Row>

    </>
  )
}

export default AdministratorRequests 