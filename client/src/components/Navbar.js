import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';
import logo250 from '../assets/PP-logoandwords-blue-150px.png';

import Auth from '../utils/auth';

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar className='yellow-bg' variant='dark' expand='lg'>
        <Container fluid>
          <Navbar.Brand className=".nav-header" as={Link} to='/'>
            <div className="logoContainer">
              <img src={logo250} alt='PAWSitive Pals Logo'/>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle className="custom-toggler navbar-toggler" aria-controls='navbar' />
          <Navbar.Collapse id='navbar'>
            <Nav className='ml-auto' >
              <Nav.Link as={Link} to='/'>
              </Nav.Link>
              {/* if user is logged in show saved animals and logout */}
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link as={Link} to='/saved' style={{ color: "black"}}>
                    See Your Pets
                  </Nav.Link>
                  {Auth.isAdmin() ? (
                    <>
                      <Nav.Link as={Link} to='/admin' style={{ color: "black"}}>
                        Admin Page
                      </Nav.Link>
                    </>
                  ) : (
                    <Nav.Link as={Link} to='/profile' style={{ color: "black"}}>
                      Profile Page
                    </Nav.Link>
                  )
                  }
                  <Nav.Link onClick={Auth.logout} style={{ color: "black"}}>Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={() => setShowModal(true)}>Login</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* set modal data up */}
      <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link className='dk-blue-bg' eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className='dk-blue-bg' eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default AppNavbar;
