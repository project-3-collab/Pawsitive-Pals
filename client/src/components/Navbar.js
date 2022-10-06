import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal } from 'react-bootstrap';
import logo250 from '../assets/PP-logoandwords-blue-150px.png';

import LoginModal from './LoginModal'
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
              <img src={logo250} alt='PAWSitive Pals Logo' />
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
                  <Nav.Link as={Link} to='/' style={{ color: "#003049" }}>
                    Search PAWSitivePals
                  </Nav.Link>
                  {Auth.isAdmin() ? (
                    <>
                      <Nav.Link as={Link} to='/admin' style={{ color: "#003049" }}>
                        Admin Page
                      </Nav.Link>
                    </>
                  ) : (
                    <Nav.Link as={Link} to='/saved' style={{ color: "#003049" }}>
                      Your Profile
                    </Nav.Link>
                  )
                  }
                  <Nav.Link onClick={Auth.logout} style={{ color: "#003049" }}>Logout</Nav.Link>
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
        <LoginModal />
      </Modal>
    </>
  );
};

export default AppNavbar;
