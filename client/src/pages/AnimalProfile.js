import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Modal, Tab } from 'react-bootstrap';
import PlaydateRequestForm from '../components/PlaydateRequest';
import axios from 'axios';

export default function AnimalPage() {
  const [showModal, setShowModal] = useState(false);
  const { petId } = useParams();
  const [petData, setPetData] = useState({});
  useEffect(() => {
    console.log('inside useEffect');
    const queryPetId = async (petId) => {
      try {
        const tokenData = await axios.post(
          'https://api.petfinder.com/v2/oauth2/token',
          {
            'grant_type': 'client_credentials',
            'client_id': process.env.REACT_APP_API_KEY,
            'client_secret': process.env.REACT_APP_SECRET,
          });

        const response = await axios.get(`https://api.petfinder.com/v2/animals/${petId}`, {
          headers: {
            'Authorization': `Bearer ${tokenData.data.access_token}`
          }
        })
        // const data = await response.json();
        // return response.data;
        console.log(response.data);
        setPetData(response.data.animal);
      } catch (err) {
        console.log(err);
      }
    };
    queryPetId(petId);
    // const petData = queryPetId(petId);
    console.log(petData);
  }, [])

  // return (
  //   <h1>{petData.name}</h1>

  // )
  return (
    <>
      <section class="section about-section gray-bg" id="about">
        <div class="container">
          <div class="row align-items-center flex-row-reverse">
            <div class="col-lg-6">
              <div class="about-text go-to">
                <h3 class="dark-color">About {petData?.name}</h3>
                <h6>Type: {petData.type}</h6>
                <h6 class="theme-color lead">{petData?.contact?.address?.city}, {petData?.contact?.address?.state}</h6>
                <p>{petData?.description}</p>
                <div class="row about-list">
                  <div class="col-md-6">
                    <div class="media">
                      <label>Breed</label>
                      <p>{petData?.breeds?.primary}</p>
                    </div>
                    <div class="media">
                      <label>Age</label>
                      <p>{petData?.age}</p>
                    </div>
                    <div class="media">
                      <label>Size</label>
                      <p>{petData?.size}</p>
                    </div>
                    <div class="media">
                      <label>Status</label>
                      <p>{petData?.status}</p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="media">
                      <label>Color</label>
                      <p>{petData.colors?.primary}</p>
                    </div>
                    <div class="media">
                      <label>Gender</label>
                      <p>{petData?.gender}</p>
                    </div>
                    <div class="media">
                      <label>E-mail</label>
                      <p>{petData?.contact?.email}</p>
                    </div>
                    <div class="media">
                      <label>Phone</label>
                      <p>{petData?.contact?.phone}</p>
                    </div>
                  </div>
                </div>
                <br></br>
              </div>
              <div>
                <Button variant="primary" size='lg' onClick={() => setShowModal(true)}>
                  Request Playdate
                </Button>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="about-avatar">
                <img src={petData?.primary_photo_cropped?.full} alt={`The cover for ${petData.type}`} />
              </div>
            </div>
          </div>
          <div class="counter">
            <div class="row">
              <div class="col-6 col-lg-3">
                <div class="count-data text-center">
                  <h6 class="count h2" data-to="500" data-speed="500">500</h6>
                  <p class="m-0px font-w-600">Views</p>
                </div>
              </div>
              <div class="col-6 col-lg-3">
                <div class="count-data text-center">
                  <h6 class="count h2" data-to="150" data-speed="150">150</h6>
                  <p class="m-0px font-w-600">Happy Dates</p>
                </div>
              </div>
              <div class="col-6 col-lg-3">
                <div class="count-data text-center">
                <h6 class="count h2" data-to="850" data-speed="850">Schedule Date</h6>
                </div>
              </div>
              <div class="col-6 col-lg-3">
                <div class="count-data text-center">
                  <h6 class="count h2" data-to="190" data-speed="190">Favorite</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='playdate-modal'>
        {/* tab container to apply for playdate */}
        <Tab.Container defaultActiveKey='requestPlaydate'>
          <Modal.Header closeButton>
            <Modal.Title id='playdate-modal'>
              Playdate Request Form
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='requestPlaydate'>
                <PlaydateRequestForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  )
}
