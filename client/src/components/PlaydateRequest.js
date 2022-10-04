import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Form, Button, Container, Jumbotron } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { SUBMIT_REQUEST } from '../utils/mutations';
import Auth from '../utils/auth';
// import { Form, Button, Alert, } from 'react-bootstrap';


const PlaydateRequest = (props) => {
    // set initial form state
    // const [playdateRequestData] = useState({ firstName: '', lastName: '', address: '', phone: '', email: '', license: '', experience: '', housing: '', });
    // set state for form validation
    // const [validated] = useState(false);
    // set state for alert
    // const [showAlert, setShowAlert] = useState(false);

    // const [createUser] = useMutation(CREATE_USER);

    const currentDate = new Date();
    const [startDate, setStartDate] = useState(currentDate);
    const [endDate, setEndDate] = useState(new Date().setDate(currentDate.getDate()+3));
    const [submitRequest] = useMutation(SUBMIT_REQUEST);

    const handleFormSubmit = async (event) => {
        event.preventDefault(); 
        
        // get token
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
        return false;
        }

      };
    

    return (
        <>
            {/* This is needed for the validation functionality above
          <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
            {/* show alert if server response is bad */}
            {/* <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
              Something went wrong with your signup!
            </Alert> */}
            <Jumbotron>
                <Container>
                    <h5>Playdate Request Form</h5>
                    <Form  onSubmit={handleFormSubmit}>
                        {/* <h6>Contact info:</h6>
                        <label htmlFor='firstName'>
                            First name:
                            <br></br>
                            <input type='input' name='firstName' 
                                value={props.firstName}
                                required>

                            </input>
                        </label>
                        <label htmlFor='lastName'>
                            Last name:
                            <br></br>
                            <input type='input' name='lastName' 
                                value={props.lastName}
                                required>
                            </input>
                        </label>
                        <label>
                            Date of birth:
                            <br></br>
                            <input type='date' name='DOB' 
                                value={props.dob}
                                required
                            ></input>
                        </label>
                        <label>
                            Phone number:
                            <br></br>
                            <input type='input' name='phone' 
                                value={props.phone}
                                required
                            ></input>
                        </label>
                        <label>
                            Email:
                            <br></br>
                            <input type='input' name='email' 
                                value={props.email}
                                required
                            ></input>
                        </label>
                        <label>
                            Driver's license #:
                            <br></br>
                            <input type='input' name='license' 
                                value={props.license}
                                required
                            ></input>
                        </label> */}
                        <h6>Request Date:</h6>
                        <label>
                            From:
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                selectsStart
                                startDate={startDate}
                                endDate={endDate}
                            />
                        </label>
                        <label>
                            To:
                            <DatePicker
                                selected={endDate}
                                onChange={(date) => setEndDate(date)}
                                selectsEnd
                                startDate={startDate}
                                endDate={endDate}
                                minDate={startDate}
                            />
                        </label>
                        <h6>Housing:</h6>
                        <p>give us a sneak peek of your living space to see if it will fit the needs of the animal you are requesting</p>
                        <label>
                            Apartment
                            <input type='checkbox' name='housingType' 
                                value={props.housingType}
                                required
                            ></input>
                        </label>
                        <br></br>
                        <label>
                            Single-family
                            <input type='checkbox' name='housingType' 
                                value={props.housingType}
                                required
                            ></input>
                        </label>
                        <br></br>
                        <label>
                            Other:
                            <input type='input' name='housingType' 
                                value={props.housingType}
                                required
                            ></input>
                        </label>
                        <br></br>
                        <label>
                            Own?
                            <input type='checkbox' name='housingMethod' 
                                value={props.housingMethod}
                                required
                            ></input>
                        </label>
                        <label>
                            Rent?
                            <input type='checkbox' name='housingMethod' 
                                value={props.housingMethod}
                                required
                            ></input>
                        </label>
                        <br></br>
                        <label>
                            If you are renting the home, please provide landlord's or property manager's contact info below:
                            <br></br>
                            <textarea type='textarea' name='landlord' 
                                value={props.landlord}
                                required
                            ></textarea>
                        </label>
                        <br></br>
                        <label>
                            Please give us a brief history of your experience with animals (have you owned any pets before?):
                            <br></br>
                            <textarea type='textarea' name='experience' 
                                value={props.experience}
                                required
                            ></textarea>
                        </label>
                        <Button type='submit' variant='primary' size='lg'>
                        Submit Search
                        </Button>
                    </Form>
                </Container>
            </Jumbotron>
            
        </>
    )
}

export default PlaydateRequest;