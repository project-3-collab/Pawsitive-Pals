// this page is for the RequestPage and RequestQueue
import { Row, Col, Container } from 'react-bootstrap';
import RequestQueue from "../components/RequestQueue";
import ViewRequest from "../components/ViewRequest";
import React, { useState } from 'react';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { FETCH_REQUESTER } from '../utils/mutations';

const AdministratorRequests = () => {
  const [requestInfo, setRequestInfo] = useState({});
  const [userInfo, setUserInfo] = useState({});
  const [petInfo, setPetInfo] = useState({});

  const [fetchRequester] = useMutation(FETCH_REQUESTER);

  const onSelectRequest = async (request) => {
    const user = await fetchRequester({variables: {username: request.requester}});
    setUserInfo(user.data.requester);
    setRequestInfo(request);
    setPetInfo(request.pet);
  }

  return (
    <>

      <Container style={{ color: "black" }}>
        <h1 className='text-center'>Viewing Playdate Requests</h1>
      </Container>

      <Row>
        <Col sm={7}>
          <ViewRequest userInfo={userInfo} requestInfo={requestInfo} petInfo={petInfo}/>
        </Col>
        <Col sm={5}>
          <RequestQueue onSelectRequest={onSelectRequest}/>
        </Col>
      </Row>

    </>
  )
}

export default AdministratorRequests 