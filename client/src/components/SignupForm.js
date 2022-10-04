import React, { useState } from 'react';
import { Form, Button, Alert, Row } from 'react-bootstrap';

import { CREATE_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client'

const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    username: '',
    email: '',
    password: '',
    admin: false,
    firstname: '',
    lastname: '',
    license: '',
    phone: '',
    birthdate: '',
    age: '',
    experience: '',
    housing: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',

  });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const [createUser] = useMutation(CREATE_USER);

  // from stack overflow
  function getAge(dateString) {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  const handleInputChange = (event) => {
    const { name, value, checked } = event.target;
    if (name === "admin") {
      setUserFormData({ ...userFormData, admin: checked });
    } else if (name === "birthdate") {
      const age = getAge(userFormData.birthdate)
      setUserFormData({ ...userFormData, [name]: value, age: age })
    } else {
      setUserFormData({ ...userFormData, [name]: value });
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    try {
      const { data } = await createUser({
        variables: { ...userFormData }
      });
      console.log(data)
      Auth.login(data.createUser.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
      admin: false,
      firstname: '',
      lastname: '',
      license: '',
      phone: '',
      birthdate: '',
      age: '',
      experience: '',
      housing: '',
      address: '',
      city: '',
      state: '',
      zipcode: '',
      country: '',
    });
  };

  return (
    <>
      {/* This is needed for the validation functionality above */}
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        {/* show alert if server response is bad */}
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your signup!
        </Alert>

        <Form.Group>
          <Form.Label htmlFor='username'>Username</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your username'
            name='username'
            onChange={handleInputChange}
            value={userFormData.username}
            required
          />
          <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="name">Name</Form.Label>
          <Row className="justify-content-md-center">
            <Form.Control
              type='text'
              placeholder='First Name'
              name='firstname'
              onChange={handleInputChange}
              value={userFormData.firstname}
              style={{ width: "47%", marginRight: "2px" }}
            />
            <Form.Control
              type='text'
              placeholder='Last Name'
              name='lastname'
              onChange={handleInputChange}
              value={userFormData.lastname}
              style={{ width: "46%", marginLeft: "2px" }}
            />
          </Row>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='birthdate'>Birthdate</Form.Label>
          <Form.Control
            type='date'
            name='birthdate'
            onChange={handleInputChange}
            value={userFormData.birthdate}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Your email address'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='phoneNumber'>Phone number</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your phone number'
            name='phone'
            onChange={handleInputChange}
            value={userFormData.phone}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='license'>Driver's License</Form.Label>
          <Form.Control
            type='text'
            placeholder="Driver's License Number"
            name='license'
            onChange={handleInputChange}
            value={userFormData.license}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='Address'>Address</Form.Label>
          <Form.Control
            type='text'
            placeholder='Address'
            name='address'
            onChange={handleInputChange}
            value={userFormData.address}
          />
          <br />
          <Row className="justify-content-md-center">
            <Form.Control
              type='text'
              placeholder='City'
              name='city'
              onChange={handleInputChange}
              value={userFormData.city}
              style={{ width: "40%" }}
              xs={6}
            />
            <Form.Control
              type='text'
              placeholder='State'
              name='state'
              onChange={handleInputChange}
              value={userFormData.state}
              style={{ width: "20%", marginLeft: "5px" }}
            />
            <Form.Control
              type='text'
              placeholder='ZIP/Postal Code'
              name='zipcode'
              onChange={handleInputChange}
              value={userFormData.zipcode}
              style={{ width: "32%", marginLeft: "5px" }}
            />
          </Row>
          <br />
          <Form.Control
            type='text'
            placeholder='Country'
            name='country'
            onChange={handleInputChange}
            value={userFormData.country}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='password'>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="experience">Housing</Form.Label>
          <Form.Control
            as="select"
            value={userFormData.housing}
            name='housing'
            onChange={handleInputChange}>
            <option value="field1">Home owner</option>
            <option value="field2">Apartment renter</option>
            <option value="field3">Homeless</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="experience">Years of experience</Form.Label>
          <Form.Control
            as="select"
            value={userFormData.experience}
            name='experience'
            onChange={handleInputChange}>
            <option value="field1">No experience</option>
            <option value="field2">0-2 years</option>
            <option value="field3">2-5 years</option>
            <option value="field4">5-10 years</option>
            <option value="field5">10+ years</option>
          </Form.Control>
        </Form.Group>
        {/* <Form.Group>
          <Form.Label htmlFor='admin'>Administrator</Form.Label>
          <Form.Check
            type='switch'
            id="custom-switch"
            name='admin'
            onChange={handleInputChange}
          />
        </Form.Group> */}
        <Button
          disabled={!(userFormData.username && userFormData.email && userFormData.password)}
          type='submit'
          variant='success'>
          Submit
        </Button>
      </Form>

    </>
  );
};

export default SignupForm;
